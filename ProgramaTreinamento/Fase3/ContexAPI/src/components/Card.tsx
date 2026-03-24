import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Modal } from "./Modal";
import { useAuth } from "../hooks/auth";
interface IProps{
    text: string;
}

export function Card(){

    //const {sigIn} = useContext(AuthContext);
    const { sigIn} = useAuth()
    const submit = ()=>{
        sigIn();
    };
    return(
        <div>
            <h1>Card</h1>
            <button onClick={submit}>Entrar</button>
            <Modal />
        </div>
    );
}