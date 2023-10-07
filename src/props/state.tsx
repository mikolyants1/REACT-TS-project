import styled,{IStyledComponent} from "styled-components"
import { BaseObject } from "styled-components/dist/types"
import { createContext,Context,RefObject,ChangeEvent, MemoExoticComponent} from "react"
import Gallows from "../components/Gallows"
import TicTacToe from "../components/TicTacToe"
import Snake from "../components/Snake"
export type union1=string|undefined
export type union2=HTMLDivElement|null
export type union3=string|null
export type play=MemoExoticComponent<(({children}:props)=>JSX.Element)>|typeof Gallows
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
export interface style2{
    Wrapper:IStyledComponent<'web',base1>,
    Header:IStyledComponent<'web',BaseObject>,
    Main:IStyledComponent<'web',BaseObject>,
    Footer:IStyledComponent<'web',BaseObject>,
    TodoList:IStyledComponent<'web',BaseObject>
        }
interface TitleProp {
    ml:string,
    children:JSX.Element
        }
interface MainProp {
    margin:number,
    children:JSX.Element
        }
interface ToggleProp{
    rotate:number,
    marg:number,
    children:JSX.Element
        }
interface ImgProp{
    id:string,
    tran:string,
    onClick:(x:number)=>void,
    src:string
        }
interface LabelProp{
    htmlFor:string,
    children:string
        }
interface TableProp{
    key:number,
    onClick:(x:number)=>void
        }
interface ItemsProp {
    key:number,
    onMouseOver:(x:number)=>void,
    onMouseOut:(x:number)=>void,
    children:JSX.Element[]
        }
interface ItemProp{
    children:string
        }
interface ButProp{
    children:string,
    onClick:(x:number)=>void
        }
interface ClearProp{
    onClick:()=>void,
    children:string
        }
interface ResProp{
    children:JSX.Element
        }
interface InputProp{
    id:string,
    ref:RefObject<HTMLInputElement>,
    value:string,
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void,
    placeholder:string,
    type:string,
        }
interface MeterProp{
    min:number,
    max:number,
    value:number
}
const Wrapper:IStyledComponent<'web',BaseObject>=styled.div`
    background-color: white;
    width: 340px;height: 200px;
    margin: 100px 0 0 -65px;
    position: absolute;
    border-radius: 5px;
    ::-webkit-meter-optimum-value{
        background: blueviolet;
     }
    ::-webkit-scrollbar{
        display: none;
       }
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
export const Meter:IStyledComponent<'web',MeterProp>=styled.meter`
width:90px
`
export const HomeLink:IStyledComponent<'web',BaseObject>=styled.div`
margin-top:50px;
margin-left:20px
`
export const Title:IStyledComponent<'web',TitleProp>=styled.div`
width:140%;
margin-left:${props=>props.ml}
`
export const GameMain:IStyledComponent<'web',MainProp>=styled.div`
margin-left:-${({margin}:MainProp):number=>margin}px
`
export const Table:IStyledComponent<'web',TableProp>=styled.td`
    border:1px solid black;
     width: 80px;
      height: 80px;
      text-align: center;
      font-size: 60px;
     background-color:white 
`
export const Finish:IStyledComponent<'web',BaseObject>=styled.div`
    display:flex;
    width:247px;
    height:40px;
    border:1px solid black;
    justify-content:space-between;
        `
export const Result:IStyledComponent<'web',BaseObject>=styled.div`
    font-size:30px;
    width:100%;
    background-color:white;
    text-align:center;
        `
export const Img:IStyledComponent<'web',ImgProp>=styled.img`
transition-duration:0.5s;
transition-timing-function:ease;
transform:${props=>props.tran};
`
export const Label:IStyledComponent<'web',LabelProp>=styled.label`
cursor:pointer
`
export const Static:IStyledComponent<'web',BaseObject>=styled.div`
margin-top:-4px
`
export const Items:IStyledComponent<'web',ItemsProp>=styled.div`
  width: 93%;
  margin:10px 0 0 10px;
  height: 40px;
  background-color:rgb(239, 239, 239);
  display: flex;
  overflow: hidden;
  border-radius:5px
`
export const Item:IStyledComponent<'web',ItemProp>=styled.div`
    width:100%;
    margin-top:7px;
    margin-left:10px;
    font-size:16px;
`
export const SetButton:IStyledComponent<'web',ButProp>=styled.button`
    background-color: blueviolet;
    width: 40px;
    height: 40px;
    border-radius:5px 0px 0 5px;
    margin-left: 10px;
    border: none;
    color: white;
     font-size: 35px;
    font-weight: bolder;
   `

export const SerButton:IStyledComponent<'web',ButProp>=styled.button`
    background-color: blueviolet;
    height: 40px;
    border-radius:0 5px 5px 0;
    border: none;
    color: white;
    font-weight: bolder;
   `
export const Count:IStyledComponent<'web',BaseObject>=styled.div`
    width: 74%;
   `
export const ClearButton:IStyledComponent<'web',ClearProp>=styled.div`
    background-color: blueviolet;
    width: 75px;
    height: 25px;
    color: white;
    text-align:center;
    border-radius: 3px;
    font-size: 16px;
    border: none;
    margin-top:10px
   `
export const RestartDiv:IStyledComponent<'web',ResProp>=styled.div`
   width: 120px; 
  height: 100%;
  border-radius:0px;
  border:0px;
  border-left: 2px solid black;
   `
export const Input:IStyledComponent<'web',InputProp>=styled.input`
    width: 100%;
    height: 90%;
    border: 1px solid grey;
    font-size: 17px;
&:focus{
    background-color:rgb(210, 210, 210);
}
&:blur{
    background-color:none;
}
`
export const Block:IStyledComponent<'web',BaseObject>=styled.div`
    width: 250px;
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
export interface Props{
    item: Array<obj>
    }
export interface style1{
    textAllign:string,
    width:string,
    margin:string,
       }

export interface props{
    children:JSX.Element,
  }   
export const Head:IStyledComponent<'web',BaseObject>=styled.h2`
font-size: 29px;
` 
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