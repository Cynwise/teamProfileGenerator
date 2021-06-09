const Employee = require("../lib/employee");

describe("Employee", () => {

    it('creates a new employee', () => {
        const newEmployee = new Employee();
        expect(typeof (newEmployee)).toBe('object')
    });

    it('sets an employee name', () => {
        const employeeName = "Corey";
        const employeeElement = new Employee(employeeName);
        expect(employeeElement.name).toBe(employeeName)
    });

    it('should return the employee id number', () => {
       const idNumber = "1";
       const employeeId = new Employee("Corey", idNumber, "email");
       expect(employeeId.id).toBe(idNumber);
    });

    it('should return the employee email address', () => {
        const email = "email@email.com";
        const employeeEmail = new Employee("Corey", "1", email)
        expect(employeeEmail.email).toBe(email);
    });

    it('should return the role', () => {
        const roleEl = "Employee";
        const employeeRole = new Employee("Corey", "1", "email@email.com");
        expect(employeeRole.getRole()).toBe(roleEl)
    });
})
