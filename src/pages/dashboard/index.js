import Schedule from "../../components/schedule";
import ReservationSats from "../../components/reservationSats";
import { Fragment } from "react";

function Dashboard(params) {
    return (
       <Fragment>
            <Schedule/>
            <ReservationSats/>
       </Fragment>
    )
}
export default Dashboard