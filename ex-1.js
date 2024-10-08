function forEach(array, operation) {
  for (let item of array) {
    newEmployeeSalaries.push(operation(item)); //(item) คืออากิวเมนต์ของ salary
  }
}

function incrementSalary(salary) {
  //Callback function
  return salary + 5000;
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000]; // เพื่อส่งค่าไปที่ พารามิเตอร์ array
const newEmployeeSalaries = []; // เพื่อเก็บค่าหลังจาก Assign

forEach(employeeSalaries, incrementSalary); // อากิวเมนต์ของ array,operation
console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
