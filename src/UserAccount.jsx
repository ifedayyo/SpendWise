import { useState } from "react";
import "./index.css";
import Calculate from "./Calculate";

function UserAccount() {
  const [isOpenOne, setIsOpenOne] = useState(false);
  const [openSection, setOpenSection] = useState(null);
  const [calculate, setCalculate] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);

  const handleSelectChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    if (value != "") {
      setCalculate(true);
    } else {
      setCalculate(false);
    }
  };

  //Function to toggle calculator visibility

  //Function to toggle sections
  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  //this function will update income
  const handleIncomeUpdate = (newIncome) => {
    setIncome((prevIncome) => prevIncome + parseFloat(newIncome));
  };

  //this function will update expenses
  const handleExpensesUpdate = (newExpense) => {
    setExpenses((prevExpense) => prevExpense + parseFloat(newExpense));
  };
  function Options() {}
  return (
    <>
      {/*The balance display section */}
      <div className="balance-display">
        <p> 2024-08-09 </p>
        <p>Current Balance:#{income - expenses}</p>
        <p>Total Expenses: #{expenses}</p>
        <p> Total Income: #{income}</p>
      </div>

      {/**calculator commponent 
      {calculate && (
        <Calculate
          onIncomeUpdate={handleIncomeUpdate}
          onExpensesUpdate={handleExpensesUpdate}
        />
      )}
*/}
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
                onClick={() => toggleSection("Expenses")}
              >
                Expenses{" "}
              </h3>

              {openSection === "Expenses" && (
                <select
                  className="dropdown-select"
                  value="selectedOption"
                  onChange={handleSelectChange}
                >
                  <option value="">Select an option</option>
                  <option value="Food"> Food </option>
                  <option value="Accomodation"> Accomodation/Housing </option>
                  <option value="Rental"> Rental </option>
                  <option value="Transportation"> Transportation </option>
                  <option value="Shopping"> Shopping </option>
                  <option value="Emergency"> Emergency </option>
                  <option value="Miscallenous"> Miscallenous </option>
                </select>
              )}

              {/*{selectedOption && (
                <div>
                  <p>Selected Option: {selectedOption}</p>
                </div>
              )}*/}

              {/**Button to open calculator */}

              <h3
                className="dropdown-one"
                onClick={() => toggleSection("Income")}
              >
                {" "}
                Income
              </h3>
              {openSection === "Income" && (
                <select
                  className="dropdown-select"
                  value="selectedOption"
                  onChange={handleSelectChange}
                >
                  <option> Salary </option>
                  <option> Dividends </option>
                  <option> Refunds </option>
                </select>
              )}
            </div>
          )}
        </div>

        <div className="calculator-section">
          {calculate && (
            <Calculate
              onIncomeUpdate={handleIncomeUpdate}
              onExpensesUpdate={handleExpensesUpdate}
              option={selectedOption}
            />
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
