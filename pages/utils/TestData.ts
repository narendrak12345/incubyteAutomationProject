import { faker } from "@faker-js/faker";
import { User } from "../../models/user";

export class TestData {

    static getUser(): User {

        return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            address: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            phone: faker.string.numeric(10),
            ssn: faker.string.numeric(9),
            username:faker.string.alphanumeric(10),
            password: "Password@123"
        };
    }
}