import PinkPhone from '../assets/pink-phone.png'
import WhitePhone from '../assets/white-phone.png'
import PinkMobile from '../assets/pink-mobile-fone.png'
import WhiteMobile from '../assets/white-mobile-fone.png'
const FoodForAll = () => {
  return (
    <div>
        <div className='phones'>
            <img className='pink-fone' src={PinkPhone} alt="" />
            <img className='white-phone' src={WhitePhone} alt="" />
        </div>
        <div className="mobile-phones">
          <img className='mobile pink' src={PinkMobile} alt="" />
          <img className='mobile white' src={WhiteMobile} alt="" />
        </div>
    </div>
      
  )
}

export default FoodForAll