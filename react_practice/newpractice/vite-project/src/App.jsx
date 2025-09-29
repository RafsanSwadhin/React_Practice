import { useState } from "react"

const App = () => {
  const [x, setx] = useState(0)
  const btnClick = () =>{
    setx(x+1)
  }
  return (
    <div>
      {x}
      <button onClick={() => {btnClick}}>Click Here</button>
    </div>
  )
}

export default App