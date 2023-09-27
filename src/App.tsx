import {ReactNode,useState,Component,FC} from "react";
import { BrowserRouter as Router, Route, Routes,Link,Outlet,useParams,Params} from "react-router-dom";
import { ChangeContext } from "./components/Context";
import Todo from "./components/Todo";
import {Restart,Props,obj,games,Struct,ThemeContext,Brand,
themes,color,GameMain,Title,HomeLink,Head} from "./props/state";
import styled,{IStyledComponent} from 'styled-components'
import { BaseObject} from "styled-components/dist/types";

class Apps extends Component{
readonly Header:IStyledComponent<'web',BaseObject>=styled.header`
      width: 400px;
      display:flex;
      margin-left:-100px;
         `
render():ReactNode{
      enum style{
         width='100%',
         textAlign='center'
         }
   return <this.Header>  
            <div style={style}>
              <Head>
                <Link to='/todo'>
                  Todo App
                </Link>
              </Head>
            </div> 
            <div style={style}>
              <Head>
                <Link to='/games'>
                  Games App 
                </Link>
              </Head>
            </div> 
          </this.Header>
            }
      }
class GamesApp extends Component{
   render():ReactNode{
      enum style {
         textAllign='center',
         marginLeft='60px',
           }    
   return <div style={style}>
            <Head>
               games
            </Head>
            <Outlet />
          </div>
         }
      }
      type base={
         children:JSX.Element,
         key:number
            }
class Games extends Component<Props>{
readonly GamesNav:IStyledComponent<'web',BaseObject>=styled.nav`
textAllign:'center';
marginLeft:'60px';
    & div {
      width:400px;
      margin-left:-60px;
      display:flex
      }
       `
readonly GamesItem:IStyledComponent<'web',base>=styled.div`
   width:150px;
   text-decoration:none;
            `
render():ReactNode{
   const {item}:Readonly<Props>=this.props
   const list:JSX.Element[]=item.map(({id,name}:obj,i:number):JSX.Element=>(
      <this.GamesItem key={i}>
        <h3>
          <Link to={`/games/${id}`}>
             {name}
          </Link>
        </h3>
      </this.GamesItem>
      ))
   return <this.GamesNav>
           <div>
             {list}
           </div>
         </this.GamesNav>
            }
      }
      type union=obj|undefined
      type union1=JSX.Element|null
const Game:FC<Props>=({item}):union1=>{
   const params:Readonly<Params<string>>=useParams()
   const game:union=item.find(({id}:obj):boolean=>id==params.id)
   if (typeof game!=='undefined'){
      const {Game,ml,marginLeft,name}:obj=game
             return <div>
                     <Title ml={ml}>
                        <Head> 
                          {name}
                        </Head>
                     </Title>
                        <GameMain marginLeft={marginLeft}>
                          <Game>
                            <Restart />
                          </Game>
                        </GameMain>
                      <HomeLink>
                        <Link to='/'>
                           MAIN
                        </Link>
                     </HomeLink> 
                    </div>
                }
                return null
         } 
function Main():JSX.Element{
   const [state,setState]=useState<string>(themes.color1)
   const [marg,setMarg]=useState<number>(0)
   const [rot,setRot]=useState<number>(0)
   const press=():void=>{
      const {color1,color2}:color=themes
      setState(state==color1?color2:color1)
      setMarg(marg==0?30:0)
      setRot(rot==0?90:0)
            }
            return <Brand>
                     <ThemeContext.Provider value={state}>
                        <h1>DynamicApps</h1>
                        <ChangeContext 
                         onClick={press}
                         marg={marg}
                         rotate={rot}
                           />
                        <Outlet />
                     </ThemeContext.Provider>
                   </Brand> 
            } 

function App():JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Apps />} />
            <Route path="/todo" element={<Todo struct={Struct} />} />
            <Route path="/games" element={<GamesApp />}>
               <Route index element={<Games item={games} />}/>
               <Route path=":id" element={<Game item={games}  />} />
            </Route>
         </Route>
      </Routes>
    </Router>
  )
}

export default App;
