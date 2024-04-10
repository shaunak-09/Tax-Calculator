# Tax Calculation Project

This project implements a tax calculation system based on specific rules and requirements. It is developed using HTML, CSS, and JavaScript, with the option to use Bootstrap and jQuery for styling and functionality.

## Overview

The tax calculation works based on the following formula:

- If the overall income (after deductions) is under 8 Lakhs, no tax is applied.
- If the income is over 8 Lakhs, the amount over 8 Lakhs is taxed at different rates based on the age group:
  - 30% for people under 40 years old.
  - 40% for people between 40 and 60 years old.
  - 10% for people over 60 years old.

## Clone the Repository

```bash
git clone https://github.com/shaunak-09/Tax-Calculator.git
```



## Navigate to the Project Directory

```bash
cd Tax Calculator
```

##Usage

- Open index.html in a web browser to view the tax calculation form.
- Enter values for gross annual income, extra income, deductions, and select an age group from the dropdown.
- If there are any errors (e.g., invalid input or missing age group), error icons with tooltips will be displayed.
- Click on the submit button to calculate the tax. A modal will appear showing the final tax amount based on the calculations.





