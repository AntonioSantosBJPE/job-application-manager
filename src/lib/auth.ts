import { betterAuth } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'

import { prisma } from './prisma'

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  emailAndPassword: {
    enabled: true,
    // signUp: {
    //   enabled: true,
    // },
    // signIn: {
    //   enabled: true,
    // },
    // forgotPassword: {
    //   enabled: true,
    // },
    // resetPassword: {
    //   enabled: true,
    // },
    // requireEmailVerification: false,
  },
})
