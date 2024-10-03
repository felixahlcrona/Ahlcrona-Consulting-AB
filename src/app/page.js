import Image from "next/image";
import 'animate.css';
import 'bulma/css/bulma.min.css'

export default function Home() {
  return (
<div class="main">
  

    <div class="container">
  <div class="notification" id="xsd">
  <div class="columns">



  <div class="column">
  
  <div class="animate__animated animate__flipInX">
  <Image src={`/Ahlcrona-Consulting-AB/felix.jpg`} class="profileImage" alt="profile" width="150" height="150" />
</div>

  <div class="animate__animated animate__backInDown">
  <p class="titleName">Felix Ahlcrona </p>
  <p>Hello! I'm Felix, a senior freelancing software engineer. </p>
</div>

  </div>

  <div class="column">


<div class="animate__animated animate__fadeIn">
<div class="buttonBlock">
<button class="button is-large" id="button">
  <span className="buttonText">Linkedin</span>
    <span class="icon is-medium" id="icon">
      <i class="fab fa-linkedin"></i>
    </span>
  </button>


  <button class="button is-large" id="button">
  <span className="buttonText">Resumé</span>
    <span class="icon is-medium" id="icon">
      <i class="fa-regular fa-file-pdf"></i>
    </span>
  </button>

  <button class="button is-large" id="button">
  <span className="buttonText">GitHub</span>
    <span class="icon is-medium" id="icon">
      <i class="fab fa-github"></i>
    </span>
  </button>

  <button class="button is-large" id="button">
  <span className="buttonText">Email</span>
    <span class="icon is-medium" id="icon">
      <i class="fa-regular fa-envelope"></i>
    </span>
  </button>
</div>



  </div>
  </div>





</div>

  </div>
</div>
</div>

  );
}
