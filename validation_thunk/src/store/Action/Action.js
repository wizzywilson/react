import axios from 'axios';




export const submitHandler = (data) =>{
  return{
    type:'SUBMITHANDLER',
    data:data,

  }
}

export const changed = (e,key) =>{
  return{
    type:"CHANGED",
    e:e,
    key:key,
  }
}

export const dataFetch = (uname,pass) =>{
  return dispatch =>{
    var   headers= {'Accept': "application/nrcc.v1",'Content-Type': "application/json",}
 console.log(uname,pass)
    axios.post('http://10.2.0.132:3000/apis/login.json',
    { headers,
      "user": {
                "email": uname,
                "password": pass,
                "device_token": "131231231312312312312",
                "device_type": "android"
              }
    }).then(response=>{
      dispatch(submitHandler(response))
    }).catch(error=>dispatch(submitHandler(107)));
  };
}

export const apiHelpher = (response) =>{
  return{
    type:'API',
    value:response,
  }
}

export const Api = (token) =>{
  return dispatch =>{
    var   headers= {
      'Accept': "application/nrcc.v1",
      'Content-Type': "application/json",
      'Authorization':	'Token token='+token,
    }

    var params = {
      page:1,
      limit:10,
      approved:true,
    }


    axios.get('http://10.2.0.132:3000/apis/admins/users.json',
    { headers,params
    }).then(response=>{
      dispatch(apiHelpher(response))
    }).catch(error=>dispatch(apiHelpher(107)));
  }

}


export const logout = (token) =>{
  console.log(token)
  return dispatch =>{


    axios.delete('http://10.2.0.132:3000/apis/logout.json',
    { headers:{
      'Accept': "application/nrcc.v1",
      'Content-Type': "application/json",
'Authorization':	'Token token='+token,
    }

    }).then(response=>{
      dispatch(logoutHelper(response))
    }).catch(error=>dispatch(logoutHelper(107)));
  };
}

export const logoutHelper = (response) =>{
  return{
    type:'LOGOUT',
    vaue:response
  }

}
