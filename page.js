// Select buttons and message elements
const button1 = document.getElementById('button1');
const message1 = document.getElementById('message1');

const button2 = document.getElementById('button2');
const message2 = document.getElementById('message2');

const button3 = document.getElementById('button3');
const message3 = document.getElementById('message3');

// Event listener for Button 1
button1.addEventListener('click', function() {
    button1.style.backgroundColor = 'lightgreen'; // Change color on click
    alert('Button 1 clicked!');
});

button1.addEventListener('mouseover', function() {
    message1.style.display = 'block'; // Show message on mouse over
});

button1.addEventListener('mouseout', function() {
    message1.style.display = 'none'; // Hide message on mouse out
});

button1.addEventListener('dblclick', function() {
    button1.style.backgroundColor = ''; // Reset color on double click
});

// Event listener for Button 2
button2.addEventListener('click', function() {
    button2.style.backgroundColor = 'lightblue'; // Change color on click
    alert('Button 2 clicked!');
});

button2.addEventListener('mouseover', function() {
    message2.style.display = 'block'; // Show message on mouse over
});

button2.addEventListener('mouseout', function() {
    message2.style.display = 'none'; // Hide message on mouse out
});

button2.addEventListener('dblclick', function() {
    button2.style.backgroundColor = ''; // Reset color on double click
});

// Event listener for Button 3
button3.addEventListener('click', function() {
    button3.style.backgroundColor = 'lightcoral'; // Change color on click
    alert('Button 3 clicked!');
});

button3.addEventListener('mouseover', function() {
    message3.style.display = 'block'; // Show message on mouse over
});

button3.addEventListener('mouseout', function() {
    message3.style.display = 'none'; // Hide message on mouse out
});

button3.addEventListener('dblclick', function() {
    button3.style.backgroundColor = ''; // Reset color on double click
});
