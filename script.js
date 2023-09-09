document.addEventListener("DOMContentLoaded", function() {
    const currentDayOfTheWeek = document.getElementById('currentDayOfTheWeek');
    const currentUTCTime = document.getElementById('currentUTCTime');

    const now = new Date();

    // Display the current day of the week
    currentDayOfTheWeek.innerHTML = now.toLocaleDateString('en-US', { weekday: 'long' });

    // Display the current time in milliseconds
    const currentTimeInMilliseconds = now.getTime();
    currentUTCTime.innerHTML = `Current Time in Milliseconds: ${currentTimeInMilliseconds}`;
});
