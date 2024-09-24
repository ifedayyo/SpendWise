import "./App.css";
import "./index.css";
function Register() {
  return (
    <>
      <p>
        Hey there - this is to let you know that we are proud of you for taking
        the first step to <strong> SpendWise </strong>. So, chin up! The best is
        about to come.{" "}
      </p>
      <form className="form-styling">
        <input
          type="text"
          id="fname"
          className="input-styling"
          name="fname"
          placeholder="First name:"
          required
        />

        <input
          type="text"
          id="lname"
          className="input-styling"
          name="lname"
          placeholder="Last name"
          required
        />

        <input
          type="email"
          id="email"
          className="input-styling"
          name="email"
          placeholder="Enter your email"
          required
        />
        <button className="button-styling">Submit</button>
      </form>
    </>
  );
}

export default Register;
