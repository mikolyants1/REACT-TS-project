import { useState,useEffect, Dispatch, SetStateAction } from "react";
import { union3 } from "../props/state";
type cust=[string,Dispatch<SetStateAction<string>>]
export default function useBest(key:string):cust{
 const defVal=():string=>{
  const store:union3=localStorage.getItem(`${key}`)
  if (!store) localStorage.setItem(`${key}`,'0')
   return store?store:'0'
 }
 const [state,setState]=useState<string>(defVal)
 useEffect(():void=>{
  const best:union3=localStorage.getItem(`${key}`)
  if (best){
  const val:string=Number(state)>Number(best)?state:best
   localStorage.setItem(`${key}`,`${val}`)
    setState(`${val}`)
   }
 },[state])
 return [state,setState]
}