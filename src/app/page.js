import Image from "next/image";

import 'bulma/css/bulma.min.css'

export default function Home() {
  return (

    <div class="container">
  <div class="notification" id="xsd">
  <div class="columns">



  <div class="column">
    
  <Image src={`felix.jpg`} class="profileImage" alt="profile" width="150" height="150" />
  
  <p class="titleName">Felix Ahlcrona </p>
  <p>Hello! I'm Felix, a senior freelancing software engineer. </p>
  </div>

  <div class="column">


<div className="buttonBlock">
<button class="button is-large" id="button">
  <span>Linkedin</span>
    <span class="icon is-medium" id="icon">
      <i class="fab fa-linkedin"></i>
    </span>
  </button>

  <button class="button is-large" id="button">
  <span>Resumé</span>
    <span class="icon is-medium" id="icon">
      <i class="fa-regular fa-file-pdf"></i>
    </span>
  </button>

  <button class="button is-large" id="button">
  <span>GitHub</span>
    <span class="icon is-medium" id="icon">
      <i class="fab fa-github"></i>
    </span>
  </button>

  <button class="button is-large" id="button">
  <span>Email</span>
    <span class="icon is-medium" id="icon">
      <i class="fa-regular fa-envelope"></i>
    </span>
  </button>
</div>


  </div>






</div>

  </div>
</div>


  );
}
