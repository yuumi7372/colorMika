import React, { useState } from 'react'

const Read = ({searchColor, setobj, obj}) => {
    const [msg, setmsg] = useState("")
  return (
    <div>
      <input onChange={
        (e)=> setmsg(e.target.value)
        
      } type="text" />
      <button onClick={
        ()=>{ 
            searchColor(msg)
        }
      }>検索</button>
    </div>
  )
}

export default Read
