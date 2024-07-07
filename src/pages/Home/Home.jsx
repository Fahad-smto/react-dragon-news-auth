import { useLoaderData } from "react-router-dom";
import Header from "../../shared/header/Header";
import LeftSideNav from "../../shared/leftSideNav/LeftSideNav";
import Navbar from "../../shared/navbar/Navbar";
import RightSideNav from "../../shared/rightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./newsCard/NewsCard";


const Home = () => {
  const news =useLoaderData();
  console.log(news);
    return (
      <div  >


      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="border">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className=" md:col-span-2 border">
           {
            news.map(anews=> <NewsCard 
            key={anews._id}
            news={anews}
            ></NewsCard>)
           }
        </div>
        <div className="border">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
    );
};

export default Home;<h1>hello from home</h1>