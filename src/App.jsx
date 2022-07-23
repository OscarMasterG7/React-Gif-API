import { useEffect, useState } from 'react'
import './App.css'

const apiURL = "https://api.giphy.com/v1/gifs/search?api_key=Mm0gqqh6ZFeQcuUzW3Ubgkn8U3C9VjmN&q=espa%C3%B1a&limit=10&offset=0&rating=g&lang=es"


function App() {
  const [gifs, setGifs] = useState([])

  useEffect(function(){
    fetch(apiURL)
      .then(res => res.json())
      .then(response => {
        const {data} = response
        const gifs = data.map(image => image.images.downsized_medium.url)
        setGifs(gifs)
        console.log("se renderizo")
      })
  },[])
  
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
