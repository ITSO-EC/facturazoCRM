import { defineEventHandler } from "h3";
import { getUserById } from "~/server/database/repositories/userRespository";

export default defineEventHandler(async (event) => {
    if (event.req.method === 'GET') {
        const selectedId = event.context.params.id;
        const company = await getUserById(selectedId);
        return company;
    }   
   
    if (event.req.method === 'PUT') {
        //TODO: VALIDATE EXISTENCE
        
        //update a blog by id
        // return the blog;
      }
    if (event.req.method === 'DELETE') {
        // delete a blog by id
        // return success;
    }
  });