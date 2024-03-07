import React, { useEffect, useState } from 'react'

const Showcolor = () => {
    const [mika, setMika]=useState({
        a : {
            r:0, 
            g:0, 
            b:0
        },
        b : {
            r:0,
            g:0, 
            b:0
        },
        c : {
            r:0,
            g:0,
            b:0
        },
        d : {
            r:0,
            g:0,
            b:0
        },
        e : {
            r:0,
            g:0,
            b:0
        }
});
    useEffect(()=>{
console.log(mika)
    }, [mika])
  return (
    <div>
        <div className="colors">
            <div className='a'>
                <input type="range" name="" id=""min="0"max="255" step="1" onChange={
                    (e)=> setMika((prev)=>({
                     ...prev, a:{r:e.target.value, g:e.target.value, b:e.target.value}
                    }))      
                }/>
            </div>
            <div className="b"></div>
            <div className="c"></div>
            <div className="d"></div>
            <div className="e"></div>

        </div>
    </div>
  )
}

export default Showcolor
