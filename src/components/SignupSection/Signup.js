// Get the necessary elements
const gstField = document.getElementById('gstField');
const gstInput = document.getElementById('gstNo');
const roleInputs = document.querySelectorAll('input[name="role"]');

// Add event listener to all radio buttons
roleInputs.forEach(role => {
    role.addEventListener('change', function() {
        // Show GST field only if 'Employee' is selected
        if (this.value === 'employee') {
            gstField.style.display = 'block';  // Show GST field
            gstInput.setAttribute('required', 'true');  // Make GST field required
        } else {
            gstField.style.display = 'none';  // Hide GST field
            gstInput.removeAttribute('required');  // Make GST field not required
        }
    });
});

// Handle form submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form from submitting

    // Get the selected role
    const role = document.querySelector('input[name="role"]:checked').value;

    // Redirect based on selected role
    if (role === 'admin') {
        window.location.href = '../OfficerDashboard/OfficerDashboard.html';
    } else if (role === 'employee') {
        window.location.href = '../AgencyDashboard/AgencyDashboard.html';
    }
});
