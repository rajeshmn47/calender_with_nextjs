import React, { Component } from 'react';
import CalendarDays from './calendar-days';
import { useState,useEffect } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


export default function Calendar(){

    const[weekdays,setWeekdays] = useState(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
    const[months,setMonths] = useState(['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December']);

    const[
      currentDay,setCurrentDay]=useState( new Date())
   

  const changeCurrentDay = (day) => {
    console.log(day.year,day.month,day.number,day,'dynomodbb')
    setCurrentDay(new Date(day.year, day.month, day.number));
  }

  const nextDay = () => {
    setCurrentDay(new Date(currentDay.setDate(currentDay.getDate() + 1)) );
  }

  const previousDay = () => {
    setCurrentDay(new Date(currentDay.setDate(currentDay.getDate() - 1)) );
  }
    return (
      <>
  
      <div className="calendar">

        <div className="calendar-header">
          <div className="title">
            <h2>{months[currentDay.getMonth()]} {currentDay.getFullYear()}</h2>
          </div>
          <div className="tools">
            <button onClick={previousDay}>
              <span className="material-icons">
              <ArrowBackIosIcon style={{fontSize:'14px'}}/>
                </span>
            </button>
            <p>{months[currentDay.getMonth()]?.substring(0, 3)} {currentDay.getDate()}</p>
            <button onClick={nextDay}>
              <span className="material-icons">
            <ArrowForwardIosIcon  style={{fontSize:'14px'}}/>
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

