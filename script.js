// ============================================
// HELPER FUNCTION: Console Output
// ============================================
function addOutput(message, type = 'log') {
    const consoleOutput = document.getElementById('consoleOutput');
    const outputLine = document.createElement('div');
    outputLine.className = 'console-output';
    
    // Add appropriate styling based on type
    if (type === 'header') {
        outputLine.className = 'console-header-text';
        outputLine.textContent = message;
    } else if (type === 'success') {
        outputLine.className = 'console-output console-success';
        outputLine.textContent = '> ' + message;
    } else if (type === 'error') {
        outputLine.className = 'console-output console-error';
        outputLine.textContent = '> ' + message;
    } else {
        outputLine.textContent = '> ' + message;
    }
    
    consoleOutput.appendChild(outputLine);
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
}

function clearConsole() {
    const consoleOutput = document.getElementById('consoleOutput');
    consoleOutput.innerHTML = '<p class="console-placeholder">Run any example to see output here...</p>';
}

// ============================================
// PART 1: JAVASCRIPT BASICS
// Variables, Data Types, Operators, Conditionals
// ============================================

function runPart1() {
    clearConsole();
    addOutput('=== PART 1: JavaScript Basics ===', 'header');
    
    // Variables and Data Types
    const greeting = "Hello, World!";
    const year = 2026;
    const isLearning = true;
    const score = 95.5;
    
    addOutput('String: ' + greeting);
    addOutput('Number: ' + year);
    addOutput('Boolean: ' + isLearning);
    addOutput('Float: ' + score);
    
    // Operators - Arithmetic and Comparison
    const sum = 10 + 5;
    const product = 10 * 5;
    const isEqual = (10 === 10);
    
    addOutput('Addition: 10 + 5 = ' + sum);
    addOutput('Multiplication: 10 * 5 = ' + product);
    addOutput('Equality check: 10 === 10 is ' + isEqual);
    
    // Conditionals - if/else statements
    const userAge = 20;
    if (userAge >= 18) {
        addOutput('✓ User is an adult', 'success');
    } else {
        addOutput('✗ User is a minor', 'error');
    }
    
    // Conditionals - if/else if/else
    const temperature = 75;
    if (temperature > 80) {
        addOutput('🌞 It\'s hot outside!');
    } else if (temperature > 60) {
        addOutput('🌤️ Nice weather!', 'success');
    } else {
        addOutput('🧊 It\'s cold!');
    }
}

// ============================================
// PART 2: FUNCTIONS - REUSABILITY
// Custom functions with inputs and outputs
// ============================================

// FUNCTION 1: Calculate shopping cart total with tax
function calculateTotal(items, taxRate) {
    // Default parameter if taxRate not provided
    if (taxRate === undefined) {
        taxRate = 0.08;
    }
    
    // Calculate subtotal
    let subtotal = 0;
    for (let i = 0; i < items.length; i++) {
        subtotal += items[i].price;
    }
    
    // Calculate tax and total
    const tax = subtotal * taxRate;
    const total = subtotal + tax;
    
    // Return object with formatted values
    return {
        subtotal: subtotal.toFixed(2),
        tax: tax.toFixed(2),
        total: total.toFixed(2)
    };
}

// FUNCTION 2: Format name (capitalize first letter of each word)
function formatName(name) {
    const words = name.toLowerCase().split(' ');
    const capitalizedWords = [];
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
        capitalizedWords.push(capitalizedWord);
    }
    
    return capitalizedWords.join(' ');
}

// FUNCTION 3: Generate greeting based on time of day
function generateGreeting(name, hour) {
    // Default to current hour if not provided
    if (hour === undefined) {
        hour = new Date().getHours();
    }
    
    let timeOfDay;
    if (hour < 12) {
        timeOfDay = 'morning';
    } else if (hour < 18) {
        timeOfDay = 'afternoon';
    } else {
        timeOfDay = 'evening';
    }
    
    return 'Good ' + timeOfDay + ', ' + name + '!';
}

function runPart2() {
    clearConsole();
    addOutput('=== PART 2: Functions - Reusability ===', 'header');
    
    // Test Function 1: Calculate Total
    const shoppingCart = [
        { name: 'Laptop', price: 999.99 },
        { name: 'Mouse', price: 29.99 },
        { name: 'Keyboard', price: 79.99 }
    ];
    
    const totals = calculateTotal(shoppingCart, 0.08);
    addOutput('Shopping Cart Calculation:');
    addOutput('Subtotal: $' + totals.subtotal);
    addOutput('Tax (8%): $' + totals.tax);
    addOutput('Total: $' + totals.total, 'success');
    
    // Test Function 2: Format Name
    const rawName = 'john doe smith';
    const formattedName = formatName(rawName);
    addOutput('');
    addOutput('Name Formatting:');
    addOutput('Input: "' + rawName + '"');
    addOutput('Output: "' + formattedName + '"', 'success');
    
    // Test Function 3: Generate Greeting
    const greeting = generateGreeting('Alice', 14);
    addOutput('');
    addOutput('Time-based Greeting:');
    addOutput(greeting, 'success');
}

// ============================================
// PART 3: LOOPS - REPETITION
// For loops, while loops, forEach
// ============================================

