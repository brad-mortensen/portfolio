const upScroller = document.getElementById('up-scroller');
const downScroller = document.getElementById('down-scroller');

const nextSection = document.querySelector('.projects-container');

downScroller.addEventListener('click', () => {
	console.log('scroller clicked', document.activeElement);
	nextSection.scrollIntoView({ behavior: 'smooth' });
});
upScroller.addEventListener('click', () => {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
