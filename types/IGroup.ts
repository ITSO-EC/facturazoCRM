
import { ICompany } from "./ICompany"

export interface IGroup {
  id?: number
  name?: string
  description?: string
  avatarUrl?: string
  companies?: ICompany[]
}




