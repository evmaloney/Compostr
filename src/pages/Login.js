import '../style/Login.css';
import logo from '../img/logo.png';
import at from '../img/at.png';
import lock from '../img/lock.png';
import facebook from '../img/cib_facebook.png';
import twitter from '../img/cib_twitter.png';
import instagram from '../img/cib_instagram.png';
import google from '../img/Vector.png';

const Login = () => {

  return (
    <div className="login">
      <div className="loginCard">
        <img className="logo" src={logo} alt="logo" />
        <br />
        compostr
        <br />
        Making your city greener one bag at a time
        <br />
        <span>
          <img className="credsLogos" src={at} alt="at"/>
          <input type="email" placeholder="Email ID" />
        </span>
        <br />
        <span>
          <img className="credsLogos" src={lock} alt="lock"/>
          <input type="password" placeholder="Password"/>
        </span>
        <br />
        <div className='forgot'>Forgot Password?</div>
        <br />
        <button className='loginButton'>Log in</button>
        <button className='signupButton'>Sign up</button>
        <br />
        <div className="or">OR</div>
        <br />
        <div className='socialIcons'>
          <img className='icon' src={facebook} alt="facebook" />
          <img className='icon' src={twitter} alt="twitter" />
          <img className='icon' src={instagram} alt="instagram" />
          <img className='icon' src={google} alt="google" />
        </div>
      </div>
    </div>
  )

}

export default Login