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
        <button className="button-styling">SUBMIT</button>
      </form>
    </>
  );
}

export default Register;

{
  /*
  So here is the real work. here is the hard work:
  1. when we collect users' info, what do we do with it?
  where does it go?
  2. we need to create the account page. what will it look
  like? and also the logic behind it.
  */
}
