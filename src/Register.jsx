function Register() {
  return (
    <form>
      <label htmlFor="fname">First name: </label> <br />
      <input type="text" id="fname" name="fname" required />
      <label htmlFor="lname">Last nme: </label> <br />
      <input type="text" id="lname" name="lname" required />
      <label htmlFor="email">Enter your email: </label> <br />
      <input type="email" id="email" name="email" required />
    </form>
  );
}

export default Register;
