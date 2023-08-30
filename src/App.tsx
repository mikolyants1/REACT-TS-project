import {ReactNode,useState,Component,FC} from "react";
import { BrowserRouter as Router, Route, Routes,Link,Outlet,useParams, Params } from "react-router-dom";
import { ChangeContext } from "./components/Context";
import Todo from "./components/Todo";
import {Restart,Props,obj,games,Struct,ThemeContext,Brand,themes} from "./props/state";
import styled,{IStyledComponent} from 'styled-components'
import { BaseObject} from "styled-components/dist/types"

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
                            <h2>
                              <Link to='/todo'>Todo App </Link>
                            </h2>
                         </div> 
                   <div style={style}>
                      <h2>
                        <Link to='/games'>Games App </Link>
                      </h2>
                   </div> 
                </this.Header>
                }
            }
            class TodoApp extends Component{
                render(): ReactNode {
                    return <div>
                       <Todo struct={Struct} />
                    </div>

                }
            }
            class GamesApp extends Component{
              render():ReactNode{
                enum style {
                    textAllign='center',
                    marginLeft='60px',
                }
                
                return <div style={style}>
                        <h2>games</h2>
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
                const list:JSX.Element[]=this.props.item.map(({id,name}:obj,i:number):JSX.Element=>(
                    <this.GamesItem key={i}>
                        <h3>
                           <Link to={`/games/${id}`}>{name}</Link>
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
           
           const Game:FC<Props>=({item}):JSX.Element|null=>{
                const params:Readonly<Params<string>> = useParams()
                const game:obj|undefined=item.find((x:obj):boolean=>x.id == params.id)
                const HomeLink:IStyledComponent<'web',BaseObject>=styled.div`
                margin-top:50px;
                margin-left:20px
                `
                if (typeof game!=='undefined'){
                const {Game,ml,marginLeft,name}:obj=game
                const Title:IStyledComponent<'web',BaseObject>=styled.div`
                width:140%;
                margin-left:${ml}
                `
               const Main:IStyledComponent<'web',BaseObject>=styled.div`
                margin-left:-${marginLeft}px
                `
            return <div>
                     <Title>
                          <h2> 
                            {name}
                         </h2>
                     </Title>
                        <Main>
                          <Game>
                            <Restart />
                          </Game>
                        </Main>
                      <HomeLink>
                        <Link to='/'>MAIN</Link>
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
             setState(state==themes.color1?themes.color2:themes.color1)
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
                 <Route path="/todo" element={<TodoApp />} />
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
