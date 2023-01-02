import React, { useState, useEffect } from 'react';

function TodoListItem(props) {
  const [hover, setHover] = useState('white');
  const [opstate, setOp] = useState(0);
  const [button, setB] = useState(0);
  useEffect(() => {
    setOp(1);
  }, []);
  return (
    <>
      <li
        onMouseEnter={() => {
          setHover('yellow');
          setB(1);
        }}
        onMouseLeave={() => {
          setHover('pink');
          setB(0);
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 1s',
          opacity: opstate,
          background: hover,
          color: 'blue',
        }}
      >
        {props.content}
        <div
        style={{
          display:"flex",
          gap:8,
          cursor:"pointer"
        }}>
        {button === 1 ? <buttton
        onClick={()=>{
           props.swapItem(props.index-1,props.index)
        }}
        >↑</buttton> : null}
       {button === 1 ? <buttton
        onClick={()=>{
          props.swapItem(props.index,props.index+1)
        }}
        >↓</buttton> : null}
        {button === 1 ? <buttton
        onClick={()=>{
          props.onDelete(props.index)
        }}
        >×</buttton> : null}
        </div>
      </li>
      {props.splitLine ? <hr /> : null}
    </>
  );
}
export default TodoListItem;