function runPart3() {
    clearConsole();
    addOutput('=== PART 3: Loops - Power of Repetition ===', 'header');
    
    // LOOP EXAMPLE 1: For Loop - Generate multiplication table
    addOutput('Multiplication Table (5x):');
    for (let i = 1; i <= 10; i++) {
        addOutput('5 × ' + i + ' = ' + (5 * i));
    }
    
    // LOOP EXAMPLE 2: While Loop - Countdown sequence
    addOutput('');
    addOutput('While Loop Countdown:');
    let counter = 5;
    while (counter > 0) {
        addOutput('T-minus ' + counter + '...');
        counter--;
    }
    addOutput('🚀 Liftoff!', 'success');
    
    // LOOP EXAMPLE 3: forEach - Process array of students
    addOutput('');
    addOutput('Student Grades (forEach):');
    const students = [
        { name: 'Emma', grade: 92 },
        { name: 'Liam', grade: 88 },
        { name: 'Olivia', grade: 95 },
        { name: 'Noah', grade: 78 }
    ];
    
    students.forEach(function(student, index) {
        let status;
        if (student.grade >= 90) {
            status = '🌟 Excellent';
        } else if (student.grade >= 80) {
            status = '✓ Good';
        } else {
            status = '⚠️ Needs Improvement';
        }
        addOutput((index + 1) + '. ' + student.name + ': ' + student.grade + ' - ' + status);
    });
    
    // LOOP EXAMPLE 4: For...of Loop - Sum array
    addOutput('');
    addOutput('Array Summation (for...of):');
    const numbers = [10, 25, 30, 15, 20];
    let sum = 0;
    for (const num of numbers) {
        sum += num;
    }
    addOutput('Numbers: [' + numbers.join(', ') + ']');
    addOutput('Total Sum: ' + sum, 'success');
}

// ============================================
// PART 4: DOM MANIPULATION
// Interactive elements and dynamic content
// ============================================

// DOM INTERACTION 1: Process user form data
function processUserData() {
    const usernameInput = document.getElementById('username');
    const ageInput = document.getElementById('age');
    
    const username = usernameInput.value;
    const age = ageInput.value;
    
    // Validation
    if (!username || !age) {
        addOutput('⚠️ Please fill in all fields!', 'error');
        return;
    }
    
    clearConsole();
    
    const formattedName = formatName(username);
    const greeting = generateGreeting(formattedName);
    const ageNum = parseInt(age);
    
    addOutput('=== User Information Processed ===', 'header');
    addOutput(greeting, 'success');
    addOutput('Name: ' + formattedName);
    addOutput('Age: ' + ageNum);
    
    // Conditional output based on age
    if (ageNum < 13) {
        addOutput('Category: Child 👶');
    } else if (ageNum < 20) {
        addOutput('Category: Teenager 🧒');
    } else if (ageNum < 65) {
        addOutput('Category: Adult 🧑');
    } else {
        addOutput('Category: Senior 👴');
    }
}

function generateDynamicList() {
    const itemCount = document.getElementById('itemCount').value;
    const dynamicList = document.getElementById('dynamicList');
    
    // Clear existing list
    dynamicList.innerHTML = '';
    
    // Generate new list items using a loop
    for (let i = 1; i <= itemCount; i++) {
        const listItem = document.createElement('li');
        listItem.textContent = 'Dynamic Item #' + i;
        dynamicList.appendChild(listItem);
    }
    
    addOutput('✓ Generated ' + itemCount + ' items dynamically!', 'success');
}

function toggleColorBox() {
    const colorBox = document.getElementById('colorBox');
    const colors = ['blue', 'green', 'purple', 'red', 'yellow'];
    
    // Get current color or default to first
    let currentColorIndex = 0;
    for (let i = 0; i < colors.length; i++) {
        if (colorBox.classList.contains(colors[i])) {
            currentColorIndex = i;
            colorBox.classList.remove(colors[i]);
            break;
        }
    }
    
    const nextColorIndex = (currentColorIndex + 1) % colors.length;
    colorBox.classList.add(colors[nextColorIndex]);
}

function toggleContentVisibility() {
    const toggleContent = document.getElementById('toggleContent');
    const toggleButton = document.getElementById('toggleVisibility');
    
    if (toggleContent.classList.contains('hidden')) {
        toggleContent.classList.remove('hidden');
        toggleButton.textContent = 'Hide Content';
    } else {
        toggleContent.classList.add('hidden');
        toggleButton.textContent = 'Show Content';
    }
}

let countdownInterval = null;

function startCountdown() {
    const countdownDisplay = document.getElementById('countdownDisplay');
    const startButton = document.getElementById('startCountdown');
    
    // Prevent multiple countdowns
    if (countdownInterval !== null) {
        return;
    }
    
    clearConsole();
    let timeLeft = 10;
    countdownDisplay.textContent = timeLeft;
    startButton.disabled = true;
    
    countdownInterval = setInterval(function() {
        timeLeft--;
        countdownDisplay.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            countdownInterval = null;
            addOutput('⏰ Countdown finished!', 'success');
            startButton.disabled = false;
            timeLeft = 10;
            countdownDisplay.textContent = timeLeft;
        }
    }, 1000);
}

// Update item count display in real-time
function updateItemCountDisplay() {
    const itemCount = document.getElementById('itemCount').value;
    document.getElementById('itemCountDisplay').textContent = itemCount;
}



// Wait for DOM to fully load before adding event listeners
document.addEventListener('
    document.getElementById('runPart1').addEventListener('click', runPart1);
    document.getElementById('runPart2').addEventListener('click', runPart2);
    document.getElementById('runPart3').addEventListener('click', runPart3);
    document.getElementById('processUser').addEventListener('click', processUserData);
    document.getElementById('generateList').addEventListener('click', generateDynamicList);
    document.getElementById('toggleColor').addEventListener('click', toggleColorBox);
    document.getElementById('toggleVisibility').addEventListener('click', toggleContentVisibility);
    document.getElementById('startCountdown').addEventListener('click', startCountdown);
    document.getElementById('itemCount').addEventListener('input', updateItemCountDisplay);
    
    // Console clear button
    document.getElementById('clearConsole').addEventListener('click', clearConsole);
    
    console.log('🚀 JavaScript Fundamentals Assignment loaded successfully!');
});
