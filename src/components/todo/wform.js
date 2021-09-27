import React from "react";
import { Button, Form , Row, Col, Container, Modal,InputGroup} from 'react-bootstrap';
import useForm from '../../hook/form'
import '../../App.css'
import List from './list'
function Forms(props){

  return(
    <>

        <header>
        <h1>To Do List: {props.incomplete} items pending</h1>
        </header>
        
        <Modal show= {true} className='model'>
        <Container>
        <Form onSubmit={props.handleSubmit}>
        <h2>Add To Do Item</h2>
        
        <Form.Label>
        To Do Item
        </Form.Label>
        <Form.Group>
        <Form.Label >
         <input onChange={props.handleChange} name="text" type="text" placeholder="Item Details"/>
        </Form.Label>
      </Form.Group>


      <Form.Group>
      <Form.Label>
      Difficulty
        </Form.Label>
        <Form.Label >
         <input onChange={props.handleChange} name="assignee" type="text" placeholder="Assignee Name"/>
        </Form.Label>
      </Form.Group>

      <Form.Group>
      <Form.Label>
      Difficulty
        </Form.Label>
        <Form.Label >
        <input onChange={props.handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty"/>
        <Button type="submit">Add Item</Button>
        </Form.Label>
      </Form.Group>
<Col xs={9}>
      <List 
      
     list ={props.list}
      toggleComplete={props.toggleComplete}
      deleteItem={props.deleteItem}
      
      />


      </Col>
      </Form>
        
      </Container>
      </Modal>
        </>
          
              
  )
        }
    
    
    
export default Forms;





{/* <Form.Group>
        
        <Form.label >
        Assigned To
        <Form.input onChange={props.handleChange} name="assignee" type="text" placeholder="Assignee Name"/>
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
        </Container> */}