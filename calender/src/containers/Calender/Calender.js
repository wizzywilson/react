import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import {connect} from 'react-redux';

import classes from './Calender.css'
var moment = require('moment');
class Calender extends Component{
allrows=[];
componentWillUpdate = () =>{
this.allrows=[];

}


schedule = (index) =>{

this.props.daySet(this.allrows[index])
document.getElementById('buton').click();


}

  render(){
    console.log(this.props.day);
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
      });
this.allrows.push(a.format('L'));
  }
  else{
    firstRows.push({
      val:a.format('D'),
      cl:"dim"
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
    });
    this.allrows.push(a.format('L'));

}
else{
  rows.push({
    val:a.format('D'),
    cl:"dim"
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
    });
    this.allrows.push(a.format('L'));

}
else{
  rows.push({
    val:a.format('D'),
    cl:"dim"
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
console.log(this.allrows);




    return(
      <Aux>
      <table>
      <thead >

      <tr >
        <td className=" dim">Sun</td>
        <td className=" dim">Mon</td>
        <td className=" dim">Tue</td>
        <td className=" dim">Wed</td>
        <td className=" dim">Thu</td>
        <td className=" dim">Fri</td>
        <td className=" dim">Sat</td>


      </tr>
      </thead>

<tr>
{firstRows.map((data,index)=>(


                  <td key={index} onClick={()=>this.schedule(index)} id="row" className="firstrow"><span id="rowspan" className={data.cl}>{data.mon}  {data.val}</span></td>

                ))}
</tr>




      {lastRows.map((rows,index1)=>(
        <tr>
          {rows.map((data,index)=>(<td key={index+7} onClick={()=>this.schedule(index+(7*index1+7))} id="row"><span  id="rowspan" className={data.cl}>{data.mon}  {data.val}</span></td>))}
        </tr>
      ))}


    </table>


      </Aux>
    );
  }
}



const mapStateToProps = (state) =>{
  return({
    month:state.month,
    day:state.day,
    year:state.year,
    date:state.date,
  });
}

const mapDispatchToProps = (dispatch) =>{
  return({
    daySet:(day)=>dispatch({type:'DAYSET',day:day}),
  });
}

export default connect(mapStateToProps,mapDispatchToProps)(Calender);
