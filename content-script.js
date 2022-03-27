
function fillInputs(fromDay, toDay, fromHour, toHour) {
    const allRows = [...document.querySelectorAll('[data-report_data_id]')].slice(0, toDay);
    allRows.forEach(row => {
        if(![...row.classList].includes('highlightingRestDays')) {
            row.querySelector('.insert-row').click();
            const insertRow = document.querySelector('tr.insert-row');
            const rowInputs = insertRow.querySelectorAll('input');
            const currDate = +rowInputs[0].value.substr(0, 2);
            if(currDate >= fromDay && currDate <= toDay && fromHour && toHour) {
                const clockInInput = rowInputs[1];
                const clockOutInput = rowInputs[2];
                clockInInput.value = fromHour;
                clockOutInput.value = toHour;
                
                const confirmBtn = insertRow.querySelector('.inline-confirm');
                confirmBtn.click();
            }
        }
    })
}
