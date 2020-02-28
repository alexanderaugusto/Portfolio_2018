// Quando clicar em sobre voltar a topo da pagina
document.querySelectorAll(".lista_click")[0].addEventListener("click", function(){
	$("html, body").animate({scrollTop: 0}, 500);
});


// Quando clicar na imagem de perfil voltar ao topo da pagina
document.querySelector(".perfil-click").addEventListener("click", function(){
	$("html, body").animate({scrollTop: 0}, 500);
});

// Quando clicar nos elementos da lista 
$(".lista_click").on("click", function(){
	var seletor = $(this).attr("href");
	var posicao = $(seletor).offset().top;
	$("html, body").animate({scrollTop: posicao}, 500);
});

// Quando passar o mouse sobre o elemento da lista
function element_over(index)
{
	document.querySelectorAll(".lista_click")[index].style.color = "#FFFFFF";
	document.querySelectorAll(".lista_app_click")[index].style.color = "#FFFFFF";
}

// Quando tirar o mouse sobre o elemento da lista
function element_leave(index)
{
	document.querySelectorAll(".lista_click")[index].style.color = "#A9A9A9";
	document.querySelectorAll(".lista_app_click")[index].style.color = "#A9A9A9";
}

// Quando passar o mouse sobre os icone
function icon_over(index)
{
	document.querySelectorAll("#icons")[index].style.color = "#0000CD";
	// Chamando a função do outro arquivo js para mostrar uma mensagem 
	if(index == 3)
		Tip('C/C++');
	else if(index == 4)
		Tip('HTML5');
	else if(index == 5)
		Tip('CSS3');
	else if(index == 6)
		Tip('JavaScript');
	else if(index == 7)
		Tip('Java');
	else if(index == 8)
		Tip('SQL');
}

// Quando tirar o mouse sobre o icone
function icon_leave(index)
{	
	document.querySelectorAll("#icons")[index].style.color = "#363636";
	// Chamando a função do outro arquivo js para remover a mensagem
	UnTip();
}


/****** TODA SCRIPT DO DIMENSIONAMENTO DE TELA MENOR QUE 800 ESTÁ AQUI ******/

var click = 0;

$("#btn_app").on("click", function()
{
	
	// Se o botao estiver normal irá expandir
	if(click == 0)
	{
		click = 1;

		// Torna os elementos da lista visivel
		$(".lista_de_elementos_app").slideToggle(500);
	}

	// Se nao volta ele ao normal
	else
	{
		click = 0;

		// Torna os elementos da lista inivisivel
		$(".lista_de_elementos_app").slideToggle(500);
	}
	
});

// Pegando o dimensionamento atual da tela
window.onresize = function()
{	
	// Verificando se o dimensionamento é maior que 800 pixels e se SIM, volta o menu ao tamanho normal e oculta a lista app
    if($(document).width() >= 784)
    {
    	if(click == 1)
		{
			click = 0;
			$(".lista_de_elementos_app").slideToggle(0);
		}
	}
}

// Quando clicar nos elementos da lista_app 
$(".lista_app_click").on("click", function(){
	var seletor = $(this).attr("href");
	var posicao = $(seletor).offset().top;
	$("html, body").animate({scrollTop: posicao-60}, 500);

	if(click == 1)
	{
		click = 0;
		$(".lista_de_elementos_app").slideToggle(0);
	}

});

// Quando clicar em sobre voltar ao topo da pagina
document.querySelectorAll(".lista_app_click")[0].addEventListener("click", function(){
	$("html, body").animate({scrollTop: 0}, 500);

	if(click == 1)
	{
		click = 0;
		$(".lista_de_elementos_app").slideToggle(0);
	}
});

// Quando clicar no nome voltar ao topo da pagina
document.querySelector(".name_menu_app").addEventListener("click", function(){
	$("html, body").animate({scrollTop: 0}, 500);

	if(click == 1)
	{
		click = 0;
		$(".lista_de_elementos_app").slideToggle(0);
	}
});

// Se o tamanho da tela do dispositivo for maior que 1000 (PC), usa este arquivo css 
if(screen.width > 1000)
{
	$('#testando_a').attr('href', 'css/style.css');
}

