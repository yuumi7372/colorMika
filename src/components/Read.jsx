import React, { useState } from 'react'

const Read = ({searchColor, setobj, obj}) => {
    const [msg, setmsg] = useState("")
  return (
    <div className='form'>
      <input className='input' onChange={
        (e)=> setmsg(e.target.value)
        
      } type="text" placeholder='Ex.） Red Bull' />
      <button className='button' onClick={
        ()=>{ 
            searchColor(msg)
        }
      }>Search</button>
    </div>
  )
}

export default Read
