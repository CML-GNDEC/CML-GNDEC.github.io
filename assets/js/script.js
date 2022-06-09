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


function snackbar(Notification) {try{var x = document.getElementById("snackbar");x.innerHTML=Notification;x.className = "show";setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);}catch(e){}};


// ========================= /Start-subscribe-form/=================================
var subscribe_local_data = get_data_object("subscribe_form_data");
var Subscribe_form = document.getElementById("subscribe_form");
// var s_form_check = 0;
async function handleSubscribe(event) {
  event.preventDefault();
  subscribe_local_data = get_data_object("subscribe_form_data");

  var data = new FormData(event.target);
  if (data.get("email") == ""){
    document.querySelector('.f-subscribe').setAttribute('required', '');
    snackbar("Please fill the Email");
    return;
  }
  else{
    fetch(event.target.action, {
      method: Subscribe_form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        snackbar("Thanks for subscribing!");
        Subscribe_form.reset();
        subscribe_local_data.data+=1;
        Update_data("subscribe_form_data",subscribe_local_data.data);
      } else {
        // console.log(response.status);
        snackbar("Oops! Facing some issues<br>Please try again later");
      }
    }).catch(error => {
      // console.log(error);
      snackbar("Oops! Facing some issues<br>Please try again later");
    });
  }
}
Subscribe_form.addEventListener("submit", function(event){
  event.preventDefault();
  subscribe_local_data = get_data_object("subscribe_form_data");
  if(subscribe_local_data != null){
    if(is_date_expired(subscribe_local_data.expire_date)){
      Delete_data("subscribe_form_data");
    }
    else{
      if(subscribe_local_data.data<2){
        handleSubscribe(event);
      }
      else{
        snackbar("Max 2 Attempts Reached<br>Try again later");
        Subscribe_form.reset();
      }
    }
  }
  else{
    Save_data("subscribe_form_data",0,Add_24_Hours_to_Current_Date());
    handleSubscribe(event);
  }
});

// ========================= /End-subscribe-form/=================================




// ========================= /Start-Contact-form/=================================
try{
    var Contact_form = document.getElementById("contact-form");
    var contact_local_data = get_data_object("contact_form_data");
  
    async function handleContactForm(event) {
      event.preventDefault();
      contact_local_data = get_data_object("contact_form_data");
      var data = new FormData(event.target);
      if (data.get("name") == ""){
        document.querySelector('#name').setAttribute('required', '');
        snackbar("Please fill your name");
        return;
      }
      if (data.get("email") == ""){
        document.querySelector('#email').setAttribute('required', '');
        snackbar("Please fill your email");
        return;
      }
      if (data.get("message") == ""){
        document.querySelector('#message').setAttribute('required', '');
        snackbar("Please type something in message");
        return;
      }
      else{
        fetch(event.target.action, {
          method: Contact_form.method,
          body: data,
          headers: {
              'Accept': 'application/json'
          }
        }).then(response => {
          if (response.ok) {
            snackbar("Thanks for giving your details<br>We will catch you soon.."); 
            Contact_form.reset();
            contact_local_data.data+=1;
            Update_data("contact_form_data",contact_local_data.data);
          } else {
            snackbar("Oops! Facing some issues<br>Please try again later");
          }
        }).catch(error => {
          snackbar("Oops! Facing some issues<br>Please try again later");
        });
      }
  
      
  
    }
    Contact_form.addEventListener("submit", function(event){
      event.preventDefault();
      contact_local_data = get_data_object("contact_form_data");
      if(contact_local_data != null){
        if(is_date_expired(contact_local_data.expire_date)){
          Delete_data("contact_form_data");
        }
        else{
          if(contact_local_data.data<2){
            handleContactForm(event);
          }
          else{
            snackbar("Max 2 Attempts Reached<br>Try again later");
            Contact_form.reset();
          }
        }
      }
      else{
        Save_data("contact_form_data",0,Add_24_Hours_to_Current_Date());
        handleContactForm(event);
      }
    });
  }
  catch(err){};
  
  // ========================= /End-Contact-form/=================================
  
  
// ==================== /Start-Local-Storage-Management/====================
function Add_24_Hours_to_Current_Date(){
    var newDate = new Date();
    newDate.setDate(newDate.getDate() + 1);
    return newDate;
  }
  
  function Save_data(key,data,expire_date) {
    var object = {data: data, expire_date: expire_date}
    localStorage.setItem(key, JSON.stringify(object));
  }
  
  function Update_data(main_key,data_value) {
    var val = JSON.parse(localStorage.getItem(main_key));
    var object = {data: data_value, expire_date: val.expire_date};
    localStorage.removeItem(main_key);
    localStorage.setItem(main_key, JSON.stringify(object));
    // console.log(JSON.parse(localStorage.getItem(main_key)).data);
  }
  
  function Delete_data(key) {
    localStorage.removeItem(key);
  }
  
  function get_data_object(key) {
    var object = JSON.parse(localStorage.getItem(key));
    if(object == null) {
      return null;
    }
    else{
      return object;
    }
  }
  
  function is_date_expired(expire_date) {
    if (expire_date != null && expire_date < new Date()) {
      return true;
    }
    else{
      return false;
    }
  }
  // ==================== /End-Local-Storage-Management/====================  
      
  function getDate(){}