import ResidentInfo from './ResidentInfo';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Location = () => {
    useEffect(() => {
        const random = Math.floor(Math.random() * 126) + 1
        axios.get(`https://rickandmortyapi.com/api/location/${random}`).then(res => setresidents(res.data),setLoading(L =>!loading) )
    }, [])
    const [resident, setresidents] = useState({})
    const [id, setId] = useState("")
    const [loading, setLoading] = useState(false)
    const searchType = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${id}`).then(res => setresidents(res.data))

    }

    document.body.style.backgroundColor = "green"
    return (
        <div >
            {loading === false ?
                <div>
                    <img style={{borderRadius:"100%"}}
                    src="https://cdn.dribbble.com/users/233030/screenshots/3932726/rick-sanchez.gif" alt="" />
                </div>
                :
                <div >

                    <img style={{width:"99vw",height:"200px"}}
                    src="https://p4.wallpaperbetter.com/wallpaper/178/471/787/rick-and-morty-run-the-jewels-vector-graphics-wallpaper-preview.jpg" alt="" />
                    <br />
                    <input type="text"
                        onChange={e => setId(e.target.value)}
                        value={id}
                    />
                    <button onClick={searchType}>Buscar</button>

                    <p><b>Id: </b>{resident.id} </p>
                    <p><b>Name: </b>{resident.name} </p>
                    <p><b>Dimension: </b>{resident.dimension} </p>
                    <p><b>Type: </b>{resident.type} </p>
                    <p><b>Poblation: </b>{resident.residents?.length} </p>

                    {
                        resident.residents?.map(resident => (
                            <div key={resident.name}>
                                <ResidentInfo url={resident} />
                            </div>
                        ))
                    }
                </div>
            }

        </div>
    );
};

export default Location;