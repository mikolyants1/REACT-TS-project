import {useState,useEffect,useRef} from "react";
import { props } from "../props/state";
interface state{
    con?:number,
    random:number[]
}
interface mass{
    items:number[],
    text:string,
    last:number[]
}
export default function Snake({children}:props):JSX.Element {
const tds:number[]=Array.from(Array(9).keys())
const a1:number[]=Array.from(Array(81).keys())
const Left:number[]=[9,18,27,36,45,54,63,72]
const Right:number[]=[17,26,35,44,53,62,71]
const Up:number[]=[0,1,2,3,4,5,6,7,8]
const Down:number[]=[73,74,75,76,77,78,79,80]
const All:number[]=Left.concat(Right,Down,Up)
for (let index = 0; index < All.length; index++) {
    for (let i = 0; i < a1.length; i++) {    
         if (All[index]==a1[i]) {
          a1.splice(i,1)
         }
        }
       }  
a1.splice(64,1)
const [state,setState]=useState<state>({con:0,random:a1})
const [mess,setMess]=useState<mass>({items:[],text:'',last:[]})
const [con,setCon]=useState(0)
const ref1=useRef<HTMLDivElement>(null!)
const ref2=useRef<HTMLDivElement>(null!)
    useEffect(():void=>{
    ref1.current.style.cssText='width:100%;text-align:center;font-size:20px'
    ref2.current.style.cssText=`width:145px;text-align:center;height:30px;
    border-right:1px solid black;font-size:23px;background-color:white`
    const td:NodeListOf<HTMLTableCellElement>=document.querySelectorAll('td')
    td.forEach(({style}:HTMLTableCellElement):void=>{
    style.cssText=`width:30px;height:30px;border: 1px solid black;background-color:green`
    })
   All.forEach((item:number):string=>td[item].style.backgroundColor='brown')
    td[64].style.backgroundColor='grey'
    let ran:number=state.random[Math.floor(Math.random()*state.random.length)]
    td[ran].style.backgroundColor='yellow'
    if (!localStorage.getItem('best')) {
        localStorage.setItem('best','0')
    }
},[]
)
    useEffect(():void=>{
    if (typeof localStorage.getItem('best')!==null) {
        if (con>=JSON.parse(localStorage.getItem("best") || "")) {
          localStorage.setItem('best',`${con}`)
        }  
      }else{
        localStorage.setItem('best','0')
      }
},[con])
function move(n:number):void {  
const td:NodeListOf<HTMLTableCellElement>=document.querySelectorAll('td')
const but:NodeListOf<HTMLButtonElement>=document.querySelectorAll('.but')
but.forEach((item:HTMLButtonElement):void=>{
if (item.hasAttribute('id')) item.removeAttribute('id')
})
but[n].setAttribute('id','q')
if (mess.text!=='lose'&&mess.text!=='win') {
if (n==0) {
let con2:number=0
let x:number=0
td.forEach(({style}:HTMLTableCellElement,i:number):void=>{
const {backgroundColor}:CSSStyleDeclaration=style
if (backgroundColor=='grey') x=i
    })
let con1:number=0
const up:NodeJS.Timer=setInterval(():void => {    
if (All.some((z:number):boolean=>z==x)) {    
setMess({text:'lose',items:mess.items,last:mess.last})  
    }else{
let y:number=0
td.forEach(({style:{backgroundColor}}:HTMLTableCellElement):void=>{
if (backgroundColor=='yellow') y++
    })
if (y==0) {
const b:number[]=[]
td.forEach(({style}:HTMLTableCellElement,i:number):void=>{
const {backgroundColor}:CSSStyleDeclaration=style
if (backgroundColor!=='black'&&backgroundColor!=='grey'
&&backgroundColor!=='brown') b.push(i)
    })
setState({random:b})
const ran:number=state.random[Math.floor(Math.random()*state.random.length)]
td[ran].style.backgroundColor='yellow'
con1++
setCon(con+1)
   }
mess.items.push(x)
if (td[x-9].style.backgroundColor=='black') {
clearInterval(up)
setMess({text:'lose',items:mess.items,last:mess.last})
     }
td[x].style.backgroundColor='green'
for (let i = 0; i < td.length; i++) {
  for (let ind =mess.items.length-con ; ind < mess.items.length; ind++) {
     if (i!==mess.items[ind]&&td[i].style.backgroundColor!=='grey'&&td[i].style.backgroundColor!=='yellow'
        &&td[i].style.backgroundColor!=='brown') td[i].style.backgroundColor='green'
        td[mess.items[ind]].style.backgroundColor='black'  
        }   
    }
td.forEach(({style:{backgroundColor}}:HTMLTableCellElement):void=>{
if (backgroundColor=='green') con2++ 
    })
if (con2==0) setMess({text:'win',items:mess.items,last:mess.last})
if (!but[0].hasAttribute('id')) {
clearInterval(up)
}else{      
td[x-=9].style.backgroundColor='grey'
    }
  }
 }, 600);  
    }
if (n==1) {
let con2:number=0
let x:number=0
td.forEach(({style}:HTMLTableCellElement,i:number):void=>{
const {backgroundColor}:CSSStyleDeclaration=style
if (backgroundColor=='grey')  x=i
    })
let con1:number=0
const down:NodeJS.Timer=setInterval(():void => {
if (All.some((z:number):boolean=>z==x)) {    
setMess({text:'lose',items:mess.items,last:mess.last})  
    }else{
let y:number=0
td.forEach(({style:{backgroundColor}}:HTMLTableCellElement):void=>{
if (backgroundColor=='yellow') y++
    })
   if (y==0) {        
const b:number[]=[]
td.forEach(({style}:HTMLTableCellElement,i:number):void=>{
const {backgroundColor}:CSSStyleDeclaration=style
if (backgroundColor!=='black'&&backgroundColor!=='grey'
&&backgroundColor!=='brown') b.push(i)
    })
    setState({random:b})
    const ran:number=state.random[Math.floor(Math.random()*state.random.length)]
    td[ran].style.backgroundColor='yellow'
    con1++
    setCon(con+1)
  
   }
    mess.items.push(x)
if (td[x+9].style.backgroundColor=='black') {
    clearInterval(down)
   setMess({text:'lose',items:mess.items,last:mess.last})
     }
    td[x].style.backgroundColor='green'
for (let i = 0; i < td.length; i++) {
  for (let ind = mess.items.length-con ; ind < mess.items.length; ind++) {
    if (i!==mess.items[ind]&& td[i].style.backgroundColor!=='grey'&&td[i].style.backgroundColor!=='yellow'
        &&td[i].style.backgroundColor!=='brown') td[i].style.backgroundColor='green'
          td[mess.items[ind]].style.backgroundColor='black'
        }
    }
td.forEach(({style:{backgroundColor}}:HTMLTableCellElement):void=>{
if (backgroundColor=='green') con2++ 
    })
if (con2==0) setMess({text:'win',items:mess.items,last:mess.last})
    if (!but[1].hasAttribute('id')) {
        clearInterval(down)
    }else{
    td[x+=9].style.backgroundColor='grey'
    }
}
 }, 600);  
    }
if (n==2) {
let con2:number=0
let x:number=0
td.forEach(({style}:HTMLTableCellElement,i:number):void=>{
const {backgroundColor}:CSSStyleDeclaration=style
if (backgroundColor=='grey') x=i
    })
let con1:number=0
const left:NodeJS.Timer=setInterval(():void => {
if (All.some((z:number):boolean=>z==x)) {    
setMess({text:'lose',items:mess.items,last:mess.last})  
    }else{
let y:number=0
td.forEach(({style:{backgroundColor}}:HTMLTableCellElement):void=>{
if (backgroundColor=='yellow') y++
    })
if (y==0) {
const b:number[]=[]
td.forEach(({style}:HTMLTableCellElement,i:number):void=>{
const {backgroundColor}:CSSStyleDeclaration=style
if (backgroundColor!=='black'&&backgroundColor!=='grey'
&&backgroundColor!=='brown') b.push(i)
})
setState({random:b})
const ran:number=state.random[Math.floor(Math.random()*state.random.length)]
td[ran].style.backgroundColor='yellow'
con1++
setCon(con+1)
   }
mess.items.push(x)
if (td[x-1].style.backgroundColor=='black') {
clearInterval(left)
setMess({text:'lose',items:mess.items,last:mess.last})
    }
td[x].style.backgroundColor='green'
for (let i = 0; i < td.length; i++) {
  for (let ind = mess.items.length-con ; ind < mess.items.length; ind++) {
    if (i!==mess.items[ind]&& td[i].style.backgroundColor!=='grey'&&td[i].style.backgroundColor!=='yellow'
    &&td[i].style.backgroundColor!=='brown') td[i].style.backgroundColor='green'
    td[mess.items[ind]].style.backgroundColor='black'
    }
  }
td.forEach(({style:{backgroundColor}}:HTMLTableCellElement):void=>{
if (backgroundColor=='green') con2++ 
    })
if (con2==0) setMess({text:'win',items:mess.items,last:mess.last})
if (!but[2].hasAttribute('id')) {
clearInterval(left)
    }else{
    td[x-=1].style.backgroundColor='grey'
    }
}
 }, 600);  
    }
if (n==3) {
let con2:number=0
let x:number=0
td.forEach(({style}:HTMLTableCellElement,i:number):void=>{
const {backgroundColor}:CSSStyleDeclaration=style
if (backgroundColor=='grey')  x=i
    })
let con1:number=0
const right:NodeJS.Timer=setInterval(():void => {
if (All.some((z:number):boolean=>z==x)) {    
setMess({text:'lose',items:mess.items,last:mess.last})  
    }else{
let y:number=0
td.forEach(({style}:HTMLTableCellElement):void=>{
if (style.backgroundColor=='yellow') y++
    })
if (y==0) {       
const b:number[]=[]
td.forEach(({style}:HTMLTableCellElement,i:number):void=>{
const {backgroundColor}:CSSStyleDeclaration=style
if (backgroundColor!=='black'&&backgroundColor!=='grey'
&&backgroundColor!=='brown') b.push(i)
    })
setState({random:b})
const ran:number=state.random[Math.floor(Math.random()*state.random.length)]
td[ran].style.backgroundColor='yellow'
con1++
setCon(con+1)

}
mess.items.push(x)
if (td[x+1].style.backgroundColor=='black') {
clearInterval(right)
setMess({text:'lose',items:mess.items,last:mess.last})
    }
td[x].style.backgroundColor='green'
for (let i = 0; i < td.length; i++) {
  for (let ind =mess.items.length-con ; ind < mess.items.length; ind++) {
    if (i!==mess.items[ind]&&td[i].style.backgroundColor!=='grey'&&td[i].style.backgroundColor!=='yellow'
      &&td[i].style.backgroundColor!=='brown') td[i].style.backgroundColor='green'
      td[mess.items[ind]].style.backgroundColor='black'
    }
}
td.forEach(({style}:HTMLTableCellElement):void=>{
if (style.backgroundColor=='green') con2++ 
     })
if (con2==0) setMess({text:'win',items:mess.items,last:mess.last})
if (!but[3].hasAttribute('id')) {
        clearInterval(right)
    }else{
td[x+=1].style.backgroundColor='grey'
    }
    }
}, 600);
    } 
}
}
enum style {
    backgroundColor='white',
    width='290px'
}
enum style1 {
    width='72px',
    height='30px'
}
enum style2 {
    width='146px',
  height='30px'
}
    return <div style={{width:'290px'}}> 
        <div ref={ref1}>score:{con} best:{localStorage.getItem('best')}</div>
        <div style={style}>
            {tds.map((index:number):JSX.Element=>(
                 <tr key={index}>
                    {tds.map((index:number):JSX.Element=>(
                    <td key={index}></td>
                     ))}
                 </tr>
            ))}     
            </div>
            <div style={{display:'flex'}}>
<div style={{width:'240px'}}>
<button className='but'
 style={style1} onClick={():void=>move(2)}>left</button>
<button className='but'
 style={style1} onClick={():void=>move(0)}>up</button>
<button className='but'
 style={style1} onClick={():void=>move(1)}>down</button>
<button className='but'
 style={style1} onClick={():void=>move(3)}>right</button>
    </div>
<div>
    <div ref={ref2}>{mess.text}</div>
    <div style={style2}>
    {children}
      </div>
    </div>           
  </div>
</div>
    }