import {Component,createRef,RefObject,ReactNode,ChangeEvent} from 'react';
import svg from '../red16.jpg'
import { prop,style2 } from '../props/state';
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
    backgroundColor?:string,
    height?:number
   }
export default class Todo extends Component<prop,web>{
       public items:Array<string>=[]
        state={
            text:this.items,
            value:'',
            con:0,
        style:{
            transform:`translateX(50px)`,
            transitionDuration:'0.5s',
            transitionTimingFunction:'ease'
        },
      backgroundColor:'',
      height:200,
}

  public ref=createRef<HTMLInputElement>()
  public wrap=createRef<HTMLDivElement>()
    set=(x:number):void=>{
   const img:NodeListOf<HTMLImageElement>=document.querySelectorAll('.img')
       if (x>0) {
        img[x-1].style.transform='translateX(0px)'
       }else{
        img[-1*x-1].style.transform='translateX(50px)'
       }
    }
    clear():void{
    if (this.wrap.current) this.wrap.current.style.height='200px'
    this.items=[]
    this.setState({text:this.items,con:0,height:200})
    }
    press1=(x:number):void=>{
    const {height,value}:web=this.state
    switch (x) {
    case 0:
     if (value!=='') {
     const val:number=height<400?height+50:height
     if (this.wrap.current) this.wrap.current.style.height=`${val}px`
     this.items.push(value)
     this.setState({text:this.items,con:this.state.con+1,height:val})
     this.ref.current?.focus()
     }
     break;
    case 1:
     const val:string=value.trim().toLowerCase()
     const text:string[]=this.items.filter((item:string)=>item.toLowerCase().indexOf(val)!==-1)  
     this.setState({text:text,con:text.length}) 
      break;
        default:
        break;
      }  
    }

    delete=(x:number):void=>{
    const {con,height}:web=this.state
    const val:number=con<5?height-50:height
    if (this.wrap.current) this.wrap.current.style.height=`${val}px`
    this.items.splice(x,1)
    this.setState({text:this.items,con:con-1,height:val})
    }
    focus=(x:number):void=>{
    this.setState({backgroundColor:x==0?'rgb(210, 210, 210) ':''})
    }
    render():ReactNode{  
    const {Wrapper,Header,Main,TodoList,Footer}:style2=this.props.struct
    enum style1 {
        width='100%',
        marginTop='7px',
        marginLeft='10px',
        fontSize='16px'
        }
    
    const items:JSX.Element[]=this.state.text.map((item:string,i:number):JSX.Element=>(
        <div key={i} className='items'
          onMouseOver={()=>this.set(i+1)}
          onMouseOut={()=>this.set(-(i+1))}>
         <div className='div' style={style1}>{item}</div>
         <img className='img' style={this.state.style}
          onClick={()=>this.delete(i)}  src={svg} />
            </div>
    ))
     return <div>
    <Wrapper ref={this.wrap} >
        <Header> 
            <h2>
                <label htmlFor='input'>Todo App</label>
            </h2>
        </Header>
            <Main>
         <button  onClick={():void=>this.press1(0)} className='but1'>+</button>
        <div className='main1'>
        <input id='input' ref={this.ref} value={this.state.value}
        style={{backgroundColor:this.state.backgroundColor}}
        onFocus={():void=>this.focus(0)} onBlur={():void=>this.focus(1)} 
        onChange={(e:ChangeEvent<HTMLInputElement>):void=>this.setState({value:e.target.value})}
        placeholder=" Add your new todo"
              type="text" />
             </div>
             <button onClick={():void=>this.press1(1)} className='ser'>search</button>
          </Main>   
    <TodoList>
        {items}
    </TodoList>
    <Footer>
      <div className="con">you have {this.state.con} pending tasks</div>
       <button onClick={this.clear.bind(this)} className='but2'> Clear All</button>
    </Footer>
  </Wrapper>
</div>
        }
    }