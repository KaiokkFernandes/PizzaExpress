import prismaClient from "../../prisma";
import { hash } from "bcryptjs";
interface UserRequest{
    name: string;
    email: string;
    password: string;

}

class CreateUserService{
    async execute({name, email, password}: UserRequest){

        //Verificar se o usuário  enviou o email,

        if(!email){
            throw new Error("Email incorrect")

        }
         const passwordHash = await hash(password, 8);
 
        // Verificar se o email esta cadastrado na plataforma 
         const  userAlreadyExists =  await prismaClient.user.findFirst({
            where:{
                email: email
            }
         })
         if(userAlreadyExists){
            throw new Error("User already exists")  
         }
        const user = await prismaClient.user.create({
            data:{
                name: name,
                email: email,
                password: passwordHash,
            },
            select:{
            id: true,
            name: true,
            email: true,
            }
        }) 
 
       
        return user;
    }
}

export {CreateUserService}