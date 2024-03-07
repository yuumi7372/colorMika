import {OpenAI} from "openai";
import './App.css'
import Read from './components/Read'
import { useEffect, useState } from "react";
import Showcolor from "./components/Showcolor";

function App() {
  let res = ""
  let obj = ""
const openai = new OpenAI({
  apiKey:"",
  dangerouslyAllowBrowser: true
});

function setcolor(){
  console.log(obj)
  Object.keys(obj).forEach(key => {
    console.log(obj[key])
    const elen = document.querySelector(`.${key}`)
    console.log(elen)
    elen.style.background=`${obj[key]}`
  });

}

async function searchColor(content) {
    content += `${content}のポスターデザインを考えています。デザインのイメージカラーとしておすすめの色を５つ教えてください。  答えの形式は、以下のようなjson形式のみで返信してください。  
    {
      {"a": "hsl(色彩, 彩度, 明度)"}
      {"b": "hsl(色彩, 彩度, 明度)"}
      {"c": "hsl(色彩, 彩度, 明度)"}
      {"d": "hsl(色彩, 彩度, 明度)"}
      {"e": "hsl(色彩, 彩度, 明度)"}
    } `

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
    setcolor()
  }

  return (
    <>
     <Read searchColor={searchColor} obj={obj}  />
     <Showcolor obj={obj} />
    </>
  )
}

export default App
