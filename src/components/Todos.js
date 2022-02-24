import React, {useContext} from 'react'
import Todo from './Todo'
import Next7Days from './Next7Days'


function Todos(){
    

    const todos = [
        {
            id : 'd54sd4',
            text : "Go for a run",
            time : "10:00 AM",
            date : "06/03/2021",
            day : "6",
            checked : true,
            color : '#00ff00',
            project : 'personal'
        },
        {
            id : 'd54fdf',
            text : "Meeting",
            time : "09:00 AM",
            date : "08/03/2021",
            day : "1",
            checked : false,
            color : '#00ff00',
            project : 'work'
        }
    ]

    return (
        <div className='Todos'>
            <div className='selected-project'>
              
            </div>
            <div className="todos">
            {
             
                <Next7Days todos={todos} />
                
              
            }
            </div>
        </div>
    )
}

export default Todos