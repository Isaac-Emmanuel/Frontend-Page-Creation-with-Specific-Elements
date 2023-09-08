// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Get the current date
    const currentDate = new Date();

    // Get the day of the week as a string (e.g., "Monday")
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];

    // Update the elements with data-testid attributes
    document.querySelector("[data-testid='currentDayOfTheWeek']").textContent = currentDayOfWeek;
    document.querySelector("[data-testid='currentUTCTime']").textContent = currentDate.getTime();
});
