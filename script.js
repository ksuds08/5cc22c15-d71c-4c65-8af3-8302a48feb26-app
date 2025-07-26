document.getElementById('generate-resume').addEventListener('click', function() {
    // Simulate API call
    fetch('/functions/api/handler.ts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: document.getElementById('name').value,
            career: document.getElementById('career').value,
            industry: document.getElementById('industry').value
        })
    })
    .then(response => response.json())
    .then(data => {
        // Simulate feedback and download options
        document.getElementById('feedback').classList.remove('hidden');
        document.getElementById('download-options').classList.remove('hidden');
    })
    .catch(error => console.error('Error:', error));
});