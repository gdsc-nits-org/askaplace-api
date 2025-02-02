import * as Interfaces from "../../interfaces";
import {Request,Response} from "express";
import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient();

const Delete: Interfaces.Controllers.Async = async (req:Request, res:Response) => {
    try{
      const {id}=req.params;

      await prisma.stay.delete({
        where:{id},
      });

      res.json({message:"Stay deleted successfully"});
    }catch(error){
      res.status(500).json({error:"Failed to delete stay"});
    }
};
export default Delete;
