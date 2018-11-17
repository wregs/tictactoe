import React from "react"
import store from "../store/store.js"
import {Provider,connect} from "react-redux"
import {doSet} from "../actions/action-types.js"

const $Cell = (props) => {	
	const value = props.cells[props.id]
	const onClick  = (value)?null:()=>props.dispatch(doSet(props.id,props.playerValue))
	const style = {width:"1em",fontSize:"2em",height:"1em",border:"1px solid black",display:"inline-block",verticalAlign:"top"}
	return (<div style = {style} onClick = {onClick}>{value}</div>)
}
const Cell = connect(state => ({ cells: state.cells}))($Cell)
const $Board = (props) => {			
	return [
		[0,1,2].map(i=>(<div key= {i} style={{border:"1px solid",display:"table"}}>{
			[0,1,2].map(j=>(<Cell key = {j} id = {i*3+j} playerValue = {props.playerValue}/>))
		}</div>))			
	]	
}
const Board = connect(state => ({ playerValue: state.playerValue}))($Board)
const $$App = (props) => {			
	const player = v=> v==='X'? "1" : "2"
	const gameInfo = props.playerWon?`won player ${player(props.playerWon)}`:`turn player ${player(props.playerValue)}`
	return [		
		<Board key="board"/>,
		<div key="gameInfo">{gameInfo}</div>
	]		
}
const $App = connect(state => ({ playerValue: state.playerValue,playerWon:state.playerWon}))($$App)
const App = () => (<Provider store={store}><$App/></Provider>)
export default App