import React from "react";
import { props } from "../props/state";
type mass=Array<string>
interface gal{
    name?:Array<mass>,
    skin?:Array<mass>,
    val?:string|undefined,
    win?:number,
     lose?:string,
     mass?:Array<number>
}
interface style{
    margin:string,
    width:string,
} 

 export default class Gallows extends React.Component<props,gal>{
        state={
        name:[
         ['х','о','л','о','д','и','л','ь','н','и','к'],
         ['б','у','д','и','л','ь','н','и','к'],
         ['а','к','в','а','л','а','н','г'],
         ['с','у','к','р','о','в','и','ц','а'],
         ['д','е','л','е','т','а','н','т'],
         ['х','р','о','н','о','м','е','т','р','а','ж'],
        ],
        skin:[
         ['_','_','_','_','_','_','_','_','_','_','_'],
         ['_','_','_','_','_','_','_','_','_'],
         ['_','_','_','_','_','_','_','_'],
         ['_','_','_','_','_','_','_','_','_'],
         ['_','_','_','_','_','_','_','_'],
         ['_','_','_','_','_','_','_','_','_','_','_'],
        ],
        val:'',
        win:1,
        lose:'',
    }
        x:number=[0,1,2,3,4,5][Math.floor(Math.random()*6)]
        ref=React.createRef<HTMLInputElement>()
        ref1:React.RefObject<any>=React.createRef()
        ref2:React.RefObject<any>=React.createRef()
        readonly style:style={
         margin:'100px auto 0 auto',
         width:`300px`,
           } 
   componentDidMount():void {
 this.ref1.current.style.cssText=` margin-left: 45px;
 justify-content:space-between; width: 200px;display: flex;`
 this.ref2.current.style.cssText=` width: 200px;height: 30px;
 text-align: center;font-size: 23px;margin-left: 50px;`
    }
    press():void{    
    const {style:s1}=document.querySelector('.a4') as HTMLElement
    const {style:s2}=document.querySelector('.a5') as HTMLElement
    const {style:s3}=document.querySelector('.a6') as HTMLElement
    const {style:s4}=document.querySelector('.a7') as HTMLElement
    const {style:s5}=document.querySelector('.a8') as HTMLElement
    const {style:s6}=document.querySelector('.a9') as HTMLElement
    const {style:s7}=document.querySelector('.a10') as HTMLElement
    const {name,skin,val,win}:gal=this.state
      if (val!=='') {   
       let con:number=0
       for (let i = 0; i < skin[this.x].length; i++) {
        if (val==name[this.x][i]) {
        skin[this.x].splice(i,1,name[this.x][i])
        }else{ 
        con++
        }          
       }
       if (con==skin[this.x].length) {
         this.setState({win:win+1})
        } 
        if (win==2) {
        s1.display="block"
        s7.marginTop='86px'
        }
        if (win==3) {
        s3.display="block"
        s3.marginLeft='129px'
        s7.marginTop='56px'
        }
        if (win==4) {
        s2.display="block"
        s3.marginLeft='3px'
        s7.marginTop='56px'
        }
        if (win==5) {
        s4.display="block"
        s7.marginTop='56px'
        }
        if (win==6) {
        s5.display="block"
        s7.marginTop='37px'
        }  
       if (win==7) {
           s6.display="block"
           this.setState({lose:'lose'})
       }
    if (skin[this.x].every((x:string)=>x!=='_')) {
        this.setState({lose:'win'}) 
       }
    }
    this.ref.current?.focus()
    }
    render():React.ReactNode{
        const {skin}:gal=this.state
        enum style{
            width='70px',
            height='20px'
        }
    const text:JSX.Element[]=skin[this.x].map((item:string,index:number)=>(
        <div key={index}>{item}</div>
    ))
        return <div style={this.style}>
            <div>
            <label htmlFor="galInput">Буква:</label>
            <input ref={this.ref} id="galInput" type="text"
             onChange={(e:React.ChangeEvent<HTMLInputElement>)=>this.setState({val:e.target.value})} />
            <button onClick={this.press.bind(this)}>try</button>
           </div> 
            <div ref={this.ref1}>{text}</div>
            <div ref={this.ref2}>{this.state.lose}</div>
            <div className='a1'></div>
            <div className='a2'></div>
            <div className='a3'></div>
            <div className='a4'></div>
            <div className='a51'>
               <div className='a5'></div>
               <div className='a6'></div>
               <div className='a7'></div>
            </div>
            <div className='a61'>
               <div className='a8'></div>
               <div className='a9'></div>
            </div>
            <div className='a10'></div>
              <div style={style}>
            {this.props.children}
                </div>               
            </div>
    }
  }
 