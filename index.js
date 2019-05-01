const upScroller = document.getElementById('up-scroller');
const downScroller = document.getElementById('down-scroller');
const nextSection = document.getElementById('main-container');

window.addEventListener('load', ()=>{
	if (window.scrollY==0) {
		upScroller.classList.add('toggler');
	}
});
downScroller.addEventListener('click', () => {
	window.scrollBy(0, window.innerHeight);
});
upScroller.addEventListener('click', () => {
	window.scrollBy(0, -window.innerHeight);
});
window.onscroll = () => {
	if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
		downScroller.classList.add('toggler');
	} else {
		downScroller.classList.remove('toggler');
	}
	if (window.scrollY==0) {
		upScroller.classList.add('toggler');
	} else {
		upScroller.classList.remove('toggler');
	}
};
