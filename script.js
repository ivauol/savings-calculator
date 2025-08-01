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
    forOneYear(vals[0], vals[1], vals[2]);
}

function validateForm(doc) {
    let testArray = [doc.getElementById("amount-cash").value, doc.getElementById("year-int-rate").value, doc.getElementById("year-inf").value];
    for (let i = 0; i < testArray.length; i = i+1) {
        if (testArray[i] === '') {
            return false;
        }
    }
}

function forOneYear(amountCash, expectedYearlyInterestRate, expectedYearlyInflation) {
    let intRate = 1 + (expectedYearlyInterestRate / 100);
    let infl = 1 - (expectedYearlyInflation / 100);
    let oneYearChange = amountCash * intRate * infl;
    console.log(oneYearChange);
    return oneYearChange;
}

function calcYearlyValues() {}

function funkyChart() {
    var myChart = echarts.init(document.getElementById('main'));

    var option = {
        title: {
            text: 'Line Graph'
        },
        tooltip: {},
        legend: {
            data: ['sales']
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true
            }
        ]
    };

    myChart.setOption(option);
}