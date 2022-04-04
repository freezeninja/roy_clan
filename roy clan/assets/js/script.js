// $(document).ready(function(){
// 	"use strict";


// });

// $(window).on('load', function(){
// 	"use strict";
// 	setTimeout(function(){
// 		$('.preloader').addClass('inactive');
// 	}, 500);
	
// });



const luxary_studio = document.getElementById('luxary_studio');
const per_studio_img = document.querySelectorAll('.per_studio_img');

per_studio_img.forEach((e,i)=>{
	e.addEventListener('click', ()=>{
		console.log(e);
		luxary_studio.style.backgroundImage = `url('${e.src}')`;
		luxary_studio.style.backgroundRepeat = 'no-repeat';
		luxary_studio.style.backgroundSize ='cover';
		luxary_studio.style.backgroundPosition = 'center'
	});
})

