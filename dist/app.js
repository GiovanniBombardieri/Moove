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
        console.log("Veicolo associato all'utente, stato del mezzo modificato 'in uso'.");
    }
}
class User {
    constructor(name, surname, email, preferredPaymentMethod) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.preferredPaymentMethod = preferredPaymentMethod;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.preferredPaymentMethod = preferredPaymentMethod;
    }
    bookVehicle(vehicle) {
        console.log("Permette all'utente di prenotare un mezzo disponibile.");
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
        console.log("Permette di aggiungere nuovi mezzi all'elenco dei mezzi disponibili per la città");
    }
}
