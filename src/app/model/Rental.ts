export interface Rental {
  location: Location;
}

export enum Location {
  Piotrkow = "PIOTRKOW", Bogdanow = "BOGDANOW", Belchatow = "BELCHATOW", Moszczenia = "MOSZCZENICA"
}

export const pickUpLocation = [
  Location.Piotrkow, Location.Bogdanow, Location.Belchatow, Location.Moszczenia
]

export enum PaymentStatus {
  Completed = "COMPLETED", Progressing = "PROGRESSING", Uncleared = "UNCLEARED", Deficiency = "DEFICIENCY"
}

export const paymentStatusUpdate = [
  PaymentStatus.Deficiency, PaymentStatus.Progressing, PaymentStatus.Uncleared, PaymentStatus.Completed
]
