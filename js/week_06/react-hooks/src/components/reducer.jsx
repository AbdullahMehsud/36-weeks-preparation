const reducer = (state, action) => {
    if(action.type === "INC"){
        return (state = state + 1)
    }
    if(action.type === "DEC"){
        
        return (state >= 1 ? state - 1 : state = 0)
    }

    if(action.type === "RESET"){
        return state = 0
    }
    return state
}

export default reducer