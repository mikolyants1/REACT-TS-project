import React from "react";
interface state{
    con?:number,
    random:number[]
}
interface mass{
    items:number[],
    text:string,
    last:number[]
}
export default function Snake() {
const a1:number[]=Array.from(Array(49).keys())
a1.splice(42,1)
const [state,setState]=React.useState<state>({con:0,random:a1})
const Left:number[]=[0,7,14,21,28,35,42]
const Right:number[]=[6,13,20,27,34,41,48]
const [mess,setMess]=React.useState<mass>({items:[],text:'',last:[]})
const [con,setCon]=React.useState(0)
const ref1=React.useRef<HTMLDivElement>(null!)
const ref2=React.useRef<HTMLDivElement>(null!)
React.useEffect(()=>{
    ref1.current.style.cssText='width:100%;text-align:center;font-size:20px'
    ref2.current.style.cssText=`width:115px;text-align:center;height:30px;
    border-right:1px solid black;font-size:23px;background-color:white`
    const td:NodeListOf<HTMLTableCaptionElement>=document.querySelectorAll('td')
    for (let i = 0; i < td.length; i++) {
td[i].style.cssText=` width: 30px; height: 30px;border: 1px solid black;`
    }
    td[42].style.backgroundColor='grey'
    let ran:number=state.random[Math.floor(Math.random()*state.random.length)]
    td[ran].style.backgroundColor='yellow'
},[]
)

function move(n:number):void {
    const td:NodeListOf<HTMLTableCaptionElement>=document.querySelectorAll('td')
    const but:NodeListOf<HTMLButtonElement>=document.querySelectorAll('.but')
    for (let i = 0; i < but.length; i++) {
        if (but[i].hasAttribute('id')) {
            but[i].removeAttribute('id')
        }
    }
    let up:any
let right:any
let left:any
let down:any
but[n].setAttribute('id','q')
if (mess.text!=='lose') {
    

    if (n==0) {
        let con2:number=0
        let x:number=0
        for (let i = 0; i< td.length; i++) {
        if (td[i].style.backgroundColor=='grey') {
            x=i
            break
        }
    }
    let con1:number=0
  up=setInterval(() => {    
    if (x<7) {    
        setTimeout(() => {
            if (but[0].hasAttribute('id')) {
               
        setMess({text:'lose',items:mess.items,last:mess.last}) 
            }
        },2000) 
    }else{
    let y:number=0
    for (let i = 0; i < td.length; i++) {
   if (td[i].style.backgroundColor=='yellow') {
    y++
   }
   }
   if (y==0) {
            let b:number[]=[]
        for (let i = 0; i < td.length; i++) {
            if (td[i].style.backgroundColor!=='black'&&td[i].style.backgroundColor!=='grey') {
                b.push(i)
   }    
}  
    setState({random:b})
    let ran:number=state.random[Math.floor(Math.random()*state.random.length)]
    td[ran].style.backgroundColor='yellow'
    con1++
    setCon(con+1)
   }
    mess.items.push(x)
    td[x].style.backgroundColor='white'
    for (let i = 0; i < td.length; i++) {
        for (let ind =mess.items.length-con ; ind < mess.items.length; ind++) {
          if (i!==mess.items[ind]&&td[i].style.backgroundColor!=='grey'&&td[i].style.backgroundColor!=='yellow') {
            td[i].style.backgroundColor='white'
          }
          td[mess.items[ind]].style.backgroundColor='black'  
        }   
    }
    for (let i = 0; i< td.length; i++) {
        if (td[i].style.backgroundColor!=='white') {
           con2++ 
        }
    }
    if (con2==td.length) {
        setMess({text:'win',items:mess.items,last:mess.last})
    }
    if (!but[0].hasAttribute('id')) {
        clearInterval(up)
    }else{      
td[x-=7].style.backgroundColor='grey'
    if (mess.last.at(-1)==0) {
       setMess({text:'lose',items:mess.items,last:mess.last})
clearInterval(up)
    }     
    }
    }
 }, 1000);  
    }
    if (n==1) {
        let con2:number=0
        let x:number=0
        for (let i = 0; i< td.length; i++) {
        if (td[i].style.backgroundColor=='grey') {
            x=i
            break
        }
    }
    let con1:number=0
  down=setInterval(() => {
    if (x>41) {
        setTimeout(() => {
            if (but[1].hasAttribute('id')) {
               
        setMess({text:'lose',items:mess.items,last:mess.last}) 
            }          
        },2000)
    }else{
    let y:number=0
    for (let i = 0; i < td.length; i++) {
   if (td[i].style.backgroundColor=='yellow') {
    y++
   }
   }
   if (y==0) {        
            let b:number[]=[]
        for (let i = 0; i < td.length; i++) {
            if (td[i].style.backgroundColor!=='black'&&td[i].style.backgroundColor!=='grey') {
                b.push(i)
   }    
}  
    setState({random:b})
    let ran:number=state.random[Math.floor(Math.random()*state.random.length)]
    td[ran].style.backgroundColor='yellow'
    con1++
    setCon(con+1)
   }
    mess.items.push(x)
    td[x].style.backgroundColor='white'
    for (let i = 0; i < td.length; i++) {
        for (let ind =mess.items.length-con ; ind < mess.items.length; ind++) {
          if (i!==mess.items[ind]&& td[i].style.backgroundColor!=='grey'&&td[i].style.backgroundColor!=='yellow') {
            td[i].style.backgroundColor='white'
          }
          td[mess.items[ind]].style.backgroundColor='black'
        }
    }
    if (!but[1].hasAttribute('id')) {
        clearInterval(down)
    }else{
    td[x+=7].style.backgroundColor='grey'
    }
}
 }, 1000);  
    }
    if (n==2) {
        let con2:number=0
        let x:number=0
        for (let i = 0; i< td.length; i++) {
        if (td[i].style.backgroundColor=='grey') {
            x=i
            break
        }
    }
    let con1:number=0
  left=setInterval(() => {
if (Left.some((z)=>z==x)) {
        setTimeout(() => {
            if (but[2].hasAttribute('id')) {
                
        setMess({text:'lose',items:mess.items,last:mess.last}) 
            }  
        },2000)   
    }else{
    let y:number=0
    for (let i = 0; i < td.length; i++) {
   if (td[i].style.backgroundColor=='yellow') {
    y++
   }
   }
   if (y==0) {
            let b:number[]=[]
        for (let i = 0; i < td.length; i++) {
            if (td[i].style.backgroundColor!=='black'&&td[i].style.backgroundColor!=='grey') {
                b.push(i)
   }    
}  
    setState({random:b})
    let ran:number=state.random[Math.floor(Math.random()*state.random.length)]
    td[ran].style.backgroundColor='yellow'
    con1++
    setCon(con+1)
   }
    mess.items.push(x)
    if (td[x-1].style.backgroundColor=='black') {
            clearInterval(left)
setMess({text:'lose',items:mess.items,last:mess.last})
         }
    td[x].style.backgroundColor='white'
    for (let i = 0; i < td.length; i++) {
        for (let ind =mess.items.length-con ; ind < mess.items.length; ind++) {
          if (i!==mess.items[ind]&& td[i].style.backgroundColor!=='grey'&&td[i].style.backgroundColor!=='yellow') {
            td[i].style.backgroundColor='white'
          }
          td[mess.items[ind]].style.backgroundColor='black'
        }
    }
    if (!but[2].hasAttribute('id')) {
        clearInterval(left)
    }else{
    td[x-=1].style.backgroundColor='grey'
    }
}
 }, 1000);  
    }
    if (n==3) {
    let x:number=0
    for (let i = 0; i< td.length; i++) {
    if (td[i].style.backgroundColor=='grey') {
        x=i
        break
    }
}
let con1:number=0
 right=setInterval(() => {
    if (Right.some((z)=>z==x)) {
       setTimeout(() => {
           if (but[3].hasAttribute('id')) {
              
       setMess({text:'lose',items:mess.items,last:mess.last}) 
           }   
       },2000)
   }else{ 
let y:number=0
for (let i = 0; i < td.length; i++) {
if (td[i].style.backgroundColor=='yellow') {
y++
}
}
if (y==0) {       
        let b:number[]=[]
    for (let i = 0; i < td.length; i++) {
        if (td[i].style.backgroundColor!=='black'&&td[i].style.backgroundColor!=='grey') {
            b.push(i)
}    
}  
setState({random:b})
let ran:number=state.random[Math.floor(Math.random()*state.random.length)]
td[ran].style.backgroundColor='yellow'
con1++
setCon(con+1)
}
mess.items.push(x)

if (td[x+1].style.backgroundColor=='black') {
            clearInterval(right)
setMess({text:'lose',items:mess.items,last:mess.last})
         }
td[x].style.backgroundColor='white'
for (let i = 0; i < td.length; i++) {
    for (let ind =mess.items.length-con ; ind < mess.items.length; ind++) {
      if (i!==mess.items[ind]&&td[i].style.backgroundColor!=='grey'&&td[i].style.backgroundColor!=='yellow') {
        td[i].style.backgroundColor='white'
      }
      td[mess.items[ind]].style.backgroundColor='black'
    }
}
if (!but[3].hasAttribute('id')) {
        clearInterval(right)
    }else{

td[x+=1].style.backgroundColor='grey'
    }
}
}, 1000);
    }
       
}
}
const style={backgroundColor:'white',width:'236px'}
const style0={width:'120px'}
const style1={width:'60px',height:'30px'}
const style2={width:'116px',height:'30px'}
const style3={display:'flex'}
const style4={width:'236px'}
    return <div style={style4}> 
        <div ref={ref1}>score:{con}</div>
        <div style={style}>
        <tr>
            <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr>
            <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr>
            <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr>
            <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr>
            <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr>
            <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            <tr>
            <td></td><td></td><td></td><td></td><td></td><td></td><td></td>
            </tr>
            </div>
            <div style={style3}>
<div style={style0}>
<button className='but' style={style1} onClick={()=>move(2)}>left</button>
<button className='but' style={style1} onClick={()=>move(0)}>up</button>
<button className='but' style={style1} onClick={()=>move(1)}>down</button>
<button className='but' style={style1} onClick={()=>move(3)}>right</button>
    </div>
<div>
    <div ref={ref2}>{mess.text}</div>
    <button style={style2} onClick={()=>window.location.reload()}>restart</button>
    </div>           
                </div>
        </div>
    }