import { useState } from 'react'

import { useRef } from 'react'
import { useEffect } from 'react'

function App() {
  const divRef = useRef();

  const [incomeTax, setIncomeTax] = useState(20000)

  useEffect(() => {
    setTimeout(() => {
      divRef.current.innerHTML = 10
    }, 5000)
  }, [])

  
  return (
    <div>
      hi there, your income tax returns are <div ref={divRef}>{incomeTax}</div>
    </div>
  )
}

export default App
