import { Formik, Field, Form } from 'formik';





function Signup() {
  return (
    <div className="container">
      <h1>Signup</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="Jane" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <button type="submit">Submit</button>
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
