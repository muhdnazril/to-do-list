import { useState } from "react";
const List = () => {
    const [List, setList] = useState([
        {task: 'Grocery', date: '3 February 2024', id: 1},
        {task: 'Shopping', date: '2 March 2022', id: 2},
        {task: 'Jogging', date: '2 April 2022', id: 3},
    ])
    return ( 
        <div className="list">
            {List.map((List)=>(
                <div className="listing">
                    <h2>{List.task}</h2>
                    <h2>{List.date}</h2>
                </div>
            ))}
        </div>
     );
}
 
export default List;