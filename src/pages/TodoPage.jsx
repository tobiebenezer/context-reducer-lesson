import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react'
import Todos from '../components/todo/Todos'
import TodoContext from '../store/context/TodoContext';
import range from '../utils/count'

function TodoPage() {
    // const [count, setCount] = useState(0);
    const count = useRef(0);
    const {getTodo} = useContext(TodoContext)

    useEffect(()=>{
       getTodo();
    },[]);

   
   
    

  return (
    <div className='container mx-auto'>
        {/* <div className="card" style={{ 'width': '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{count.current}</h5>
                <div className="btn btn-primary" onClick={()=>(count.current = count.current + 1)}>Addcount</div>
            </div>
        </div> */}
        <Todos />
    </div>
  )
}

export default TodoPage