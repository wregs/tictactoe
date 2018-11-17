
const ACTION_SET = "set"

const doSet = (id,playerValue) => ({type:ACTION_SET,id,value:playerValue})

export {ACTION_SET,doSet} 