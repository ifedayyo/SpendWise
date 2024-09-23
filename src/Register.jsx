function Register() {
  return (
    <>
      <p>
        Hey there - this is to let you know that we are proud of you for taking
        the first step to <strong> SpendWise</strong>. So, chin up! The best is
        about to come.{" "}
      </p>
      <form>
        <label htmlFor="fname">First name: </label> <br />
        <input type="text" id="fname" name="fname" required />
        <label htmlFor="lname">Last nme: </label> <br />
        <input type="text" id="lname" name="lname" required />
        <label htmlFor="email">Enter your email: </label> <br />
        <input type="email" id="email" name="email" required />
      </form>
    </>
  );
}

export default Register;
