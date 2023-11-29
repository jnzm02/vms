import {CarsInterface} from "@/interfaces/cars";
import {AdminInterface} from "@/interfaces/admin";

export interface AuctionsInterface {
  "id": number,
  "vehicle": CarsInterface,
  "startDate": string,
  "endDate": string
  "currentBid": number,
  "status": string,
  "currentBidHolder": AdminInterface
}
