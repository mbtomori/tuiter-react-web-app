const NavigationSidebar = (active) => {
 return(`
    <nav class="list-group rounded border-secondary">
      <a href="#" class="list-group-item list-group-item-action">
        <i class="fa-brands fa-twitter"></i>
      </a>
      <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action ${isActive("Home", active)}">
        <i class="fa-solid fa-house-chimney pe-2 float-start pt-1"></i>
        <span class="d-none d-xl-block position-relative float-start"> Home</span></a>
      <a href="../explore/index.html" class="list-group-item list-group-item-action ${isActive("Explore", active)}">
        <i class="fa-solid fa-hashtag pe-2 float-start pt-1"></i>
        <span class="d-none d-xl-block position-relative float-start">Explore</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action ${isActive("Messages", active)}">
        <i class="fa-solid fa-bell pe-2 float-start pt-1"></i>
        <span class="d-none d-xl-block position-relative float-start">Messages</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action ${isActive("Bookmarks", active)}">
        <i class="fa-solid fa-bookmark pe-2 float-start pt-1"></i>
        <span class="d-none d-xl-block position-relative float-start">Bookmarks</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action ${isActive("List", active)}">
        <i class="fa-solid fa-list-ul pe-2 float-start pt-1"></i>
        <span class="d-none d-xl-block position-relative float-start">List</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action ${isActive("Profile", active)}">
        <i class="fa-solid fa-user pe-2 float-start pt-1"></i>
        <span class="d-none d-xl-block position-relative float-start">Profile</span>
      </a>
      <a href="#" class="list-group-item list-group-item-action rounded-bottom">
        <i class="fa-solid fa-bars pe-2 float-start pt-1"></i>
        <span class="d-none d-xl-block position-relative float-start">More</span>
      </a>
      <button type="button" class="btn btn-primary rounded-pill mt-2">Tuit</button>
    </nav>
 `);
}
export default NavigationSidebar;

const isActive = (navTab, active) => {
  return (navTab === active ? `active` : null)
}