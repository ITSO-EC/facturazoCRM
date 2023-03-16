//import { FlatDataUpdateRequest } from '~~/types/IFlatDataUpdateRequest';
//import { validate } from './validator';
// validator function -> import { validateRegistration } from '~/server/app/services/validator'
import { FlatData } from '@prisma/client';

                                    //data: FlatDataUpdateRequest
export async function validateFlatData(data:any) {

    const errors = new Map()
    //TODO MAKE VALIDATOR
    //const errors = await validate(data, validateRegistration)

    if (errors.size > 0) {

        return { hasErrors: true, errors }
    }

    return { hasErrors: false }
}

