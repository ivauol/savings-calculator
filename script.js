function onSubmit() {
    let amountCash = document.getElementById("amount-cash").value;
    let expectedYearlyInterestRate = document.getElementById("year-int-rate").value;
    let expectedYearlyInflation = document.getElementById("year-inf").value;
}


/* function onSubmit(event) {
    event.preventDefault;
    console.log(event);
    console.log('hello');
    const form = event.target;
    const formData = new FormData(form);
    window.myFormData = formData;
    let amountCash;
    let expectedYearlyInterestRate;
    let expectedYearlyInflation;
    vals = [amountCash, expectedYearlyInterestRate, expectedYearlyInflation]
    for (let keyValue of myFormData.entries())
        console.log(keyValue);
        vals[keyValue] = entries[keyValue];
    return false;
} */
