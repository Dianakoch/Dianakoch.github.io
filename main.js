let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#7688A0;">Soy estudiante de ingenieria en Desarrollo y Gestion de Software.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
