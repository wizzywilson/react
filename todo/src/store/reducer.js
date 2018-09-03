const initialState={
  names:['dfd','fgh'],
}

const reducer = (state = initialState , action)=>{

if(action.type==='ENTER'){
  if(action.e.key==='Enter'){
    const temp = [...state.names];
    temp.push(action.e.target.value)
    action.e.target.value=null;
    return{...this.state,names:temp};
  }
}
if(action.type==='REMOVE'){
  const temp = [...state.names];
  temp.splice(action.val,1);
  return{...state,names:temp};
}

  return state;
}

export default reducer;
