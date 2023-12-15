import GetstartedImg from '../assets/getstarted-img.png'
const Getstarted = () => {
    return (

        <div id='features' className="image">
            <img src={GetstartedImg} alt="" />
            <div className="section">
                <h4>Create an account</h4>
                <h2>Create/login to an existing <br />
                    account to get started</h2>
                <p>An account is created with your email <br />
                    and a desired password</p>
            </div>
        </div>

    )
}

export default Getstarted