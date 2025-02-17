// Define a custom HTML element called 'header-component'
class Header extends HTMLElement { // Have my header html in one place so if i need to change something it changes on all my pages
    constructor() {
        super();
    }

    // When the custom element is connected to the DOM, execute this function
    connectedCallback() {
        this.innerHTML = `
  <header class="navigation-bar">
<header class="top-header">
  <div class="navbar-container">
    <ul class="navbar one" id="j">
      <div class="dropdown-menu-header">
        <li class="navbar-item icons">
          <a class="navbar-item icon" href="index.html">
            <i class="fa-solid fa-magnifying-glass"></i>
          </a>
          <a class="navbar-item icon" href="index.html">
            <i class="fa-solid fa-newspaper"></i>
          </a>
        </li>
      </div>
      <div class="logotext">
        <li class="navbar-item logoimage">
          <a class="navbar-item" href="index.html"><img style="width: 400px" src="Images/Asset 4.png" /></a>
        </li>
      </div>
      <ul class="contactbtn">
        <li class="contact">
          <a class="navbar-item" href="contact.html"> Contact Us </a>
        </li>
      </ul>
    </ul>
  </div>
</header>
<header class="header-two" id="headerTwo">
  <div class="navbar-container">
    <ul class="navbar two" id="navbar">
      <li class="navbar-item">
        <a class="navbar-a-item" href="index.html">Home</a>
      </li>
      <li class="navbar-item">
        <a class="navbar-a-item" href="gallery.html">Gallery</a>
      </li>
      <li class="navbar-item">
        <a class="navbar-a-item" href="historypage.html">History</a>
      </li>
      <li class="navbar-item">
        <a class="navbar-a-item" href="quiz.html">Quiz</a>
      </li>
      <li class="navbar-item dropdown-menu-name">
        <a href="collections.html" class="navbar-a-item dropdown-menu-name-a">
          Collections <i class="fa-solid fa-chevron-down"></i>
          <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        </a>
        <div class="dropdown-menu-header drop">
          <ul class="header-menu__dropdown-nav">
            <li>
              <a class="dropdown-item" href="https://sbhsoldboys.nz/southlandian/index.html#gsc.tab=0"> Year Books </a>
            </li>
            <li>
              <a class="dropdown-item" href="sports.html"> Sports </a>
            </li>
            <li>
              <a class="dropdown-item" href="academia.html"> Academia </a>
            </li>
            <li>
              <a class="dropdown-item" href="_Blank.html">
                Architecture
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="_Blank.html"> War </a>
            </li>
          </ul>
        </div>
      </li>
      <li class="navbar-item">
        <a class="navbar-a-item" href="about.html">About</a>
      </li>
    </ul>
  </div>
</header>
</header>
      `;
    }
}

customElements.define('header-component', Header); // when i put header-element tag in html it will act as the Header 