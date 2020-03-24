//SERVICE WORKER


if ('serviceWorker' in navigator) {
	console.log('puedes usar');
	navigator.serviceWorker.register('./sw.js')
							.then(res => console.log('serviceWorker cargado correctamente',res))
							.catch(err => console.log('serviceWorker no se ha podido registrar',err))

}else{
	console.log('no puedes usar');
}


//SCROOLL SUAVE
$(document).ready(function(){
	$("#menu a").click(function(e){
		e.preventDefault();

		$("html, body").animate({
			scrollTop:$($(this).attr('href')).offset().top
		});
		return false;
	});
});