import { useState, useEffect, useContext, useCallback } from 'react';
import { SettingsContext } from '../context/settings';
import { LoginContext } from '../context/Login-context';

import List from './list';
import { Button } from '@blueprintjs/core';

export default function Pagination(props) {
  let btnArr = [];
  const logincontext = useContext(LoginContext);
  const settings = useContext(SettingsContext);
  const [targetList, settargetList] = useState(settings.showCompleted == 'true' ? props.list : props.incomplete);
  const [currentList, setcurrentList] = useState(targetList.slice(0, settings.itemsPerPage));
  const [Pagesnumber, setPagesnumber] = useState(Math.ceil(targetList.length / settings.itemsPerPage));
  const [currentPage, setcurrentPage] = useState(1);
  const [buttonsindex, setbuttonsindex] = useState(btnArr);

  useEffect(() => {
    settargetList(settings.showCompleted == 'true' ? props.list : props.incomplete);
  }, [props.list, props.incomplete, settings.showCompleted]);
  useEffect(() => {
    setcurrentList(targetList);
    setPagesnumber(Math.ceil(targetList.length / settings.itemsPerPage));
  }, [targetList, settings.itemsPerPage]);

  useEffect(() => {
    if (Pagesnumber) {
      btnArr.push('Prev');

      for (let i = 1; i <= Pagesnumber; i++) {
        btnArr.push(i);
      }

      btnArr.push('Next');

      setbuttonsindex(btnArr);
    }
  }, [Pagesnumber]);

  useEffect(() => {
    let First = (currentPage - 1) * settings.itemsPerPage;
    let Last = First + Number(settings.itemsPerPage);
    setcurrentList(targetList.slice(First, Last));
  }, [currentPage, settings.itemsPerPage, targetList]);

  useEffect(() => {
    if (currentList.length == 0 && targetList.length != 0) {
      setcurrentPage(currentPage - 1);
    }
  }, [currentList]);

  function handlePages(PageNumber) {
    logincontext.setIsUpdated(!logincontext.isUpdated);

    if (PageNumber == 'Prev' && buttonsindex.includes(currentPage - 1)) {
      setcurrentPage(currentPage - 1);
    } else if (PageNumber == 'Next' && buttonsindex.includes(currentPage + 1)) {
      setcurrentPage(currentPage + 1);
    } else if (typeof PageNumber == 'number') {
      setcurrentPage(PageNumber);
    }
  }

  return (
    <>
      <br />
      <List activeList={currentList} toggleComplete={props.toggleComplete} deleteItem={props.deleteItem} />
      <br />
<div className='pag'>
      {buttonsindex &&
        buttonsindex.map((item) => (
          <>
            <Button onClick={() => handlePages(item)} className='pagination-buttons'>
              {item}
            </Button>
          </>
        ))}
        </div>
    </>
  );
}