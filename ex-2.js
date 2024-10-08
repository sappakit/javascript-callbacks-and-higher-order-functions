//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  // Start coding here
  const roomPassCheck = operation(array);
  if (roomPassCheck >= 5) {
    return `ผ่านเกณฑ์ ✅`;
  } else {
    return `ไม่ผ่านเกณฑ์ ❌`;
  }
}

function scoresCheck(array) {
  let passStudent = 0;
  for (let studentScore of array) {
    if (studentScore > 70) {
      passStudent += 1;
    }
  }
  return passStudent;
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = `นักเรียนห้องที่ 1 ${atLeastFive(
  studentScoresRoom1,
  scoresCheck
)}`;
let scoreRoom2Result = `นักเรียนห้องที่ 2 ${atLeastFive(
  studentScoresRoom2,
  scoresCheck
)}`;
let scoreRoom3Result = `นักเรียนห้องที่ 3 ${atLeastFive(
  studentScoresRoom3,
  scoresCheck
)}`;

console.log(scoreRoom1Result);
