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
    //console.log("Selected option:", value);
    setSelectedOption(value);
    if (value != "") {
      setCalculate(true);
    } else {
      setCalculate(false);
    }
  };

  //Function to toggle sections
  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  //this function will update income
  const handleIncomeUpdate = (amount) => {
    setIncome(income + amount);
  };

  //this function will update expenses
  const handleExpensesUpdate = (amount) => {
    setExpenses(expenses + amount);
  };
  //function Options() {}
  return (
    <>
      {/*The balance display section */}
      <div className="balance-display">
        <p> 2024-08-09 </p>
        <p type="number">Current Balance: {income - expenses}</p>
        <p type="number">Total Expenses: {expenses}</p>
        <p type="number"> Total Income: {income} </p>
      </div>

      {/*calculator component */}
      {calculate && (
        <Calculate
          onIncomeUpdate={handleIncomeUpdate}
          onExpensesUpdate={handleExpensesUpdate}
        />
      )}
      <section>
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
                  value={selectedOption}
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
                  value={selectedOption}
                  onChange={handleSelectChange}
                >
                  <option> Select an option</option>
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
              key={selectedOption}
              onIncomeUpdate={handleIncomeUpdate}
              onExpensesUpdate={handleExpensesUpdate}
              option={selectedOption}
              setCalculate={setCalculate}
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

  issues with the calculator:
  1. the calculator does not reset (i.e. the calculation 
  made in the previous dropdown option is not erased) when 
  i click on a different
   drop down option
  2. once i click the "X" button which automatically closes 
  the calculator, i can no longer open the calculator if i 
  click on any of the dropdown options

  installing a key (i.e. key={selectedOption}) in calculate
  resolved all of the problems above. This means the key prop
  is useful for forcing a re-rendering and reseting component
  states in react.

  TASK FOR TODAY:
  1. I want to make sure that the result gotten from the 
  calculation is being passed to the current balance & total
  expenses & total income. how the fuck do we go about this?
  there is a formula somewhere that we will find 

  2. There is a disconnect:
  i. First, i need the result gotten from the calculation (for 
  each of the options for the expense and income section)
  to reflect on the display tab in their respective position 
  (ie income, expense and balance)
  ii. Second, i need the current balance to reflect the c
  orrect response
  */
}
