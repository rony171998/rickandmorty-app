import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Card.css';

const Card = ({ url }) => {

    const [residents, setResidents] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get(`${url}`)
            .then(res => {
                setResidents(res.data)
                setLoading(previus => ({ ...!loading }))
            })
    }, [loading, url])

    return (
        <div className="card">
            <div className="card-header">
                <img src={residents.image} alt="rick" className="header-image" />
                <div className="header-info">
                    <div className="hero-name">{residents.name}</div>
                    <div className="small-text">id: 46 - created a year ago</div>
                </div>
            </div>
            <div className="card-info">
                <div className="info-item">
                    <span className="name">STATUS</span>
                    <span className="value">{residents.status}</span>
                </div>
                <div className="info-item">
                    <span className="name">SPECIES</span>
                    <span className="value">{residents.species}</span>
                </div>
                <div className="info-item">
                    <span className="name">GENDER</span>
                    <span className="value">{residents.gender}</span>
                </div>
                <div className="info-item">
                    <span className="name">ORIGIN</span>
                    <span className="value">{residents.origin?.name}</span>
                </div>
                <div className="info-item">
                    <span className="name">LAST: LOCATION</span>
                    <span className="value">unknown</span>
                </div>
            </div>
        </div>
    )
}
export default Card;