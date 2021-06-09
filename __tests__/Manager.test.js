const Employee = require("../lib/manager");

describe("Manager", () => {

    it("manager phone number", () => {
        const phone = "7408675309";
        const employeeElement = new Employee("Corey", "1", "email@email.com", phone);
        expect(employeeElement.officeNumber).toBe(phone);
    })

    it("returns the role", () => {
        const role = "Manager";
        const employeeElement = new Employee("Corey","1","email@email.com","7408675309");
        expect(employeeElement.getRole()).toBe(role);
    })
})