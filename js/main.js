
	function clicar(){
		// alert("Obrigado por clicar");
		document.getElementById("agradecimento").innerHTML = "<i>Obrigado por clicar</i>";
		// console.log(document.getElementById("agradecimento"));
	}

	function redirecionar() {
		// abri nova janela
		window.open ("https://web.digitalinnovation.one/");
		// abri na mesma
		// window.location.href = "https://web.digitalinnovation.one/";
	}

	function trocar(elemento) {
		// document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
		// alert("trocar o texto");
		elemento.innerHTML = "Obrigado por passar o mouse";
	}

	function voltar(elemento) {
		// document.getElementById("mousemove").innerHTML = "passe o mouse aqui";
		elemento.innerHTML = "passe o mouse aqui";
	}

	function load() {
		alert("pagina carregada");
	}

	function funcaoChange(elemento) {
		console.log(elemento.value);
	}

/*	var nome = "Carolina Teixeira";
	var n1 = 5;
	var n2 = 10;

	var frase = "Japão é o melhor time do mundo";

	// alert(nome + " tem "+ n1 + " anos.");
	// alert(n1 + n2);

	console.log(nome);
	console.log(n1 + n2);

	console.log(frase);
	// trocar valor
	console.log(frase.replace("Japão","Brasil"));
	// letra maiscula
	// console.log(frase.toUpperCase());
	// letra minuscula
	console.log(frase.toLowerCase());
	console.log(n1 * n2);
*/
	// Array

	// var lista = ["maçã", "pera", "laranja"];
	// adiciona elemento no array
	// lista.push("uva");
	// remove ultimo elemento do array
	// lista.pop();
	// tamanho da lista
	// console.log(lista.length);
	// reverter posições da lista
	// console.log(lista.reverse());
	// transorma em string
	// console.log(lista);
	// transforma em string 
	// console.log(lista.toString());
	// formata
	// console.log(lista.join("-"));

	// Dicionario
	/*var fruta = {nome:"maça", cor:"vermelha"}
	console.log(fruta.cor);
	alert(fruta.cor);*/

	// lista de Dicionario
	/*var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxo"}]
	console.log(frutas);
	alert(frutas[1].nome);*/

	// condicionais - laços de repeticao e date
	
	// if - else
	/*var idade = prompt("Qual é sua idade?");
	// var idade = 18;
	if (idade >= 18){
		alert("Maior de idade");
	}else{
		alert("menor de idade");
	};*/

	// while
	/*var count = 0;
	while (count <= 5){
		console.log(count);
		alert(count);
		count++;
	};*/

	// for
	/*var cont;
	for (cont = 0; cont <= 5; cont++){
		alert(cont);
	};*/

	// date
	/*var d = new Date();
	// alert(d);
	// alert(d.getMonth()+1);
	// alert(d.getMinutes());
	alert(d.getDay());
	alert(d.getHours());*/

	// funcao
	/*function soma(n1, n2) {
		return n1 + n2;
	}

	alert(soma(5, 10));*/
	// variavel local
	/*function validaIdade(idade) {
		var validar;
		if (idade >=18){
			return validar = true;
		}else{
			return validar = false;
		}
	}

	var idade = prompt("Qual é sua idade?");
	console.log(validaIdade(idade));*/

	// variavel global
	/*var validar = 0;
	function validaIdade(idade) {
		if (idade >=18){
			return validar = true;
		}else{
			return validar = false;
		}
	}

	var idade = prompt("Qual é sua idade?");
	validaIdade(idade);
	console.log(validar);*/

/*
	function setReplace(frase, nome, novo_nome) {
		return frase.replace(nome, novo_nome)
	}
	alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/	