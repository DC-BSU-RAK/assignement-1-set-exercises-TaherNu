// This is a calculate function that will calculate the total amount based on user input
function calculate() {
    /*this retrieves the value entered by the user in the ID "Petrol_Price" 
    and store it in the Petrol_Price constant*/ 
    const Petrol_Price = parseFloat(document.querySelector('#Petrol_Price').value);
    //this also retreives the value entered in "liters" and stores it in the liters constant
    const liters = parseFloat(document.querySelector('#liters').value);
    //This line eits the function if either one of Petrol_Price or liters is missing or empty.
    if (isNaN(Petrol_Price) || isNaN(liters)) return;
    //this calculates the total
    const total = Petrol_Price * liters;

    /*This displays the total amount in the element with the ID totalAmount in html,
    and formats it as a dollar amount with two decimal points*/
    document.querySelector('#totalAmount').innerText = `$${total.toFixed(2)}`;
}
