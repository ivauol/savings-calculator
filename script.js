function onSubmit() {
    if (validateForm(document) === false) {
        alert("Please fill in all values.")
        return false;
    };
    let amountCash = document.getElementById("amount-cash").value;
    let expectedYearlyInterestRate = document.getElementById("year-int-rate").value;
    let expectedYearlyInflation = document.getElementById("year-inf").value;
    let numYears = document.getElementById("num-years").value;
    let myY = calcYearlyValues(amountCash, expectedYearlyInterestRate, expectedYearlyInflation, numYears);
    let myX = numYearArray(numYears);
    makeYourOwnChart(myX, myY);

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
    for (let i=0; i<=x; i=i+1) {
        toReturn.push(i);
    }
    return toReturn;
}

function calcYearlyValues(amountCash, expectedYearlyInterestRate, expectedYearlyInflation, numYears) {
    let multiplier = 1 + ((expectedYearlyInterestRate - expectedYearlyInflation) / 100);
    let toPlot = [];
    toPlot.push(Math.round(amountCash));
    let mostRecentYear = amountCash * multiplier;
    for (let i = 1; i <= numYears; i = i+1) {
        toPlot.push(Math.round(mostRecentYear));
        mostRecentYear = mostRecentYear * multiplier;
    }
    return toPlot;
}

function makeYourOwnChart(xAxis, yAxis) {

    let minY = Math.min(...yAxis);
    let maxY = Math.max(...yAxis);

    let myChart = echarts.init(document.getElementById("not-main"));

    let option = {
        title: {
            text: "Savings over time"
        },
        tooltip: {},
        legend: {},
        xAxis: {
            type: "category",
            data: xAxis,
            name: "Years",
            nameLocation: "center"
        },
        yAxis: {
            min: (minY-10),
            max: (maxY+10),
            type: "value",
            name: "Amount of cash (£)",
            nameLocation: "center"
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