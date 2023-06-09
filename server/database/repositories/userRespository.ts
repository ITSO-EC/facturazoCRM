import { User } from "@prisma/client";
import prisma from "~/server/database/client";
import { IUser } from '~/types/IUser';
import { ISubscription } from "~/types/ISubscription";

export async function getUserByEmail(emailOrEmail: string): Promise<User|null> {
  return await prisma.user.findFirst({
    where: {
      OR:
        [
          { email: emailOrEmail },
          { username: emailOrEmail },
        ]
    },
    
  })
}

export async function getAllUsers() {
  return await prisma.user.findMany({
    select: {
      id: true,
      username: true,
      email: true,
      role: true,
     
    }
  })
}

export async function getUsersByCompany(companyId: string) {
  return await prisma.user.findMany({
    where: {
      companies: {
        some:{
          id: Number.parseInt(companyId),
        }
      }
    },
    select: {
      id: true,
      username: true,
      email: true,
      role: true,
     
    }
  })
}

export async function getUsersByGroup(companyId: string, groupTarget: string) {
  return await prisma.user.findMany({
    where: {
      companies: {
        some:{
          id: Number.parseInt(companyId),
          groupId: Number.parseInt(groupTarget)
        }
      }
    },
    select: {
      id: true,
      username: true,
      email: true,
      role: true,
     
    }
  })
}

export async function getUserByUserName(username: string) {
  return await prisma.user.findUnique({
    where: {
      username: username,
    },
    select: {
      id: true,
      username: true,
      email: true,
      role: true,
     
    },
  })
}

export async function createUser(data: IUser) {
  const user = await prisma.user.create({
    data: {
      username: data.username,
      name: data.name,
      email: data.email,
      role: data.role,
      loginType: data.loginType,
      password: data.password,
    },
  })

  return user
}
export async function updateUser(data: IUser) {
  const user = await prisma.user.update({
    where: {
      id: data.id 
    },
    data: {
      username: data.username,
      name: data.name,
      email: data.email,
      role: data.role
    },
  })

  return user
}

export async function getUserById(id: string) {
  return await prisma.user.findUnique({
    where: {
      id: Number.parseInt(id),
    },
    select: {
      id: true,
      username: true,
      email: true,
      role: true,
      stripeCustomerId: true,
    },
  })
}

export async function getUserByStripeCustomerId(stripeCustomerId: string) {
  return await prisma.user.findFirst({
    where: {
      stripeCustomerId: stripeCustomerId,
    },
    select: {
      id: true,
      username: true,
      email: true,
      role: true,
      stripeCustomerId: true,
    },
  })
}

export async function getSubscriptionById(stripeId: string) {
  return await prisma.subscription.findFirst({
    where: {
      stripeId: stripeId,
    }
  })
}

export async function updateStripeCustomerId(data: IUser) {
  return await prisma.user.update({
    where: { email: data.email },
    data: {
      stripeCustomerId: data.stripeCustomerId,
    }
  })
}

export async function createOrUpdateSubscription(data: ISubscription) {
  return await prisma.subscription.upsert({
    where: {
      stripeId: data.stripeId
    },
    create: {
      userId: data.userId,
      stripeId: data.stripeId,
      stripeStatus: data.stripeStatus,
      stripePriceId: data.stripePriceId,
      quantity: data.quantity,
      trialEndsAt: data.trialEndsAt,
      endsAt: data.endsAt,
      lastEventDate: data.lastEventDate,
      startDate: data.startDate
    },
    update: {
      stripeStatus: data.stripeStatus,
      stripePriceId: data.stripePriceId,
      quantity: data.quantity,
      trialEndsAt: data.trialEndsAt,
      endsAt: data.endsAt,
      lastEventDate: data.lastEventDate,
      startDate: data.startDate
    }
  })
}

export async function updateIsEmailVerified(userId: number, isVerified: boolean) {
  const user = await prisma.user.update({
    where: {
      id: userId
    },
    data: {
      isEmailVerified: isVerified,
    }
  })

  return user.id
}
export async function deleteUser(userId: string) {

  const user = await prisma.user.delete({
    where: {
      id: Number.parseInt(userId),
    }
  })
  return user.id;
} 