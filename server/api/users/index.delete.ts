import { defineEventHandler } from "h3";
import { deleteUser } from "~/server/database/repositories/userRespository";
import { IUser } from "~~/types/IUser";

export default defineEventHandler(async (event) => {
    console.log("API CALL  ")
    const body = await readBody(event)
    //{
    //     userId: 1
    //    
    // }
    const userId  = body.userId;
    const user =  await deleteUser(userId);
    
    
    return user
})