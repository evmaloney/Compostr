import '../style/Login.css';
import logo from '../img/logo.png';
import apple from '../img/apple.png';
import facebook from '../img/facebook.png';
import twitter from '../img/twitter.png';
import google from '../img/google.png';

const Login = () =>{

    return (
    <div className="login">
      <div className="loginCard">
        <img className="logo" src={logo} alt="logo" />
        <br />
        compostr
        <br />
        Making your city greener one bag at a time
        <br />
        <input type="email" placeholder="example@gmail.com"/>
        <br />
        <input type="text" />
        <br />
        Forgot Password?
        <br />
        <button>Log In</button>
        <br />
        <button>Sign Up</button>
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