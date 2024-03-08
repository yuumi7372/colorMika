import {OpenAI} from "openai";
import './App.css'
import Read from './components/Read'
import { useEffect, useState } from "react";
import Showcolor from "./components/Showcolor";
import hslToHex from "hsl-to-hex";

function App() {
  let res = ""
  let obj = ""
  const [mika, setMika]=useState({
    a : {
        h:0, 
        s:0, 
        l:0
    },
    b : {
        h:0,
        s:0, 
        l:0
    },
    c : {
        h:0,
        s:0,
        l:0
    },
    d : {
        h:0,
        s:0,
        l:0
    },
    e : {
        h:0,
        s:0,
        l:0
    }
});
const [hex, setHex]=useState({
  a:"#000000",b:"#000000",c:"#000000",d:"#000000",e:"#000000"
})
const openai = new OpenAI({
  apiKey:"",
  dangerouslyAllowBrowser: true
});

function setcolor(){
  console.log(mika)
  Object.keys(mika).forEach(key => {
    console.log(mika[key])
    const elen = document.querySelector(`.${key}`)
    elen.style.background=`hsl(${mika[key].h}, ${mika[key].s}%, ${mika[key].l}%)`
  });
  setHex({
    a: hslToHex(mika.a.h, mika.a.s, mika.a.l),
    b: hslToHex(mika.b.h, mika.b.s, mika.b.l),
    c: hslToHex(mika.c.h, mika.c.s, mika.c.l),
    d: hslToHex(mika.d.h, mika.d.s, mika.d.l),
    e: hslToHex(mika.e.h, mika.e.s, mika.e.l),
  })

}

useEffect(() => {
  console.log(hex)
}, [ hex ])

async function searchColor(content) {
    content += `${content}のポスターデザインを考えています。デザインのイメージカラーとしておすすめの色を５つ教えてください。  答えは、以下のような{}内の形式のみ出力してください。  
    {
      "a" : {
        "h":0, 
        "s":0, 
        "l":0
      },
      "b" : {
          "h":0,
          "s":0, 
          "l":0
      },
      "c" : {
          "h":0,
          "s":0,
          "l":0
      },
      "d" : {
          "h":0,
          "s":0,
          "l":0
      },
      "e" : {
          "h":0,
          "s":0,
          "l":0
      }
    }`

    const stream = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [{ role: "user", content: content }],
        stream: true
    });
    for await (const chunk of stream) {
      res += chunk.choices[0]?.delta?.content || ""
      // console.log(stream)
      // process.write(chunk.choices[0]?.delta?.content || "");
    }
    
    obj = JSON.parse(res)
    console.log(obj)  
    setMika(obj)
    setcolor()
  }

  return (
    <>
     <Read searchColor={searchColor} obj={obj}  />
     <Showcolor obj={obj}mika={mika}setMika={setMika} setcolor={ setcolor } hex={hex} />
    </>
  )
}

export default App
