import {AdminInterface} from "@/interfaces/admin";
import {CarsInterface} from "@/interfaces/cars";

export interface MaintainersInterface {
  "id": 1,
  "maintenanceType": string,
  "details": string
  "vehicle": CarsInterface
  "maintenancePersonnel": AdminInterface,
}
