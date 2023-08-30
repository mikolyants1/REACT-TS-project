import {ReactNode,ChangeEvent,createRef,RefObject,Component} from "react";
import { props ,union1} from "../props/state";
type mass=Array<string>
interface gal{
    name:Array<mass>,
    skin:Array<mass>,
    val:union1,
    win:number,
}
interface style{
    margin:string,
    width:string,
} 

type union3=gal|undefined
type union4=HTMLInputElement|null

export default class Gallows extends Component<props,gal>{
   public state:gal
   constructor(props:props){
     super(props)
     this.state={
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
       }
     }
    x:number=[0,1,2,3,4,5][Math.floor(Math.random()*6)]
    readonly ref=createRef<HTMLInputElement>()
    readonly ref1=createRef<HTMLDivElement>()
    readonly ref2=createRef<HTMLDivElement>()
    readonly style:style={
    margin:'100px auto 0 auto',
    width:`300px`,
        } 
    componentDidMount():void {
    const [{current:r1},{current:r2}]
    :RefObject<HTMLDivElement>[]=[this.ref1,this.ref2]
    if (r1) {
     r1.style.cssText=`margin-left:45px;width:200px;
     justify-content: space-between;display: flex;`
         }
    if (r2){
     r2.style.cssText=`width:200px;margin-left:50px;
     height:30px;text-align:center;font-size: 23px;`
        }
    }
    componentWillUpdate(nextProps:Readonly<props>,{win}:Readonly<gal>):void {
    const {style:s1}=document.querySelector('.a4') as HTMLElement
    const {style:s2}=document.querySelector('.a5') as HTMLElement
    const {style:s3}=document.querySelector('.a6') as HTMLElement
    const {style:s4}=document.querySelector('.a7') as HTMLElement
    const {style:s5}=document.querySelector('.a8') as HTMLElement
    const {style:s6}=document.querySelector('.a9') as HTMLElement
    const {style:s7}=document.querySelector('.a10') as HTMLElement
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
     this.setResult('lose')
      }
    }
    setResult(result:string):union1 {
    const {current}:RefObject<HTMLDivElement>=this.ref2
    if (current) return current.textContent=result
    }
    change(e:ChangeEvent<HTMLInputElement>):void {
        this.setState({val:e.target.value})
    }
    press():void{    
    const {current}:RefObject<union4>=this.ref
    const {name,skin,val,win}:union3=this.state
    const [arr1,arr2]:mass[]=[skin[this.x],name[this.x]]
    if (val!=='') {   
    let con:number=0
    arr1.forEach((_:string,i:number,arr:string[]):void=>{
     val==arr2[i]?arr.splice(i,1,arr2[i]):con++           
       })
    if (con==arr1.length) this.setState({win:win+1})
    if (arr1.every((x:string):boolean=>x!=='_')){
       this.setResult('win')
       }
    }
    this.setState({skin:skin})
    if (current) {
     current.value=''
     current.focus()
    }
    }
    render():ReactNode{
        const {skin}:gal=this.state
        const mass:mass=skin[this.x]
        enum style{
            width='70px',
            height='20px'
          }
    const text:JSX.Element[]=mass.map((item:string,i:number):JSX.Element=>(
        <div key={i}>{item}</div>
           ))
    return <div style={this.style}>
            <div>
              <label htmlFor="galInput">Буква:</label>
              <input ref={this.ref} id="galInput" type="text"
               onChange={this.change.bind(this)} />
              <button onClick={this.press.bind(this)}>try</button>
            </div> 
            <div ref={this.ref1}>{text}</div>
            <div ref={this.ref2}></div>
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
 