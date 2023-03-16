import { z, parseBodyAs, } from "@sidebase/nuxt-parse"
import { H3Event } from "h3"

const bodySchema = z.object({
    id: z.number({
        required_error: 'id required'
    }),
    username: z.string({
        required_error: 'username required',
    })
        .min(1, { message: 'username required' }),

    name: z.string({
        required_error: 'name required',
    })
        .min(1, { message: 'name required' }),

    role: z.string({
        required_error: 'role required'
    }) .min(1, { message: 'role required' }),

    email: z.string({
        required_error: 'valid email required',
    }).email({ message: 'valid email required' })
})

export default async function updateUserRequest(event: H3Event) {
    return await parseBodyAs(event, bodySchema)
}