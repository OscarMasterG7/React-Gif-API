import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

const GIFS = ["https://media1.giphy.com/media/Oa9gZy19igIS5pWNVa/giphy.webp","https://media0.giphy.com/media/4jtYxHxBZSMeBNVg4z/giphy.webp"]


function App() {
  const [gifs, setGifs] = useState(GIFS)
  
  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => <img src={singleGif}/> )
        }
      </section>
    </div>
  )
}

export default App
