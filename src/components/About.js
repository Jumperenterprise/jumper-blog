import React from 'react'

function About() {
  return (
    <div class="container">
      <div class="row img-container">
        <div class="col">
          <div class="card">
            <div class="card-image">
              <img
                class="responsive-img"
                src="https://i.ibb.co/CQ5RH1x/descargar.png"
                alt="Profile picture"
              />
              <span class="card-title">Andrew Alfaro</span>
            </div>
            <div class="card-content">
              <p>
                Passionate about WEB programming, I am an expert in JavaScript.
                I develop projects with the Angular Framework and Stack MERN and
                with Ionic and React Native for mobile applications. Ambitious
                and creative, I am constantly looking to improve myself by
                learning new programming languages. I have as a professional
                project to become FullStack.
              </p>
            </div>
            <div class="card-action">
              <a href="!#">Here you can see my web</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
