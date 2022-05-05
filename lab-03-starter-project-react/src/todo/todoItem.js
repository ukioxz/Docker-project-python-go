import React , {useContext} from 'react';
import Context from '../context';
import styled, { keyframes } from 'styled-components';
import { bounceInRight } from 'react-animations';


const BounceInRight = styled.div`animation: 2s ${keyframes`${bounceInRight}`} `;

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 1rem',
    border: '1px solid rgba(144, 217, 153, 0.8)',
    marginBottom: '.5rem'
  },
  itemDelete: {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '22px',
  marginBottom: '.5rem',
  padding: '14px',
  width: '400px',
  textAlign: 'left',
  background: 'rgba(144, 217, 153, 0.8)',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
  },
  input: {
    marginRight: '1rem'
  }
}

function TodoItem({todo, index, onChange}) {
  const {removeTodo} = useContext(Context)
  const classes = [];
  if(todo.completed){
    classes.push('done')
  }
  return(
  <BounceInRight><li style={styles.itemDelete}>
  <span className={classes.join(' ')}>
  <input
  type="checkBox"
  checked={todo.completed}
  style={styles.input}
  onChange={() => onChange(todo.id)}/>
   &nbsp;
  {todo.title}
  </span>
  <button className='rm' onClick={removeTodo.bind(null,todo.id)}>&times;</button>
  </li></BounceInRight>
);
}

export default TodoItem;
