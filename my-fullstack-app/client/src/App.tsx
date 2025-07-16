import { useState } from 'react'
import { useEffect } from 'react'

function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <>
      <div>
        안녕
        <div style={{
          display: "flex",
          alignItems: "center"
        }}>
          <button onClick={() => {setCount(count + 1)}}> +1</button>
          {count}
        </div>
      </div>
    </>
  )
}

export default App
