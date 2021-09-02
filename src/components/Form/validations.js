export const required = (message) => (value) => !!value || message

export const greaterThan = (value, message) => (inputValue) => Number(inputValue) >= 18 || message
