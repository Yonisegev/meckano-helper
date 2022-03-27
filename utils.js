const DEFAULT_CLOCK_IN_HOUR = '09:00';
const DEFAULT_CLOCK_OUT_HOUR = '18:00';

let maxDaysInMonth = getMaxDaysInMonth();
let isInvalidError = false;

function getMaxDaysInMonth() {
    const now = new Date();
    return new Date(
        now.getFullYear(),
        now.getMonth() + 1,
        0
    ).getDate();
}

function handleInvalidValues(fromDay, toDay, startHour, endHour) {
    if (!fromDay) {
        const elFromError = document.querySelector('.from-error');
        elFromError.hidden = false;
    }
    if (!toDay) {
        const elToError = document.querySelector('.to-error');
        elToError.hidden = false;
    }
    if (!startHour) {
        const elStartHourError = document.querySelector('.clock-in-error');
        elStartHourError.hidden = false;
    }
    if (!endHour) {
        const elEndHourError = document.querySelector('.clock-out-error');
        elEndHourError.hidden = false;
    }
}

function hideErrMsgs() {
    const elErrs = document.querySelectorAll('.input-error');
    elErrs.forEach((el) => {
        el.hidden = true;
    })
}