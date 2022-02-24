import React, { createContext, useState } from 'react'
import { useTodos, useProjects, useFilterTodos, useProjectsWithStats } from '../hooks'

const TodoContext = createContext()

function TodoContextProvider({children}){
    const defaultProject = 'today'
    const [selectedProject, setSelectedProject] = useState(defaultProject)
    const [selectedTodo, setSelectedTodo] = useState(undefined)
    const [UID, setUID] = useState()
    const todos = useTodos(UID)
    const projects = useProjects(todos)
    const projectsWithStats = useProjectsWithStats(todos, projects)
    const filteredTodos = useFilterTodos(todos, selectedProject, UID)

 


   
   

    return (
        <TodoContext.Provider
            value={
                {   
                    UID,
                    setUID,
                    defaultProject,
                    selectedProject,
                    setSelectedProject,
                    todos : filteredTodos,
                    projects : projectsWithStats,
                    selectedTodo,
                    setSelectedTodo
                }
            }
        >
            {children}
        </TodoContext.Provider>
    )
}

export { TodoContextProvider, TodoContext }