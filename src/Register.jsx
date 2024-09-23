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
        <label htmlFor="fname" className="label-styling">
          First name:{" "}
        </label>{" "}
        <br />
        <input
          type="text"
          id="fname"
          className="input-styling"
          name="fname"
          required
        />
        <label htmlFor="lname" className="label-styling">
          Last name:{" "}
        </label>{" "}
        <br />
        <input
          type="text"
          id="lname"
          className="input-styling"
          name="lname"
          required
        />
        <label htmlFor="email" className="label-styling">
          Enter your email:{" "}
        </label>{" "}
        <br />
        <input
          type="email"
          id="email"
          className="input-styling"
          name="email"
          required
        />
      </form>
    </>
  );
}

export default Register;
