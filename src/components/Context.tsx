import {useContext,useEffect,FC} from 'react'
import { Toggle } from '../props/state'
import { ThemeContext} from '../props/state'
interface props {
marg:number,
rotate:number,
onClick:()=>void
}
export const ChangeContext:FC<props>=({marg,rotate,onClick}):JSX.Element=>{
const context:string=useContext(ThemeContext)
useEffect(():void=>{
const root=document.getElementById('root') as HTMLElement
root.style.background=`${context}`
},[context])
    return <Toggle marg={marg} rotate={rotate}>
              <div onClick={onClick} />
           </Toggle>
    
}