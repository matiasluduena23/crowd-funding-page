const hamburger = document.querySelector('.hamburger');


hamburger?.addEventListener('click', () => {
    const isExpanded = JSON.parse(hamburger.getAttribute('aria-expanded')!);
    hamburger.setAttribute('aria-expanded', new Boolean(!isExpanded).toString())
})

window.addEventListener('resize', () =>{
    if (window.innerWidth > 800) {
        hamburger?.setAttribute('aria-expanded' ,'false')
    }
})