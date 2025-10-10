🎨 WCAG 2.1 Color Contrast Checker
A Real-Time Accessibility Compliance Tool
A modern, interactive web application designed to help developers and designers verify color choices against WCAG 2.1 standards. This tool demonstrates strong Vanilla JavaScript logic, accessibility best practices, and clean, responsive UI/UX.

✨ Live Demo & Quick Links
Live Demo	Source Code	Technical Focus
View the Calculator	View Repository	JavaScript, WCAG 2.1 Compliance, CSS Grid

Export to Sheets
🚀 Key Features & Technical Highlights
This project showcases a professional approach to front-end development:

Real-Time Calculations: Uses Vanilla JavaScript event listeners ('input') to instantly calculate the contrast ratio as the user manipulates the color pickers, eliminating the need for a "Calculate" button.

Comprehensive Compliance Grid: Displays explicit Pass/Fail status for all four key WCAG 2.1 success criteria: AA Normal Text (≥4.5:1), AA Large Text (≥3.0:1), AAA Normal Text (≥7.0:1), and AAA Large Text (≥4.5:1).

Modern Layout: Implemented using CSS Grid and Flexbox for a two-column, adaptive design that is clean, organized, and fully responsive across mobile and desktop.

Color Swapper Feature: Includes a button to instantly swap the foreground and background colors, aiding rapid design iteration.

Live Preview: The entire preview box updates its background and text colors immediately, providing an accurate visual reference.

💻 How The Calculation Works
The application uses the precise WCAG 2.1 luminosity contrast algorithm, implemented entirely in JavaScript:

Hex to sRGB Conversion: Color picker hex codes are converted to discrete RGB values.

Relative Luminance (L) Calculation: A custom function determines the relative luminance for each color using standard sRGB component formulas.

Contrast Ratio: The final ratio is computed using the formula: (L 
lighter
​
 +0.05)/(L 
darker
​
 +0.05).

Conditional Logic: The resulting ratio is used to drive conditional rendering (red/green indicators) for the four compliance standards.

🛠️ Technology Stack
HTML5: Structured the application with semantic tags.

CSS3: Utilized CSS Grid, Flexbox, and custom styling for a clean, professional UI.

Vanilla JavaScript (ES6+): Implemented all logic, event handling, and DOM manipulation without external libraries, showcasing core language proficiency.

🔮 Future Enhancements
Allow manual hex code input via text fields with robust validation.

Implement keyboard navigation and ARIA roles to enhance the tool's own accessibility.

Add a feature to suggest compliant foreground colors when a current combination fails.

🏃 How to Run Locally
Clone this repository:

Bash

git clone https://github.com/yourusername/color-contrast-calculator.git
Navigate to the project directory:

Bash

cd color-contrast-calculator
Open the calculator.html file in your web browser.
