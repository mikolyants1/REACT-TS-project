export type obj={
    id:string,
    name:string
}
export const games:Array<obj>=[
{id:'1', name: "Tic-tac-toe"}, 
 {id: '2', name: "Gallows"}, 
 {id: '3', name: "Snake"} 
            ]
export  interface Props{
              item: Array<obj>
             }
 export interface style{
              width?:string,
              textAlign?:any
            }
          export  interface style1{
                textAllign:string,
                width:string,
                margin:string,
              
              }
export interface props{
    children:JSX.Element
  }    
export function Restart():JSX.Element{
    enum style{
        width='100%',
        height='100%'
    }
    return <button style={style}
      onClick={()=>window.location.reload()}>
        restart
        </button>
}