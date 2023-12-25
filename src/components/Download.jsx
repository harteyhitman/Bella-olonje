import React from 'react'
import Button from './Button'

const Download = () => {
    return (
        <div className='download-cont'>
            <div className="download">
                <h3>Download the app now.</h3>
                <p>Available on your favorite store. Start your premium experience now</p>
                <div className="footer-btn">
                    <Button label="Playstore" className="google" />
                    <Button label="App store" className="apple" />
                </div>
                <div className="footer-btn-mobile">
                    <Button label="Buynow" className="google-mobile" />
                    <Button label="Try for free" className="apple-mobile" />
                </div>
            </div>

        </div>
    )
}

export default Download