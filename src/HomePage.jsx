export default function HomePage() {
  return (
    <div>
      <div>
        <div className="container">
          <h1 className="description">
            You should be the one managing your finance.
            <br /> <strong>NOT</strong> the other way round!
          </h1>

          <p className="descriptionparagraph">
            {" "}
            The month is not over and you are already owing PalmPay. We know you
            want better for yourself. You want to make the most of every single
            kobo. You want to track how money trinkles in and out of your
            account. You want to save for the rainy day too. You don't want to
            eat your future. <br /> We know. <br /> We know you want to{" "}
            <strong> SpendWise</strong>.
          </p>

          <button className="descriptionbutton">Get Started</button>
        </div>
        <div className="projectcontainer">
          {/*First project*/}
          <div className="firstchildcontainer">
            <div className="linktoprojectone">
              <a href="FirstProject.js">
                <img
                  className="imageone"
                  src="https://assets.website-files.com/5c6e6f46bf98b2013cf621c5/5cdbececb102f913e509144f_portfolio%201%20-%20wide.svg"
                  alt="Project_1"
                />
              </a>
            </div>

            <div className="projectone">
              {" "}
              <a href="FirstProject.js">Project 1</a>{" "}
            </div>

            <div className="flutterproject">Flutter Project</div>
          </div>

          {/*second project*/}
          <div className="firstchildcontainer">
            <div>
              <a href="FirstProject.js" className="linktoprojectone">
                <img
                  className="imagetwo"
                  src="https://assets.website-files.com/5c6e6f46bf98b2013cf621c5/5cdbececb102f913e509144f_portfolio%201%20-%20wide.svg"
                  alt="Project_1"
                />
              </a>
            </div>

            <div className="projectone">
              {" "}
              <a href="FirstProject.js">Project 1</a>{" "}
            </div>

            <div className="flutterproject">Flutter Project</div>
          </div>
        </div>
        <div className="projectcontainer">
          {/*third project*/}
          <div className="firstchildcontainer">
            <div>
              <a href="FirstProject.js" className="linktoprojectone">
                <img
                  className="imagetwo"
                  src="https://assets.website-files.com/5c6e6f46bf98b2013cf621c5/5cdbececb102f913e509144f_portfolio%201%20-%20wide.svg"
                  alt="Project_1"
                />
              </a>
            </div>

            <div className="projectone">
              {" "}
              <a href="FirstProject.js">Project 1</a>{" "}
            </div>

            <div className="flutterproject">Flutter Project</div>
          </div>

          {/*fourth project*/}
          <div className="firstchildcontainer">
            <div>
              <a href="FirstProject.js" className="linktoprojectone">
                <img
                  className="imagetwo"
                  src="https://assets.website-files.com/5c6e6f46bf98b2013cf621c5/5cdbececb102f913e509144f_portfolio%201%20-%20wide.svg"
                  alt="Project_1"
                />
              </a>
            </div>

            <div className="projectone">
              {" "}
              <a href="FirstProject.js">Project 1</a>{" "}
            </div>

            <div className="flutterproject">Flutter Project</div>
          </div>
        </div>
      </div>
    </div>
  );
}
