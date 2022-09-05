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
            src="../assets/avada-movers-mobile-hero.jpg"
            alt="First slide"
            style="position: relative"
          />
        </div>
      </div>
      <div class="words" data-aos="fade-down" style="margin-left:400px ;">
        <h4 style="color:#7c7c7c;  margin-top=5px; letter-spacing: 1px;;" >
          MOVING WITHOUT THE HASSLE
        </h4>

        <h1
         style="color: #252525;  text-aligh:center ; font-size:70px; font-family: 'Anton', sans-serif;  word-spacing:15px ;"
        >
          WE MAKE IT SIMPLE
        </h1>

        <h4 style="color:#7c7c7c;  margin-top=5px;letter-spacing: 1px;">
          PROFESSIONAL SERVICE WITH QUALITY AND CUSTOMER SATISFACTION
        </h4>
      </div>
    </div>
    <div class="end">

      <div>
        <p  style="padding-top:50px;">
  <i class="fab fa-telegram-plane"></i>


          GET A FREE QUOTE ONLINE NOW!
        </p>
   
            

      
      </div>
    </div>
    <section id="section1" >
      <div  data-aos="fade-right">
          <h3>HEADACHE FREE</h3>
          <p style=" color:#6abf16;
  font-size: 50px;
  font-weight: bolder;
  line-height: 50px;">Award Winning<br>
           Moving Company</p>
           <p style="font-size:15px; color:gray ;  line-height: 40px;"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac augue. Orci varius natoque penatibus et<br>
            magnis dis parturient montes, ridiculus mus. Aliquam enim leo, condimentum facilisis nulla sed, cursus <br>
            arcu. Aliquam enim leo.</p>

              <button type="button" class="btn btn-primary" style="margin-left:25px ;  font-family: 'Gemunu Libre', sans-serif; border-radius: 50px ; width:300px; height:45px ;background-color:#1675bf; font-size:13px;"> READ OUR TESTIMONIALS </button>
  
   

      </div>    
      
    </section>
<section id="section2">
       <h3>WE ARE A PROFESSIONAL</h3>

          <p style="  color:#6abf16;
  font-size: 50px;
  font-weight: bolder;
  line-height: 50px;
" >Full-Service Solution</p>

       
<div class="container" id="department">
 
<div class="row justify-contant-center">
<div class="col-md-4 one"   data-aos="fade-up-right">

    <div  style="width: 20rem;">
  <div class="inner" >
          <img src="../assets/avada-movers-serviceonephoto-final.jpg" class="card-img-top" alt=" surgery">
</div>

  <div class="card-body  "   style="" >
    <h5 class="card-title" style="color:#1675c5">Two Man Teams</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac consectetur augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
</p>
    <a href="#">
            <button type="button" class="btn btn-primary" style=" ;  font-family: 'Gemunu Libre', sans-serif; border-radius: 50px ; width:130px; height:45px ;background-color:#1675bf; font-size:13px;"> READ MORE </button>
   </a>
  </div>
</div>
</div>  
    <!-- 1 -->
<div class="col-md-4 ">

    <div  style="width: 20rem;">
    <div class="inner"      >
        
          <img src="../assets/avada-movers-servicetwophoto-final.jpg" class="card-img-top" alt="Dental Care">
        </div>

  <div class="card-body"  >
    <h5 class="card-title">We Do All The Lifting</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac consectetur augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
     <a href="#">
            <button type="button" class="btn btn-primary" style=" ;  font-family: 'Gemunu Libre', sans-serif; border-radius: 50px ; width:130px; height:45px ;background-color:#1675bf; font-size:13px;"> READ MORE </button>
   </a>
  </div>
</div>
</div> 
    <!-- 2 -->
<div class="col-md-4" data-aos="fade-left">

    <div style="width: 20rem;">
    <div class="inner">
  <img src="../assets/download.jpg" class="card-img-top" alt="Eye Care"></div>
  <div class="card-body">
    <h5 class="card-title">Coast To Coast</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quas, magni blanditiis tenetur quod obcaecati minus rerum, corrupti incidunt ducimus quam nihil voluptatibus nesciunt iure</p>
     <a href="#">
    <button type="button" class="btn btn-primary" style=" ;  font-family: 'Gemunu Libre', sans-serif; border-radius: 50px ; width:130px; height:45px ;background-color:#1675bf; font-size:13px;"> READ MORE </button>
   </a>
  </div>
</div>
</div>  


</div>
</div>

</section>





  </div>
</template>

<script>
export default {
  name: "slider",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.words {
  position: absolute;
  top: 50%;
  margin-left: 400px;
  font-family: monospace;
}

.end {
  background-color: #1675bf;
  height: 15vh;
}
.end:hover {
  background-color: hsl(206, 62%, 59%);

}

.end p {
  color: white;

}

.fa-telegram-plane{
  margin-right:10px;
}

#section1{
  background-color: #f1f5f9;

  height: 90vh;
}
#section1 h3{
  padding-top: 150px;
  color:#aaaaaa;
  font-size: 20px;
 font-family: 'Gemunu Libre', sans-serif;
 font-weight: bold;

}


#section2{
height: 130vh;
}
#section2 h3{
  padding-top: 150px;
  color:#aaaaaa;
  font-size: 20px;
 font-family: 'Gemunu Libre', sans-serif;
 font-weight: bold;
}

.container{
    margin-top: 5%;
  font-family: sans-serif;



}
.row {
  
    
}
h1{
   
    margin-bottom: 20px;
}

.border{
    display: block;
    margin: auto;
    width:100px;
    height: 4px;
    background-color: #4da6ff;
    margin-bottom: 10px;
 
}
.span{
    text-align: center;
    color:  #aaaaa1;
     margin: 50px;
     font-family: sans-serif;
   
   
}

.card-body{
  margin-left: 10px;

}

.col-md-4{
     margin-bottom: 20px;
}


.inner{
    overflow: hidden;
 
}



.inner img{
    transition: all 1.2s ease;
    
}
.inner:hover img{
    transform: scale(1.2);
}

.card-text{
    color:  #aaaaa1;
}

a:link {
  color: red;
  font-family: sans-serif;
}

/* visited link */

/* mouse over link */
a:hover {
  
}

/* selected link */
a:active {
  color: blue;
}

.card-title{
  color:#1675bf;
  font-size: 25px;
  font-weight: bold;
}



</style>
