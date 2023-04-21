import { Link } from "react-router-dom";
import _ from "underscore";
import Icons from "../../../components/Icons";
import { RightOutlined } from "@ant-design/icons";
import "./sidebar.scss"

function SideBar(props) {
    const { collapsed } = props
    let menuItems = [
        {
            display:"Dashboard",
            key:"dashboard",
            icon:"home",
            link:"/"
        },
        {
            display:"Apps",
            key:"apps",
            icon:"info",
            link:"/"
        },
        {
            display:"Charts",
            key:"charts",
            icon:"line-chart",
            link:"/"
        },
        {
            display:"Plugins",
            key:"plugins",
            icon:"heart",
            link:"/"
        }
    ]
    return (
        <div className="sidebar" data-status={collapsed}>
            {
                _.map(menuItems, item => {
                    return (
                        <Link key={item.key} className={"menu "+ item.key} to={item.link}>
                            <Icons icon={item.icon}/>
                            <div className="menu-title-wrapper">{item.display} <RightOutlined /></div>
                        </Link>
                    )
                })
            }
        </div>
    )
}
export default SideBar