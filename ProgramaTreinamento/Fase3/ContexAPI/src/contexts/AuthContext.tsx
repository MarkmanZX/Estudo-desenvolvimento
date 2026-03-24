import { Children, createContext, useState, type ReactNode } from "react";
import { Card } from "../components/Card";

interface IAuthContextData{
    text : string;
    sigIn : () => void;
    user: IUser;
}
interface IUser{
    name: string;
    email: string;
}
interface IAuthProviderProps{
    children : ReactNode;
}

export const AuthContext = createContext({}as IAuthContextData);

export function AuthProvider({children}: IAuthProviderProps){
    const [ user, setUser] = useState({
        name : '',
        email: '',
    });
    const text = `Alexia Kattah`;

    function sigIn(){
        setUser({
            name: 'Alexia Kattah',
            email: 'alexia@teste.com',
        })
    }

    return(
        <AuthContext.Provider value={{text, sigIn, user}}>
            {children}
        </AuthContext.Provider>
    )
}