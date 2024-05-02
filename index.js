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

  if (
    heightInputValue > 0 &&
    heightInputValue < 1000 &&
    weightInputValue > 0 &&
    weightInputValue < 3000
  ) {
    const heightInMeters = heightInputValue / 100;

    const bmiValue = weightInputValue / (heightInMeters * heightInMeters);

    resultsOutput.value = `Your BMI is ${bmiValue.toFixed(2)}.`;

    if (bmiValue < 18.5) {
      weightConditionOutput.value = 'Weight Condition: Under Weight';
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      weightConditionOutput.value = 'Weight Condition: Normal Weight';
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      weightConditionOutput.value = 'Weight Condition: Over Weight';
    } else {
      weightConditionOutput.value = 'Weight Condition: Obesity';
    }
  } else alert('Please put correct details.');
}
