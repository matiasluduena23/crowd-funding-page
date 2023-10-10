// hamburger menu control
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

// add class to bookmark button
const buttonBookmark = document.querySelector('.bookmark')

buttonBookmark?.addEventListener('click', (e)=> {
    buttonBookmark.classList.toggle('active')
})

// open modal
const btnBackProject = document.querySelector('#back-project');
const modal = document.querySelector('.modal');
btnBackProject?.addEventListener('click', () => {
    modal?.showModal()
})

// close modal
const closeModal = document.querySelector('.closeModal');
closeModal?.addEventListener('click', () => {
    modal?.close();
})

// checked radio on click a tag
const aTags = document.querySelectorAll('.label-radio');
aTags.forEach(item => item?.addEventListener('click', (e) => {
    e.target.parentElement.previousElementSibling.checked = true;
 
}))