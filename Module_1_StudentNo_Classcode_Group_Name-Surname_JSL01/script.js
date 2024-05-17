function validateSyntax() {   //Here I am establishing what the function will execute when the validate button is clicked on 
    let input = document.getElementById("petInput").value; // Here I am specififying from what part of the HTML we want to get the data from that must be validated in this case line with id "petInput"
    var resultElement = document.getElementById("result"); //Here I am specifying from what part of the HTML we want to display the data(message) in,in this case line with id "result"
    var result = "pet_"; // Here I am creating a variable to be used in the if and else statement

    if (input.startsWith(result)) { //Here I am stating that what gets entered in the "petInput" field must start with the result variable, in this case"pet_"
        resultElement.textContent = "Valid Syntax"; //for both the if and else statements we are using the textContent to display the message based on its validation
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Invalid syntax";
        resultElement.style.color = "red";
    }

}

//I tried many solutions, however to no success, after researching this seemed the most straight forward and DRY
// I am still a little bit confused on linking the CSS colors to display the message accordingley in it color and opted to write it directly in to the js code

