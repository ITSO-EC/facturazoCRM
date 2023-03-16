import { defineEventHandler } from "h3";
import { getAllUsers } from "~/server/database/repositories/userRespository";

export default defineEventHandler(async (event) => {
   
    const users =  await getAllUsers()
    

    return users
})