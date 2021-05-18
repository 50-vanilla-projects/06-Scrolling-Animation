const contentDivs = document.querySelectorAll('.content');
const triggerHeight = (window.innerHeight * 4/5);

console.log(triggerHeight);

window.addEventListener('scroll', whenToSlide);

whenToSlide();

function whenToSlide() {
  contentDivs.forEach( contentDiv => {
    const contentDivTop = contentDiv.getBoundingClientRect().top;
    if (contentDivTop < triggerHeight) {
      contentDiv.classList.add('show');
    }
    else contentDiv.classList.remove('show');
  })
}