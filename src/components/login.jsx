
import Signup from './components/signup';






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
            <Router>

                <p className="text">Don't have an account? <Link to="/signup">Register</Link></p>
            </Router>
        </form>
      </div>
  
        
    );
  }
  
  export default Login;