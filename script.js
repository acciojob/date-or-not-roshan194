function isDate(input) {
    if (input instanceof Date && !isNaN(input)) {
        return true; // Valid Date object
    }
    
    if (typeof input === "string" || typeof input === "number") {
        const parsedDate = new Date(input);
        return !isNaN(parsedDate.getTime()); // Check if it's a valid date
    }

    return false; // Other invalid cases
}


// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
