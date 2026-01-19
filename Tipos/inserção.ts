type Person ={
    name: string;
};

type Employee = Person &{
    employeeId: number;
};

let someone: Employee = {
  name: 'Arthur',
  employeeId: 5
};

console.log(someone.name,someone.employeeId)