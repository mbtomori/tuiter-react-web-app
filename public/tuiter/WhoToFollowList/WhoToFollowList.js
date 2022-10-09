import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
   return(`
      <h4 class="small fw-bold">Who To Follow</h4>
      <ul class="list-group">
         ${
            who.map(who => {
               return(WhoToFollowListItem(who));
            }).join('')
         }
      </ul>
   `);
}
export default WhoToFollowList;