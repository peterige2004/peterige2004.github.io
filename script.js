const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayofTheWeek"]');
const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');

function updateCurrentTime() {
    const now = new Date();

    // Display the current day of the week
    currentDayOfTheWeek.textContent = `Current Day of the Week: ${now.toLocaleDateString('en-US', { weekday: 'long' })}`;

    // Display the current time in milliseconds
    const currentTimeInMilliseconds = now.getTime();
    currentUTCTime.textContent = `Current Time in Milliseconds: ${currentTimeInMilliseconds}`;
}

updateCurrentTime(); // Update initially
setInterval(updateCurrentTime, 1000); // Update every 1000 milliseconds (1 second)
