const text = document.querySelector('.cinematic-text');
const letters = text.textContent.split('');
text.textContent = '';

letters.forEach((letter, i) => {
  const span = document.createElement('span');
  span.textContent = letter === ' ' ? '\u00A0' : letter; // keeps spaces
  span.style.animationDelay = `${i * 0.1}s`; // delay each letter
  text.appendChild(span);
});