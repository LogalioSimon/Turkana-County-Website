let currentIndex = 0;
const words = document.querySelectorAll('.word');

function showWords() {
    // Hide all words
    words.forEach((word, index) => {
        word.style.display = 'none'; // Hide all words
    });

    // Show the current word
    words[currentIndex].style.display = 'inline'; // Show the current word

    // Move to the next word
    currentIndex = (currentIndex + 1) % words.length; // Loop back to the first word

    // Change the color of the current word
    words[currentIndex].style.color = getRandomColor(); // Change color

    // Set a timeout to show the next word
    setTimeout(showWords, 2000); // Change word every 2 seconds
}

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Start the word display
showWords();


function showPopup(content) {
    document.getElementById('popup-title').textContent = content;
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}


// Google Map Integrationfunction initMap() {
    const turkana = { lat: 3.1219, lng: 35.5971 }; // Turkana County coordinates
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: turkana,
    });
    new google.maps.Marker({
        position: turkana,
        map: map,
    });

   
    document.querySelectorAll('nav ul li > a').forEach(item => {
        item.addEventListener('click', function(event) {
            // Prevent default action if the clicked item is "About"
            if (this.nextElementSibling && this.nextElementSibling.classList.contains('dropdown')) {
                event.preventDefault(); // Prevent the default link behavior
                const parentLi = this.parentElement;
    
                // Toggle the active class
                parentLi.classList.toggle('active');
    
                // Close other dropdowns
                document.querySelectorAll('nav ul li').forEach(li => {
                    if (li !== parentLi) {
                        li.classList.remove('active');
                    }
                });
            }
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav')) {
            document.querySelectorAll('nav ul li').forEach(li => {
                li.classList.remove('active');
            });
        }
    });

    