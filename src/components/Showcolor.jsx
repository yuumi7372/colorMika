import React, { useEffect, useState } from 'react'

const Showcolor = ({mika, setMika, setcolor, hex}) => {
 
    useEffect(()=>{
        console.log(mika)
        setcolor()
        
    }, [mika])
  return (
    <div>
        <div className="colors">
            
            <div className='plate'>
                <div className='a'>{
                    hex.a
                } </div>
                <label htmlFor="">Meido</label>
                <input type="range" name="a" id=""min="0"max="100"step="1" onChange={(e) => {
                    setMika((prev)=>({...prev,a:{l:e.target.value, s:prev.a.s, h:prev.a.h}}))
                }
                }/>
                <label htmlFor="">Saido</label>
                <input type="range" name="a" id=""min="0"max="100"step="1" onChange={(e) => {
                    setMika((prev)=>({...prev,a:{s:e.target.value, l:prev.a.l, h:prev.a.h}}))
                }
                }/>
            </div>
            <div className='plate'>
                <div className='b'>{
                    hex.b
                }</div>
                <label htmlFor="">Meido</label>
                <input type="range" name="b" id=""min="0"max="100"step="1"  onChange={(e) => {
                    setMika((prev)=>({...prev,b:{l:e.target.value, s:prev.b.s, h:prev.b.h}}))
                }
                }/>
                <label htmlFor="">Saido</label>
                <input type="range" name="b" id=""min="0"max="100"step="1"onChange={(e) => {
                    setMika((prev)=>({...prev,b:{s:e.target.value, l:prev.b.l, h:prev.b.h}}))
                }
                } />
            </div>
            <div className='plate'>
                <div className='c'>{
                    hex.c
                }</div>
                <label htmlFor="">Meido</label>
                <input type="range" name="c" id=""min="0"max="100"step="1" onChange={(e) => {
                    setMika((prev)=>({...prev,c:{l:e.target.value, s:prev.c.s, h:prev.c.h}}))
                }
                } />
                <label htmlFor="">Saido</label>
                <input type="range" name="c" id=""min="0"max="100"step="1"onChange={(e) => {
                    setMika((prev)=>({...prev,c:{s:e.target.value, l:prev.c.l, h:prev.c.h}}))
                }
                } />
            </div>
            <div className='plate'>
                <div className='d'>{
                    hex.d
                }</div>
                <label htmlFor="">Meido</label>
                <input type="range" name="d" id=""min="0"max="100"step="1"  onChange={(e) => {
                    setMika((prev)=>({...prev,d:{l:e.target.value, s:prev.d.s, h:prev.d.h}}))
                }
                }/>
                <label htmlFor="">Saido</label>
                <input type="range" name="d" id=""min="0"max="100"step="1"onChange={(e) => {
                    setMika((prev)=>({...prev,d:{s:e.target.value, l:prev.d.l, h:prev.d.h}}))
                }
                } />
            </div>
            <div className='plate'>
                <div className='e'>{
                    hex.e
                }</div>
                <label htmlFor="">Meido</label>
                <input type="range" name="e" id=""min="0"max="100"step="1" onChange={(e) => {
                    setMika((prev)=>({...prev,e:{l:e.target.value, s:prev.e.s, h:prev.e.h}}))
                }
                } />
                <label htmlFor="">Saido</label>
                <input type="range" name="e" id=""min="0"max="100"step="1"onChange={(e) => {
                    setMika((prev)=>({...prev,e:{s:e.target.value, l:prev.e.l, h:prev.e.h}}))
                }
                } />
            </div>

        </div>
    </div>
  )
}

export default Showcolor
