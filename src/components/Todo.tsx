import React from 'react';
import svg from '../red16.jpg'
interface web{
    text?:Array<string>,
    value?:string,
    value1?:string,
    con?:number,
    style?:{
        transform:string,
        transitionDuration:string,
        transitionTimingFunction:string
    },
    style1?:{
        backgroundColor:string
    },
height?:number
}
export default class Todo extends React.Component<web>{
       public items:Array<string>=[]
        state={
            text:this.items,value:'',value1:'',con:0,
        style:{transform:`translateX(50px)`,
        transitionDuration:'0.5s',
         transitionTimingFunction:'ease'},
      style1:{backgroundColor:''},
      height:200
}
     
    public ref=React.createRef<HTMLInputElement>()
  public wrap:React.RefObject<any>=React.createRef()
    set=(x:number):void=>{
    const  img:NodeListOf<HTMLImageElement>=document.querySelectorAll('.img')
       if (x>0) {
        img[x-1].style.transform='translateX(0px)'
       }else{
        img[-1*x-1].style.transform='translateX(50px)'
       }
    }
    clear():void{
        const task=document.querySelector('.task') as HTMLElement
       task.style.height=`0px`
        this.wrap.current.style.height='200px'
        this.items=[]
    this.setState({text:this.items,con:0,height:200})
    }
    press1=(x:number):void=>{
        const task=document.querySelector('.task') as HTMLDivElement
        if (x==0) {
            if (this.state.value!=='') {
        
     const val:number=this.state.height<400?this.state.height+50:this.state.height
      if (val>=400) {
        task.style.height='200px'
      }else{
     task.style.height=`${parseInt(task.style.height.split('').splice(0,task.style.height.split('').length-2).join(''))+50}px`
      }
     this.wrap.current.style.height=`${val}px`
    this.items.push(this.state.value)
    this.setState({text:this.items,con:this.state.con+1,height:val})
    this.ref.current?.focus()
        }
        }
        if (x==1) {
            const val:string=this.state.value.trim().toLowerCase()
            const text:string[]=this.items.filter((item:string)=>{
                return item.toLowerCase().indexOf(val)!==-1
            })
           
        this.setState({text:text,con:text.length}) 
        }
    }
    delete=(x:number):void=>{
    const task=document.querySelector('.task') as HTMLDivElement
    const val:number=this.state.con<5?this.state.height-50:this.state.height
    if (this.state.con<5) {
     task.style.height=`${parseInt(task.style.height.split('').splice(0,task.style.height.split('').length-2).join(''))-50}px`
      }else{
        task.style.height='200px'
      }
    this.wrap.current.style.height=`${val}px`
    this.items.splice(x,1)
    this.setState({text:this.items,con:this.state.con-1,height:val})
    }
    focus=(x:number):void=>{
     x==0?this.setState({style1:{backgroundColor:'rgb(210, 210, 210'}}):this.setState({style1:{backgroundColor:''}})
    }
    render():React.ReactNode{
        enum style1 {
            width='100%',
            marginTop='7px',
            marginLeft='10px',
            fontSize='16px'
        }
        const items:JSX.Element[]=this.state.text.map((item:string,index:number)=>{
        return <div key={index} className='items'  onMouseOver={()=>this.set(index+1)}
          onMouseOut={()=>this.set(-(index+1))}>
         <div className='div' style={style1}>{item}</div>
         <img className='img' style={this.state.style} onClick={()=>this.delete(index)}
             src={svg} />
            </div>
    })
     return <div>
         <div className="wrap" ref={this.wrap} >
        <div className='head' > 
            <h2><label htmlFor='input'>Todo App</label></h2></div>
              <div className='Main' >
         <button  onClick={()=>this.press1(0)} className='but1'>+</button>
                <div className='main1'>
        <input id='input' ref={this.ref} value={this.state.value} style={this.state.style1}  onFocus={()=>this.focus(0)}
         onBlur={()=>this.focus(1)}  onChange={(e:React.ChangeEvent<HTMLInputElement>)=>this.setState({value:e.target.value})}
             placeholder=" Add your new todo" type="text" />
             </div>
             <button onClick={()=>this.press1(1)}  className='ser'>search</button>
                     
    
    </div>
    
    <div className="task" >
        {items}
    </div>
    <div className='foot' >
    <div className="con">you have {this.state.con} pending tasks</div>
    <button onClick={this.clear.bind(this)} className='but2'>
        Clear All</button>
    </div>
        </div>
         </div>
            }
        }