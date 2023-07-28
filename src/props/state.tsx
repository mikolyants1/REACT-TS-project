import styled,{IStyledComponent} from "styled-components"
import { BaseObject } from "styled-components/dist/types"
import { createContext,Context, Dispatch, SetStateAction } from "react"
export type obj={
    id:string,
    name:string,
    marginLeft:string
}
export const games:Array<obj>=[
{id:'1', name: "Tic-tac-toe",marginLeft:'-90px'}, 
 {id: '2', name: "Gallows",marginLeft:'-85px',}, 
 {id: '3', name: "Snake",marginLeft:'-100px',} 
            ]
        export  type color={
                color1:string,
                color2:string,
                current:string
            }
      export  const themes:color={
        color1:'linear-gradient(40deg,#eaebe2,#85d3f1,#56bee7) no-repeat',
        color2:'linear-gradient(40deg,rgb(250, 216, 24),rgb(236, 72, 72),rgb(240, 56, 240)) no-repeat',
        current:'linear-gradient(40deg,#eaebe2,#85d3f1,#56bee7) no-repeat',  
            }
        export const ThemeContext=createContext(themes.current)
            
         export   interface style2{
                Wrapper:IStyledComponent<'web',any>,
                Header:IStyledComponent<'web',BaseObject>,
                Main:IStyledComponent<'web',BaseObject>,
                Footer:IStyledComponent<'web',BaseObject>,
                TodoList:IStyledComponent<'web',BaseObject>
            }
             const Wrapper:IStyledComponent<'web',BaseObject>=styled.div`
            background-color: white;
            width: 340px;height: 200px;
            margin: 100px 0 0 -65px;
            position: absolute;
            border-radius: 5px;
            `
             const Header:IStyledComponent<'web',BaseObject>=styled.header`
            margin-top: -10px;
              margin-left: 18px;
            `
               const TodoList:IStyledComponent<'web',BaseObject>=styled.main`
              overflow-y: scroll;
              width: 95%;
              margin: auto;
              max-height:200px;
              `
               const Footer:IStyledComponent<'web',BaseObject>=styled.footer`
              width: 89%;
              margin:40px auto;
              display: flex;
              ` 
              const Main:IStyledComponent<'web',BaseObject>=styled.main`
              display: flex;
              width: 90%;
              margin-left: 10px;
              `
              export const Brand:IStyledComponent<'web',BaseObject>=styled.div`
                text-allign:center;
                width:200px;
                margin:20px auto
                `
    export const Struct:style2={
        Wrapper:Wrapper,
        Header:Header,
        Main:Main,
        TodoList:TodoList,
        Footer:Footer
    }
   export interface prop{
        struct:style2
    }
export  interface Props{
        item: Array<obj>
             }
 export interface style{
        width?:string,
        textAlign?:any
            }
export  interface style1{
    textAllign:string,
    width:string,
    margin:string,
       }

export interface props{
    children:JSX.Element,
  }    
export function Restart():JSX.Element{
    enum style{
    width='100%',
    height='100%'
    }
    return <button style={style}
    onClick={()=>window.location.reload()}>
        restart
     </button>
}