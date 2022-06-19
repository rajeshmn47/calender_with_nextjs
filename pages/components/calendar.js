import React, { Component } from 'react';
import CalendarDays from './calendar-days';
import { useState,useEffect } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
export default function Calendar(){

    const[weekdays,setWeekdays] = useState(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
    const[months,setMonths] = useState(['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December']);

    const[
      currentDay,setCurrentDay]=useState( new Date())
      const [value, setValue] = useState(
        new Date('2014-08-18T21:11:54'),
      );

  const changeCurrentDay = (day) => {
    setCurrentDay(new Date(day.year, day.month, day.number));
  }

  const nextDay = () => {
    setCurrentDay(new Date(currentDay.setDate(currentDay.getDate() + 1)) );
  }

  const previousDay = () => {
    setCurrentDay(new Date(currentDay.setDate(currentDay.getDate() - 1)) );
  }


  const handleChange = (newValue) => {
    setValue(newValue);
  };

    return (
      <>
         <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      <div className="calendar">

        <div className="calendar-header">
          <div className="title">
            <h2>{months[currentDay.getMonth()]} {currentDay.getFullYear()}</h2>
          </div>
          <div className="tools">
            <button onClick={previousDay}>
              <span className="material-icons">
              <ArrowBackIosIcon style={{fontSize:'12px'}}/>
                </span>
            </button>
            <p>{months[currentDay.getMonth()].substring(0, 3)} {currentDay.getDate()}</p>
            <button onClick={nextDay}>
              <span className="material-icons">
            <ArrowForwardIosIcon/>
                </span>
            </button>
          </div>
        </div>
        <div className="calendar-body">
          <div className="table-header">
            {
            weekdays.map((weekday) => {
                return <div className="weekday"><p>{weekday}</p></div>
              })
            }
          </div>
          <CalendarDays day={currentDay} changeCurrentDay={changeCurrentDay} />
        </div>
      </div>
      </>
    )
}

