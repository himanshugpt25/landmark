import { useEffect } from "react"

export default function RerouteToHome(){
    useEffect(()=>{
        window.location.href = `${window.location.origin}/home`
    },[])
    return (<></>)
}