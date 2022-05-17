import ResidentInfo from './ResidentInfo';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


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
        axios.get(`https://rickandmortyapi.com/api/location/${id}`).then(res => setResidents(res.data))
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

                    <div className="main">
                        <div className="searchbar-container">
                            <div className="father-container">
                                <input type="text"
                                    onChange={e => setId(e.target.value)}
                                    value={id}
                                />
                                <button onClick={searchType}>Buscar</button>
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
                        <ul>
                            {
                                resident.residents?.map(resident => (
                                    <li className="cards_item" key={resident} >
                                        <ResidentInfo url={resident} />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            }
        </div>
    )
}

export default Location;