const hero = document.querySelector('[data-hero]')

const circulo = document.querySelector('.hero--secondary');
const wrapper = document.querySelector('.wrapper');

wrapper.addEventListener('mouseleave', () => {
    circulo.style.display = 'none';
    console.log('ya salí');
});

wrapper.addEventListener('mousemove', (e) => {
    circulo.style.display = 'flex';
    // circulo.style.position = 'absolute';
	const { clientX, clientY } = e
  const x = Math.round((clientX / window.innerWidth) * 100)
  const y = Math.round((clientY / window.innerHeight) * 100)
	
	hero.style.setProperty('--x', `${x}%`)
	hero.style.setProperty('--y', `${y}%`)
})