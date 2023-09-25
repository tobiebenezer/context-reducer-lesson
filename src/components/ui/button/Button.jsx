import React, { useState } from 'react'

function Button(props) {

    const [count,setCount]  = useState(0)    

    const addCount = ()=>{   
        return setCount(()=> count + 1);
    }

    const reduceCount = (n)=>{

        if((count % n !==0) && count < n){
        return setCount(0);
        }

        return setCount(()=>count - n );
    }

  return (
    <>
      {count}

      <button onClick={addCount}>add</button>
      <button onClick={()=>reduceCount(2)} disabled={(count === 0)? true:false} >reduce </button>
    </>
  );
}

export default Button