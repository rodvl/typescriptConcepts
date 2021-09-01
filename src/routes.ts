import {Request, Response} from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response){
    const user = createUser({
        name: "Rodrigo", 
        email:"email@email.com",
        password:"password", 
        techs: [
            "nodeJS", 
            "reactJS",
            {title: "javascript", experience: 100}
        ]
    });

    return response.json(user);
}