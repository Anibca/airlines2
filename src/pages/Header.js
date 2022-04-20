import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="ui container center">
        <h2 >Airlines database</h2>

        <Link to='/flights'><button className="ui button blue"  > flights details</button></Link> 
        {/* <Link to='airline'><button className="ui button blue" > airline</button></Link> */}
      </div>
      </div>
      )
    }

export default Header;
