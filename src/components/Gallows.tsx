import React from "react";
type mass=Array<string>
interface gal{
    name?:Array<mass>,
    skin?:Array<mass>,
    val?:null,
    win?:number,
     lose?:string,
     win1?:number,
     mass?:Array<number>
}
interface style{
    margin:string,
    width:string
}
 export default class Gallows extends React.Component<gal>{
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
        val:null,win:1,lose:'',win1:1,mass:[0,1,2,3,4,5],}
        x:number=this.state.mass[Math.floor(Math.random()*6)]
        ref=React.createRef<HTMLInputElement>()
        ref1:React.RefObject<any>=React.createRef()
        ref2:React.RefObject<any>=React.createRef()
        style:style={
     margin:'100px auto 0 auto', width:`300px`
        } 
   componentDidMount() {
 this.ref1.current.style.cssText=` margin-left: 45px;
 justify-content:space-between; width: 200px;display: flex;`
 this.ref2.current.style.cssText=` width: 200px;height: 30px;
 text-align: center;font-size: 23px;margin-left: 50px;`
    }
    press():void{   
    
      const a4:any=document.querySelector('.a4')
      const a5:any=document.querySelector('.a5')
      const a6:any=document.querySelector('.a6')
      const a7:any=document.querySelector('.a7')
      const a8:any=document.querySelector('.a8')
      const a9:any=document.querySelector('.a9')
      const a10:any=document.querySelector('.a10')
      if (this.state.val!=='') {     
       let con:number=0
       for (let i = 0; i < this.state.skin[this.x].length; i++) {
            if (this.state.val==this.state.name[this.x][i]) {
            this.state.skin[this.x].splice(i,1,this.state.name[this.x][i])
        }else{ 
        con++
        }          
       }
       if (con==this.state.skin[this.x].length) {
     this.setState({win1:this.state.win1+1})
        }  
        if (this.state.win1==2) {
            a4.style.display="block"
            a10.style.marginTop='86px'
        }
        if (this.state.win1==3) {
            a6.style.display="block"
            a6.style.marginLeft='129px'
            a10.style.marginTop='56px'
        }
        if (this.state.win1==4) {
            a5.style.display="block"
            a6.style.marginLeft='3px'
            a10.style.marginTop='56px'
        }
        if (this.state.win1==5) {
            a7.style.display="block"
            a10.style.marginTop='56px'
        }
        if (this.state.win1==6) {
            a8.style.display="block"
            a10.style.marginTop='37px'
        }  
       if (this.state.win1==7) {
        a9.style.display="block"
        this.setState({lose:'lose'})
       }
        if (this.state.skin[this.x].every((x)=>{
            return x!=='_'
        })) {
        this.setState({lose:'win'}) 
       }

    }
      this.ref.current?.focus()
    }
    render():React.ReactNode{
    const text:JSX.Element[]=this.state.skin[this.x].map((item,index,array)=>{
            return <div>{item}</div>
        })
        return <div style={this.style}>
            <div>Буква: <input ref={this.ref} className="galInput" type="text"
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
                <button onClick={()=>window.location.reload()}>restart</button>
            </div>
    }
  }