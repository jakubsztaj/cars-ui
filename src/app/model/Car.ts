export interface Car {
  fuelType: FuelType;
  segment: Segment;
  transmission: Transmission;
  typeOfDrive: TypeOfDrive;
}

export enum FuelType {
  Petrol = "PETROL", Diesel = "DIESEL", LPG = "LPG"
}

export enum Segment {
  A = "A", B = "B", C = "C", D = "D", E = "E", F = "F", G = "G", S = "S", M = "M", J = "J"
}

export enum Transmission {
  Automatic = "AUTOMATIC", Manual = "MANUAL"
}

export enum TypeOfDrive {
  AWD = "AWD", FWD = "FWD", RWD = "RWD"

}

export const availableFuelTypes = [
  FuelType.Diesel, FuelType.Petrol, FuelType.LPG
]

export const availableSegments = [
  Segment.A, Segment.B, Segment.C, Segment.D, Segment.E, Segment.F, Segment.G, Segment.S, Segment.M, Segment.J
]

export const availableTransmissions = [
  Transmission.Automatic, Transmission.Manual
]

export const availableTypeOfDrive = [
  TypeOfDrive.AWD, TypeOfDrive.FWD, TypeOfDrive.RWD
]
