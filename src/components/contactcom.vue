<template>
    <div>
     
<div
      id="carouselExampleSlidesOnly"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            src="../assets/conact.jpg"
            alt="First slide"
            style="position: relative"
          />
        </div>
      </div>
      <div class="words" data-aos="fade-down" >
        <p style="color: #252525;  text-aligh:center ; font-size:70px; font-family: 'Anton', sans-serif;  word-spacing:15px ; "  data-aos="fade-down">GET IN TOUCH</p> 
         
      

     

        <h4 style="color:#7c7c7c;  margin-top=5px;"  data-aos="fade-down">
   WE’D LOVE TO HEAR FROM YOU
        </h4>
      </div>
    </div>
    <section id="contact"  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
<div class="container">
  <!-- Header -->
  <header>
    <h1 id="title" style="color:#6abf16; font-size:50px; font-weight:bold">Send Us A Quick Email</h1>
    <p id="description">Thank you for taking the time to tell us about you </p>
  </header>
  <!-- Form -->
  <form action="" id="survey-form" enctype="multipart/form-data" method="POST">
    <!-- Username -->
    <div class="form-option">
      <label for="name" id="name-label" style="color:#6abf16">name</label>
      <input type="text" id="name" name="username" placeholder="Enter your name" required>
    </div>
    <!-- Email -->
    <div class="form-option">
      <label for="email" id="email-label"  style="color:#6abf16">email</label>
      <input type="email" id="email" name="email" placeholder="Enter your email" required>
    </div>
    <!-- Age -->
    <div class="form-option">
      <label for="number" id="number-label"  style="color:#6abf16">age <span class="optional">(optional)</span></label>
      <input type="number" id="number" name="age" placeholder="Age" min="10" max="100">
    </div>
    <!-- Cooking Level [Radio Options] -->
    <div class="form-option">
      <p  style="color:#6abf16"> Our Services level?</p>
      <div class="form-radio-option">
        <input type="radio" id="excellent" name="cooking-level" value="excellent">
        <label for="excellent">excellent</label>
      </div>
      <div class="form-radio-option">
        <input type="radio" id="good" name="cooking-level" value="good">
        <label for="good">good</label>
      </div>
      <div class="form-radio-option">
        <input type="radio" id="acceptable" name="cooking-level" value="acceptable">
        <label for="acceptable">acceptable</label>
      </div>
      <div class="form-radio-option">
        <input type="radio" id="poor" name="cooking-level" value="poor">
        <label for="poor">poor</label>
      </div>
    </div>
    <!-- Select -->
    <div class="form-option">
      <p  style="color:#6abf16">do you want to be delivery?</p>
      <select name="want to be chef" id="dropdown">
        <option disabled selected value>Select Option</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
        <option value="i will think about it">I Will Think About It</option>
      </select>
    </div>
 <button type="button" class="btn btn-success" style="  border:3px solid white ;border-radius: 50px ; width:200px; height:50px ;background-color:#6abf16; font-size:13px; margin-top:70px;font-weight:bold" > SEND </button>
  </form>
</div>





    </section>

    <section  id="dd">
<section id="sec3" >
<div id="cover"><div id="covertext">
  <div data-aos="fade-right"><h1 style="">Request A Free Quote</h1></div>

<p data-aos="fade-right">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac consectetur augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>


  <div data-aos="fade-right"><button type="button" class="btn btn-primary" style=" ;  border-radius: 50px ; width:200px; height:50px ;background-color:#1675bf; font-size:13px; margin-top:70px;font-weight:bold"> CLICK HERE </button></div>
</div>
</div>
</section>
    </section>
    </div>
</template>
<script>
export default {
    name: "Footer",
};
</script>
<style scoped>
.words {
  position: absolute;
  top: 50%;
  margin-left: 600px;
  font-family: monospace;
  font-family: 'Bebas Neue', cursive;


}
#contact{
    height:150vh;

}
@import url("https://fonts.googleapis.com/css?family=Poppins:200i,400&display=swap");
*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
}
:root {
  --white-color: #fff;
  --greenish-color: #006d77;
}
::placeholder {
  font-size: 15px;
  font-family: inherit;
  color: var(--greenish-color);
}
:focus {
  border-color: #80bdff;
  box-shadow: 0 0 0 0.1rem rgba(0, 123, 255, 0.25);
  transition: 0.2s linear;
}
label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  text-transform: capitalize;
}
.optional {
  font-weight: lighter;
  font-size: 15px;
}
.form-option:not(:last-child) {
  margin-bottom: 20px;
}
body {
  font-family: "Poppins", sans-serif;
  line-height: 1.5;
  font-size: 16px;
  font-weight: 400;
}
body::after {
  position: fixed;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: hsl(232, 65%, 81%);
  background-image: linear-gradient(
      135deg,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url("https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  background-attachment: fixed;
  z-index: -1;
}
.container {
  width: 70%;
  margin: 75px auto;
}

.container header {
  text-align: center;
  padding: 10px;
  color: var(--white-color);
  margin-bottom: 25px;
}
.container header h1 {
  margin-bottom: 10px;
}
.container form {
  padding: 30px;
  background: var(--white-color);
  border-radius: 6px;
}
.form-option p {
  text-transform: capitalize;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 15px;
}
input,
textarea,
select {
  width: 100%;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px 12px;
  font-size: 18px;
  font-family: inherit;
  -webkit-accent-color: var(--greenish-color);
  -moz-accent-color: var(--greenish-color);
  accent-color: var(--greenish-color);
}
select option {
  text-transform: capitalize;
}
textarea {
  resize: vertical;
  height: 180px;
}
.form-radio-option {
  margin-bottom: 5px;
  display: flex;
  align-items: center;
}
.form-radio-option label,
.form-checkbox-option label {
  display: inline-block;
  font-size: 17px;
  font-weight: 500;
}
.form-radio-option input,
.form-checkbox-option input {
  display: inline-block;
  margin-right: 5px;
  width: 1.2rem;
  height: 1.2rem;
}
.submit {
  display: block;
  background: hsl(185, 100%, 32%);
  color: var(--white-color);
  text-transform: capitalize;
  cursor: pointer;
  font-weight: 400;
  letter-spacing: 1px;
  transition: background-color 0.2s linear;
}
.submit:hover {
  background: hsl(185, 100%, 28%);
}
@media (max-width: 991px) {
  .container {
    width: 88%;
  }
}
@media (max-width: 667px) {
  .container {
    width: 100%;
  }
  .container header h1 {
    font-size: 26px;
  }
  .container form {
    padding: 15px;
  }
}
#dd{
    height:70vh;
}

#cover{
  background-image: url(../assets/cover2.jpg);
  background-size: cover;
  height:70vh;
  position: relative;
}

#sec3 #covertext{

  height: 60vh;
  width: 120vh;
  top:0;
  bottom: 0;
  left: 0;
  right:0;
  margin: auto;


position: absolute;




}


#sec3 #covertext h1{
margin-top:70px;
 color:hsl(90, 79%, 42%); 
font-family: 'Yanone Kaffeesatz', sans-serif;
font-weight:bolder;
font-size:60px;
}

#sec3 #covertext p{
  margin-top:30px;
  font-size:20px;
}

#sec4{
  background-color: #6abf16;
  height: 90vh;
}

</style>