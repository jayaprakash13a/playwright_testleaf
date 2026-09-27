
let employee: {
    empId: number;
    empName: string;
    department?: string;
    isActive: boolean;
    salary: number;
    location?: string;
} = {
    empId: 1001,
    empName: "Jai",
    department: "QA",
    isActive: true,
    salary: 60000
};


//console.log(employee);

//using .dot notation
console.log("empId:", employee.empId);
console.log("empName:", employee.empName);
console.log("department:", employee.department);
console.log("isActive:", employee.isActive);
console.log("salary:", employee.salary);

//Updating salary and isActive
employee.salary = 75000;
employee.isActive = false;

console.log("updated salary:", employee.salary);
console.log("updated isActive:", employee.isActive);

//Add a new property
employee.location = "Chennai";

console.log("new field location:", employee.location);
//updating value
employee.empName = "Ganesh";
// Delete department
delete employee.department;

console.log(employee);
