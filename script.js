// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Get the current date and time in UTC
    const currentDate = new Date();

    // Get the day of the week as a string (e.g., "Monday")
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];

    // Format the current UTC time as a string
    const currentUTCTime = currentDate.toUTCString();

    // Update the elements with data-testid attributes
    document.querySelector("[data-testid='currentDayOfTheWeek']").textContent = currentDayOfWeek;
    document.querySelector("[data-testid='currentUTCTime']").textContent = currentUTCTime;
});
