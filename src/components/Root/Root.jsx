import { Outlet } from "react-router-dom";

import Nav from '../nav/Nav';

const Root = () => {
    return (
       <div>
            <div className="w-[95%] mx-auto">
            <Nav></Nav>    
            <Outlet></Outlet>
            </div>
           
         
           </div>
   
    );
};

export default Root;