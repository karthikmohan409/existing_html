class Sidebar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    var page = this.getAttribute('data-page')
    this.innerHTML = `
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">
        <li class="nav-item mb-4">
          <div class="text-center" >
            <img src="images/receptionist.png" class="image-edit-in-mini-sidebar" style="width:100%;padding: 5px 25px 0px 25px;">
            <h4 class="hide-in-mini-sidebar text-white" style="font-size:16px;font-weight: 700;margin-bottom:6px">Thiyagu</h4>
            <h4 class="hide-in-mini-sidebar" style="font-size:12px; color:#FFFFFFCC;">TJ's Sports Club - Admin</h4>
          </div>
        </li>
        <div class="nav-menus">
          <a href="">
          <li class="nav-item">
            <div class="nav-link" >
              <img src="images/dashboard.png">
              <span class="menu-title">Dashboard</span>
            </div>
          </li>
          </a>
          <a href="booking_management.html">
            <li class="nav-item ${page == 'booking_management' ? 'active' : ''}">
              <div class="nav-link" >
                <img src="images/meetings.png">
                <span class="menu-title">Booking management</span>
              </div>
            </li>
          </a>
          <a href="courses.html">
            <li class="nav-item ${page == 'courses' ? 'active' : ''}">
              <div class="nav-link" >
                <img src="images/package.png">
                <span class="menu-title">Courses</span>
              </div>
            </li>
          </a>
          <a href="">
            <li class="nav-item">
              <div class="nav-link" >
                <img src="images/customers.png">
                <span class="menu-title">Customers</span>
              </div>
            </li>
          </a>
          <a href="reports.html">
            <li class="nav-item ${page == 'reports' ? 'active' : ''}">
              <div class="nav-link" >
                <img src="images/reports.png">
                <span class="menu-title">Reports</span>
              </div>
            </li>
          </a>
          <a href="">
            <li class="nav-item">
              <div class="nav-link" >
                <img src="images/notifications.png">
                <span class="menu-title">Notifications</span>
              </div>
            </li>
          </a>
           <a href="billing.html">
            <li class="nav-item ${page == 'billing' ? 'active' : ''}">
              <div class="nav-link" >
                <img src="images/billings.png">
                <span class="menu-title">Billings</span>
              </div>
            </li>
          </a>
          <a href="">
            <li class="nav-item">
              <div class="nav-link" >
                <img src="images/settings.png">
                <span class="menu-title">Settings</span>
              </div>
            </li>
          </a>
          
         
        </div>
      
      </ul>
    </nav>


     
    `;
  }
}

customElements.define('sidebar-component', Sidebar);