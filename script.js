function mobilemenu() {
    let x = document.getElementById("mobile-menu");
    if (x.className === "menu") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }