
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
            src="../assets/avada-movers-rates-background-scaled.jpg"
            alt="First slide"
            style="position: relative"
          />
        </div>
      </div>
      <div class="words" data-aos="fade-down" >
        <p style="color: black;  margin-bottom: 20px  ; font-size:70px;"  data-aos="fade-down">MOVING RATES</p> 
         
      

     

        <h4 style="color:#7c7c7c;  margin-top=10px;"  data-aos="fade-down">
           LOW COST, HIGH QUALITY MOVERS
        </h4>
      </div>
    </div>
   <section id="pricingTable" >
<div class="container promo-container" style="margin-top:200px;"   data-aos="fade-right">
    <div class="promos bg-base-1">
        <div class="promo first" style="height:500px; width:500px;">
            <h4 class="heading heading-5 strong-600">Basic</h4>
            <ul class="features">
                <li class="brief">Basic membership</li>
                <li class="price">$69</li>
                <li>Some great feature</li>
                <li>Another super feature</li>
                <li>And more...</li>
                <li class="buy">
                    <a href="#" class="btn btn-primary btn-outline">
                        <span>Select plan</span>
                    </a>
                </li>
            </ul>
        </div>

        <div class="promo second" style="height:500px; width:300px; margin-right:100px;" data-aos="fade-left">
            <h4 class="heading heading-5 strong-600">Plus</h4>
            <ul class="features">
                <li class="brief">Plus membership</li>
                <li class="price">$79</li>
                <li>Some great feature</li>
                <li>Another super feature</li>
                <li>And more...</li>
                <li class="buy">
                    <a href="#" class="btn btn-primary btn-outline">
                        <span>Select plan</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="promo third scale" style="  box-shadow:-8px 0 8px -8px #6abf16, 8px 0 8px -8px #6abf16 , 0 -50px 50px -50px #6abf16; height:500px; width:300px;"  data-aos="fade-down">
            <h4 class="heading heading-5 strong-600">Premium</h4>
            <ul class="features">
                <li class="brief">This is really a good deal!</li>
                <li class="price">$89</li>
                <li>Some great feature</li>
                <li>Another super feature</li>
                <li>And more...</li>
                <li class="buy">
                    <a href="#" class="btn btn-primary btn-outline">
                        <span>Select plan</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>


   </section>
   <section id="sec3" >
<div class="yellowoverlay"></div>
<div class="text" style="margin-left:180px;" data-aos="fade-right" >
<h6 style="margin-right:100px;">DON’T CALL US, WE’LL CALL YOU</h6>
<p style="font-family: 'Anton', sans-serif;">Request a Callback</p>
<h5 style="font-size:20px; color:white" >Fill in the form below to request a callback to discuss your move.</h5>

<div class="con-input" style="margin-top:30px; ">
  <input oninput="handleInput(event)" placeholder="number*" type="text" style="width:50px;">
  <div class="icons">
    <i class='bx bxs-check-circle check' ></i>
    <i class='bx bxs-x-circle x' ></i>

  </div>
<form>
  <input type="submit" style="margin-left:30px;">
</form>

</div>
</div>
   </section>
      <section id="sec4">
<div id="cover"><div id="covertext">
<h1 style="">Request A Free Quote</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac consectetur augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
  <button type="button" class="btn btn-primary" style=" ;  border-radius: 50px ; width:200px; height:50px ;background-color:#1675bf; font-size:13px; margin-top:70px;font-weight:bold"> CLICK HERE </button>
</div>
</div>
      </section>

 
</div>
</template>


<script>
export default {
  name:"Ratescom"
}
</script>
<style scoped>
.words {
  position: absolute;
  top: 50%;
  margin-left: 600px;
  font-family: monospace;
  font-family: 'Bebas Neue', cursive;

}
#pricingTable{

  height:100vh;

}

.promo-container {
    margin-top:50px;
}
.promos {
    margin: 0 auto
}

.promos:before,
.promos:after {
    content: '';
    display: table
}

.promos:after {
    clear: both
}

.promo {
    margin: 15px 10px 25px;
    padding: 5px 0 30px;
    font-weight: 400;
    line-height: 1.625;
    text-align: center
}

.promos.bg-base-1,
.promos.bg-base-2,
.promos.bg-base-3,
.promos.bg-base-4,
.promos.bg-base-5 {
    background: transparent !important
}

.promos.bg-base-1 .promo {
   
}

.promos.bg-base-2 .promo {
    background: #292f36
}

.promos.bg-base-3 .promo {
    background: #818a91
}

.promos.bg-base-4 .promo {
    background: #2B2B2B
}

.promos.bg-base-5 .promo {
    background: #FFF
}

.promo h4 {
    margin: 15px 0 0;
    font-size: 150%;
    font-weight: normal
}

.promos.bg-base-1 .promo h4 {
    color:black
}

.promos.bg-base-2 .promo h4 {
    color: black
}

.promos.bg-base-3 .promo h4 {
    color: black
}

.promos.bg-base-4 .promo h4 {
    color: black
}

.promos.bg-base-5 .promo h4 {
    color: #0A0814
}

