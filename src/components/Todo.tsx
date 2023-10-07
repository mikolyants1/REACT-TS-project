import {Component,createRef,ReactNode,ChangeEvent,RefObject} from 'react';
import svg from '../red16.jpg'
import { prop,style2,union2,ClearButton,Item,Items,Img,Label,Static,Meter,
SerButton,SetButton,Count,Block,Input,Head } from '../props/state';
interface web {
    text:Array<string>,
    value:string,
    con:number,
    transform:string,
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
      transform:`translateX(50px)`,
      height:200,
      progValue:1,
      progMass:[],

    }
  }
  readonly ref=createRef<HTMLInputElement>()
  readonly wrap=createRef<HTMLDivElement>()
  set=(x:number):void=>{
    const img:NodeListOf<HTMLImageElement>=document.querySelectorAll('#img')
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
  press=(val:number):void=>{
    const {height,value,progMass,con}:web=this.state
    const {current}:RefObject<union2>=this.wrap
    switch (val) {
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
  render():ReactNode{  
    const {Wrapper,Header,Main,TodoList,Footer}:style2=this.props.struct
    const {text,transform,progMass,progValue}:web=this.state
    const max:number=progMass.length!==0?progMass[0]:1
    const items:JSX.Element[]=text.map((item:string,i:number):JSX.Element=>(
        <Items key={i} 
         onMouseOver={():void=>this.set(i+1)}
         onMouseOut={():void=>this.set(-(i+1))}>
         <Item>
           {item}
         </Item>
         <Img 
          id='img' 
          tran={transform}
          onClick={():void=>this.delete(i)} 
          src={svg} 
          />
       </Items>
    ))
  return (
    <Wrapper ref={this.wrap}>
      <Header> 
        <Head>
          <Label htmlFor='input'>
            Todo App
          </Label>
        </Head>
      </Header>
      <Main>
        <SetButton onClick={():void=>this.press(0)}>
            +
        </SetButton>
        <Block>
          <Input 
           id='input' 
           onChange={this.change.bind(this)}
           ref={this.ref}  
           value={this.state.value}  
           placeholder=" Add your new todo" 
           type="text" 
            />
         </Block>
         <SerButton onClick={():void=>this.press(1)}>
            search
         </SerButton>
       </Main>   
       <TodoList>
          {items}
       </TodoList>
       <Footer>
        <Count>
          <div>
            you have {this.state.con} pending tasks
          </div>
          <Static>
            progress: 
            <Meter min={0} max={max}
             value={progValue} />
             {Math.floor(progValue/max*100)}%
          </Static>
        </Count>
        <ClearButton onClick={this.clear.bind(this)}>
           Clear All
        </ClearButton>
      </Footer>
    </Wrapper>
     )
  }
}