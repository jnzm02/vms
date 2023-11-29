import {LocationInterface} from "@/interfaces/location";
import {DriversInterface} from "@/interfaces/drivers";

export interface CarsInterface {
  "id": number,
  "model": string,
  "year": number,
  "licencePlate": string,
  "capacity": number,
  "vin": string,
  "fuelType": string,
  "driver": DriversInterface
  "location": LocationInterface
}
