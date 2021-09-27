
import React from "react";
import { useState } from 'react';
import List from "../components/todo/list";
import { Button, Form , Row, Col, Container} from 'react-bootstrap';

    const useForm = (callback) => {

        const [values, setValues] = useState({});
      
        const handleSubmit = (event) => {
          if (event) event.preventDefault();
          callback(values);
        };
      
        const handleChange = (event) => {
          event.persist();
          setValues(values => ({ ...values, [event.target.name]: event.target.value }));
        };
      
        return {
            
          handleChange,
          handleSubmit,
          values},
          
      {/* <header>
      <h1>To Do List: {props.incomplete} items pending</h1>
      </header>
      
      <Container>
      
      <form onSubmit={handleSubmit}>
      <h2>Add To Do Item</h2>
      <Form.Group>
      <Form.Label>
      To Do Item
      </Form.Label>
      
      <Form.label >
      <Form.input onChange={handleChange} name="text" type="text" placeholder="Item Details"/>
      </Form.label>
      
      </Form.Group>
      
      
      <Form.Group>
      
      <Form.label >
      Assigned To
      <Form.input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name"/>
      </Form.label>
      
      </Form.Group>
      
      
      <Form.Group>
      <Form.label >
      Difficulty
      <Form.input onChange={handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty"/>
      <Button type="submit">Add Item</Button>
      </Form.label>
      </Form.Group>
      
      </form>
      </Container>
      </>
        ) */}
            
         
        };
      
      
     
        export default useForm;





