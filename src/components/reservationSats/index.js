import { useState, } from "react";
import _ from "underscore";
import BarChart from "../charts";
import "./reservationSats.scss";

function ReservationSats(params) {
    const [selectedOption, setSelectedOption] = useState("Daily")
    const legendData = [
        {
            name:"Check In",
            color:"#145846",
            count:"23,451",
            change: 0.4
        },
        {
            name:"Check Out",
            color:"red",
            count:"20,441"
        }
    ]
    return (
       <div className="reservation-stats-wrapper">
            <div className="reservation-stats">
            <div className="title-wrapper">
                Reservation Stats
                <div className="date-range">
                    <div className="option" data-status={selectedOption === "Daily"} onClick={() => setSelectedOption("Daily")}>Daily</div>
                    <div className="option" data-status={selectedOption === "Weekly"} onClick={() => setSelectedOption("Weekly")}>Weekly</div>
                    <div className="option" data-status={selectedOption === "Monthly"} onClick={() => setSelectedOption("Monthly")}>Monthly</div>
                </div>
            </div>
            <div className="legend-section">
            {
                _.map(legendData, rec => {
                   return (
                    <div className="option" key={rec.name}>
                        <div><span className="color-indication" style={{backgroundColor: rec.color}}></span> {rec.name}</div>
                        <div>{rec.count} <span className="change" data-status={rec.change && true}>{rec.change && `${rec.change}%`}</span></div>
                    </div>
                   )
                })
            }
            </div>
            <div className="chart-body">
                <BarChart/>
            </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="title">Available Room Today   <span className="count">683</span></div>
                    <div className="bar"><span style={{width: "40%"}}></span></div>
                </div>
                <div className="card">
                    <div className="title">Sold Out Room Today   <span className="count">156</span></div>
                    <div className="bar"><span style={{width: "20%"}}></span></div>
                </div>
            </div>
       </div>
    )
}
export default ReservationSats