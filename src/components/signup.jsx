import { Formik, Field, Form } from 'formik';





function Signup() {
  return (
    <div className="container">
      <h1>Signup</h1>
      <Formik
        initialValues={{
          firstName: 'Ahmed',
          lastName: 'Raza',
          email: '',
        }}
        onSubmit={async (values) => {
          console.log("values :" , values)
        }}
      >
        <Form>
          <div className="form-control">
            <Field id="firstName" name="firstName" placeholder="Jane" required />

          </div>
          <div className="form-control">
            <Field id="lastName" name="lastName" placeholder="Doe" required />
          </div>
          <div className="form-control">
            <Field
              id="email"
              name="email"
              placeholder="ahmadraza.azt@gmail.com"
              type="email"
            />
          </div>
          <button className="btn" type="submit">Signup</button>
      
            <p className="text">You have an account <a href="#">Login</a> </p>
        </Form>
      </Formik>


      {/* <form>
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
        </form> */}
  
    </div>
  );
}

export default Signup;
