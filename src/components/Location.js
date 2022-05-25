import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./Location.css";
import Card from './Card';

import { ReactSearchAutocomplete } from 'react-search-autocomplete'




const Location = () => {

    const [resident, setResidents] = useState({})
    const [dimension, setDimension] = useState({})
    const [id, setId] = useState("")
    const [loading, setLoading] = useState(false)


    useEffect((loading) => {
        const random = Math.floor(Math.random() * 126) + 1
        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
            .then(res => {
                setResidents(res.data)
                setLoading(!loading);
            })
        axios.get(`https://rickandmortyapi.com/api/location/`)
            .then(res => {
                setDimension(res.data.results)
            })
    }, [])

    const searchType = () => {
        if (id < 126 && id >= 1) {
            axios.get(`https://rickandmortyapi.com/api/location/${id}`).then(res => setResidents(res.data))
        } else {
            alert("No existe localizacion")
        }

    }

    const handleOnHover = (result) => {
        setId(result.id)
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

                    <div className="searchText">
                        <ReactSearchAutocomplete
                            items={dimension}
                            onHover={handleOnHover}

                        />
                        <button onClick={searchType}>Buscar</button>
                    </div>

                    <div className='bar-dimensity'>

                        <p><b>Numero: </b></p>
                        <p><b>Dimension: </b></p>
                        <p><b>Tipo: </b></p>
                        <p><b>Nombre: </b></p>
                        <p><b>Poblacion: </b></p>
                        <p>{resident.id}</p>
                        <p>{resident.dimension}</p>
                        <p>{resident.type}</p>
                        <p>{resident.name}</p>
                        <p>{resident.residents.length}</p>

                    </div>

                    <div className="main">

                        {
                            resident.residents?.length === 0 ?
                                <div className='people0'>
                                    <h1 className='title'>Sin Poblation</h1>
                                    <img src="https://i.pinimg.com/originals/4d/f4/c5/4df4c5d5342fd4a1c0f6a9ca3bdf2bd8.gif" alt="" />
                                </div>
                                :
                                <ul className="cards-container">
                                    {
                                        resident.residents?.map(resident => (
                                            <li className="cards_item" key={resident} >
                                                <Card url={resident} />
                                            </li>
                                        ))
                                    }
                                </ul>
                        }

                    </div>
                    <div >
                        {
                            resident.residents.length > 9 &&
                            <div className='pageContent'>
                                <h1>1</h1>
                                <h1>2</h1>
                                <h1>3</h1>
                                <h1>4</h1>
                                <h1>5</h1>
                                <h1>6</h1>


                            </div>
                        }

                    </div>

                </div>

            }

        </div>
    )
}

export default Location;