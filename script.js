const currentDayOfTheWeek = document.getElementById('currentDayofTheWeek');
const currentUTCTime = document.getElementById('currentUTCTime');

const now = new Date();

// Display the current day of the week
currentDayOfTheWeek.innerHTML = `Current Day of the Week: ${now.toLocaleDateString('en-US', { weekday: 'long' })}`;

// Display the current time in milliseconds
const currentTimeInMilliseconds = now.getTime();
currentUTCTime.innerHTML = `Current Time in Milliseconds: ${currentTimeInMilliseconds}`;
