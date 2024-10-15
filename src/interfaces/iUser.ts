interface iUser {
  name: string;
  surname: string;
  email: string;
  preferredPaymentMethod: string;
  bookVehicle(vehicle: iVehicle): void;
}
