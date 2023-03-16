import { defineEventHandler } from "h3";
import { updateUser } from "~/server/database/repositories/userRespository";
import { IUser } from "~~/types/IUser";
import { ICompany } from "~~/types/ICompany";

export default defineEventHandler(async (event) => {
    
    const body = await readBody(event)

    //{
    //     userId: 1
    //     name: name,
    //     description: desc
    //     companies: [{id:1}, {id:2}, {id:3}]
    // }
    const userId = body.id;
    const userData = {
        id : userId,
        name : body.name,
        username : body.username,
        role: body.role
        //companies: body.companies
       
    }
    const user =  await updateUser(userData);
    
    
    return user
})