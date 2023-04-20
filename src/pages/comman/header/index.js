import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import Icons from "../../../components/Icons";
import "./header.scss"

function Header(props) {
    
    const {setCollapsed, collapsed } = props;

    return (
        <div className="header">
             <Icons 
                icon="logo" 
                className="logo-wrapper"
                extraElement={
                    <div className="toggle-button" data-status={collapsed} onClick={() => setCollapsed(!collapsed)}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                }
            />
            <div className="main-header-section">
                <div className="title">Primary Header</div>
                <Input
                    className="app-search"
                    placeholder="Search.."
                    style={{width: 307,height: 49}}
                    suffix={ <SearchOutlined /> }
                />
                <div className="user-profile-wrapper">
                    <Icons icon="mail" extraElement={<div className="count">76</div>} />
                    <Icons icon="bell"  extraElement={<div className="count">4</div>}/>
                    <Icons icon="message"  extraElement={<div className="count">15</div>}/>
                    <div className="user-profile"></div>
                </div>
            </div>
        </div>
    )
}
export default Header;