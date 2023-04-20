import { useEffect, useState } from "react"
import moment from "moment";
import _ from "underscore";
import "./schedule.scss";
import Icons from "../Icons";

function Schedule(props) {
    const todayDate = moment();
    const format = "YYYY-MM-DD";
    const [curDate, setCurDate] = useState()
    const [curMonth, setCurMonth] = useState()
    const [curYear, setCurYear] = useState()
    const [selectedData, setSelectedDate] = useState(moment(todayDate).format(format))
    const [dateList, setDateList] = useState([])

    useEffect(() => {
        let dateList = getDate(moment())
        setCurMonth(moment(todayDate).format("MMMM"))
        setCurYear(moment(todayDate).format("YYYY"))
        setCurDate(todayDate)
        setDateList(dateList)
    },[])

    const getDate = (data) => {
        let today = data;
        let result = []
        let closestMonday = ""
        
        const startOfMonth = moment(today).startOf('month')
        let dayIndex = moment(startOfMonth).isoWeekday();
        if(dayIndex !== 1) {
            closestMonday = moment(startOfMonth).subtract(dayIndex-1 ,'days')
        } else {
            closestMonday = moment(startOfMonth).subtract(0 ,'days')
        }

        let closestSunday = ""
        const endOfMonth = moment(today).endOf('month')
        let lastDayIndex = moment(endOfMonth).isoWeekday();
        if(lastDayIndex !== 7) {
            closestSunday = moment(endOfMonth).add(((7 - lastDayIndex)) ,'days')
        } else {
            closestSunday = moment(endOfMonth).add(0 ,'days')
        }
    
        let rowCounter = 1
        let cellCounter = 1
        for (let date = new Date(closestMonday); date <=  new Date(closestSunday);) {
            let i = _.findIndex(result, r => r.rowCounter ===  rowCounter)
            if(i !== -1  && result[i]) {
                result[i].details.push({
                    day: moment(date).format('dd'),
                    date: Number(moment(date).format('DD')).toString(),
                    month: moment(date).format('MMM'),
                    year: moment(date).format('YYYY'),
                    disabled: moment(date).format('MMM') !== moment(today).format('MMM'),
                    today: moment(date).format(format) === moment(new Date()).format(format) ? true : false,
                    formatedDate: moment(date).format(format)
                })
            } else {
                result.push({
                    rowCounter: rowCounter,
                    details: [{
                        day: moment(date).format('dd'),
                        date: Number(moment(date).format('DD')).toString(),
                        month: moment(date).format('MMM'),
                        year: moment(date).format('YYYY'),
                        disabled: moment(date).format('MMM') !== moment(today).format('MMM'),
                        today: moment(date).format(format) === moment(new Date()).format(format) ? true : false,
                        formatedDate: moment(date).format(format)
                    }]
                })
            }
            date.setDate(date.getDate()+1)
            if(cellCounter === 7) {
                rowCounter += 1
                cellCounter = 1
            } else {
                cellCounter += 1
            }
        }
        return result
    }

    const goForthHandler = () => {
        let futureMonth = moment(curDate).add(1, 'M');
        let nextDate = moment(futureMonth).startOf('month');
        let dateList = getDate(nextDate)
        setCurDate(nextDate)
        setCurMonth(moment(nextDate).format("MMMM"))
        setCurYear(moment(nextDate).format("YYYY"))
        setDateList(dateList)
    }

    const goBackHandler = () => {
        let pastMonth = moment(curDate).subtract(1, 'M');
        let prevDate = moment(pastMonth).startOf('month');
        setCurDate(prevDate)
        setCurMonth(moment(prevDate).format("MMMM"))
        setCurYear(moment(prevDate).format("YYYY"))
        let dateList = getDate(prevDate)
        setDateList(dateList)
    }


    const data = [
        {
            title:"Queen Bed A-12324",
            username:"James Sukardi",
            time:"12min ago",
            pic:"",
            bundleImage:"",
            count:[3]
        },
        {
            title:"Deluxe Room B-12324",
            username:"Angela Mass",
            time:"12min ago",
            pic:"",
            bundleImage:"",
            count: ["16, 17, 18",""]
        }
    ]


    return (
        <div className="schedule-wrapper">
            <div className="title-wrapper">
                Recent Booking Schedule
                <div className="year-month-wrapper">
                    <Icons icon="double-left-dir" onClick={goBackHandler}/>
                    {curMonth} {curYear}
                    <Icons icon="double-right-dir" onClick={goForthHandler}/>
                </div>
            </div>
            <table>
                <thead>
                  <tr>
                  <th>Mon</th>
                   <th>Tue</th>
                   <th>Wed</th>
                   <th>Thu</th>
                   <th>Fri</th>
                   <th>Sat</th>
                   <th>Sun</th>
                  </tr>
                </thead>
                <tbody>
                {
                    _.map(dateList, (rec, rowIndex) => {
                        return <tr key={`row-${rowIndex+1}`}>
                            {
                                _.map(rec.details, r => {
                                    return <td  key={r.formatedDate} data-status={r.disabled} data-today={r.today} data-active={r.formatedDate === selectedData} onClick={() => setSelectedDate(r.formatedDate)}>{r.date}</td>
                                })
                            }
                        </tr>
                    })
                }
            </tbody>
            </table>
            <div className="card-wrapper">
                {
                    _.map(data, rec =>{
                        return (
                            <div className="card" key={rec.username + rec.title}>
                                <div className="bundle-image"></div>
                                <div>
                                    <div className="title">{rec.title}</div>
                                    <div className="name"><div className="user-pic"></div> {rec.username} <span>{rec.time}</span></div>
                                </div>
                                <div className="count" data-variant={rec.count.length > 1 ? "2" : "1"}>
                                    {rec.count}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Schedule