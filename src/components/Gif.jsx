import React from 'react';
import './styles/Gif.css'

export default function Gif ({title, id, url}) {
    return (
        <div className='Gif'>
            <a href={`#${id}`}>
                <h4>{title}</h4>
                <img alt={title} src={url} />
            </a>
        </div>
    )
}
