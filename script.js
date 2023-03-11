/* Animación con scroll */
const animatedElements = document.querySelectorAll('.animated-element');

window.addEventListener('scroll', () => {
  animatedElements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.5;

    if (elementPosition < screenPosition) {
      element.classList.remove('hidden');
      element.classList.add('show');
    }
  });
});

/* Efecto de paralax con el ratón */
const parallaxContainer = document.querySelector('.parallax-container');
const parallaxElement = document.querySelector('.parallax-element');

function moveElements(event) {
  const mouseX = event.clientX - parallaxContainer.offsetLeft;
  const mouseY = event.clientY - parallaxContainer.offsetTop;

  parallaxElement.style.transform = `translate(${mouseX * 0.1}px, ${mouseY * 0.1}px)`;
}
