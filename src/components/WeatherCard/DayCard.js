import React from 'react'
import moment from 'moment'
const DayCard = ({data,getDayForecast,parameter}) => {

    const date = moment(data);
    const dayName = date.format('dddd');

  return ( 
    <div className="bg-white  w-2/12 m-4 rounded-lg text-center hover:bg-black hover:text-white hover:border-2 hover:border-white" onClick={()=>{getDayForecast(parameter)}}>
         <p className="font-serif font-medium text-4xl p-2 ">{dayName}</p>
    </div> 
  )
}

export default DayCard
