import { Outlet } from "react-router-dom";
import Header from "../shared/header/Header";
import Navbar from "../shared/navbar/Navbar";
import LeftSideNav from "../shared/leftSideNav/LeftSideNav";
import RightSideNav from "../shared/rightSideNav/RightSideNav";

 

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto font-poppins" >

          <Navbar></Navbar>
         <Header></Header>
          <Outlet></Outlet>

         <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
         <div className="border">
            <LeftSideNav></LeftSideNav>
            </div>
            <div className="col-span-2 border">
              <h2>news comming soon ...</h2>
            </div>
            <div className="border">
              <RightSideNav></RightSideNav>
            </div>
         </div>
        </div>
        
    );
};

export default Root;