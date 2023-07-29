import React, { ReactNode} from "react";
import { BrowserRouter as Router, Route, Routes,Link,Outlet,useParams, Params } from "react-router-dom";
import { ChangeContext } from "./components/Context";
import Gallows from './components/Gallows';
import Todo from "./components/Todo";
import Snake from "./components/Snake";
import  TicTacToe  from "./components/TicTacToe";
import { style,Restart,Props,obj,games,Struct,ThemeContext,Brand,themes} from "./props/state";
import styled,{IStyledComponent} from 'styled-components'
import { BaseObject} from "styled-components/dist/types";

            class Apps extends React.Component<style>{
            readonly Header:IStyledComponent<'web',BaseObject>=styled.header`
                width: 400px;
                display:flex;
                 margin-left:-100px;
                `
                render():React.ReactNode{
                const state:style={
                     width:'100%',
                     textAlign:'center'
                  }
              return <this.Header>  
                         <div style={state}>
                            <h2>
                              <Link to='/todo'>Todo App </Link>
                            </h2>
                         </div> 
                   <div style={state}>
                      <h2>
                        <Link to='/games'>Games App </Link>
                      </h2>
                   </div> 
                </this.Header>
                }
            }
            class TodoApp extends React.Component{
                render(): ReactNode {
                    return <div>
                       <Todo struct={Struct} />
                    </div>

                }
            }
            class GamesApp extends React.Component{
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
            class Games extends React.Component<Props>{
            readonly GamesNav:IStyledComponent<'web',BaseObject>=styled.nav`
            textAllign:'center';
            marginLeft:'60px';
            & div {
            width:400px;
            margin-left:-60px;
            display:flex
            }
            `
            readonly GamesItem:IStyledComponent<'web',any>=styled.div`
            width:150px;
            text-decoration:none;
            `
             render():ReactNode{
                    const list:JSX.Element[]=this.props.item.map(({id,name}:obj,index:number)=>{
                   return <this.GamesItem key={index}>
                            <h3>
                               <Link to={`/games/${id}`}>{name}</Link>
                            </h3>
                        </this.GamesItem>
                             })
                    return <this.GamesNav>
                             <div>
                               {list}
                             </div>
                         </this.GamesNav>
                }
            }
           
           const Game:React.FC<Props>=({item}):JSX.Element|null=>{
                const params:Readonly<Params<string>> = useParams()
                const game:any = item.find((x:obj)=>x.id == params.id)
                const HomeLink:IStyledComponent<'web',BaseObject>=styled.div`
                margin-top:50px;
                margin-left:20px
                `
                if (game.name=='Gallows') {
                    const Title=styled.div`
                    width:140%;
                 margin-left:-10px
                `
                    const Main=styled.div`
                margin-left:${game.marginLeft}
                `
                    return <div>
                     <Title>
                          <h2> 
                            {game.name}
                         </h2>
                     </Title>
                        <Main>
                            <Gallows>
                                <Restart />
                            </Gallows>
                        </Main>
                      <HomeLink>
                        <Link  to='/'>MAIN</Link>
                     </HomeLink> 
                    </div>
                }
                if (game.name=='Tic-tac-toe') {
                 const Title=styled.div`
                    width:140%;
                 margin-left:-30px
                `
                const Main=styled.div`
                margin-left:${game.marginLeft}
                `
                    return <div>
                       <Title>
                           <h2>
                             {game.name}
                            </h2>
                        </Title>  
                           <Main>
                            <TicTacToe>
                                <Restart />
                            </TicTacToe>
                           </Main>
                        <HomeLink>
                            <Link to='/'>MAIN</Link>
                        </HomeLink>
                        </div>
                } 
                if (game.name=='Snake') {
                const Title:IStyledComponent<'web',BaseObject>=styled.div`
                width:140%;
                 margin-left:2px
                `
                const Main:IStyledComponent<'web',BaseObject>=styled.div`
                margin-left:${game.marginLeft}
                `
                    return <div>
                    <Title>
                         <h2>
                            {game.name}
                         </h2>
                    </Title>
                        <Main>
                            <Snake>
                                <Restart />
                            </Snake>
                            </Main>
                        <HomeLink>
                            <Link to='/'>MAIN</Link>
                        </HomeLink>
                        </div>
                } 
                return null
            }
            
            function Main():JSX.Element{
            const [state,setState]=React.useState<string>(themes.color1)
            const [marg,setMarg]=React.useState<number>(0)
            const [rot,setRot]=React.useState<number>(0)
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
                            <Outlet  />
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
                    <Route path="/games/:id" element={<Game item={games}  />} />
                 </Route>
            </Route>
         </Routes>
     </Router>
  )
}

export default App;
