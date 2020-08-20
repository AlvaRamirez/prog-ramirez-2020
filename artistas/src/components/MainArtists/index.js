import React, { useState , useEffect} from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom";

const MainArtist = () => {
    const [artist, setArtist] = useState([])
    const { id } = useParams();
    
    useEffect(() => {
      const fetchData = async ()=> {
          try{
              const response = await axios.get('https://artists-api.vercel.app/artists');
              console.log(response.data);
              const data= response.data
              const artistFiltered= data.find(artist=> artist._id===id)
              setArtist(artistFiltered)
          
          }catch (error){
              console.error('este es mi error', error);
          }
      }
      fetchData()

    }, [])

    return (
        <div className="main">
          <h1>Lista de Artistas</h1>
          {artist.name}
          <img src={artist.avatar} alt={artist.name}/>
          <p >{artist.genre}</p>
            
        </div>
    )
}
export default MainArtist
