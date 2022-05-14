import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./ResidentInfo.css"

const ResidentInfo = ({ url }) => {
    useEffect(() => {
        axios.get(`${url}`).
            then(res => setResidents(res.data), setLoading(!loading))
    }, [])
    const [residents, setResidents] = useState({})
    const [loading, setLoading] = useState(false)
    console.log(residents)
    return (
        <div>
            {loading === false ?
                <div>
                    <img src="https://cdn.dribbble.com/users/233030/screenshots/3932726/rick-sanchez.gif" alt="" />
                </div>
                :
                <div className='ResidentInfo'>
                <div>
                    <img src={residents.image} alt="" />
                </div>
                <div>
                    <p><b>Name: </b>{residents.name} </p>
                    <p><b>Specie: </b>{residents.species} </p>
                    <p><b>Status: </b>{residents.status} </p>
                    <p><b>Origin: </b>{residents.origin?.name} </p>
                    <p><b>Episodes where appaer: </b>{residents.episode?.length} </p>

                </div>


            </div>
                }
            
        </div>

    );
};

export default ResidentInfo;