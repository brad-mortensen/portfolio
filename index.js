const scroller = document.getElementById('scroller');
const nextSection = document.querySelector('.projects');

scroller.addEventListener('click', () => {
  console.log('scroller clicked');
  nextSection.scrollIntoView({behavior: 'smooth'})
});
