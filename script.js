function onSubmit() {
    if (validateForm(document) === false) {
        alert("Please fill in all values.")
        return false;
    };
    let amountCash = document.getElementById("amount-cash").value;
    let expectedYearlyInterestRate = document.getElementById("year-int-rate").value;
    let expectedYearlyInflation = document.getElementById("year-inf").value;
    let numYears = document.getElementById("num-years").value;
    let vals = [amountCash, expectedYearlyInterestRate, expectedYearlyInflation, numYears];
    // forOneYear(vals[0], vals[1], vals[2], vals[3]);
    calcYearlyValues(amountCash, expectedYearlyInterestRate, expectedYearlyInflation, numYears);
}

function validateForm(doc) {
    let testArray = [doc.getElementById("amount-cash").value, doc.getElementById("year-int-rate").value, doc.getElementById("year-inf").value, doc.getElementById("num-years")];
    for (let i = 0; i < testArray.length; i = i+1) {
        if (testArray[i] === '') {
            return false;
        }
    }
}

function numYearArray(x) {
    let toReturn = [];
    for (let i=1; i<=x; i=i+1) {
        toReturn.push(i.toString());
    }
    console.log(toReturn)
}

function forOneYear(amountCash, expectedYearlyInterestRate, expectedYearlyInflation) {
    let intRate = 1 + (expectedYearlyInterestRate / 100);
    let infl = 1 - (expectedYearlyInflation / 100);
    let oneYearChange = amountCash * intRate * infl;
    console.log(oneYearChange);
    return oneYearChange;
}

// take previous result and repeat calc * 80
function calcYearlyValues(amountCash, expectedYearlyInterestRate, expectedYearlyInflation, numYears) {
    let intRate = 1 + (expectedYearlyInterestRate / 100);
    let infl = 1 - (expectedYearlyInflation / 100);
    let toPlot = [];
    let mostRecentYear = amountCash * intRate * infl;
    for (let i = 1; i <= numYears; i = i+1) {
        toPlot.push(Math.round(mostRecentYear));
        mostRecentYear = mostRecentYear * intRate * infl;
    }
    console.log(toPlot);
    return toPlot;
}

function makeYourOwnChart(xAxis, yAxis) {
    let myChart = echarts.init(document.getElementById("not-main"));

    let option = {
        title: {
            text: "Title here"
        },
        tooltip: {},
        legend: {},
        xAxis: {
            type: "category",
            data: xAxis
        },
        yAxis: {
            type: "value"
        },
        series: [
            {
                data: yAxis,
                type: "line",
                smooth: true
            }
        ]
    }

    myChart.setOption(option);
}

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

    calcYearlyValues(10000,3,4,5);

    myChart.setOption(option);
}