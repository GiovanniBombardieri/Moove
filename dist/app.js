"use strict";
class Vehicle {
    constructor(type, uniqueId, state) {
        this.type = type;
        this.uniqueId = uniqueId;
        this.state = state;
        this.type = type;
        this.uniqueId = uniqueId;
        this.state = state;
    }
    assignUser(user) {
        if (this.state === "Not Avaible") {
            console.log(`Sorry ${user.name}, the ${this.type} is not avaible now. Let's try somethings else.`);
        }
        else {
            user.vehicleBookedId.push(this.uniqueId);
            this.state = "Not Avaible";
            console.log(`The ${this.type} is now booked. So, it's not avaible until ${user.name} returns it.`);
        }
    }
}
class User {
    constructor(name, surname, email, preferredPaymentMethod, vehicleBookedId) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.preferredPaymentMethod = preferredPaymentMethod;
        this.vehicleBookedId = vehicleBookedId;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.preferredPaymentMethod = preferredPaymentMethod;
        this.vehicleBookedId = vehicleBookedId;
    }
    bookVehicle(vehicle) {
        if (vehicle.state === "Not Avaible") {
            console.log(`Sorry ${this.name}, the ${vehicle.type} is not avaible now. Let's try somethings else.`);
        }
        else {
            console.log(`Congratulations, ${this.name}! The ${vehicle.type} is now booked for you! Enjoy you ride!`);
            vehicle.assignUser({
                name: this.name,
                surname: this.surname,
                email: this.email,
                preferredPaymentMethod: this.preferredPaymentMethod,
                vehicleBookedId: this.vehicleBookedId,
                bookVehicle(vehicle) { },
                returnVehicle(vehicle) { },
            });
        }
    }
    returnVehicle(vehicle) {
        if (!this.vehicleBookedId.includes(vehicle.uniqueId)) {
            console.log(`Sorry, ${this.name}, you do not have ${vehicle.type} among those you have reserved.`);
        }
        else {
            vehicle.state = "Avaible";
            this.vehicleBookedId.pop();
            console.log(`Thanks, ${this.name} for returning the ${vehicle.type}. Hope to see you again soon!`);
        }
    }
}
class City {
    constructor(name, avaibleVehicle) {
        this.name = name;
        this.avaibleVehicle = avaibleVehicle;
        this.name = name;
        this.avaibleVehicle = avaibleVehicle;
    }
    addVehicle(vehicle) {
        if (this.avaibleVehicle.includes(vehicle)) {
            console.log(`The ${vehicle.type} is already present in this city.`);
        }
        else {
            this.avaibleVehicle.push(vehicle);
            console.log(`Now, in ${this.name} you can book your ${vehicle.type}. This is its unique ID: ${vehicle.uniqueId}.`);
        }
    }
}
// Avaible Moove's Veichle
const Bycicle = new Vehicle("Bycicle", 1000301, "Avaible");
const Scooter = new Vehicle("Scooter", 1000302, "Avaible");
const microScooter = new Vehicle("Micro Scooter", 1000303, "Avaible");
const electricBycicle = new Vehicle("Electric Bycicle", 1000304, "Avaible");
const electricCar = new Vehicle("Electric Car", 1000305, "Avaible");
// Users registered with Moove
const user1 = new User("Mario", "Rossi", "example@gmail.com", "GooglePay", []);
const user2 = new User("Lucia", "Esposito", "example@icloud.com", "iPay", []);
const user3 = new User("Elisa", "Danesi", "example@libero.com", "GooglePay", []);
const user4 = new User("Marco", "Verdi", "email@icloud.com", "iPay", []);
const user5 = new User("Sara", "Ferrari", "testmail@gmail.com", "GooglePay", []);
// City where Moove works
const Milan = new City("Milan", [
    {
        type: "Bycicle",
        uniqueId: 1000301,
        state: "Avaible",
        assignUser(user) { },
    },
    {
        type: "Scooter",
        uniqueId: 1000302,
        state: "Avaible",
        assignUser(user) { },
    },
    {
        type: "micro Scooter",
        uniqueId: 1000303,
        state: "Avaible",
        assignUser(user) { },
    },
    {
        type: "Electric Bycicle",
        uniqueId: 1000304,
        state: "Avaible",
        assignUser(user) { },
    },
    {
        type: "Electric Car",
        uniqueId: 1000305,
        state: "Avaible",
        assignUser(user) { },
    },
]);
const Brescia = new City("Brescia", [
    {
        type: "Scooter",
        uniqueId: 1000302,
        state: "Avaible",
        assignUser(user) { },
    },
    {
        type: "micro Scooter",
        uniqueId: 1000303,
        state: "Avaible",
        assignUser(user) { },
    },
    {
        type: "Electric Bycicle",
        uniqueId: 1000304,
        state: "Avaible",
        assignUser(user) { },
    },
]);
const Naples = new City("Milan", [
    {
        type: "Bycicle",
        uniqueId: 1000301,
        state: "Avaible",
        assignUser(user) { },
    },
    {
        type: "Scooter",
        uniqueId: 1000302,
        state: "Avaible",
        assignUser(user) { },
    },
    {
        type: "Electric Car",
        uniqueId: 1000305,
        state: "Avaible",
        assignUser(user) { },
    },
]);
console.log(Brescia);
Brescia.addVehicle(electricCar);
Brescia.addVehicle(electricCar);
console.log(Brescia);
console.log(user2);
user2.bookVehicle(Bycicle);
console.log(user2);
user2.returnVehicle(electricBycicle);
user2.returnVehicle(Bycicle);
console.log(user2);
