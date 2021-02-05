import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import img9 from '../images/img-9.jpg'
import img2 from '../images/img-2.jpg'
import imgHome from '../images/img-home.jpg'

function Cards() {
    return (
        <div className='cards'>
        <h1>Check out these EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                    <CardItem
                        src={img9}
                        text='Crece'
                        label='Adventure'
                        path='/services'
                    />
                     <CardItem
                        src={img2}
                        text='Viaja'
                        label='Luxury'
                        path='/services'
                    />
                    </ul> 
                    <ul className='cards__items'>
                    <CardItem
                        src={img2}
                        text='Explora'
                        label='Adventure'
                        path='/services'
                    />
                     <CardItem
                        src={img9}
                        text='Travel through the islands of Bali'
                        label='Luxury'
                        path='/services'
                    />
                     <CardItem
                        src={imgHome}
                        text='Travel through the islands of Bali'
                        label='Luxury'
                        path='/services'
                    />
                    </ul> 
                </div>

            </div>
        </div>
    );
}

export default Cards
