//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  let count = 0;
  for (let item of array) {
    if (operation(item)) {
      count++;
    }
  }
  return count >= 5 ? "ผ่านเกณฑ์ ✅" : "ไม่ผ่านเกณฑ์ ❌";
}

function isScoreMoreThan70(score) {
  return score > 70;
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = `นักเรียนห้องที่ 1 ${atLeastFive(
  studentScoresRoom1,
  isScoreMoreThan70
)}`;
let scoreRoom2Result = `นักเรียนห้องที่ 2 ${atLeastFive(
  studentScoresRoom2,
  isScoreMoreThan70
)}`;
let scoreRoom3Result = `นักเรียนห้องที่ 3 ${atLeastFive(
  studentScoresRoom3,
  isScoreMoreThan70
)}`;

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
