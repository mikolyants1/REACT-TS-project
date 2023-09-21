import styled,{IStyledComponent} from "styled-components"
import { BaseObject } from "styled-components/dist/types"
import { createContext,Context, RefObject} from "react"
import Gallows from "../components/Gallows"
import TicTacToe from "../components/TicTacToe"
import Snake from "../components/Snake"
export type union1=string|undefined
export type union2=HTMLDivElement|null
export type play=(({children}:props)=>JSX.Element)|typeof Gallows
export type obj={
    id:string,
    name:string,
    marginLeft:number,
    ml:string,
    Game:play
}
export const games:Array<obj>=[
 {id:'1', name: "Tic-tac-toe",marginLeft:80,ml:'-30px',Game:TicTacToe}, 
 {id:'2', name: "Gallows",marginLeft:85,ml:'-10px',Game:Gallows}, 
 {id:'3', name: "Snake",marginLeft:100,ml:'2px',Game:Snake} 
            ]
export type color={
        color1:string,
        color2:string,
             }
export const themes:color={
color1:'linear-gradient(40deg,#eaebe2,#85d3f1,#56bee7) no-repeat',
color2:'linear-gradient(40deg,rgb(250, 216, 24),rgb(236, 72, 72),rgb(240, 56, 240)) no-repeat',
        }
export const ThemeContext:Context<string>=createContext(themes.color1)
    type base1={
    children:JSX.Element[],
    ref:RefObject<HTMLDivElement>
            }
         export  interface style2{
                Wrapper:IStyledComponent<'web',base1>,
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

        interface ToggleProp{
            rotate:number,
            marg:number,
            children:JSX.Element
        }
export const Toggle:IStyledComponent<'web',ToggleProp>=styled.div`
width:60px;
height:30px;
background-color:rgb(200,200,200);
border-radius:15px;
border:1px solid grey;
margin:auto;
& div {
rotate:${({rotate}:ToggleProp):number=>rotate}deg;
width:30px;
height:30px;
background-color:white;
box-shadow:1px 1px 1px 0px grey;
border-radius:50%;
margin-left:${({marg}:ToggleProp):number=>marg}px;
}
`
interface TitleProp {
    ml:string,
    children:JSX.Element
}
interface MainProp {
    marginLeft:number,
    children:JSX.Element
}
export const HomeLink:IStyledComponent<'web',BaseObject>=styled.div`
margin-top:50px;
margin-left:20px
`
export const Title:IStyledComponent<'web',TitleProp>=styled.div`
width:140%;
margin-left:${props=>props.ml}
`
export const GameMain:IStyledComponent<'web',MainProp>=styled.div`
margin-left:-${props=>props.marginLeft}px
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