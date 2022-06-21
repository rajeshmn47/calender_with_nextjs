import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import {useState,useEffect} from 'react';

export default function CalendarDays(props) {
  const [value, setValue] =useState(props.day);
  const [calenderdays, setCalenderdays] =useState(props.day);
  const [timings, setTimings] =useState(props.day);
  const[task,setTask]=useState()
const time=new Array(24).fill(null)
  const firstDayOfMonth = new Date(props.day.getFullYear(), props.day.getMonth(), 1);
  const weekdayOfFirstDay = firstDayOfMonth.getDay();
  let currentDays = [];

  for (let day = 0; day < 42; day++) {
    if (day === 0 && weekdayOfFirstDay === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
    } else if (day === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay));
    } else {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }

    let calendarDay = {
      currentMonth: (firstDayOfMonth.getMonth() === props.day.getMonth()),
      date: (new Date(firstDayOfMonth)),
      month: firstDayOfMonth.getMonth(),
      number: firstDayOfMonth.getDate(),
      selected: (firstDayOfMonth.toDateString() === props.day.toDateString()),
      year: firstDayOfMonth.getFullYear(),
      task:null,
      time:null
    }

    currentDays.push(calendarDay);
  }
  setCalenderdays(currentDays)
  const handleChange = (newValue) => {
    console.log(newValue.getDate(),newValue.getDay(),'rajesh')
    setValue(newValue)
    const day={year:newValue.getFullYear(),month:newValue.getMonth(),number:newValue.getDate()}
    props.changeCurrentDay(day)
  };
  const  handlesubmit=(e)=>{
e.preventDefault()
console.log('raesh')
var garuda=calenderdays
garuda.forEach(element,index => {
  if(element.date===props.day.getDate()&&element.month===props.day.getMonth()&&element.year===props.day.getFullYear()){
    element.task=task
    element.timings=timings
  }
});
  }
  return (
    <>
    <div className="table-content">
      {
        currentDays.map((day) => {
          return (
            <div className={"calendar-day" + (day.currentMonth ? " current" : "") + (day.selected ? " selected" : "")}
                  onClick={() => props.changeCurrentDay(day)}>
              <p>{day.number}</p>
            </div>
          )
        })
      }
         </div>
       <form onSubmit={handlesubmit}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
              </Stack>
    </LocalizationProvider>
 
   
  {time.map((t,index)=>
  <>
  <input type="radio" id="html" name="fav_language" value="HTML"/>
  <label for="html">{index<12?index<10?`0${index}:30-0${index+1}:30AM`:`${index}:30-${index+1}:30AM`:(index-12<10)?`0${index-12}:30-${index+1-12}:30PM`:`0${index-12}:30-${index+1-12}:30PM`}</label><br/>
  </>
  )}
  <input placeholder='task name' value={task} onChange={(e)=>setTask(e.target.value)}/>
  <input placeholder='task name' type='submit'/>
</form>
      </>
  )
}


