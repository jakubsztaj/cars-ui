export interface Rental {
  location: Location;
}

export enum Location {
  Piotrkow = "PIOTRKOW", Bogdanow = "BOGDANOW", Belchatow = "BELCHATOW", Moszczenia = "MOSZCZENICA"
}

export const pickUpLocation = [
  Location.Piotrkow, Location.Bogdanow, Location.Belchatow, Location.Moszczenia
]
