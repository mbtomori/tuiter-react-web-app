import React from "react";
import TuitsList from "../tuits/tuits-list";
import WhoToFollowList from "../who-to-follow-list";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return(
        <>
        <div className="row mt-2">
            <div className="col-10 col-lg-7 col-xl-6">
                <h3>Home</h3>
                <WhatsHappening/>
                <TuitsList/>

            </div>
           <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
           </div>
      </div>
    </>
   );
};
export default HomeComponent;