interface iUser {
  name: string;
  surname: string;
  email: string;
  preferredPaymentMethod: string;
  vehicleBookedId: number[];
  bookVehicle(vehicle: iVehicle): void;
  returnVehicle(vehicle: iVehicle): void;
}
