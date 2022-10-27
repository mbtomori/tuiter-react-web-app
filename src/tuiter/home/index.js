import React from "react";
import PostSummaryList from "../post-summary-list";
import TuitsList from "../tuits/tuits-list";
import WhoToFollowList from "../who-to-follow-list";

const HomeComponent = () => {
    return(
        <>
        <div className="row mt-2">
            <div className="col-10 col-lg-7 col-xl-6">
                <h3>Home</h3>
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