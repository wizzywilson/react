


export const load = () =>{
  
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

}