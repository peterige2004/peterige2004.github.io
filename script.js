document.addEventListener("DOMContentLoaded", function() {
    const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');

    const now = new Date();

    // Display the current day of the week
    currentDayOfTheWeek.textContent = now.toLocaleDateString('en-US', { weekday: 'long' });

    // Display the current time in milliseconds
    const currentTimeInMilliseconds = now.getTime();
    currentUTCTime.textContent = `Current Time in Milliseconds: ${currentTimeInMilliseconds}`;
});
