const initialState={
  up:true,
  date:null,
  day:null,
  month:null,
  year:null,
  modalPrivacy:"Public",
  modalSlot:"Single slot",
  choose:1,
  modal:[],
  select:'y',

  scheduledata:{
    at:null,
    main:null,
    time1:null,
    time2:null,
    date1:null,
    date2:null,
    msg:null,
    time3:null,
  },
}

const reducer1 = (state=initialState,action) =>{

  if(action.type==='DATE'){

    let data={...state};
    data.day=action.date.getDate();
    data.month=action.date.getMonth();
    data.year=action.date.getFullYear();
    data.fulldate=action.date;
    return{...data}
  }

  if(action.type==='SELECT'){

    let data={...state};
    data.select=action.x;
    return{...data}
  }

  if(action.type==='REMOVE'){

    let data={...state};
    data.modal.map((a,index)=>(a===action.remove)?data.modal.splice(index, 1):null);
    return{...data}

  }

  if(action.type==='SAVE'){

    let data={...state};

    const  x={
      at:data.date,
      date1:action.a,
      date2:action.c,
      time1:action.b,
      time2:action.d,
      main:action.e,
      msg:null,
      time3:null,
    }

    if(data.choose===2){
        x.msg=action.a1;
    }
    else if(data.choose===3){
        x.time3=action.a1;
    }

    data.modal.push(x);
    return{...data}
  }

  if(action.type==='NEXT'){

    let data={...state};
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

  let data={...state};
  data.date=action.day;
  return{...data}

}



if(action.type==='PRIVACY'){

  let data={...state};
  data.modalPrivacy=action.x;
  return{...data}

}

if(action.type==='AFTERSCHEDULE'){

  let data={...state};
  data.scheduledata=action.data;
  return{...data}

}


if(action.type==='SLOT'){

  let data={...state};
  data.modalSlot=action.x;
  return{...data}

}

if(action.type==='CHOOSE'){

  let data={...state};
  data.choose=action.x;
  return{...data}

}

  if(action.type==='PREV'){

    let data={...state};
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
