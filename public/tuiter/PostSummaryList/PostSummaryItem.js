const PostSummaryItem = (post) => {
 return(`
     <div class="row border m-0">
       <div class="col-9">
         <div class="text-secondary small">Web Development</div>
           <span class="fw-bold small">React JS
             <i class="fa-solid fa-circle-check ps-2 small"></i></span>
             <span class="text-secondary small"> - 2h</span>
             <p class="small fw-bold">React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs</p>
         </div>
         <div class="col-3 wd-tuit-img">
           <img src="../images/reactjs.png" class="float-end rounded mt-2" alt="react js logo">
       </div>
     </div>
 `);
}
export default PostSummaryItem;