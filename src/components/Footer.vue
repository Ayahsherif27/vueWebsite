<template>
    <div>
        
<section id="footer">
<div id="onfooter">

<div class="footer">
      <div class="heading">
    
      </div>
      <div class="content">
        <div class="services">
          <h4>Services</h4>
          <p><a href="#">App developmen</a></p>
          <p><a href="#">Web development</a></p>
          <p><a href="#">DevOps</a></p>
          <p><a href="#">Web designing</a></p>
        </div>
        <div class="social-media">
          <h4>Social</h4>
          <p>
            <a href="https://www.linkedin.com/in/sanket-bodke-995b5b205/"
              ><i class="fab fa-linkedin"></i> Linkedin</a
            >
          </p>
          <p>
            <a href="https://twitter.com/Sanket46171296"
              ><i class="fab fa-twitter"></i> Twitter</a
            >
          </p>
          <p>
            <a href="https://github.com/sanketbodke"
              ><i class="fab fa-github"></i> Github</a
            >
          </p>
          <p>
            <a href="https://codepen.io/sanketbodke"
              ><i class="fab fa-codepen"></i> Codepen</a
            >
          </p>
          <p>
            <a href="https://www.instagram.com/imsanketbodke/?hl=en"
              ><i class="fab fa-instagram"></i> Instagram</a
            >
          </p>
        </div>
        <div class="links">
          <h4>Quick links</h4>
          <p><a href="#">Home</a></p>
          <p><a href="#">About</a></p>
          <p><a href="#">Blogs</a></p>
          <p><a href="#">Contact</a></p>
        </div>
        <div class="details">
          <h4 class="address">Address</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit. Cupiditate, qui!
          </p>
          <h4 class="mobile">Mobile</h4>
          <p><a href="#">+9112233445</a></p>
          <h4 class="mail">Email</h4>
          <p><a href="#">abcdef@gmail.com</a></p>
        </div>
      </div>
      <footer>
        <hr />
        &copy; 2021 ABCDEF Technologies Pvt. Ltd.
      </footer>
    </div>
</div>

</section>
    </div>
</template>


<script>
export default {
  name: "Footer",
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footer{
    background-color:  #6abf16;
    height: 100vh;
    position: relative;

}
#footer #onfooter{
 background-color: white;
 width:210vh;
 height:500px;
 position:absolute;
 top:0px;
 bottom: 0px;
 right: 0px;
 left:0px;
 margin: auto;
 margin-bottom: 230px;
}
.footer {

  width: 100%;
  bottom: 0;
  left: 0;
}

.footer .heading {
  max-width: 1010px;
  width: 90%;
  text-transform: uppercase;
  margin: 0 auto;
  margin-bottom: 3rem;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.footer .content {
  display: flex;
  justify-content: space-evenly;
  margin: 1.5rem;
}

.footer .content p {
  margin-bottom: 1.3rem;
  color: rgba(0, 0, 0, 0.829);
}

.footer .content a {
  text-decoration: none;
  color: rgb(0, 0, 0, 0.829);
}

.footer .content a:hover {
  border-bottom: 1px solid rgba(0, 0, 0, 0.829);
}

.footer .content h4 {
  margin-bottom: 1.3rem;
  font-size: 19px;
}

footer {
  text-align: center;
  margin-bottom: 2rem;
}

footer hr {
  margin: 2rem 0;
}
</style>
