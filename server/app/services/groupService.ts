//import { GroupUpdateRequest } from '~~/types/IGroupUpdateRequest';
//import { validate } from './validator';
//validator function -> import { validateRegistration } from '~/server/app/services/validator'
import { Group } from '@prisma/client';

                                    //data: GroupUpdateRequest
export async function validateGroup(data:any) {

    const errors = new Map()
    //TODO MAKE VALIDATOR
    //const errors = await validate(data, validateRegistration)

    if (errors.size > 0) {

        return { hasErrors: true, errors }
    }

    return { hasErrors: false }
}

