
export const submitHandler = (uname,pass) =>{
  return{
    type:'SUBMITHANDLER',
    uname:uname,
    pass:pass,
  }
}

export const changed = (e,key) =>{
  return{
    type:"CHANGED",
    e:e,
    key:key,
  }
}



export const Api = (token) =>{
  return{
    type:'API',
    token:token,
  }
}






export const logout = (token) =>{
  return{
    type:'LOGOUT',
    token:token,
  }

}
