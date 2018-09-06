import {call,put,takeEvery} from 'redux-saga/effects'
import axios from 'axios';



//1. worker saga -  does all the heavy lifting
function* worker1(action){
    try{
          const response = yield call(axios.post,'http://10.2.0.132:3000/apis/login.json',{
            'headers': {'Accept': "application/nrcc.v1",'Content-Type': "application/json",},
            "user": {"email": action.uname,"password": action.pass,"device_token": "131231231312312312312","device_type": "android"},
          })


          yield put({type:"SHANDLER",data:response})

    }catch(e){
        console.log('request failed');
        console.log(e);
        yield put({type:"SHANDLER",data:107})
    }
}

function* worker2(action){

    try{
       const response = yield call(axios.get,'http://10.2.0.132:3000/apis/admins/users.json',{
         headers:{'Accept': "application/nrcc.v1",'Content-Type': "application/json",'Authorization':	'Token token='+action.token,},
         params : {page:1,limit:30,approved:true,},

       })
console.log(response.data.users)
       yield put({type:'APIHANDLER',data:response})
    }catch(e){

      console.log('request failed');
      console.log(e);
      yield put({type:"APIHANDLER",data:107})

    }
}


function* worker3(action){

    try{
       const response = yield call(axios.delete,'http://10.2.0.132:3000/apis/logout.json',{
         headers:{'Accept': "application/nrcc.v1",'Content-Type': "application/json",'Authorization':	'Token token='+action.token,}

       })

       yield put({type:'LOGOUTHANDLER',data:response})
    }catch(e){

      console.log('request failed');
      console.log(e);
      yield put({type:"LOGOUTHANDLER",data:107})

    }
}



//2. watcher saga
// watcher spawns a new task on each action
//constantly checks for an acion
function* watcher1(){
  yield takeEvery('SUBMITHANDLER',worker1);
  // takerevery takes two parameters, action and a workerfunction
}

function* watcher2(){
  yield takeEvery('API',worker2);
  // takerevery takes two parameters, action and a workerfunction
}

function* watcher3(){
  yield takeEvery('LOGOUT',worker3);
  // takerevery takes two parameters, action and a workerfunction
}


//3.root saga
//single entry point to start saga
function* saga() {
  yield [
    watcher1(),watcher2(),watcher3(),
  ]
}



export default saga;
