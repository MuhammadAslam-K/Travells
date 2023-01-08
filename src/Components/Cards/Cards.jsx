import React from 'react'
import './Cards.css'
import Carditem from '../Carditem/Carditem'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__items">
                <Carditem
                src="images/img-9.jpg"
                text='Explore the hidden waterfall deep inside the Amazone Jungle'
                lable="Adventure"
                path="/services"
                />
                <Carditem
                src="images/img-2.jpg"
                text='Travel through the Islands of Bali in a private Cruise'
                lable="Luxury"
                path="/services"
                />
            </ul>
            <ul className='cards__items'>
            <Carditem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              lable="Mystery"
              path='/services'
            />
            <Carditem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              lable='Adventure'
              path='/products'
            />
            <Carditem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              lable='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