// Se nao (celular), usa esse arquivo css
else
{
	$('#testando_a').attr('href', 'css/style_app.css');
}

// Quando clicar em algum lugar do conteudo, voltar o menu ao estado normal
document.querySelector(".conteudo").addEventListener("click", function(){
	if(click == 1)
	{
		$(".lista_de_elementos_app").slideToggle(500);
		click = 0;
	}
})

/************ FORMULARIO *************/

// Variaveis para guardar o estado dos preenchimentos, se está tudo preenchido corretamente ou não
var nome_ok = 0;
var email_ok = 0;
var mensagem_ok = 0;

// Quando clicar nos campos do formulario
document.querySelector(".campos").addEventListener("focusin", (event) => {
  	event.target.style.borderColor = "#0000CD";  
}); 

// Quando "desclicar" nos campos do formulario
document.querySelector(".campos").addEventListener("focusout", (event) => {

	// Se o item desclicado é o input "Nome"
 	if(event.target.className == "campo_nome")
 	{
 		if(event.target.value.length != 0)
 		{
 			event.target.style.borderColor = "#828282";
 			document.querySelectorAll("#icon_error")[0].style.display = "none";
 			document.querySelectorAll("#icon_ok")[0].style.display = "inline";
 			nome_ok = 1;
 		}

 		else
 		{
 			event.target.style.borderColor = "#FF4500"
 			document.querySelectorAll("#icon_error")[0].style.display = "inline";
 			document.querySelectorAll("#icon_ok")[0].style.display = "none";
 			nome_ok = 0;
 		}
 		
 	}

 	// Se o item desclicado é o input "email"
 	else if (event.target.className == "campo_email")
 	{
 		// Verificando se o email é "valido"
  		var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		if(!filter.test(document.querySelector(".campo_email").value))
		{
			event.target.style.borderColor = "#FF4500";
			document.querySelectorAll("#icon_error")[1].style.display = "inline";
			document.querySelectorAll("#icon_ok")[1].style.display = "none";
			email_ok = 0;
		}

		else
		{
			event.target.style.borderColor = "#828282";
			document.querySelectorAll("#icon_error")[1].style.display = "none";
			document.querySelectorAll("#icon_ok")[1].style.display = "inline";
			email_ok = 1;
		}
 		
 	} 

 	// Se o item desclicado é o input "comentario"
 	else if(event.target.className == "campo_comentario")
 	{
 		if(event.target.value.length != 0)
 		{
 			event.target.style.borderColor = "#828282";
 			document.querySelectorAll("#icon_error")[2].style.display = "none";
 			document.querySelectorAll("#icon_ok")[2].style.display = "inline";
 			mensagem_ok = 1;
 		}

 		else
 		{
 			event.target.style.borderColor = "#FF4500"
 			document.querySelectorAll("#icon_error")[2].style.display = "inline";
 			document.querySelectorAll("#icon_ok")[2].style.display = "none";
 			mensagem_ok = 0;
 		}
 	}
}); 

// Quando passar o mouse em cima do botao
document.querySelector(".botao_enviar").addEventListener("mouseover", function(e){
  		event.target.style.backgroundColor = "#2F4F4F";    
});

// Quando tirar o mouse de cima do botao
document.querySelector(".botao_enviar").addEventListener("mouseleave", function(e){
  	event.target.style.backgroundColor = "#0000CD";    
});

// Quando clicar no botao
document.querySelector(".botao_enviar").addEventListener("click", function(e){

	e.preventDefault();

	// Se os todos os campos estiverem preenchidos corretamente
	if(nome_ok == 1 && email_ok == 1 && mensagem_ok == 1)
	{
		alert("Sua mensagem foi registrada!");
		document.querySelectorAll("#icon_ok")[0].style.display = "none";
		document.querySelectorAll("#icon_ok")[1].style.display = "none";
		document.querySelectorAll("#icon_ok")[2].style.display = "none";

		document.querySelector(".campo_nome").value = null;
		document.querySelector(".campo_email").value = null;
		document.querySelector(".campo_comentario").value = null;
	}
});
