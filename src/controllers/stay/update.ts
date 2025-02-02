import * as Interfaces from "../../interfaces";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(); 
const Update: Interfaces.Controllers.Async = async (req, res) => {
  //write your patch request logic here\
  try {
    const{id} = req.params;
    const{name,type , website, location, landmark, contact, manager, place ,placeId} = req.body;
    const existingStay = await prisma.stay.findUnique({where:{id}});
    if(!existingStay){
      return res.status(404).json({message:"Stay not found"});
    }
      const updatedStay = await prisma.stay.update({where:{id}, data:{name, type ,website,location, landmark,contact, manager,place, placeId}});
      res.json(updatedStay);
    
  } catch (error) {
    
  res.status(500).json({message:"Error updating stay",error});
  }
};
export default Update;