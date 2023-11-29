import {DriversInterface} from "@/interfaces/drivers";
import {AdminInterface} from "@/interfaces/admin";
import {CarsInterface} from "@/interfaces/cars";

export interface RoutesInterface {
  "id": number,
  "driver": DriversInterface
  "user": AdminInterface
  "staff": AdminInterface,
  "vehicle": CarsInterface
  "startPoint": string,
  "startLat": string,
  "startLon": string
  "endPoint": string
  "endLat": string
  "endLon": string
  "startTime": string
  "endTime": string
  "status": string
}
