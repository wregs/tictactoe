import GameRules from "../rules/game-rules"
import {ACTION_SET} from "../actions/action-types"

const initState = { 	
	cells:new Array(9).fill(undefined),
	playerValue:'X',
	playerWon:undefined
}

const rootReducer = (state = initState,action) => {	
	const rules = GameRules()
	switch(action.type){		
		case ACTION_SET:
			if(state.cells[action.id] || state.playerWon) return state
			const cells = state.cells.slice()
			cells[action.id] = action.value
			return rules.apply(Object.assign({},state,{cells}))
		default: return state
	}	
}

export default rootReducer