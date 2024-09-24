import "./index.css";
function UserAccount() {
  return (
    <div>
      <div className="balance-display">
        <p> 2024-08-09 </p>
        <p>Current Balance:</p>
        <p>Total Expenses: #200,000</p>
        <p> Total Income: #300,000</p>
      </div>
    </div>
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
