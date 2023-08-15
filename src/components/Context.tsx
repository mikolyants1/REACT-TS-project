import {useContext,useEffect,FC} from 'react'
import { BaseObject } from "styled-components/dist/types"
import styled,{IStyledComponent} from 'styled-components'
import { ThemeContext} from '../props/state'
interface props {
marg:number,
rotate:number,
onClick:()=>void
}
export const ChangeContext:FC<props>=({marg,rotate,onClick}):JSX.Element=>{
const context:string=useContext(ThemeContext)
const Toggle:IStyledComponent<'web',BaseObject>=styled.div`
width:60px;
height:30px;
background-color:rgb(200,200,200);
border-radius:15px;
border:1px solid grey;
margin:auto;
& div {
rotate:${rotate}deg;
width:30px;
height:30px;
background-color:white;
box-shadow:1px 1px 1px 0px grey;
border-radius:50%;
transition-duration:1s;
margin-left:${marg}px;
}
`
useEffect(():void=>{
const root=document.getElementById('root') as HTMLElement
root.style.background=`${context}`
},[context])
    return <Toggle>
    <div onClick={onClick}></div>
        </Toggle>
    
}