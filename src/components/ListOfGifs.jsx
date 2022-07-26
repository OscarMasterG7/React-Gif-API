import { useEffect, useState } from 'react'
import getGifs from '../services/getGifs'
import Gif from './Gif'

const ListOfGifs = ({params}) => {
  const { keyword } = params

  const [gifs, setGifs] = useState([])

  useEffect(function(){
    getGifs({keyword}).then(gifs => setGifs(gifs))
  },[keyword])

  return gifs.map(({ id, title, url }) => 
    <Gif id={id} key={id} title={title} url={url} />
)}
 
export default ListOfGifs;