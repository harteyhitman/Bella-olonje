import React from 'react'
import Button from './Button'

const FoodTray = () => {
    return (
            <div id='home'  className="foodtray">
                <h4>Food app</h4>
                <h1>Why stay hungry when <br />
                    you can order form Bella Onojie</h1>
                <p>Download the bella onoje’s food app now on</p>
                <div className="btn">
                    <Button label="Playstore" className="play-store" />
                    <Button label="App store" className="apple-store" />
                </div>
            </div>

    )
}

export default FoodTray