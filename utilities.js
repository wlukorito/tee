function shouldAdmit(yearOfBirth, monthOfBirth, tolerance = 4) {
  // assumptions: all variables will be valid numbers. no need to verify
  // write code here
  const qualifies = true;
  const qualifiesOnTolerance = false;
  return { qualifies, qualifiesOnTolerance }; // or false based on your logic
}

function generateRanking(studentList, tolerance = 4) {
  return []; // ranking list
}

module.exports = { shouldAdmit, generateRanking };
