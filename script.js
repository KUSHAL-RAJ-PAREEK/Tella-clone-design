// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true,
// });

let open = true;


const zig_btn = document.querySelector(".auth_btn i");

zig_btn.addEventListener("click", ()=>{

   if(open){
 const opts = document.querySelector(".nav_open");
    opts.style.display = "none"

    opts.classList.remove("active")
   }else{
 const opts = document.querySelector(".nav_open");
    opts.style.display = "block"
    opts.classList.add("active")
   }

    open = !open;

})


console.log(zig_btn);