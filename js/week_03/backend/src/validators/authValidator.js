import {z} from 'zod'

const regiserUserSchema = z.object({
    username: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(3)
})

const loginUserSchema = z.object({
    username: z.string().min(),
    password: z.string().min(3)
})

export {
    regiserUserSchema,
    loginUserSchema
}