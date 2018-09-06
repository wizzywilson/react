const initialState={

date:{
  fulldate:null,
  day:null,
  month:null,
  year:null,
},



}

const reducer1 = (state=initialState,action) =>{

  if(action.type==='DATE'){


    var data={...state};
    data.date.day=action.date.getDate();
    data.date.month=action.date.getMonth();
    data.date.year=action.date.getFullYear();
    data.date.fulldate=action.date;

      return{...data}

  }




  return state;
}

export default reducer1;
