import React, { useEffect, useState } from 'react';
import useForm from '../../hook/form';
import List from './list'
// import { Navbar, Alignment, Button } from "@blueprintjs/core";
import { v4 as uuid } from 'uuid';
// import {Form } from 'react'




function ToDo(){

const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);

  const [firstPage, setfirstPage] = useState(0);
  const [Allpages, setAllpages] = useState(3);
  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }
  const thelastPAGE = firstPage * Allpages;
  const thefirstPAGE = thelastPAGE - Allpages;
  const currentCard = list.slice(thefirstPAGE, thelastPAGE);

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map( item => {
      if ( item.id == id ) {
        item.complete = ! item.complete;
      }
      return item;
    });

    setList(items);

  }
  function paginat() {
    let pages = list.slice(firstPage, Allpages);
    return pages;
  }
  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [incomplete,list]);


  return (
    <>
    
    <Forms
        incomplete={incomplete}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        list={firstPage}
        toggleComplete={toggleComplete}
        deleteItem={deleteItem}
      />

    </>
  );
};


export default ToDo;