import {PictureInterface} from "@/interfaces/picture";

export interface AdminInterface {
  id: number,
  username: string,
  role: string,
  "firstName": string,
  "lastName": string,
  email: string,
  "phoneNumber": string,
  "profilePictureFileLink": PictureInterface
  "createdDate": string
}
