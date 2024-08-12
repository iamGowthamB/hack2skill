// Function to handle form submission
function submitFarmerDetails() {
    // Get form elements
    const name = document.getElementById('name').value;
    const farm = document.getElementById('farm').value;
    const location = document.getElementById('location').value;
    const contact = document.getElementById('contact').value;

    // Validate form inputs
    if (!name || !farm || !location || !contact) {
        alert('Please fill in all fields.');
        return;
    }

    // Example action: simulate form submission
    alert(`Form Submitted!\nName: ${name}\nFarm: ${farm}\nLocation: ${location}\nContact: ${contact}`);
    
    // Optional: Here you might want to send the data to a server
    // Example using Fetch API (uncomment and replace URL with your server endpoint):
    /*
    fetch('https://your-server-endpoint.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            farm: farm,
            location: location,
            contact: contact
        }),
    })
    .then(response => response.json())
    .then(data => {
        alert('Form submitted successfully!');
        document.getElementById('farmer-form').reset();
    })
    .catch((error) => {
        alert('Error:', error);
    });
    */
    
    // Reset the form
    document.getElementById('farmer-form').reset();
}

// Attach the function to the button click event
document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('button[type="button"]');
    submitButton.addEventListener('click', submitFarmerDetails);
});
