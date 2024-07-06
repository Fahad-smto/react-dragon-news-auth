import { Outlet } from "react-router-dom";
import Header from "../shared/header/Header";
import Navbar from "../shared/navbar/Navbar";
import LeftSideNav from "../shared/leftSideNav/LeftSideNav";
import RightSideNav from "../shared/rightSideNav/RightSideNav";
import BreakingNews from "../pages/Home/BreakingNews";

 

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto font-poppins" >

         
         <Header></Header>
         <BreakingNews></BreakingNews>
         <Navbar></Navbar>
          <Outlet></Outlet>

         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
         <div className="border">
            <LeftSideNav></LeftSideNav>
            </div>
            <div className=" md:col-span-2 border">
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