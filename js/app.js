document.addEventListener('DOMContentLoaded', () => {
	const foto = document.querySelector('#landing__img')
	document.addEventListener('mousemove', (e) => {
		const x = (window.innerWidth - e.pageX) * 0.05
		const y = (window.innerHeight - e.pageY) * 0.02
		foto.style.transform = `translateX(${x}px) translateY(${y}px)`
	})

	let cursor = document.querySelector('.cursor')
	function moverCursor(e) {
		let x = e.clientX
		let y = e.clientY
		cursor.style.left = `${x}px`
		cursor.style.top = `${y}px`
	}
	document.addEventListener('mousemove', moverCursor)

	let links = Array.from(document.querySelectorAll('a'))
	console.log(links)
	links.forEach((link) => {
		link.addEventListener('mouseover', () => {
			cursor.classList.add('crecer')
		})
		link.addEventListener('mouseleave', () => {
			cursor.classList.remove('crecer')
		})
	})

	var span = document.getElementById('efecto__span')
	var texto = document.getElementById('texto2')
	var trigger = document.getElementById('trigger')
	var trigger2 = document.getElementById('trigger2')
	var scrollPosAnt = window.scrollY
	var initialScale = 0.6
	var finalScale = 1
	var zoom = initialScale
	window.addEventListener('scroll', (e) => {
		var posicion = trigger.getBoundingClientRect().top
		var posicionAbout = trigger2.getBoundingClientRect().top
		var scrollPosAct = window.scrollY
		if (scrollPosAct > scrollPosAnt) {
			if (posicion <= window.innerHeight && posicionAbout >= window.innerHeight) {
				span.style.position = 'fixed'
				span.style.top = '52.2vh'
				zoom = initialScale - (initialScale - finalScale) * (posicion / window.innerHeight)
				span.style.transform = `scale(${zoom})`
			} else {
				span.style.position = 'relative'
				span.style.top = '70vh'
			}
		} else {
			if (posicion <= window.innerHeight && posicionAbout >= window.innerHeight) {
				span.style.position = 'fixed'
				span.style.top = '52.2vh'
				zoom = initialScale + (finalScale - initialScale) * (posicion / window.innerHeight)
				span.style.transform = `scale(${zoom})`
			} else {
				span.style.position = 'relative'
				span.style.top = '70vh'
			}
		}
		if (posicionAbout <= window.innerHeight) {
			span.style.position = 'relative'
			span.style.top = '232vh'
			texto.style.top = '242vh'
		} else {
			texto.style.top = '245vh'
		}
		scrollPosAnt = scrollPosAct
	})
})
