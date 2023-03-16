//import { CompanyUpdateRequest } from '~~/types/ICompanyUpdateRequest';
//import { validate } from './validator';
// validator function -> import { validateRegistration } from '~/server/app/services/validator'
import { Company } from '@prisma/client';

                                    //data: CompanyUpdateRequest
export async function validateCompany(data:any) {

    const errors = new Map()
    //TODO MAKE VALIDATOR
    //const errors = await validate(data, validateRegistration)

    if (errors.size > 0) {

        return { hasErrors: true, errors }
    }

    return { hasErrors: false }
}

