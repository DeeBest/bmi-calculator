const currentYear = new Date().getFullYear();

const footerParagraph = document.getElementById('footer-paragraph');
footerParagraph.textContent = `Created By \xA9Simphiwe ${currentYear}.`;

const heightInput = document.getElementById('height-input');
const weightInput = document.getElementById('weight-input');
const calculateBmiBtn = document.getElementById('calculate-bmi-btn');
const resultsOutput = document.getElementById('results-output');
const weightConditionOutput = document.getElementById(
  'weight-condition-output'
);
