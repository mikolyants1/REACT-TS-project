import {Component,createRef,ReactNode,ChangeEvent,RefObject} from 'react';
import svg from '../red16.jpg'
import { prop,style2,union2 } from '../props/state';
interface web{
    text:Array<string>,
    value:string,
    con:number,
    style:{
      transform:string,
      transitionDuration:string,
      transitionTimingFunction:string
    },
    backgroundColor:string,
    height:number,
    progValue:number,
    progMass:number[],
   }
export default class Todo extends Component<prop,web>{
    readonly items:Array<string>=[]
     state: web
    constructor(props:prop){
     super(props)
     this.state={
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
      progValue:1,
      progMass:[],
    }
  }
  readonly ref=createRef<HTMLInputElement>()
  readonly wrap=createRef<HTMLDivElement>()
  set=(x:number):void=>{
    const img:NodeListOf<HTMLImageElement>=document.querySelectorAll('.img')
    img[x>0?x-1:-x-1].style.transform=`translateX(${x>0?0:50}px)`
    }
  change(e:ChangeEvent<HTMLInputElement>):void{
    this.setState({value:e.target.value})
    }
  clear():void{
    const {current}:RefObject<union2>=this.wrap
    if (current) current.style.height='200px'
    this.items.length=0
    this.setState({text:this.items,con:0,
    height:200,progMass:[1],progValue:1})
    }
  press=(x:number):void=>{
    const {height,value,progMass,con}:web=this.state
    const {current}:RefObject<union2>=this.wrap
    switch (x) {
    case 0:
     if (value!=='') {
     progMass.length=0
     this.state.progValue=0
     const val:number=height<400?height+50:height
     if (current) current.style.height=`${val}px`
     this.items.push(value)
     this.setState({text:this.items,con:con+1,height:val,
     progMass:progMass,progValue:this.state.progValue})
     this.ref.current?.focus()
     }
    break;
      case 1:
      const val:string=value.trim().toLowerCase()
      const text:string[]=this.items.filter((item:string):boolean=>{
      return item.toLowerCase().indexOf(val)!==-1
      })  
     const val1:number=text.length<5?50*text.length+200:400
     if (current) current.style.height=`${val1}px`
     this.setState({text:text,height:val1}) 
      break;
      default:
      break;
      }  
    }

  delete=(x:number):void=>{
    const {con,progMass,progValue}:web=this.state
    const {current}:RefObject<union2>=this.wrap
    progMass.push(con)
    const val:number=con<5?con*50+200-50:400
    if (current) current.style.height=`${val}px`
    this.items.splice(x,1)
    this.setState({text:this.items,con:con-1,height:val,
    progMass:progMass,progValue:progValue+1})
    }
  focus=(x:number):void=>{
  this.setState({backgroundColor:x==0?'rgb(210, 210, 210)':''})
    }
  render():ReactNode{  
    const {Wrapper,Header,Main,TodoList,Footer}:style2=this.props.struct
    const {text,style,progMass,progValue,backgroundColor}:web=this.state
    enum style1 {
      width='100%',
      marginTop='7px',
      marginLeft='10px',
      fontSize='16px'
        }
    enum style3 {
      marginTop='-4px'
        }
    const style4={
    backgroundColor:`${backgroundColor}`
    }
    const max:number=progMass.length!==0?progMass[0]:1
    const items:JSX.Element[]=text.map((item:string,i:number):JSX.Element=>(
        <div key={i} className='items'
          onMouseOver={():void=>this.set(i+1)}
          onMouseOut={():void=>this.set(-(i+1))}>
         <div className='div' style={style1}>
           {item}
         </div>
         <img className='img' style={style}
          onClick={():void=>this.delete(i)} src={svg} />
            </div>
    ))
     return (
    <Wrapper ref={this.wrap} >
        <Header> 
          <h2>
            <label htmlFor='input'>
                Todo App
            </label>
          </h2>
        </Header>
            <Main>
              <button className='but1'
               onClick={():void=>this.press(0)}>
                 +
              </button>
              <div className='main1'>
                <input id='input' ref={this.ref} style={style4} 
                value={this.state.value} onChange={this.change.bind(this)} 
                onFocus={():void=>this.focus(0)} onBlur={():void=>this.focus(1)} 
                placeholder=" Add your new todo" type="text" />
              </div>
              <button onClick={():void=>this.press(1)}
                className='ser'>
                search
              </button>
           </Main>   
           <TodoList>
               {items}
           </TodoList>
           <Footer>
             <div className="con">
               <div>
                  you have {this.state.con} pending tasks
               </div>
               <div style={style3}>
                 progress: 
                 <meter min={0} max={max}
                   value={progValue}>
                 </meter>
                  {Math.floor(progValue/max*100)}%
               </div>
             </div>
             <button className='but2'
              onClick={this.clear.bind(this)}>
                Clear All
             </button>
          </Footer>
       </Wrapper>
     )
  }
}