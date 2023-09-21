import {useState} from "react";
import { props } from "../props/state";
import styled,{IStyledComponent} from 'styled-components'
import { BaseObject } from "styled-components/dist/types";
type mass1=Array<number>
const Main:IStyledComponent<'web',BaseObject>=styled.div`
width:249px
`
type union=number|null
export default function TicTacToe({children}:props):JSX.Element{  
const [text,setText]=useState<string>('')
const [cress,setCress]=useState<number[]>([])
const [combos,setCombos]=useState<mass1[]>([
[0, 1, 2],[3, 4, 5],
[6, 7, 8],[0, 3, 6],
[1, 4, 7],[2, 5, 8],
[0, 4, 8],[6, 4, 2]
         ])
const combos1:Array<mass1>=[
[0, 1, 2],[3, 4, 5],
[6, 7, 8],[0, 3, 6],
[1, 4, 7],[2, 5, 8],
[0, 4, 8],[6, 4, 2]
        ]
enum style {
display= 'flex',
width='247px',
height='40px',
border='1px solid black',
justifyContent='space-between'
    }
enum style1 {
fontSize='30px',
width='100%',
backgroundColor='white',
textAlign='center',
    }
function press(n:number):void {
const cells:NodeListOf<HTMLTableCellElement>=document.querySelectorAll("td")
if (text=='') {
  if (cells[n].textContent!=='o') {
      cells[n].innerHTML='x'
      cress.push(n)   
      setCress(cress)
      }
const del:number[]=[]
cells.forEach(({textContent}:HTMLTableCellElement,i:number):void=>{
if (textContent=='o'||textContent=='x') del.push(i)   
    })
for (let i:number = 0; i < del.length; i++) {
  for (let ind:number = 0; ind < combos.length; ind++) {
    for (let index:number = 0; index < combos[ind].length; index++) {
      if (combos[ind][index]==del[i]) {
        combos[ind].splice(index,1)
        setCombos(combos)
        }
      }
    }
  }
const con1:Array<number>=[]
combos.forEach(({length}:mass1,i:number):void=>{
if (length==1) con1.push(i)
    })
let con2:number=0
combos1.forEach((item:mass1):void=>{
if (item.every((x:number):boolean=>cells[x].textContent=='o')) con2++     
if (item.every((x:number):boolean=>cells[x].textContent=='x')) con2--
      })
if (con2<0) return setText('WIN')
if (con2>0) return setText('LOSE')
if (combos.every(({length}:mass1):boolean=>length==0&&con2==0)) setText('TIE')
if (con1.length>0) {
let con4:number=0
for (let i:number = 0; i < con1.length; i++) {
  if (combos1[con1[i]].every((x:number):boolean=>cells[x].textContent!=='o')) {
      cells[combos[con1[i]][0]].innerHTML='o'
      break
        } else{
          con4++
        }
      }
  if (con4==con1.length) cells[combos[con1[0]][0]].innerHTML='o'    
    }else{
let mas:union=null
  for (let i:number = 0; i < combos1.length; i++) {
    for (let ind:number = 0; ind < combos1[i].length; ind++) {
      if (combos1[i][ind]==cress[cress.length-1]&&combos[i].length!==0) {
          mas=i
          break
        } 
      }        
    }
if (mas) cells[combos[mas][Math.floor(Math.random()*2)]].innerHTML='o'
      }     
	  }
 }
            return <Main>
                      <tr>
                      {combos1[0].map((item:number):JSX.Element=>(
                        <td key={item} onClick={():void=>press(item)} />
                        ))}
                       </tr>
                      <tr>
                      {combos1[1].map((item:number):JSX.Element=>(
                        <td key={item} onClick={():void=>press(item)} />
                        ))}
                      </tr>
                     <tr>
                     {combos1[2].map((item:number):JSX.Element=>(
                        <td key={item} onClick={():void=>press(item)} />
                        ))}
                     </tr>
                   <div style={style}>
                    <div style={style1}>
                      {text}
                    </div>
                    <div className="res">
                      {children}
                      </div>
                    </div>       
                 </Main>
    }