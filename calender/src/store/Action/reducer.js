const initialState={
  up:true,
  date:null,
  day:null,
  month:null,
  year:null,

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

  select:'y',

  modalPrivacy:"Public",
  modalSlot:"Single slot",
  choose:1,

modal:[],





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

  if(action.type==='SAVE'){


    var data={...state};
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



if(action.type==='PRIVACY'){
  var data={...state};

  data.modalPrivacy=action.x;

  return{...data}
}

if(action.type==='AFTERSCHEDULE'){
  var data={...state};
data.scheduledata=action.data;


  return{...data}
}


if(action.type==='SLOT'){
  var data={...state};

  data.modalSlot=action.x;

  return{...data}
}

if(action.type==='CHOOSE'){
  var data={...state};

  data.choose=action.x;

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
