import Olonje from '../assets/olonje-logo.png'
import {NavbarList} from '../Holders/index'
import Hamburger from './HamburgerMenu'


const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='olonje-logo'>
            <img src={Olonje} alt="" className='w-[206px] h-[101.76px]' />
        </div>
        <div className="nav-list">
            <ul>
                {NavbarList.map((bella) =>(
                    <li key={bella.id}>
                        <a href={`#${bella.id}`}>
                        {bella.lists}
                        </a>
                        </li>
                ))}
            </ul>
            
        </div>
       <Hamburger />
    </div>
  )
}

export default Navbar