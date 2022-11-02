import React from "react";
import WhoToFollowList from "../who-to-follow-list";

const ProfileComponent = () => {
    return(
        <div className="row mt-2">
            <h3>Profile!!!!</h3>
            <div className="col-10 col-lg-8 col-xl-8 border rounded px-0 py-3">
                <div className="row px-3">
                    <div className="col-1">
                        <i className="bi bi-arrow-left"></i>
                    </div>
                    <div className="col-11">
                        <div className="fw-bold">First Last</div>
                        <div className="text-secondary small"># Tweets</div>
                    </div>
                </div>
                <div>
                    <div className="position-relative">
                        <img src="../images/rose_banner.jpeg" className="w-100 px-0 mx-0 border-0"></img>
                        <img src="../images/Alice.jpg" className="h-50 rounded-circle card-img-overlay mx-3 my-5 top-50"></img>
                    </div>
                    <button className="rounded-pill btn btn-outline-secondary float-end w-25 mt-2 ps-3 pe-3 me-2 fw-bold text-black">Edit profile</button>
                </div>
                <div className="mt-5 px-3">
                    <div>Name</div>
                    <div className="text-secondary small">@handle</div>
                    <p className="text-dark small pt-2">profile description</p>
                </div>
                <div className="row px-3 pb-1 bt-0">
                    <div className="col-4 small text-secondary"><i className="bi bi-geo-alt text-secondary pe-2"></i>City, ST</div>
                    <div className="col-4 small text-secondary"><i className="bi bi-balloon text-secondary pe-2"></i>Born Month DD, YYYY</div>
                    <div className="col-4 small text-secondary"><i className="bi bi-calendar3 text-secondary pe-2"></i>Joined MONTH YYYY</div>
                </div>
                <div className="row px-3">
                    <div className="col-3">
                        <span className="fw-bold small">###</span><span className="ps-1 text-secondary small">Following</span>
                    </div>
                    <div className="col-9">
                        <span className="fw-bold small">###</span><span className="ps-1 text-secondary small">Followers</span>
                    </div>

                </div>
            </div>
           <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
           </div>
      </div>
   );
};
export default ProfileComponent;