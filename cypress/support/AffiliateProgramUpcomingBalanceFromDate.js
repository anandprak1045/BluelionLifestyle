export function formatDateForFromDate(inputDate) {
    if (!inputDate) {
        throw new Error('Invalid date input');
    }

    const [month, day, year] = inputDate.split('-'); 
    return `${year}-${month}-${day}`
}

