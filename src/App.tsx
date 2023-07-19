import React, { ReactNode } from "react";
import { BrowserRouter as Router, Route, Routes,Link,Outlet,useParams, Params } from "react-router-dom";
import Gallows from './components/Gallows';
import Todo from "./components/Todo";
import Snake from "./components/Snake";
import  TicTacToe  from "./components/TicTacToe";
type obj={
    id:string,
    name:string
}
const games:Array<obj>=[
{id:'1', name: "Tic-tac-toe"}, 
 {id: '2', name: "Gallows"}, 
 {id: '3', name: "Snake"} 
            ]
            interface Props{
              item: Array<obj>
             }
            interface style{
              width?:string,
              textAlign?:any
            }
      

            class Apps extends React.Component<style>{
                render():React.ReactNode{
                  const state:style={
                     width:'100%',
                     textAlign:'center'
                  }
                    return <div className='list0'>  
                   <div style={state}><h2><Link to='/todo'>Todo App </Link></h2></div> 
                   <div style={state}><h2><Link to='/games'>Games App </Link></h2></div> 
                </div>
                }
            }
            class TodoApp extends React.Component{
                render(): React.ReactNode {
                    return <div>
                       <Todo />
                    </div>

                }
            }
            class GamesApp extends React.Component{
              render():React.ReactNode{
                const style={
                    textAllign:'center',
                    marginLeft:'60px',
                }
                
                return <div style={style}>
                        <h2>games</h2>
                       <Outlet />
                    </div>
            }
            }
            class Games extends React.Component<Props>{
                render():React.ReactNode{
                    const style={
                        textAllign:'center',
                        marginLeft:'60px',
                    }
                    const list:JSX.Element[]=this.props.item.map(({id,name}:obj,index:number)=>{
                   return <div key={index} className='list1'>
                <h3><Link to={`/games/${id}`}>{name}</Link></h3>
                          </div>
                             })
                    return <div style={style}>
                            <div className='list'>
                            {list}
                        </div>
                    </div>
                }
            }
           
           const Game:React.FC<Props>=({item}):any=>{
 const params:Readonly<Params<string>> = useParams()
                const game:any = item.find((x)=>x.id == params.id)
                if (game.name=='Gallows') {
                    const style1={marginLeft:'-90px'}
                    const style2={marginTop:'50px',marginLeft:'20px'}
                    return <div>
                         <h2> {game.name}</h2>
                        <div style={style1}><Gallows /></div>
                     <div style={style2}><Link  to='/'>MAIN</Link></div> 
                        </div>
                }
                if (game.name=='Tic-tac-toe') {
                 const style={width:'140%',marginLeft:'-30px'}
                    const style1={marginLeft:'-75px'}
                    const style2={marginTop:'50px',marginLeft:'28px'}
                    return <div >
                       <div style={style}><h2> {game.name}</h2></div>  
                        <div style={style1}><TicTacToe /></div>
                        <div style={style2}><Link to='/'>MAIN</Link></div>
                        </div>
                } 
                if (game.name=='Snake') {
                    const style1={marginLeft:'-100px'}
                    const style2={marginTop:'50px',marginLeft:'10px'}
                    return <div>
                         <h2> {game.name}</h2>
                        <div style={style1}><Snake /></div>
                        <div style={style2}><Link to='/'>MAIN</Link></div>
                        </div>
                } 
            }
            
            interface style1{
              textAllign:string,
              width:string,
              margin:string,
            
            }
            class Main extends React.Component{
               
                render():ReactNode{
                    const style:style1={
                        textAllign:'center',
                        width:'200px',
                        margin:'20px auto',
                      
                    }
                    return <div  style={style}>
                       <h1>DynamicApps</h1>
                        <Outlet  />
                        </div>
                }
            } 
function App():JSX.Element {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Main />}>
             <Route index element={<Apps />} />
                 <Route path="/todo" element={<TodoApp />} />
                 <Route path="/games" element={<GamesApp />}>
                       <Route index element={<Games item={games} />}/>
                       <Route path="/games/:id" element={<Game item={games}  />} />
                 </Route>
            </Route>
         </Routes>
     </Router>
  )
}

export default App;
