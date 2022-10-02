import { Formik } from 'formik';





function Signup() {
    return (
        <div className="container">
        <h1>Signup</h1>
        <form>
          <div className="form-control">
            <input type="text" id="fullName" required />
            <label>Full Name</label>
          </div>
          <div className="form-control">
            <input type="email" id="email" required />
            <label>Email</label>
          </div>
          <div className="form-control">
            <input type="age" id="age" required />
            <label>Age</label>
          </div>
  
          <div className="form-control">
            <input type="password" id="password" required />
            <label>Password</label>
          </div>
          <div className="form-control">
            <input type="password" id="rePassword" required />
            <label>Confirm Password</label>
          </div>
  
          <button className="btn" type="submit" onclick="signUp()">Signup</button>
  
          <p className="text">You have an account <a href="index.html">Login</a> </p>
        </form>
      </div>
    );
  }
  
  export default Signup;
