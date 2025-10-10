# 🎨 WCAG 2.1 Color Contrast Checker

## **A Real-Time Accessibility Compliance Tool**

A modern, interactive web application designed to help developers and designers verify color choices against **WCAG 2.1 standards**. This tool demonstrates strong **Vanilla JavaScript** logic, accessibility best practices, and clean, responsive UI/UX.

-----

## ✨ Project Showcase

| Live Demo | Technical Focus |
| :---: | :---: |
| **[View the Calculator](https://ozias-tumimana.github.io/color-contrast-calculator/)** | JavaScript, WCAG 2.1 Compliance, CSS Grid |

-----

## 🚀 Key Features & Technical Highlights

This project showcases a professional approach to front-end development:

  * **Real-Time Calculations:** Uses **Vanilla JavaScript event listeners** (`'input'`) to instantly calculate the contrast ratio as the user manipulates the color pickers, eliminating the need for a "Calculate" button.
  * **Comprehensive Compliance Grid:** Displays **explicit Pass/Fail status** for all four key WCAG 2.1 success criteria: AA Normal Text ($\ge 4.5:1$), AA Large Text ($\ge 3.0:1$), AAA Normal Text ($\ge 7.0:1$), and AAA Large Text ($\ge 4.5:1$).
  * **Color Swapper Feature:** Includes a button to instantly **swap the foreground and background colors**, aiding rapid design iteration.
  * **Modern Layout:** Implemented using **CSS Grid and Flexbox** for a two-column, adaptive design that is clean, organized, and fully responsive across mobile and desktop.
  * **Live Preview:** The entire preview box updates its background and text colors immediately, providing an accurate visual reference.

-----

## 💻 How The Calculation Works

The application uses the precise **WCAG 2.1 luminosity contrast algorithm**, implemented entirely in JavaScript:

1.  **Hex to sRGB Conversion:** Color picker hex codes are converted to discrete RGB values.
2.  **Relative Luminance ($\text{L}$):** A custom function determines the relative luminance for each color using standard sRGB component formulas.
3.  **Contrast Ratio:** The final ratio is computed using the formula: $(\text{L}_{lighter} + 0.05) / (\text{L}_{darker} + 0.05)$.
4.  **Conditional Logic:** The resulting ratio drives the conditional rendering (red/green indicators) for the four compliance standards.

-----

## 🛠️ Technology Stack

  * **HTML5:** Structured the application with semantic tags.
  * **CSS3:** Utilized **CSS Grid, Flexbox,** and custom styling for a clean, professional UI.
  * **Vanilla JavaScript (ES6+):** Implemented all core logic, event handling, and DOM manipulation without external libraries, showcasing core language proficiency.

-----

## 🏃 How to Run Locally

1.  Clone this repository:
    ```bash
    git clone https://github.com/Ozias-Tumimana/color-contrast-calculator.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd color-contrast-calculator
    ```
3.  Open the `calculator.html` file in your web browser.