.promo li {
    padding: 5px 0;
    font-size: .875rem
}

.promos.bg-base-1 .brief {
    color: black
}

.promos.bg-base-2 .brief {
    color: black
}

.promos.bg-base-3 .brief {
    color: black
}

.promos.bg-base-4 .brief {
    color: black
}

.promos.bg-base-5 .brief {
    color: #0A0814
}

.promo .price {
    margin: 10px 0;
    padding: 5px 0;
    font-size: 250%
}

.promo .features {
    margin: 0;
    padding: 0;
    list-style-type: none
}

.promo .buy {
    margin: 15px 0 0
}

.promos.bg-base-1 .promo .features {
    color: black
}

.promos.bg-base-2 .promo .features {
    color:black
}

.promos.bg-base-3 .promo .features {
    color: black
}

.promos.bg-base-4 .promo .features {
    color: black
}

.promos.bg-base-5 .promo .features {
    color: #0A0814
}

.promos.bg-base-1 .promo .price {
    background:
    color black
}

.promos.bg-base-2 .promo .price {
    background: #131619;
    color: black
}

.promos.bg-base-3 .promo .price {
    background: #687077;
    color: black
}

.promos.bg-base-4 .promo .price {
    background: #121212;
    color: black
}

.promos.bg-base-5 .promo .price {
    background: black
    color  #0A0814;
}

@media (min-width: 768px) {
    .promo {
        display: inline;
        float: left;
        width: 33.333%;
        margin: 15px 0 0;
        transition: transform 0.25s ease-out
    }
    .promo.first {
        border-right: none
    }
    .promo.second {
        float: right;
        border-left: none
    }
   
    .scale {
        transform: scale(1.2)
    }
    .promos.bg-base-1 .scale {
       	box-shadow: 20px 0 20px -20px #001f9c ;
    }
    .promos.bg-base-2 .scale {
        box-shadow: 0 0 4px 1px #131619
    }
    .promos.bg-base-3 .scale {
        box-shadow: 0 0 4px 1px #687077
    }
    .promos.bg-base-4 .scale {
        box-shadow: 0 0 4px 1px #121212
    }
    .promos.bg-base-5 .scale {
        box-shadow: 0 0 4px 1px black
    }
}

@media (max-width: 767px) {
    .promo {
        margin-bottom: 2rem;
        border-radius: .25rem
    }
    .promo:last-child {
        margin-bottom: 0
    }
}

#sec3{
background-image: url(../assets/avada-movers-mobile-hero.jpg);

  height: 70vh;

  position:relative;

}
.yellowoverlay{
  position: absolute;
    top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: #74b934;
   opacity: 0.8;
}
.text{
  position:absolute;
}
.text h6{
  color:white;
  margin-top:200px ;
   margin-left:10px;
  font-weight: bolder;

}
.text p{
 color:white;
  font-size:60px;
  margin-left:10px;

}
 .con-input {
        position: relative;
        display: flex;
        align-items: center;
    }
    input {
        padding: 11px 15px;
        border-radius: 25px;
        border: 0px;
        box-shadow: 0px 8px 25px 0px rgba(0,0,0,.05);
        transition: all .25s ease;
        min-width: 250px;
    }
    input.valid ~ .icons .check{
        opacity: 1;
        visibility: visible;
        transform: scale(1);
    }
    input.invalid ~ .icons .x{
        opacity: 1;
        visibility: visible;
        transform: scale(1);
    }
    .icons {
        position: absolute;
        right: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
        width: 20px;
        height: 20px;
        transition: all .25s ease;
    }
    i {
        position: absolute;
        transition: all .25s ease;
        font-size: 1.3rem;
        opacity: 0;
        visibility: hidden;
        transform: scale(.5);
    }
    .check {
        color: #3aba6f;
        text-shadow: 0px 5px 10px rgba(58, 186, 111, .3);
    }
    .x {
        color: rgb(240, 90, 92);
        text-shadow: 0px 5px 10px rgba(240, 90, 92, .3);
    }
    input:focus {
        transform: translate(0,-6px);
        box-shadow: 0px 15px 25px 0px rgba(0,0,0,.09);
        padding-left: 20px;
    }
    input:focus ~ .icons {
        transform: translate(0, -6px);
    }
    input[type=submit] {
  background-color: #0693cd;
  border: 0;
  border-radius: 20px;
  cursor: pointer;
  color: #fff;
  font-size:16px;
  font-weight: bold;
  line-height: 1.4;
  padding: 10px;

}
#sec4{
 
}
#cover{
  background-image: url(../assets/cover2.jpg);
  background-size: cover;
  height:70vh;
  position: relative;
}

#sec4 #covertext{

  height: 60vh;
  width: 120vh;
  top:0;
  bottom: 0;
  left: 0;
  right:0;
  margin: auto;


position: absolute;




}


#sec4 #covertext h1{
margin-top:70px;
 color:hsl(90, 79%, 42%); 
font-family: 'Yanone Kaffeesatz', sans-serif;
font-weight:bolder;
font-size:60px;
}

#sec4 #covertext p{
  margin-top:30px;
  font-size:20px;
}


</style>

