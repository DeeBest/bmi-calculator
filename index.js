const currentYear = new Date().getFullYear();

const footerParagraph = document.getElementById('footer-paragraph');
footerParagraph.textContent = `Created By \xA9Simphiwe ${currentYear}.`;

const calculateBmiBtn = document.getElementById('calculate-bmi-btn');
const resultsOutput = document.getElementById('results-output');
const weightConditionOutput = document.getElementById(
  'weight-condition-output'
);

calculateBmiBtn.addEventListener('click', calculateBmiFunction);

function calculateBmiFunction() {
  const heightInputValue = +document.getElementById('height-input').value;
  const weightInputValue = +document.getElementById('weight-input').value;

  const heightInMeters = heightInputValue / 100;

  const bmiValue = weightInputValue / (heightInMeters * heightInMeters);

  resultsOutput.value = `Your BMI is ${bmiValue.toFixed(2)}.`;
}
