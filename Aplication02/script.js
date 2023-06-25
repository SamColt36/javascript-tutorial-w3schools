// PRIMEIRO SE FAZ A SELEÇÃO DOS ELEMENTOS
let form = document.querySelector('#form')

let nota1 = document.querySelector('#nota1'),
	nota2 = document.querySelector('#nota2'),
	btnCalcular = document.querySelector('#btnCalcular'),
	btnLimpar = document.querySelector('#btnLimpar'),
	media = document.querySelector('#media'),
	situacao = document.querySelector('#situacao'),
	aviso = document.querySelector('#aviso')

btnCalcular.addEventListener('click', function (e) {
	// pegar os values de cada input
	// O método .parseFloat() converte um valor em uma representação de float
	// .parseFloat() analisa uma string e retorna um número de ponto flutuante correspondente.
	let n1 = parseFloat(nota1.value),
		n2 = parseFloat(nota2.value),
		m = calcularMedia(n1, n2)
	media.value = m
	let sit = situacaoNota(m)
	situacao.value = sit

	e.preventDefault()
})
// Function calcular media
function calcularMedia(a, b) {
	return ((a + b) / 2)
}
// Function situação
function situacaoNota(m) {
	let aux = ''
	if (m < 6) {
		aux = 'Reprovado'
		situacao.classList.add('reprovado')
	}
	else if (m >= 6 && m < 7) {
		aux = 'Recuperação'
		situacao.classList.add('recuperacao')
	}
	else {
		aux = 'Aprovado'
		situacao.classList.add('aprovado')
	}

	return aux
}

btnLimpar.addEventListener('click', function (e) {
	situacao.classList.remove('reprovado')
	situacao.classList.remove('recuperacao')
	situacao.classList.remove('aprovado')
	aviso.classList.remove('alerta')
	nota1.value = ''
	nota2.value = ''
	media.value = ''
	aviso.textContent = ''

	e.preventDefault()
})

function validar() {
	function procedimento(nota) {
		if (parseFloat(nota.value) < 0 || parseFloat(nota.value) > 10) {
			aviso.textContent = 'Digite um valor entre 0.0 e 10.0'
			aviso.classList.add('alerta')
			// Função para setar tempo de vida
			// sintaxe: setTimeout(function(), tempo em ms)
			setTimeout(function(){
				nota.value = ''
				aviso.textContent = ''
				aviso.classList.remove('alerta')

			}, 2000)
		}
	}
	procedimento(nota1)
	procedimento(nota2)
}