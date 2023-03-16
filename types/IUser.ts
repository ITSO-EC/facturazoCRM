import { ISubscription } from '~/types/ISubscription';

export interface IUser {
  id?: number
  username: string
  name?: string
  role: string
  loginType?: string
  password?: string
  email?: string
  avatarUrl?: string
  subscription?: ISubscription | null
  stripeCustomerId?: string | null
}

export interface IUserSanitized {
  id: number
  username: string
  role: string
  name: string
  email: string
}



