interface iCity {
  name: string;
  avaibleVehicle: iVehicle[];
  addVehicle(vehicle: iVehicle): void;
}
