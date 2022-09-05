<template>
  <div class="Header">
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" style="margin-left:150px">   <img src="../assets/avada-movers-logo.png" alt="" class="logo" style="width:150px;"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav" style="padding:5px;  ">
        <li class="nav-item">
          <router-link id="hh" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Ratescom" id="rr">Rates</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/Testimonials" id="tt">Testimonials</router-link>
      
            <li class="nav-item" > 
          <router-link to="/contact" id="cc" >Contact</router-link>
        </li>

    <button type="button" class="btn btn-primary" style="margin-right:200px ;   border-radius: 50px ; width:150px;background-color:#1675bf; font-size:13px;" div="fade-up">FREE QUOTE</button>
      </ul>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-nav{
    color:black;
    font-weight: bolder;
}
.one a{

}
a{

}

#hh{
  text-decoration: none;
  color: black;
  margin-right: 20px;
  margin-top: 20px;
  padding-top:100px;

}
#rr{
    text-decoration: none;
  color: black;
  margin-right: 20px;
}
#tt{
    text-decoration: none;
  color: black;
  margin-right: 20px;
}
#cc{
   text-decoration: none;
  color: black;
  margin-right: 20px;
}


</style>
