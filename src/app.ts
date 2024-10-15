class Vehicle implements iVehicle {
  constructor(
    public type: string,
    public uniqueId: number,
    public state: string
  ) {
    this.type = type;
    this.uniqueId = uniqueId;
    this.state = state;
  }

  assignUser(user: iUser): void {
    console.log(
      "Veicolo associato all'utente, stato del mezzo modificato 'in uso'."
    );
  }
}

class User implements iUser {
  constructor(
    public name: string,
    public surname: string,
    public email: string,
    public preferredPaymentMethod: string
  ) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.preferredPaymentMethod = preferredPaymentMethod;
  }

  bookVehicle(vehicle: iVehicle): void {
    console.log("Permette all'utente di prenotare un mezzo disponibile.");
  }
}

class City implements iCity {
  constructor(public name: string, public avaibleVehicle: iVehicle[]) {
    this.name = name;
    this.avaibleVehicle = avaibleVehicle;
  }

  addVehicle(vehicle: iVehicle): void {
    console.log(
      "Permette di aggiungere nuovi mezzi all'elenco dei mezzi disponibili per la città"
    );
  }
}
