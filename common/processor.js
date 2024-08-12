function submitProcessorDetails() {
    const name = document.getElementById('name').value;
    const location = document.getElementById('location').value;
    const capacity = document.getElementById('capacity').value;
    const contact = document.getElementById('contact').value;

    if (name && location && capacity && contact) {
        alert(`Processor Details Submitted:\nName: ${name}\nLocation: ${location}\nCapacity: ${capacity}\nContact: ${contact}`);
        // Here you would typically send the data to a server or save it
    } else {
        alert('Please fill out all fields.');
    }
}
