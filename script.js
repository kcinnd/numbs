document.addEventListener('DOMContentLoaded', function() {
    var numberElement = document.getElementById('number'); // Get the element with ID 'number'

    // Set initial number to 1
    numberElement.textContent = '1';

    // Change the number to 4 upon click
    numberElement.addEventListener('click', function() {
        this.textContent = '4';
    });
});
