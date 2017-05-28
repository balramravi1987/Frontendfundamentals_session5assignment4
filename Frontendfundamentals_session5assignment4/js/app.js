var employee1 = {
    name: "Balram",
    age: 29,
    salary: 60000,
    address: {
        city: "Chennai",
        state: "Tamilnadu",
        pin: 60073
    },
}
var employee2 = {
    name: "Akshay",
    age: 26,
    salary: 70000,
    address: {
        city: "Bangalore",
        state: "Karnataka",
        pin: 300017
    },
}

var employee3 = {
    name: "Dhivya",
    age: 26,
    salary: 15000,
    address: {
        city: "Kochi",
        state: "Kerala",
        pin: 800017
    },
}

var employee4 = {
    name: "Moorthy",
    age: 19,
    salary: 20000,
    address: {
        city: "Srinagar",
        state: "Kashmir",
        pin: 204587
    },
}

var employee5 = {
    name: "Ahmed",
    age: 26,
    salary: 82000,
    address: {
        city: "Mumbai",
        state: "Maharastra",
        pin: 209713
    },
}

var employees = [employee1, employee2, employee3, employee4, employee5];

console.log("Name: " + employees[2]['name'] + "\nAge: " + employees[2]['age'] + "\nSalary: " + employees[2]['salary'] + "\nCity: " + employees[2].address.city + "\nState: " + employees[2].address.state + "\nPincode: " + employees[2].address.pin);
