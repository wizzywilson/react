const initialState={

  date:null,
  day:null,
  month:null,
  year:null,

  select:'y',




}

const reducer1 = (state=initialState,action) =>{

  if(action.type==='DATE'){


    var data={...state};
    data.day=action.date.getDate();
    data.month=action.date.getMonth();
    data.year=action.date.getFullYear();
    data.fulldate=action.date;

      return{...data}

  }

  if(action.type==='SELECT'){


    var data={...state};
    data.select=action.x;

      return{...data}

  }

  if(action.type==='NEXT'){


    var data={...state};
    if(data.select==='y'){
      data.year=data.year+1;



    }
    else if(data.select==='m'){
      data.month=data.month+1;
      if(data.month>12){
        data.month=1;
        data.year+=1;
      }


    }

return{...data}

  }

if(action.type==='DAYSET'){
  var data={...state};

  data.date=action.day;

  return{...data}
}


  if(action.type==='PREV'){
console.log('ddd');

    var data={...state};
    if(data.select==='y'){
      data.year=data.year-1;
    }
    else if(data.select==='m'){
      data.month=data.month-1;
      if(data.month<1){
        data.month=12;
        data.year-=1;
      }
    }

      return{...data}

  }


  return state;
}

export default reducer1;
