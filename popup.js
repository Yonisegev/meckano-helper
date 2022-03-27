window.addEventListener('DOMContentLoaded', () => {
    onInit();
})


const fillButton = document.querySelector('.fill-btn');
const fromDayInput = document.querySelector('input[name="from"]');
const toDayInput = document.querySelector('input[name="to"]');
const clockInInput = document.querySelector('input[name="clock-in"]');
const clockOutInput = document.querySelector('input[name="clock-out"]');

fillButton.addEventListener("click", async (ev) => {
    ev.preventDefault();
    onSubmit()
});

function onInit() {
    fromDayInput.setAttribute('max', maxDaysInMonth);
    toDayInput.setAttribute('max', maxDaysInMonth);
    fromDayInput.focus();
    
    toDayInput.value = maxDaysInMonth;
    fromDayInput.value = 1;
    clockInInput.value = DEFAULT_CLOCK_IN_HOUR;
    clockOutInput.value = DEFAULT_CLOCK_OUT_HOUR;
}

async function onSubmit() {
    const startingDay = +fromDayInput.value;
    const endDay = +toDayInput.value;
    const clockInHour = clockInInput.value;
    const clockOutHour = clockOutInput.value;
    if (!startingDay || !endDay ||
        startingDay > maxDaysInMonth || endDay > maxDaysInMonth ||
        startingDay < 1 || endDay < 1 ||
        !clockInHour || !clockOutHour) {
        isInvalidError = true;
        handleInvalidValues(startingDay, endDay, clockInHour, clockOutHour);
        return;
    }
    if (isInvalidError) {
        isInvalidError = false;
        hideErrMsgs();
    }

    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: fillInputs,
        args: [startingDay, endDay, clockInHour, clockOutHour]
    });
}


