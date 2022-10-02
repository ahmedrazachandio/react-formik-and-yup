
// import Signup from './components/signup';
import { Formik } from 'formik';







function Login() {
    return (
        <div className="container">
        <h1>Please Login</h1>
        <form>
          <div className="form-control">
            <input type="email" id="email" required />
            <label>Email</label>
          </div>
  
          <div className="form-control">
            <input type="password" id="password" required />
            <label>Password</label>
          </div>
  
          <button className="btn">Login</button>

                <p className="text">Don't have an account? <a href='#'>Register</a></p>
        </form>
      </div>
  
        
    );
  }
  
  export default Login;