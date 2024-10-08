import Image from "next/image";
import SkillsBanner from "./SkillsBanner";
import "animate.css";
import "bulma/css/bulma.min.css";

export default function Home() {
  return (
    <div class="main">
      <title>Ahlcrona Consulting AB</title>
      <link rel="icon" href="/favicon.ico" />
      <div class="container">
        <div class="notification" id="transparent">
          <div class="columns">
            <div class="column">
              <Image src={`/felix.jpg`} class="profileImage" alt="profile" width="150" height="150" />

              <div class="animate__animated animate__fadeIn">
                <p class="titleName">Felix Ahlcrona </p>
                <p>Hello! I'm Felix, a senior freelance software engineer with experience in software architecture and technical leadership roles</p>
              </div>
            </div>

            <div class="column">
              <div class="buttonBlock">
                <div class="animate1s">
                  <a href="https://www.linkedin.com/in/felixahlcrona/" target="_blank">
                    <button class="button is-large" id="button">
                      <span className="buttonText">Linkedin</span>
                      <span class="icon is-medium" id="icon">
                        <i class="fab fa-linkedin"></i>
                      </span>
                    </button>
                  </a>
                </div>

                <div class="animate2s">
                  <a href="https://drive.google.com/file/d/1VgiKGe21Pi-K9AMa8CuClehLVEqxih8r/view?usp=sharing" target="_blank">
                    <button class="button is-large" id="button">
                      <span className="buttonText">Resumé</span>
                      <span class="icon is-medium" id="icon">
                        <i class="fa-regular fa-file-pdf"></i>
                      </span>
                    </button>
                  </a>
                </div>

                <div class="animate3s">
                  <a href="https://github.com/felixahlcrona" target="_blank">
                    <button class="button is-large" id="button">
                      <span className="buttonText">GitHub</span>
                      <span class="icon is-medium" id="icon">
                        <i class="fab fa-github"></i>
                      </span>
                    </button>
                  </a>
                </div>

                <div class="animate4s">
                  <a href="mailto:felix.ahlcrona@hotmail.com" target="_blank">
                    <button class="button is-large" id="button">
                      <span className="buttonText">Email</span>
                      <span class="icon is-medium" id="icon">
                        <i class="fa-regular fa-envelope"></i>
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <SkillsBanner />
        </div>
      </div>
    </div>
  );
}
