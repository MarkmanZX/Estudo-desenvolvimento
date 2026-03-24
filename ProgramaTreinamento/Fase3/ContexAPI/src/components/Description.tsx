import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useAuth } from "../hooks/auth";

interface IProps{
    text: string;
}

export function Description(){
    const {user} = useAuth();

    return(
        <div>
            <h1>Description: {JSON.stringify(user)} </h1>
        </div>
    );
}