document.getElementById('votingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const selectedCandidate = document.querySelector('input[name="candidate"]:checked');
    
    if (selectedCandidate) {
        const vote = selectedCandidate.value;
        
        // Here you would typically send the vote to your server
        // For this example, we will just display a message
        document.getElementById('result').textContent = `You voted for ${vote}`;
        
        // Example of sending the vote to the server
        // fetch('/vote', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ candidate: vote })
        // })
        // .then(response => response.json())
        // .then(data => {
        //     document.getElementById('result').textContent = data.message;
        // })
        // .catch(error => console.error('Error:', error));
    } else {
        document.getElementById('result').textContent = 'Please select a candidate to vote for';
    }
});
