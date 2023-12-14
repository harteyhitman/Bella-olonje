import OlonjeLogo from '../assets/olonje-logo.png'
import Twitter from '../assets/twitter.png'
import Facebook from '../assets/facebook.png'
import Instagram from '../assets/instagram.png'
const Footer = () => {
  return (
    <div className='footer'>
        <img className='logo' src={OlonjeLogo} alt="" />
        <div className="social-media">
            <img src={Twitter} alt="" />
            <img src={Facebook} alt="" />
            <img src={Instagram} alt="" />
        </div>
        <p>Copywright 2020 Bella Onojie.com</p>
    </div>
  )
}

export default Footer