
const upScroller = document.getElementById('up-scroller');
const downScroller = document.getElementById('down-scroller');

const nextSection = document.querySelector('.projects-container');

downScroller.addEventListener('click', () => {
  console.log('scroller clicked', document.activeElement);
  nextSection.scrollIntoView({behavior: 'smooth'})
});
