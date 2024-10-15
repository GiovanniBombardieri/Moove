interface iVehicle {
  type: string;
  uniqueId: number;
  state: string;
  assignUser(user: iUser): void;
}
