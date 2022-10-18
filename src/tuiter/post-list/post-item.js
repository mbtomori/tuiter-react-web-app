/* eslint-disable */

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEllipsis as fasEllipsis} from '@fortawesome/free-solid-svg-icons'
import { faHeart as fasHeart} from '@fortawesome/free-solid-svg-icons'
import { faComment, faArrowUpFromBracket, faRetweet} from '@fortawesome/free-solid-svg-icons'

library.add(fasEllipsis, fasHeart, faComment, faArrowUpFromBracket, faRetweet)

const PostItem = (
    {
        post = {
         "_id": 100,
         "avatar": "../../public/images/elon_profile.jpeg",
         "userName": "Elon Musk",
         "handle": "@elonmusk",
         "time": "23h",
         "message": "Amazing show about @inspiration4x mission!",
         "image": "../../images/inspiration4.jpeg",
         "contentTitle": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
         "contentSnippet": "From training to launch to landing, this all-access docuseries rides along with the inspiration4 crew on the first all-civilian orbital space...",
         "contentOwner": "netflix.com",
         "numComments": "4.2K",
         "numRetweets": "3.5K",
         "numLikes": "37.5K"
        }
    }
) => {
    return (
        <article className="row border border-light p-2 rounded-top">
            <div className="col-1 wd-avatar img-fluid">
                <img src={post.avatar} className="rounded-circle"></img>
            </div>
            <section className="col-11 wd-tuiter-content ps-4">
                <div className="row wd-headings position-relative">
                    <div className="wd-left-heading col-11">
                        <span className="wd-username fw-bold small">{post.userName}</span>
                        <span className="wd-user-handle small text-secondary">{post.handle}</span>
                        <span className="wd-time small text-secondary">- {post.time}</span>
                    </div>
                    <div className="wd-right-heading float-end col-1"><FontAwesomeIcon icon={fasEllipsis} /></div>
                </div>
                <p className="wd-message small">{post.message}</p>
                <div className="wd-shared-content border border-light rounded-bottom rounded-top">
                    <img src={post.image} className="w-100 rounded-top border-bottom border-light"></img>
                        <div className="wd-content-text">
                            <h5 className="wd-content-title pt-2 small fw-bold">{post.contentTitle}</h5>
                            <div className="wd-content-snippet small text-secondary">{post.contentSnippet}</div>
                            <div>{post.contentOwner}</div>
                        </div>
                </div>
                <div className="row wd-tuit-interactions pt-2 pb-2">
                    <div className="wd-interaction-comment col-3 align-content-center text-secondary">
                        <a href="#" className="text-decoration-none text-secondary small">
                            <FontAwesomeIcon icon={faComment} className="pe-2 text-decoration-none text-secondary fa-1x"/>
                            {post.numComments}
                        </a>
                    </div>
                    <div className="wd-interaction-retweet col-3 align-content-center text-secondary">
                        <a href="#" className="text-decoration-none text-secondary small">
                            <FontAwesomeIcon icon={faRetweet} className="pe-2 text-decoration-none text-secondary fa-1x" />
                            {post.numRetweets}
                        </a>
                    </div>
                    <div className="wd-interaction-like col-3  text-decoration-none text-secondary">
                        <a href="#" className="text-decoration-none text-secondary small">
                            <FontAwesomeIcon icon={fasHeart} className="pe-2 text-secondary fa-1x"/>
                            {post.numLikes}</a>
                    </div>
                    <div className="wd-interaction-share col-3 text-decoration-none text-secondary">
                        <a href="#"><FontAwesomeIcon icon={faArrowUpFromBracket} /></a>
                    </div>
                </div>
            </section>
        </article>
    );
};
export default PostItem;