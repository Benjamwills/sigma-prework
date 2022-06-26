// Age calculator.

function ageCalc(date) {
  // The date is inputted in the form "YYYY-MM-DD"
  const time_ms = Date.parse(date);
  const current_date = Date.parse(Date());
  return Math.floor((current_date - time_ms) / 31557600000); // This is the number of milliseconds in a year.
}

console.log(ageCalc("1966-04-28"));
