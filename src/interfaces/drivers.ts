import {LocationInterface} from "@/interfaces/location";
import {CarsInterface} from "@/interfaces/cars";
import {AdminInterface} from "@/interfaces/admin";

export interface DriversInterface {
  "id": number,
  "address": string,
  "licenseNumber": string,
  "rating": number,
  "vehicle": CarsInterface
  "user": AdminInterface
}
