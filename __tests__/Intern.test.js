const Employee = require("../lib/intern");

describe("Intern", () => {

    it("sets school", () => {
        const school = "Ohio University";
        const employeeElement = new Employee("Corey", "1", "email@email.com", school);
        expect(employeeElement.school).toBe(school);
    })

    it("returns the role", () => {
        const role = "Intern";
        const employeeElement = new Employee("Corey","1","email@email.com","Ohio University");
        expect(employeeElement.getRole()).toBe(role);
    })
})