import { 
    HomeFilled, 
    HeartFilled,
    MessageOutlined,
    BellOutlined,
    MailOutlined,
    LineChartOutlined, 
    InfoCircleFilled, 
    RightOutlined, 
    LeftOutlined,
    DoubleRightOutlined,
    DoubleLeftOutlined,
    SettingFilled
} from "@ant-design/icons";
import logo from "./logo.png"

function Icons(props) {
    const { icon, onClick, styles={}, className='', extraElement } = props
    let iconToRender = null

    switch (icon) {
        case "message":
            iconToRender = <MessageOutlined />
            break;
        case "bell":
            iconToRender = <BellOutlined />
            break;
        case "mail":
            iconToRender = <MailOutlined />
            break;
        case "heart":
            iconToRender = <HeartFilled />
            break;
        case "home":
            iconToRender = <HomeFilled />
            break;
        case "info":
            iconToRender = <InfoCircleFilled />
            break;
        case "line-chart":
            iconToRender = <LineChartOutlined />
            break;
        case "logo":
            iconToRender = <img src={logo} alt="" />
            break;
        case "right-dir":
            iconToRender = <RightOutlined />
            break;
        case "left-dir":
            iconToRender = <LeftOutlined />
            break;
        case "double-left-dir":
            iconToRender = <DoubleLeftOutlined />
            break;
        case "double-right-dir":
            iconToRender =<DoubleRightOutlined />
            break;
        case "setting":
            iconToRender = <SettingFilled />
            break;
        case "drop":
            iconToRender = (
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" version="1.1">
                    <path d="M16.601 1.501c-0.138-0.154-0.337-0.251-0.559-0.251h-0.001c-0.221 0-0.42 0.096-0.557 0.248l-0.001 0.001c-1.214 1.352-11.859 13.338-11.859 18.001 0 5.064 5.729 11.25 12.417 11.25 6.643 0 12.334-6.186 12.334-11.25 0-4.662-10.569-16.647-11.774-17.999zM16.041 29.25c-5.777 0-10.917-5.453-10.917-9.75 0-3.276 7.412-12.386 10.915-16.368 3.479 3.983 10.836 13.090 10.836 16.368-0 3.836-4.652 9.75-10.834 9.75zM15.434 25.396c-2.838-0.853-5.090-2.877-6.231-5.497l-0.025-0.063c-0.11-0.287-0.382-0.487-0.702-0.487-0.414 0-0.75 0.336-0.75 0.75 0 0.094 0.017 0.185 0.049 0.268l-0.002-0.005c1.323 3.153 3.962 5.529 7.21 6.469l0.079 0.020c0.056 0.015 0.12 0.023 0.186 0.023h0c0.414-0.001 0.749-0.336 0.749-0.75 0-0.348-0.237-0.641-0.559-0.725l-0.005-0.001z"/>
                </svg>
            )
            break;
        default:
            break;
    }
    if(iconToRender) {
        return (
            <div className={`icon-wrapper ${className}`} onClick={onClick ? onClick :()=>{}} style={{...styles}}>
                {extraElement}
                {iconToRender}
            </div>
        )
    } else {
        return 'No Icon Found'
    }
}
export default Icons;