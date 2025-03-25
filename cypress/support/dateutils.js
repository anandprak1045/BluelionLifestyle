// cypress/support/dateUtils.js
export function formatDateForSrartDate(inputDate) {
    if (!inputDate) {
        throw new Error('Invalid date input');
    }

    const [month, day, year] = inputDate.split('-'); 
    return `${year}-${month}-${day}`; // Convert to YYYY-MM-DD format
}