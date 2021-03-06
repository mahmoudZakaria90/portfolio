module.exports = {
  headerTextSlider() {
    let el = document.querySelector("#headerTextSlider");
    let data = [
      "A Front-end developer with +6 years of experience building websites and web apps.",
      "Thinking out of the box and seeking for knowledge is my vision.",
      'For hiring, <a href="mailto:m.zakria90@gmail.com">m.zakria90@gmail.com.</a>'
    ];

    function init() {
      el.innerHTML = `<span class="show">${data[0]}</span>`;
      for (let i = 1; i < data.length; i++) {
        let temp = `<span>${data[i]}</span>`;
        el.innerHTML += temp;
      }
    }

    function slide() {
      init();
      let i = 0;
      let slider = setInterval(function() {
        i++;
        if (i == data.length) {
          i = 0;
        }
        for (let i = 0; i < data.length; i++) {
          document.getElementById("headerTextSlider").children[i].className =
            "";
        }
        document.getElementById("headerTextSlider").children[i].className =
          "show";
      }, 5000);
    }
    slide();
  },
  headerNav() {
    let header = document.getElementById("home");
    let headerNav = document.getElementById("headerNavWrap");
    let headerBurger = document.getElementById("headerBurger");
    if (window.pageYOffset >= 200) {
      headerNav.classList.add("fixed");
      headerBurger.classList.add("black");
    } else {
      headerNav.classList.remove("fixed");
      headerBurger.classList.remove("black");
    }
  },
  headerBurgerInit() {
    let headerNav = document.getElementById("headerNavWrap");
    let headerBurger = document.getElementById("headerBurger");
    function cb(e) {
      e.preventDefault();
      this.classList.toggle("is-opened");
      headerNav.classList.toggle("is-opened");
    }
    headerBurger.addEventListener("click", cb);
  }
};
