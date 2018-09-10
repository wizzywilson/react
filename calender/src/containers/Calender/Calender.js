import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import {connect} from 'react-redux';

import classes from './Calender.css'
var moment = require('moment');
class Calender extends Component{
allrows=[];
dateIndex={};
modalDates=[];

componentWillUpdate = () =>{
this.allrows=[];
this.dateIndex={};

this.modalDates=this.props.modal.map(m=>m.at);

let unique_array = Array.from(new Set(this.modalDates))

this.modalDates=unique_array;


}

componentDidUpdate = () =>{
console.log(this.props.state);


}

componentWillReceiveProps(nextProps) {

      if(nextProps.state.scheduledata!==this.props.state.scheduledata){
  document.getElementById('M1').click();
      }
   }


// this.allrows.map((r,index)=>(q.includes(r)?p[r]=index:null))
// console.log(p);
// }

afterSchedule = (data,e) =>{
 this.props.afterSchedule(data);
 if(this.props.state.scheduledata===data){
     document.getElementById('M1').click();
 }




if (!e) var e = window.event;
    e.cancelBubble = true;
    if (e.stopPropagation) e.stopPropagation();
// now this part stops the click from propagating
   // window.event.stopPropagation();
}

schedule = (index) =>{

this.props.daySet(this.allrows[index])
document.getElementById('buton').click();
}

  render(){
    console.log(this.props.state);
var a=moment([this.props.year, this.props.month - 1]).startOf('month').day('sunday');
var b=moment([this.props.year, this.props.month - 1]).endOf('month').day('saturday');
console.log(b.diff(a, 'days')+1);

console.log(b);

var firstRows=[];
var lastRows=[];
var rows=[];


for(var i=1;i<=7;i++){

  if(a.format('M')==this.props.month){
      firstRows.push({
        val:a.format('D'),
        cl:null,
        day:a.format('L')
      });
this.allrows.push(a.format('L'));
  }
  else{
    firstRows.push({
      val:a.format('D'),
      cl:"dim",
      day:a.format('L')

    });

    this.allrows.push(a.format('L'));

  }
  if(a.format('D')==1){
    firstRows[firstRows.length-1].mon=a.format('MMM')
  }
  else{
    firstRows[firstRows.length-1].mon=null;
  }

a.add(1, 'day');
}
var i=0;
while(b.diff(a,'days')){


// lastRows.push(a.format('D'));
// a.add(1, 'day');

if(i===7){
  i=0;
  lastRows.push(rows);
  rows=[];
}

if(a.format('M')==this.props.month){
    rows.push({
      val:a.format('D'),
      cl:null,
      day:a.format('L')
    });
    this.allrows.push(a.format('L'));

}
else{
  rows.push({
    val:a.format('D'),
    cl:"dim",
    day:a.format('L')
  });
  this.allrows.push(a.format('L'));
}

if(a.format('D')==1){
  rows[rows.length-1].mon=a.format('MMM')
}
else{
  rows[rows.length-1].mon=null;
}


a.add(1, 'day');
i++;

}console.log(this.props.date);
if(a.format('M')==this.props.month){
    rows.push({
      val:a.format('D'),
      cl:null,
      day:a.format('L')
    });
    this.allrows.push(a.format('L'));

}
else{
  rows.push({
    val:a.format('D'),
    cl:"dim",
    day:a.format('L')
  });
  this.allrows.push(a.format('L'));

}

if(a.format('D')==1){
  rows[rows.length-1].mon=a.format('MMM')
}
else{
  rows[rows.length-1].mon=null;
}

lastRows.push(rows);
console.log(firstRows);
console.log(lastRows);

this.props.modal.map((m,index)=>{
  if(this.allrows.includes(m.at)){
    if(this.dateIndex[m.at]==null){
        this.dateIndex[m.at]=[index];
        console.log('dd');
    }
    else{
      console.log('ss');
      this.dateIndex[m.at]=[...this.dateIndex[m.at],index];
    }


  }
    return 1;
}


)
// this.props.modal.map((m,index)=>(this.allrows.includes(m.at)?(this.dateIndex[m.at]?(this.dateIndex[m.at]=[...this.dateIndex[m.at],index]):this.dateIndex[m.at]=index):null))


console.log(this.dateIndex);


    return(
      <Aux>
      <table>
      <thead >

      <tr >
        <td className=" dim wd">  Sun</td>
        <td className=" dim wd">  Mon</td>
        <td className=" dim wd">Tue</td>
        <td className=" dim wd">Wed</td>
        <td className=" dim wd">Thu</td>
        <td className=" dim wd">Fri</td>
        <td className=" dim wd">Sat</td>


      </tr>
      </thead>

<tr>
{firstRows.map((data,index)=>(


                  // <td key={index} onClick={()=>this.schedule(index)} id="row" className="firstrow"><span id="rowspan" className={data.cl}>{data.mon}  {data.val}</span><div className="reminder">{this.modalDates.map(d=>d==data.day?<div onClick={(e)=>this.afterSchedule(this.props.modal[this.dateIndex[data.day]],e)} className="rChild">{this.props.modal[this.dateIndex[data.day]].main} </div>:null)}</div></td>

                  // <td key={index} onClick={()=>this.schedule(index)} id="row" className="firstrow"><span id="rowspan" className={data.cl}>{data.mon}  {data.val}</span>
                  // <div className="reminder">{this.modalDates.map(d=>d==data.day?(<div className="rChild">{this.dateIndex[data.day]}</div>):null)}</div></td>


                  <td key={index} onClick={()=>this.schedule(index)} id="row" className="firstrow"><span id="rowspan" className={data.cl}>{data.mon}  {data.val}</span>
                  {this.modalDates.map(d=>d==data.day?(<div  className="reminder">{this.dateIndex[data.day].map(val=><div onClick={(e)=>this.afterSchedule(this.props.modal[val],e)} className="rChild">{this.props.modal[val].main}</div>)}</div>):null)}</td>



                ))}
</tr>




      {lastRows.map((rows,index1)=>(
        <tr>
          {rows.map((data,index)=>(<td key={index+7} onClick={()=>this.schedule(index+(7*index1+7))} id="row"><span  id="rowspan" className={data.cl}>{data.mon}  {data.val}</span>

    {this.modalDates.map(d=>d==data.day?(<div className="reminder">{this.dateIndex[data.day].map(val=><div onClick={(e)=>this.afterSchedule(this.props.modal[val],e)} className="rChild">{this.props.modal[val].main}</div>)}</div>):null)}</td>

  ))}
        </tr>
      ))}


    </table>


      </Aux>
    );
  }

}



const mapStateToProps = (state) =>{
  return({
    state:state,
    modal:state.modal,
    month:state.month,
    day:state.day,
    year:state.year,
    date:state.date,
    up:state.up,
  });
}

const mapDispatchToProps = (dispatch) =>{
  return({
    daySet:(day)=>dispatch({type:'DAYSET',day:day}),
    afterSchedule:(data)=>dispatch({type:'AFTERSCHEDULE',data:data}),


  });
}

export default connect(mapStateToProps,mapDispatchToProps)(Calender);
