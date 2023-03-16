import { IUserSanitized } from "./IUser"

export interface ICompany {
  id?: number
  name?: string
  ruc?: string
  data?: any[]
  users?: IUserSanitized[]
  description?: string
  avatarUrl?: string
  groupId: number
}




