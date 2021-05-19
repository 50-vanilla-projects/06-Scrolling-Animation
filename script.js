/* This javascript contains functionality to determine when
content divs should slide into view.  While scrolling down, divs above 
the fold slide in from outside the viewport into view using css transform t
ranslate(). Even divs slide in from the left and odd divs slide in from
the right.
*/

const contentDivs = document.querySelectorAll('.content');
const triggerHeight = (window.innerHeight * 4/5);

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