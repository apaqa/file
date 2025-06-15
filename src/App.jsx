import React, { useState } from 'react'

function App() {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  return (
    <div>
      <h1>乘法運算元件</h1>
      <input type="number" value={a} onChange={e => setA(Number(e.target.value))} />
      <span> × </span>
      <input type="number" value={b} onChange={e => setB(Number(e.target.value))} />
      <p>結果：{a * b}</p>
    </div>
  )
}

export default App