"use strict";

const openTimeBox = document.querySelector(".oppenTime-box");
const informationTimeBox = document.querySelector(".information-oppenTime");
const closeBoxOPpenTime = document.querySelector(".close-information-oppenTime");

// Click show open time spa
const iconOpenBox = document.querySelector(".open-Time");
    const iconOpenBoxClick = () =>{
       if (openTimeBox.classList.contains("oppenTime-box-Click") && informationTimeBox.classList.contains("information-oppenTime-Click")){
            openTimeBox.classList.remove("oppenTime-box-Click");
            informationTimeBox.classList.remove("information-oppenTime-Click")
       }else{
            openTimeBox.classList.add("oppenTime-box-Click");
            informationTimeBox.classList.add("information-oppenTime-Click")
       }
    }
// click show menu mini responsive in Page

const menuMiniPage = document.querySelector(".menu-sub-page-respon");
if (menuMiniPage){
    const menuMiniResponsive = document.querySelector(".menu-mini-respon");
    
     menuMiniPage.addEventListener("click", () => {
        if (menuMiniResponsive.classList.contains("dpnon")) {
            menuMiniResponsive.classList.remove("dpnon");
        }else{
             menuMiniResponsive.classList.add("dpnon");
        }
     })
}

// click show menu sub responsive

const iconMenuSub = document.querySelector(".icon-menu-sub-responsive");
const menuSubResponsive = document.querySelector(".menu-sub-responsive");

    const iconOpenMenuSubClick = () => {
      if (menuSubResponsive.classList.contains("click-menu-sub-respon")) {
        menuSubResponsive.classList.remove("click-menu-sub-respon");
      } else {
        menuSubResponsive.classList.add("click-menu-sub-respon");
      }
    };




//    pocup===============
function test(){
     // document.querySelector('.content-modal-mockup').style.display = 'none';
     document.querySelector('.modal-mockup').innerHTML=`
     <div class="content-modal-mockup">
     <div class="item-modal-mockup">
        <img src="../src/Image/photo_2023-03-10_10-33-00.png" width="100px" alt="">
        <h5>"Mono Bovis Spa = Chạm đến làn da không tuổi"</h5>
        <h3>ƯU ĐÃI YÊU THƯƠNG</h3>
        <p>Nâng tầm sắc đẹp Việt</p>
        <img src="../src/Image/Screenshot 2023-03-12 160307.png" width="50%" alt=""> 
         <p class="title-give"> * Nhận món quà siêu khủng từ MonoSpa chỉ với 1 phút cập nhật đầy đủ *</p>
         <div class="form-modal text-center">
           
        <form>
            <div class="value-form-modal">
                <label>Họ và tên </label>
          :  <input type="text" name="name" placeholder="nhập tên anh/chị">
            </div>
            <div class="value-form-modal">
                <label>Số điện thoại :</label>
            <input type="text" name="phone" placeholder="nhập SĐT anh/chị">
            </div>
            <div class="value-form-modal">
                <label>Email</label>
           : <input type="email" placeholder="nhập email anh/chị">
            </div>
            <a href=""><button class="btn submit-form-modal">GỬI THÔNG TIN</button></a>
        </form>
                
         </div>
        <button class="close-modal btn" onclick="myStopFunction()"><i class='bx bx-x bx-tada' ></i></button>
      </div>
  </div>`;
}
const modal = setTimeout(test, 5000);
function myStopFunction() {
     clearTimeout(modal);
     document.querySelector('.content-modal-mockup').style.display = 'none';
   }


   /*VALIDATE CONTACT AND SINGLE BLOG*/

/*validate form contact*/
const form_contact = document.getElementById('form-contact');
const nameInput_contact = document.getElementById('name-form-contact');
const emailInput_contact = document.getElementById('email-form-contact');
const subjectInput = document.getElementById('subject-form-contact');
const messageInput = document.getElementById('form-contact');

if (form_contact){

  form_contact.addEventListener('submit', function(e) {
      e.preventDefault(); // prevent the form from submitting
      console.log(form_contact);
      // Validate name
      if (nameInput_contact.value.trim() === '') {
          document.getElementById('nameform-contact-error').textContent = 'Please enter your name';
      } else {
          document.getElementById('nameform-contact-error').textContent = '';
      }
      
      // Validate email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput_contact.value)) {
          document.getElementById('emailform-contact-error').textContent = 'Please enter a valid email address';
      } else {
          document.getElementById('emailform-contact-error').textContent = '';
      }
      
      // Validate subject
      if (subjectInput.value.trim() === '') {
          document.getElementById('subject-contact-error').textContent = 'Please enter a subject';
      } else {
          document.getElementById('subject-contact-error').textContent = '';
      }
      
      // Validate message
      if (messageInput.value === '') {
          document.getElementById('form-contact-error').textContent = 'Please enter a message';
      } else {
          document.getElementById('form-contact-error').textContent = '';
      }
      
      // Submit the form if all fields are valid
      if (nameInput_contact.value.trim() !== '' && emailRegex.test(emailInput_contact.value) && subjectInput.value.trim() !== '' && messageInput.value.trim() !== '') {
          form_contact.submit();
      }
  });
}
/*  end validate from contact */
    // validate form comment
    const form_cmt = document.getElementById('form-comment');
    const comment = document.querySelector('#comment');
    const nameComment = document.querySelector('#name-comment');
    const emailComment = document.querySelector('#email-comment');
    const website = document.querySelector('#website-comment');
    const commentError = document.querySelector('#comment-error');
    const nameCommentError = document.querySelector('#nameComment-error');
    const emailCommentError = document.querySelector('#emailComment-error');
    const websiteError = document.querySelector('#website-error');
    
    if (form_cmt){
      
      form_cmt.addEventListener('submit', function(event) {
        console.log(form_cmt);
        event.preventDefault();
      
        if (!comment.value) {
          commentError.textContent = 'Please enter a comment.';
        } else {
          commentError.textContent = '';
        }
      
        if (!nameComment.value) {
          nameCommentError.textContent = 'Please enter your nameComment.';
        } else {
          nameCommentError.textContent = '';
        }
      
        if (!emailComment.value) {
          emailCommentError.textContent = 'Please enter your emailComment.';
        } else if (!isValidEmailComment(emailComment.value)) {
          emailCommentError.textContent = 'Please enter a valid emailComment.';
        } else {
          emailCommentError.textContent = '';
        }
      
        if (website.value && !isValidUrl(website.value)) {
          websiteError.textContent = 'Please enter a valid URL.';
        } else {
          websiteError.textContent = '';
        }
      
        if (comment.value && nameComment.value && emailComment.value) {
          form_cmt.submit();
        }
      });
      
      function isValidEmailComment(emailComment) {
        const emailCommentRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailCommentRegex.test(emailComment);
      }
      
      function isValidUrl(url) {
        try {
          new URL(url);
          return true;
        } catch (error) {
          return false;
        }
      }
    }
    

/* end the validate form */

