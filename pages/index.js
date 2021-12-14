import React, { useEffect, useState } from 'react'
import Gun from 'gun'
function App() {
  window.gun = new Gun({peers:["http://localhost:3000/","https://testing-gun.vercel.app/"]})
  return <div><p>hello world</p></div>
}

export default App
