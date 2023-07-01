import React from "react";
type mass1=Array<number>
interface state{
    text:string,
    origBoard:number[],
    cress:Array<any>,
    combos:Array<mass1>,
    combos1:Array<mass1>,
}
interface style1{
    fontSize: string, width: string,
    backgroundColor:string,
    textAlign: any,
}
  export default  function TicTacToe():JSX.Element{ 
    const [state,setState]=React.useState<state>({text:'', origBoard:[0,1,2,3,4,5,6,7,8],
cress:[], combos:[ [0, 1, 2],[3, 4, 5], [6, 7, 8],
   [0, 3, 6],[1, 4, 7], [2, 5, 8], [0, 4, 8],[6, 4, 2] ], 
  combos1:[ [0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],
   [1, 4, 7], [2, 5, 8], [0, 4, 8],[6, 4, 2]
      ]})
    enum style {
    display= 'flex',
    width='247px',
    height='40px',
    border='1px solid black',
    justifyContent='space-between'
    }
    const style1:style1={
    fontSize: '30px', width: '100%',
    backgroundColor:'white',
    textAlign: 'center',
    }
    function press(n:number):void {
   const cells:NodeListOf<HTMLTableCellElement> = document.querySelectorAll("td")
   let con:number=0
		if (state.text=='') {
      if (cells[n].textContent!=='o') {
        cells[n].innerHTML='x'
        state.cress.push(n)
        
       con+1
      }
    if (con==1) {  
    if (n!==4) {
      cells[4].innerHTML='o'
    }else{
      let ran:number=[0,6,8][Math.floor(Math.random()*3)]
      cells[ran].innerHTML='o'
    }
    
    }else {
      const del:number[]=[]
       for (let i = 0; i < cells.length; i++) {
       if (cells[i].textContent=='o'||cells[i].textContent=='x') {
        del.push(i)
       }
       }
       for (let i = 0; i < del.length; i++) {
       for (let ind = 0; ind < state.combos.length; ind++) {
        for (let index = 0; index < state.combos[ind].length; index++) {
       if (state.combos[ind][index]==del[i]) {
        state.combos[ind].splice(index,1)
       }
        }
       }
       }
      let x1:number=0
      for (let i = 0; i < cells.length; i++) {
        if (cells[i].textContent=='x') {
          x1=i
          break
        }
      }

      const con1:Array<number>=[]
      for (let i = 0; i < state.combos.length; i++) {
    if (state.combos[i].length==1) {
     con1.push(i)
    }
    
      }
	  let con2:number=0
	  let con3:number=0
      for (let i = 0; i < state.combos1.length; i++) {
        if (state.combos1[i].every((x)=>cells[x].textContent=='o')){
    con2++
        }
        if (state.combos1[i].every((x)=>cells[x].textContent=='x')){
    con3++
        }
      }
      if (con3>0) {
        setState({text:'WIN',origBoard:state.origBoard,
         cress:state.cress, combos:state.combos, combos1:state.combos1,})
      }
      else if (state.combos.every((x)=>x.length==0&&state.text!=='WIN'&&state.text!=='LOSE')) {
        setState({text:'TIE',origBoard:state.origBoard,
        cress:state.cress, combos:state.combos, combos1:state.combos1})
        }
      if (con2>0) {
       setState({text:'LOSE',origBoard:state.origBoard,
       cress:state.cress, combos:state.combos, combos1:state.combos1})
      }
  else if (state.combos.every((x)=>x.length==0&&state.text!=='WIN'&&state.text!=='LOSE')) {
      setState({text:'TIE',origBoard:state.origBoard,
      cress:state.cress, combos:state.combos, combos1:state.combos1})
      }
      if (con1.length>0) {
        let con4:number=0
        for (let i = 0; i < con1.length; i++) {
        if (state.combos1[con1[i]].every((x)=>cells[x].textContent!=='o')) {
          cells[state.combos[con1[i]][0]].innerHTML='o'
         break
        }
        if (state.combos1[con1[i]].some((x)=>cells[x].textContent=='o')) {
          con4++
        }
        }
      if (con4==con1.length) {
        cells[state.combos[con1[0]][0]].innerHTML='o'
      }
      }else{
        let mas:number=0
        for (let i = 0; i < state.combos1.length; i++) {
          for (let ind = 0; ind < state.combos1[i].length; ind++) {
         if (state.combos1[i][ind]==state.cress[state.cress.length-1]&&state.combos[i].length!==0) {
          mas=i
          break
         } 
          }        
        }
        if (mas!==0) {
        cells[state.combos[mas][Math.floor(Math.random()*2)]].innerHTML='o'
        }
      }   
      }
	}
    }
            return <div style={{ width:'249px' }}>
                <tr>
                   <td onClick={()=>press(0)}></td>
                   <td onClick={()=>press(1)}></td> 
                   <td onClick={()=>press(2)}></td>
                 </tr>
                <tr>
                   <td onClick={()=>press(3)}></td>
                   <td onClick={()=>press(4)}></td>
                   <td onClick={()=>press(5)}></td>
                 </tr>
                <tr>
                   <td onClick={()=>press(6)}></td>
                   <td onClick={()=>press(7)}></td>
                   <td onClick={()=>press(8)}></td>
               </tr>
                <div style={style}><div style={style1}> {state.text}</div>
                <button className="res"  onClick={()=>window.location.reload()}>restart</button></div>       
                </div>
    }