import React, {useContext, useState} from 'react'
import ProjectForm from './ProjectForm'
import firebase from '../firebase'
import { TodoContext } from '../context'

function RenameProject({project, setShowModal}){
    // STATE
    const [newProjectName, setNewProjectName] = useState(project.name)

    // CONTEXT
    const { selectedProject, setSelectedProject, UID } = useContext(TodoContext)

    // rename Project
    const renameProject = (project, newProjectName) => {
        const projectsRef = firebase.firestore().collection('projects')
        const todosRef = firebase.firestore().collection(`users/${UID}/todos`)

        const { name : oldProjectName } = project

        projectsRef
            .where('name', '==', newProjectName)
            .get()
            .then( querySnapshot => {
                {
                    projectsRef
                        .doc(project.id)
                        .update({
                            name : newProjectName
                        })
                        .then( () => {
                            todosRef
                                .where('projectName', '==', oldProjectName)
                                .get()
                                .then( querySnapshot => {
                                    querySnapshot.forEach( doc => {
                                        doc.ref.update({
                                            projectName : newProjectName
                                        })
                                    })
                                })
                                .then( () => {
                                    if(selectedProject === oldProjectName){
                                        setSelectedProject(newProjectName)
                                    }
                                })
                        })
                }
            })
    }

    function handleSubmit(e){
        e.preventDefault()

        renameProject(project, newProjectName)

        setShowModal(false)
    }

    return (
        <div className='RenameProject'>
            <ProjectForm
                handleSubmit={handleSubmit}
                heading='Edit project name!'
                value={newProjectName}
                setValue={setNewProjectName}
                setShowModal={setShowModal}
                confirmButtonText='Confirm'
            />
        </div>
    )
}

export default RenameProject