import React from "react";
import WhoToFollowList from "../who-to-follow-list";
import Form from 'react-bootstrap/Form';
import {Link} from "react-router-dom";
import {FloatingLabel, FormGroup} from "react-bootstrap";

const EditProfileComponent = (
    {
        profile = {
            "firstName": 'Alice',
            "lastName": 'Liddell',
            "handle": '@realaliceinwonderland',
            "profilePicture": '../images/Alice.jpg',
            "bannerPicture": '../images/alice-banner.jpg',
            "bio": 'Adventurer in wonderland. Regularly flummoxed by the white rabbit and cheshire cat. Overly curious. Not a fan of mad royalty or my history reading.',
            "website": 'movies.disney.com/alice-in-wonderland-1951',
            "location": 'Bletchingdon, UK',
            "dateOfBirth": '7/28/1951',
            "dateJoined": '4/2012',
            "numberOfTweets": '543',
            "followingCount": '312',
            "followersCount": '3.4k'
        }
    }
) => {
    return(
        <div className="row mt-2">
            <div className="col-10 col-lg-8 col-xl-8 border rounded px-0 py-2">
                <div className="row px-3">
                    <div className="col-1 py-2">
                        <i className="bi bi-x-lg"></i>
                    </div>
                    <div className="col-9 py-2">
                        <div className="fw-bold"> Edit Profile</div>
                    </div>
                    <div className="col-2">
                        <button className="rounded-pill btn btn-dark float-end mb-2 ps-3 pe-3 me-1 fw-bold text-white">Save</button>
                    </div>
                </div>
                <div>
                    <div className="position-relative">
                        <div className="row wd-banner position-relative d-inline ms-0">
                            <img src={profile.bannerPicture} className="w-100 px-0 mx-0 border-0"></img>
                            <div className="col text-center card-img-overlay align-middle">
                                <button className="rounded-circle bg-secondary m-50 border-0 bg-opacity-75 mx-1"><i className="bi bi-camera text-white"></i></button>
                                <button className="rounded-circle bg-secondary m-50 border-0 bg-opacity-75"><i className="bi bi-x-lg text-white"></i></button>
                            </div>

                        </div>
                        <div className="row img-wrapper card-img-overlay top-50 h-100 ms-3">
                            <div className="col-2 card-img-overlay mt-5 img-fluid">
                                <img src={profile.profilePicture} className="h-50 rounded-circle mx-3"></img>
                                <div className="card-img-overlay rounded-circle start-50 pt-1">
                                    <button className="btn rounded-circle bg-secondary border-0 bg-opacity-75 mt-4">
                                        <i className="bi bi-camera text-white"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 px-3">
                    <Form>
                        <Form.Group className="mt-3 mb-3" controlId="formGroupName">
                            <FloatingLabel id="formName" label="Name">
                                <Form.Control as="input" id="formControlName" value={profile.firstName + " " + profile.lastName}/>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupBio">
                           <FloatingLabel id="formBio" label="bio">
                               <Form.Control as="textarea" style={{height: '100px'}} value={profile.bio} />
                           </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupLocation">
                            <FloatingLabel id="formLocation" label="Location" className="pb-3">
                                <Form.Control as="input" value={profile.location}/>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupWebsite">
                            <FloatingLabel id="formName" label="Website" className="mb-3">
                                <Form.Control as="input" value={profile.website}/>
                            </FloatingLabel>
                        </Form.Group>
                    </Form>
                    <div>
                        <div className="small">Birth Date &#183; <a href="#" className="link-primary text-decoration-none">Edit</a></div>
                        <div>{profile.dateOfBirth}</div>
                    </div>
                </div>
            </div>
           <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
           </div>
      </div>
   );
};
export default EditProfileComponent;

