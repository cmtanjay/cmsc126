document.getElementById("num").value;

// After the submit button is clicked, this function will be called
function getVal() {
    //setting the variable x equal tot the number inputted by the user in the html
    var x = document.getElementById("num").value;
    
    //function for converting decimal to binary
    function deciToBi(x) {
        var ans = 0;
        var r, i = 1, j = 1;
        while (x != 0) {
            r = x % 2;
            //for getting parseInt
            console.log(`Step ${j++}: ${x}/2, Remainder = ${r}, Quotient = ${parseInt(x/2)}`);
            x = parseInt(x / 2);
            ans = ans + r * i;
            i = i * 10;
        }
        //for printing the result of the function to the output box in the html file
        document.getElementById("output").value = ans;
    }
    deciToBi(x);
}