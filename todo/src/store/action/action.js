import axios from 'axios'
export const rowsss = (response) =>{
  return{
    type: "ROWS",val:response,
  }
};

export const load = () =>{
  return dispatch =>{

    axios.get('http://dummy.restapiexample.com/api/v1/employees').then(response=>{
      dispatch(rowsss(response));

    }).catch(error=>{
      console.log(error);
    })

  }
}
