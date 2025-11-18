const today = new Date();
const hour = today.getHours();
const minute = today.getMinutes();
const day = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();

lastModified.innerHTML = `Last modified on: ${month}/${day}/${year} ${hour}:${minute}`
