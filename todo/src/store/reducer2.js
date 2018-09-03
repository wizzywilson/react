const initialState = {
  datas:[],
  display:[]
}

const reducer2 = (state=initialState,action) =>{

  if(action.type==="ROWS"){
    return{...state,datas:action.val.data,display:action.val.data}

  }

  if(action.type==="FILTER"){
    const name = action.e.target.value;

    const dat=state.datas.filter((data)=>{
      return data.employee_name.startsWith(name);
    });
    return{...state,display:dat}
  }
  return state;
}

export default reducer2;
