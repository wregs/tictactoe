const GameRules = ()=> {
	const switchPlayer = (state) => {		
		const playerValue = state.playerValue === 'X'?'O':'X'			
		return Object.assign({},state,{playerValue})
	}
	const checkWin = (state) => {		
		const check = (start,inc)=>{
			const v = [0,1,2].map(i=>state.cells[start+i*inc])
			if (v.some(e=>e===undefined)) return undefined
			if (v.every(e=>e == v[0])) return v[0]
			return undefined
		}
		/*
		win conditions = 0,1,2 -> same
						 3,4,5 -> same
						 6,7,8 -> same
						 
						 0,3,6 -> same
						 1,4,7
						 2,5,8
						 
						 0,4,8
						 2,4,6*/
		const win = check(0,1) || check(3,1) || check(6,1) || 
		check(0,3) || check(1,3) || check(2,3) ||
		check(0,4) || check(2,2)
		if(win) return Object.assign({},state,{playerWon:win})
		return switchPlayer(state)
	}
	const apply = (state) => checkWin(state)	
	return {apply}
}

export default GameRules