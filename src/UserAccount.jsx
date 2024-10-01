import { useState } from "react";
import "./index.css";
function UserAccount() {
  const [isOpen, setIsOpen] = useState(false);
  function Options() {}
  return (
    <>
      <div className="balance-display">
        <p> 2024-08-09 </p>
        <p>Current Balance:</p>
        <p>Total Expenses: #200,000</p>
        <p> Total Income: #300,000</p>
      </div>
      <body>
        <Options />
        <div className="account-body">
          <a href="#">
            <img
              className="plus-icon"
              src="src/assets/plus_icon_useraccount.png"
              alt="a plus icon users can click on to bring up a set of choices"
            />{" "}
          </a>

          <div className="dropdown-container">
            <h3 className="dropdown-one" onClick={() => setIsOpen(!isOpen)}>
              Expenses{" "}
            </h3>

            {isOpen && (
              <select className="dropdown-select">
                <option> Food </option>
                <option> Accomodation/Housing </option>
                <option> Rental </option>
                <option> Transportation </option>
                <option> Shopping </option>
                <option> Emergency </option>
                <option> Miscallenous </option>
              </select>
            )}

            <h3> Income</h3>
            <select className="dropdown-select">
              <option> Salary </option>
              <option> Dividends </option>
              <option> Refunds </option>
            </select>
          </div>
        </div>
      </body>
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
