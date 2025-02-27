document.addEventListener('DOMContentLoaded', function() {
  // Elements
  const jokeDisplay = document.getElementById('joke-display');
  const newJokeBtn = document.getElementById('new-joke-btn');
  const learnMoreBtn = document.getElementById('learn-more-btn');
  const bioText = document.querySelector('.bio-text');
  
  // Initially hide the bio text
  bioText.style.display = 'none';
  
  // Toggle bio text visibility when learn more button is clicked
  learnMoreBtn.addEventListener('click', function() {
    if (bioText.style.display === 'none') {
      bioText.style.display = 'block';
      learnMoreBtn.textContent = 'Show less';
    } else {
      bioText.style.display = 'none';
      learnMoreBtn.textContent = 'Learn more';
    }
  });
  
  // Function to fetch a dad joke
  async function fetchDadJoke() {
    jokeDisplay.textContent = 'Loading joke...';
    
    try {
      const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Yuewen\'s Homepage (https://github.com/kapa-moon/cs5356-hw3)'
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch joke');
      }
      
      const data = await response.json();
      jokeDisplay.textContent = data.joke;
    } catch (error) {
      console.error('Error fetching joke:', error);
      jokeDisplay.textContent = 'Failed to load joke. Try again later!';
    }
  }
  
  // Fetch a joke when the page loads
  fetchDadJoke();
  
  // Fetch a new joke when the button is clicked
  newJokeBtn.addEventListener('click', fetchDadJoke);
});