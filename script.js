document.addEventListener('DOMContentLoaded', function() {
    const profilePic = document.getElementById('profile-pic');
    const flipButton = document.getElementById('flip-pic');
    
    let showingFirstPic = true;
    
    flipButton.addEventListener('click', function() {
      if (showingFirstPic) {
        profilePic.src = 'profile2.jpg';
        showingFirstPic = false;
      } else {
        profilePic.src = 'profile1.jpg';
        showingFirstPic = true;
      }
      
      profilePic.style.transform = 'rotateY(180deg)';
      setTimeout(() => {
        profilePic.style.transform = 'rotateY(0)';
      }, 300);
    });
    
    const dialog = document.getElementById('projects-dialog');
    const openDialogBtn = document.getElementById('open-dialog');
    const closeDialogBtn = document.getElementById('close-dialog');
    
    openDialogBtn.addEventListener('click', function() {
      dialog.showModal();
    });
    
    closeDialogBtn.addEventListener('click', function() {
      dialog.close();
    });
    
    fetchWeather();
  });
  
  function fetchWeather() {
    const weatherInfo = document.getElementById('weather-info');
    
    const apiKey = 'YOUR_API_KEY';
    const city = 'New York';
    
    fetch('https://goweather.herokuapp.com/weather/New York')
      .then(response => {
        if (!response.ok) {
          throw new Error('Weather data not available');
        }
        return response.json();
      })
      .then(data => {
        const today = new Date();
        const options = { weekday: 'long', month: 'short', day: 'numeric' };
        const dateStr = today.toLocaleDateString('en-US', options);
        
        weatherInfo.innerHTML = `${dateStr} | ${city}: ${data.temperature}, ${data.description}`;
      })
      .catch(error => {
        console.error('Error fetching weather:', error);
        weatherInfo.textContent = `${new Date().toLocaleDateString('en-US')} | Weather unavailable`;
      });
  }