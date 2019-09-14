let lightbox = document.querySelector('#Lightbox');
let links = document.querySelectorAll('.lightbox');
links.forEach(function(link){
	let src = link.href;

	link.addEventListener('click',function(e){
		e.preventDefault();
		//alert('click!');
		lightbox.classList.add('opened');
		//alert(src);
		let img = lightbox.querySelector('img');
		img.src=src;
	});

	lightbox.addEventListener('click',function(e){
		lightbox.classList.remove('opened');
	});
});