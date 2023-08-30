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

	var span = document.getElementById('proyectos__span')
	var trigger = document.getElementById('trigger')
	var about = document.getElementById('about')
	window.addEventListener('scroll', () => {
		var posicion = trigger.getBoundingClientRect().top
		var posicionAbout = about.getBoundingClientRect().top
		if (posicion <= window.innerHeight) {
			span.style.position = 'fixed'
			span.style.top = '52.2vh'
			span.style.transform = 'scale(0.45)'
		} else {
			span.style.position = 'relative'
			span.style.top = '70vh'
			span.style.transform = 'scale(1)'
		}
		if (posicionAbout <= window.innerHeight) {
			span.style.position = 'relative'
			span.style.top = '232vh'
		}
	})
})
