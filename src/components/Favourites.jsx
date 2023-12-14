import FavouritesImg from '../assets/favorites.png'
const Favourites = () => {
  return (
    <div className="image favorite">
            <div className="section">
                <h4>Explore varieties</h4>
                <h2>Shop for your favorites <br />
meal as e dey hot.</h2>
                <p>Shop for your favorite meals  or drinks <br />
and enjoy while doing it.</p>
            </div> 
            <img src={FavouritesImg} alt="" />
        </div>
  )
}

export default Favourites