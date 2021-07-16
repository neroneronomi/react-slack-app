import { useContext, React } from "react";
import { UserContext } from "../../context/userContext";
import "./Header.scss";

function Header() {
  const { headers } = useContext(UserContext);
  const placeholder = `Search ${headers.uid}`;
  return (
    <div className="HeaderContainer">
      {/* Left Side of Header */}
      <div className="HeaderLeft">
        {/* add avatar */}
        {/* <i class="fas fa-user"></i> */}
        <div className="TimeIcon" title="History">
          <i className="far fa-clock"></i>
        </div>
      </div>
      {/* Center Side of Header */}
      <div className="HeaderSearch">
        <input placeholder={placeholder}></input>
        <i className="fas fa-search"></i>
      </div>
      {/* Right Side of Header  */}
      <div className="HeaderRight">
        <i className="far fa-question-circle" title="Help"></i>
      </div>
    </div>
  );
}

export default Header;
