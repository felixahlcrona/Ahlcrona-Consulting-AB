import Image from "next/image";
import 'bulma/css/bulma.min.css'

export default function Home() {
  return (

    <div class="container">
  <div class="notification" id="xsd">
  <div class="columns">



  <div class="column">
  <figure class="image is-128x128">
  <img class="is-rounded" src="https://media.licdn.com/dms/image/v2/C4E03AQEBTMXYdA30Tg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1641406688480?e=1733356800&v=beta&t=6f9PS8axnveo99C7X8wmFHZG7nSSPMnv2iDCbRajqxU" />
</figure>
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
