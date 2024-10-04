import { useState } from "react";
import "./index.css";
import Calculate from "./Calculate";

function UserAccount() {
  const [isOpenOne, setIsOpenOne] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [isOpenThree, setIsOpenThree] = useState(false);
  const [calculate, setCalculate] = useState(false);

  const handleSelectChange = (e) => {
    if (e.target.value === "Food") {
      setCalculate(true);
    } else {
      setCalculate(false);
    }
  };
  function Options() {}
  return (
    <>
      <div className="balance-display">
        <p> 2024-08-09 </p>
        <p>Current Balance:</p>
        <p>Total Expenses: #200,000</p>
        <p> Total Income: #300,000</p>
      </div>
      <section>
        <Options />
        <div className="account-body">
          <a href="#">
            <img
              className="plus-icon"
              src="src/assets/plus_icon_useraccount.png"
              alt="a plus icon users can click on to bring up a set of choices"
              onClick={() => setIsOpenOne(!isOpenOne)}
            />{" "}
          </a>

          {isOpenOne && (
            <div className="dropdown-container">
              <h3
                className="dropdown-one"
                onClick={() => setIsOpenTwo(!isOpenTwo)}
              >
                Expenses{" "}
              </h3>

              {isOpenTwo && (
                <select
                  className="dropdown-select"
                  onChange={handleSelectChange}
                >
                  <option value="Food"> Food </option>
                  <option value="Accomodation"> Accomodation/Housing </option>
                  <option value="Rental"> Rental </option>
                  <option value="Transportation"> Transportation </option>
                  <option value="Shopping"> Shopping </option>
                  <option value="Emergency"> Emergency </option>
                  <option value="Miscallenous"> Miscallenous </option>
                </select>
              )}

              {calculate && <Calculate />}

              <h3
                className="dropdown-one"
                onClick={() => setIsOpenThree(!isOpenThree)}
              >
                {" "}
                Income
              </h3>
              {isOpenThree && (
                <select className="dropdown-select">
                  <option> Salary </option>
                  <option> Dividends </option>
                  <option> Refunds </option>
                </select>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default UserAccount;

{
  /*
  okay, here is the sort of budget app i want to create for
  myself:
  1. have a list of items i spend money on e.g. shoes, bags,
  food, transportation, black tax, emergency.

  here, there will be a drop-down button from which users
  can choose. and there choice will be immediately added
  to an empty array/list

  2. amount i earn (it should be connected to my bank account)
  3. set a cap limit for each item which must not be exceeded
  4. show a display of amount that will be left after removing
  the amount i will spend on list of items
  5. get a warning if i am 10% close to the set limit
  6. 
  */
}
