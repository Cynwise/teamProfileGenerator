const Employee = require("../lib/engineer");

describe("engineer", () => {

    it("sets github profile", () => {
        const gitHub = "Cynwise";
        const employeeElement = new Employee("Corey", "1", "email@email.com", gitHub);
        expect(employeeElement.getGithub()).toBe(gitHub);
    })

    it("returns the role", () => {
        const role = "Engineer";
        const employeeElement = new Employee ("Corey", "1", "email@email.com", "Cynwise");
        expect(employeeElement.getRole()).toBe(role);
    })
})