import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import {useState,useEffect} from 'react'

function CalendarDays(props) {
  const [value, setValue] =useState(props.day);

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
  const handleChange = (newValue) => {
    console.log(newValue.getDate(),newValue.getDay(),'rajesh')
    setValue(newValue)
    const day={year:newValue.getFullYear(),month:newValue.getMonth(),number:newValue.getDate()}
    props.changeCurrentDay(day)
  };
  return (
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

    </div>
  )
}

export default CalendarDays;
