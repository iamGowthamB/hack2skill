// Function to handle form submission
function submitRetailerDetails() {
    // Get form elements
    const name = document.getElementById('name').value;
    const store = document.getElementById('store').value;
    const location = document.getElementById('location').value;
    const contact = document.getElementById('contact').value;

    // Validate form inputs
    if (!name || !store || !location || !contact) {
        alert('Please fill in all fields.');
        return;
    }

    // Example action: simulate form submission
    alert(`Form Submitted!\nName: ${name}\nStore: ${store}\nLocation: ${location}\nContact: ${contact}`);
    
    // Reset the form
    document.getElementById('retailer-form').reset();
}

// Attach the function to the button click event
document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('button[type="button"]');
    submitButton.addEventListener('click', submitRetailerDetails);
});
