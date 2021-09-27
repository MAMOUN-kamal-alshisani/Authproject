
import React from 'react';
import { Card } from "@blueprintjs/core";
import { Button } from "react-bootstrap";
import ToDo from './todo'
import Forms from './wform'


function List(props){ 
return(
    <div>
    {props.list.map(item => (
        <div key={item.id}>
            {(item.complete ==true)(
                <span className="Completed">Completed</span>
               )}
        {(item.complete ==false)(
                <span className="Completed">pinding</span>     )}

          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => props.toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
          <Button variant='danger' className="-danger" onClick={() => props.deleteItem(item.id)}></Button>
        
        </div> 
        

       ))}
       <Button onClick={props.previous}>Previous</Button>
                <Button onClick={props.next}>Next</Button>
</div>
)
}

export default List;