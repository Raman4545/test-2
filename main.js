function submitForm() {
    // Get input values
    var name = document.getElementById('name').value;
    var rollNumber = document.getElementById('rollNumber').value;

    // Display the information
    var displayInfo = document.getElementById('displayInfo');
    displayInfo.innerHTML = "<p><strong>Name:</strong> " + name + "</p><p><strong>Roll Number:</strong> " + rollNumber + "</p>";
}
