function onSubmit() {
    if (validateForm(document) === false) {
        alert("Please fill in all values.")
        return false;
    };
    let amountCash = document.getElementById("amount-cash").value;
    let expectedYearlyInterestRate = document.getElementById("year-int-rate").value;
    let expectedYearlyInflation = document.getElementById("year-inf").value;
    let vals = [amountCash, expectedYearlyInterestRate, expectedYearlyInflation];
    console.log(vals);
}

function validateForm(doc) {
    let testArray = [doc.getElementById("amount-cash").value, doc.getElementById("year-int-rate").value, doc.getElementById("year-inf").value];
    for (let i = 0; i < testArray.length; i = i+1) {
        if (testArray[i] === '') {
            return false;
        }
    }
}