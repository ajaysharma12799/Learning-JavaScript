const companies = [
    {name:"Google", category: "Product Based", start: 1981, end: 2004},
    {name:"Facebook", category: "Product Based", start: 1951, end: 2012},
    {name:"MPhasis", category: "Service Based", start: 1979, end: 2008},
    {name:"Accenture", category: "Service Based", start: 1941, end: 2018},
];

const ages = [1,2,3,4,5];

const reducedResult = ages.reduce((previousValue, currentValue, currentIndex, array) => {
    console.log(`Previous Value : ${previousValue}, Current Value ${currentValue}, Current Index : ${currentIndex} `);
    return previousValue + currentValue;
}, 0);

console.log(reducedResult);