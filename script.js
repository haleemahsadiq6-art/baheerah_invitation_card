// =============================
// LIVE COUNTDOWN
// =============================

const birthdayDate = new Date("August 15, 2026 16:00:00").getTime();

const countdown = setInterval(function () {

    const now = new Date().getTime();

    const distance = birthdayDate - now;


    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );


    document.getElementById("days").innerText =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerText =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerText =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerText =
        String(seconds).padStart(2, "0");


    if (distance < 0) {

        clearInterval(countdown);

        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";

    }

}, 1000);


// =============================
// RSVP BUTTON
// =============================

const rsvpButton =
    document.getElementById("rsvpButton");

const message =
    document.getElementById("message");


rsvpButton.addEventListener("click", function () {

    message.innerText =
        "Yesss ✨ Your seat is waiting. Please message Baheerah to confirm your RSVP.";

    rsvpButton.innerText =
        "SEE YOU THERE 💋";

});


// =============================
// ADD TO CALENDAR
// =============================

const calendarButton =
    document.getElementById("calendarButton");


calendarButton.addEventListener("click", function () {

    const calendarContent = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:Baheerah's Birthday Dinner
DTSTART:20260815T150000Z
DTEND:20260815T180000Z
LOCATION:Blucabana Restaurant, Mabushi, Abuja
DESCRIPTION:Baheerah's Birthday Dinner
END:VEVENT
END:VCALENDAR
    `;


    const file =
        new Blob(
            [calendarContent],
            {
                type: "text/calendar"
            }
        );


    const link =
        document.createElement("a");


    link.href =
        URL.createObjectURL(file);

    link.download =
        "Baheerah-Birthday-Dinner.ics";


    link.click();

});


// =============================
// SCROLL ANIMATIONS
// =============================

const elements =
    document.querySelectorAll(
        ".detail-card, .countdown, .quote-section, .rsvp-section"
    );


const observer =
    new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    });


elements.forEach(function (element) {

    element.classList.add("hidden");

    observer.observe(element);

});

// =============================
// OPEN INVITATION
// =============================

const openingScreen =
    document.getElementById("openingScreen");

const openInvite =
    document.getElementById("openInvite");


openInvite.addEventListener("click", function () {

    openingScreen.classList.add("opened");


    setTimeout(function () {

        openingScreen.style.display = "none";

    }, 1000);

});