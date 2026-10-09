import './styles.css';

const year = new Date().getFullYear();

const footer = document.querySelector('.footer');
if (footer) {
  const footerNote = document.createElement('p');
  footerNote.className = 'footer-note';
  footerNote.textContent = `© ${year} Aarohi Web Nutritionist`;
  footer.appendChild(footerNote);
}
