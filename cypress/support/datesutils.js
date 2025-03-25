export function formatDateForEndDate(endDate) {
    if (!endDate) {
        throw new Error('Invalid date input');
    }

    const [month, day, year] = endDate.split('-'); 
    return `${year}-${month}-${day}`; // Convert to YYYY-MM-DD format
}