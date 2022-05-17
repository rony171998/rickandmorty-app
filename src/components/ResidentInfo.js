import React, { useEffect, useState } from 'react';
import axios from 'axios';


const ResidentInfo = ({ url }) => {

    const [residents, setResidents] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get(`${url}`)
            .then(res => {
                setResidents(res.data)
                setLoading(previus=>({...!loading}))
            })
    }, [loading,url])

    

    return (
        <div>
            {loading === false ?
                <div className="animation-container">
                    <div className="animation">
                        <img src="https://cdn.dribbble.com/users/233030/screenshots/3932726/rick-sanchez.gif" alt="" />
                    </div>
                </div>
                :
                <div className="card"
                    style={{
                        backgroundImage: `url(${residents.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        width: '100%',
                        height: '100%',
                        borderRadius: '10px',
                        boxShadow: '0px 0px 10px #000000',
                        margin: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        fontFamily: 'Arial'
                    }}>
                    <div className="card_image"><img src={residents.image} alt="" /></div>
                    <h2 className="card_name">{residents.name}</h2>
                    <p className="card_title">RAZA<b className="card_text">{residents.species}</b></p>
                    <p className="card_title">ORIGEN<b className="card_text">{residents.origin?.name}</b></p>
                    <p className="card_title">Aparición en episodios<b className="card_text">{residents.episode?.length}</b></p>
                    <button className="btn card_btn">Read More</button>
                </div>
            }
        </div>
    );
};

export default ResidentInfo;