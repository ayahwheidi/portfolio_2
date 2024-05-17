const navbar=document.querySelector('.navbar');
const headerContentSpan=document.querySelector('.header-content span');
const loading=document.querySelector('.loading');
const scrollToupPtn=document.querySelector('.scroll-to-up');
const aboutsection=document.querySelector('.about');
const navLinks=document.querySelectorAll(".nav-link");
console.log(navLinks);
//console.log(aboutsection.offsetTop);

//console.log(headerContentSpan.offsetTop);
window.addEventListener('scroll',function(){
    //console.log("hello");
    if(window.scrollY>=headerContentSpan.offsetTop){
        navbar.style.backgroundColor = "#fff";
    }
        else {
            navbar.style.backgroundColor = "transparent";
        }
if(window.scrollY > aboutsection.offsetTop){
    scrollToupPtn.classList.remove('opacity-0','invisible');
}
else{
    scrollToupPtn.classList.add('opacity-0','invisible');
}

})
/* loading screen*/ 
window.addEventListener('load',function(){
    window.scroll({
        top:0
      
    })
setTimeout( function(){
loading.classList.add('opacity-0','invisible')
document.body.style.overflow="auto";
},2000)

}
)/*scroll to top */
scrollToupPtn.addEventListener('click',function(){
window.scroll({
    top:0,
   behavior:'smooth',
})


})
/*smoothe scroll and chane activ class */
for(let i=0;i<navLinks.length;i++){
    navLinks[i].addEventListener('click',function(e){
e.preventDefault();
/*remove the activ class befer set it in the current click section" which was underscoor by red color "*/ 
//document.querySelector('.nav-link.active').classList.remove('active');
for(let j=0;j<navLinks.length;j++){
    navLinks[j].classList.remove('active');
}
navLinks[i].classList.add('active');
let currentid=this.getAttribute('href');
//console.log(currentid);
let targetSection=document.querySelector(currentid);
//console.log(targetSection);
window.scroll({
   top: targetSection.offsetTop,
   behavior:'smooth'
   
})

    })
}