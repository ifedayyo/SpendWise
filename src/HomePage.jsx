export default function HomePage() {
  return (
    <div>
      <div>
        <div className="container">
          <h1 className="description">
            You should be the one managing your finance.
            <br /> <strong>NOT</strong> the other way round!
          </h1>

          <p></p>
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
