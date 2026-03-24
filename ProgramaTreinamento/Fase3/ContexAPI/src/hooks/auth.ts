import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export function useAuth(){
    const provider = useContext(AuthContext)
    if (!provider){
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return provider
}