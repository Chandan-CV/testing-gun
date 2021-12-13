import React, { useEffect, useState } from 'react'
import Gun from 'gun'


function App() {
  var gun = Gun(["http://localhost:3000/", "https://testing-gun.vercel.app/"])
  var db = gun.get("test").get("rec")
  const [messages, setmessages] = useState([])
  const [text, settext] = useState("")
    
  

    useEffect(()=>{
      
      db.on((data)=>{
        console.log(data)
        console.log(data.messages)
        console.log(eval(data.messages))
        setmessages(eval(data.messages))
      })
    },[])
  
 

  return (
    <div className='flex  col-auto flex-col row-auto w-auto'>
      <p className="bg-green-600 text-lg">hello world</p>
      <input className='border border-2 w-3/4' onChange={(e)=> settext(e.target.value)} />
        <button onClick={()=>{
          db.put({
          messages: (JSON.stringify([...messages,text]))
        })}}>submit</button>
       {messages.map((element)=>{
         return <p key={element}>{element}</p>
       })}
    

    </div>
  )
}

export default App
