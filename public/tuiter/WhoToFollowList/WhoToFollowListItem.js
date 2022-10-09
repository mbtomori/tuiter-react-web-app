const WhoToFollowListItem = (who) => {
 return(`
   <div class ="list-group-item position-relative">
     <img class="wd-logo rounded-circle float-left img-fluid align-middle" src=${who.avatarIcon}>
     <div class="float-right d-inline-block align-middle ps-2">
      <span class="fw-bold small">${who.userName}<i class="fa-solid fa-circle-check ps-2"></i></span>
      <div class="wd-handle small">@${who.handle}</div>
    </div>
    <div class="float-end align-middle pt-1">
      <button type="button" class="btn btn-primary rounded-pill">Follow</button>
    </div>
   </div>
 `);
}
export default WhoToFollowListItem;