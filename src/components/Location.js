import ResidentInfo from './ResidentInfo';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./Location.css";


const Location = () => {

    const [resident, setResidents] = useState({})
    const [id, setId] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect((loading) => {
        const random = Math.floor(Math.random() * 126) + 1
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
            .then(res => {
                setResidents(res.data)
                setLoading(!loading);
            })
    }, [])


    const searchType = () => {
        if (id<126 && id>=1) {
          axios.get(`https://rickandmortyapi.com/api/location/${id}`).then(res => setResidents(res.data))
        }else{
            alert("No existe localizacion")
        }
        
    }
    return (
        <div >
            {loading === false ?
                <div className="animation-container">
                    <div className="animation">
                        <img src="https://cdn.dribbble.com/users/233030/screenshots/3932726/rick-sanchez.gif" alt="" />
                    </div>
                </div>
                :
                <div >

                    <img src="https://p4.wallpaperbetter.com/wallpaper/178/471/787/rick-and-morty-run-the-jewels-vector-graphics-wallpaper-preview.jpg"
                        alt="" className="background" />

                    <h1 className='title'>Rick and Morty Wiki</h1>
                    
                    <input className='input' type="number"
                        onChange={e => setId(e.target.value)}
                        value={id}
                    />
                    <button onClick={searchType}>Buscar</button>
                    <div className="main">

                        <div className="searchbar-container">
                            <div className="father-container">

                                <div className="container">
                                    <div className="row">
                                        <div className="column">
                                            <h3 className="title-container">Id: </h3>
                                            <p className="text-container">{resident.id} </p>
                                        </div>
                                        <div className="column">
                                            <h3 className="title-container">Name: </h3>
                                            <p className="text-container">{resident.name} </p>

                                        </div>
                                        <div className="column">
                                            <h3 className="title-container">Dimension: </h3>
                                            <p className="text-container">{resident.dimension} </p>

                                        </div>
                                        <div className="column">
                                            <h3 className="title-container">Type: </h3>
                                            <p className="text-container">{resident.type} </p>

                                        </div>
                                        <div className="column">
                                            <h3 className="title-container">Poblation: </h3>
                                            <p className="text-container">{resident.residents?.length} </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                        resident.residents?.length === 0 ?  
                        <div className='people0'>
                            <h1 className='title'>Sin Poblation</h1>
                            <img src="https://i.pinimg.com/originals/4d/f4/c5/4df4c5d5342fd4a1c0f6a9ca3bdf2bd8.gif" alt="" />
                            </div>
                        :
                        <ul>
                            {
                                resident.residents?.map(resident => (
                                    <li className="cards_item" key={resident} >
                                        <ResidentInfo url={resident} />
                                    </li>
                                ))
                            }
                        </ul>
                        }
                        
                    </div>
                </div>
            }
        </div>
    )
}

export default Location;