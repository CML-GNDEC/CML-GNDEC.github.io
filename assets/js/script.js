document.querySelectorAll(".member-pic").forEach(function (e) {
    e.onerror = function () { 
        // console.log(e.getAttribute('data-default'));
        e.setAttribute('src', e.getAttribute('data-default'));
        console.clear();
    };
});
const scrollToTopButton = document.getElementById('js-top');
const scrollFunc = () => {
    let y = window.scrollY;
    if (y > 700) { scrollToTopButton.className = "btn btn-dark show"; }
    else { scrollToTopButton.className = "btn btn-dark hide"; }
};
window.addEventListener("scroll", scrollFunc);
var pre = document.documentElement.scrollTop || document.body.scrollTop;
const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        if(pre<c){
            return;
        }
        else{
            pre = c;
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 25);
        }
    }
};
scrollToTopButton.onclick = function (e) {
    e.preventDefault();
    pre = document.documentElement.scrollTop || document.body.scrollTop;
    scrollToTop();
}

    window.onload = 
    function includeHTML() {
        // var z, i, elmnt, file, xhttp;
        // /* Loop through a collection of all HTML elements: */
        // z = document.getElementsByTagName("*");
        // for (i = 0; i < z.length; i++) {
        //   elmnt = z[i];
        //   /*search for elements with a certain atrribute:*/
        //   file = elmnt.getAttribute("w3-include-html");
        //   if (file) {
        //     /* Make an HTTP request using the attribute value as the file name: */
        //     xhttp = new XMLHttpRequest();
        //     xhttp.onreadystatechange = function() {
        //       if (this.readyState == 4) {
        //         if (this.status == 200) {elmnt.innerHTML = this.responseText;}
        //         if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
        //         /* Remove the attribute, and call this function once more: */
        //         elmnt.removeAttribute("w3-include-html");
        //         includeHTML();
        //       }
        //     }
        //     xhttp.open("GET", file, true);
        //     xhttp.send();
        //     /* Exit the function: */
        //     return;
        //   }
        // }
        // document.querySelector('.load').addEventListener('change', function(ee){
        //   console.log(document.querySelectorAll('.nav-link'));
        //   document.querySelectorAll('.nav-link').forEach(function(e){
        //     console.log("here");
        //     if (e.text.toLowerCase() == $('#info').attr('data-pagetype').toLowerCase()){
        //       if(!e.parentElement.hasClass('active')){
        //         e.parentElement.addClass('active');
        //       }
        //       if(e.parentElement.hasClass('@@'+e.text.toLowerCase())){
        //         e.parentElement.remove('@@'+e.text.toLowerCase());
        //       }
        //     }
        //     else{
        //       if(e.parentElement.hasClass('active')){
        //         e.parentElement.remove('active');
        //       }
        //       if(!e.parentElement.hasClass('@@'+e.text.toLowerCase())){
        //         e.parentElement.addClass('@@'+e.text.toLowerCase());
        //       }
        //     }
        //   });
        // });

        
      }
function getDate(){
  
}


      