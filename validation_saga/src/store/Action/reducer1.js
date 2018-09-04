const initialState={

  login:{

      uname: {
            elementType:'input',
            elementConfig:{type:'text',placeholder:'User Name'},
            elementLabel:'Username :',
            value:'',
      },
      pass:{
          elementType:'input',
          elementLabel:'Password :',
          elementConfig:{type:'password',placeholder:'Password'},
          value:''
      },

},
lstatus:null,
auth:null,
tabledata:null,



}

const reducer1 = (state=initialState,action) =>{

  if(action.type==='SHANDLER'){


    var data={...state};
    if(action.data===107){

      data.lstatus=false;

      return{...data}
    }
    else{
      data.lstatus=null;
      data.auth=action.data.data.user.authentication_token;
      return{...data}
    }
  }

  if(action.type==='CHANGED'){
    var data={...state};

    if(action.key==='uname'){data.login.uname.value=action.e.target.value}


    if(action.key==='pass'){data.login.pass.value=action.e.target.value}

    return{...data}

  }

  if(action.type==='APIHANDLER'){
    var data={...state};


      if(action.value===107){
        data.lstatus=false;

        return{...data}

      }
      else{
        data.tabledata=action.data.data.users;
        return{...data}
      }
  }

  if(action.type==='LOGOUTHANDLER'){
    var data={...state};
if(action.value!==107){
          data.lstatus=null;
          data.auth=null;
          data.tabledata=null;
          data.login.uname.value=null;
          data.login.pass.value=null;
}
      return{...data}
  }


  return state;
}

export default reducer1;
