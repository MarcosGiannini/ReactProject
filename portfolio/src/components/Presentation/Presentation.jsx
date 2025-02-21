import React from 'react';
import MyPhoto from '../../assets/marcos-giannini.jpeg'

const Presentation = () => {
    return (
        <div className='presentation'>
            <div className='presentation__text'>
            <h2>Hi, I'm Marcos Giannini</h2>
            <p>I'm a Front-End Developer passionate about creating modern and accessible web experiences.</p>
            </div>
            <img className='presentation__img' src={MyPhoto} alt="Marcos Giannini - Front-End Developer" />
        </div>
    )
}

export default Presentation;