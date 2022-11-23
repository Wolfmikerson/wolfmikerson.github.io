//alert("YOOOOO");
    let me = document.querySelector("#mobile-menu")
    // me.addEventListener('click', () =>{
    //  me.classList.add('responsive');
    // })

    function display_menu() {
        let x = document.getElementById("mobile-menu");
        x.classList.add('responsive');
        x.classList.remove('navbar-contener');
        const me = document.getElementsByClassName('menu')[0];
        me.style.display = 'none';
        const lo = document.getElementsByClassName('logo')[0];
        lo.style.display = 'none';
        const cl = document.getElementsByClassName('closed')[0];
        cl.style.display = 'block';
        const cl1 = document.getElementsByClassName('portfolio')[0];
        cl1.style.display = 'flex';
        const cl2 = document.getElementsByClassName('about')[0];
        cl2.style.display = 'flex';
        const cl3 = document.getElementsByClassName('contact')[0];
        cl3.style.display = 'flex';
      }
    function hide_menu() {
      let x = document.getElementById("mobile-menu");
      x.classList.add('navbar-contener');
      x.classList.remove('responsive');
    }