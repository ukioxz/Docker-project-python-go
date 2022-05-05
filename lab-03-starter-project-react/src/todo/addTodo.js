import React, {useState} from 'react';

const styles = {
  button: {
  padding: '17px 7px',
  border: 'none',
  borderRadius: '0 4px 4px 0',
  cursor: 'pointer',
  outline: 'none',
  background: 'rgba(144, 217, 153, 0.8)',
  color: '#fff',
  textTransform: 'capitalize',
  fontWeight: 'bold'
  }
}
function useInputValue(defaultValue = ''){
  const [value, setValue] = useState(defaultValue);

  return{
    bind: {
      value,
      onChange: event => setValue(event.target.value)
    },
    clear: () => setValue(''),
    value: () => value
  }
}
function AddTodo({onCreate}) {
  const input = useInputValue('')

  function submitHandler(event){
    event.preventDefault();

    if(input.value().trim()){
      onCreate(input.value())
      input.clear()
    }
  }
  return(
    <form style={{marginBottom: '1rem'}} onSubmit={submitHandler} >
     <input {...input.bind}/>
     <button style={styles.button} type='submit'>Add Todo</button>
    </form>
  )
}

export default AddTodo;
