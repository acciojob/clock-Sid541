//your JS code here. If required.
function updateDateTime() {
    const now = new Date();
    document.getElementById("dateTime").textContent = now.toLocaleString();
}

// call immediately
updateDateTime();

// update every 1 second
setInterval(updateDateTime, 1000);
