import type { input } from "astro/zod";

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
const modal = document.querySelector('.modal') as HTMLDialogElement;
btnBackProject?.addEventListener('click', () => {
    removeChecked();
    removeClassForms();
    modal?.showModal()
})

// close modal
const closeModal = document.querySelector('.closeModal');
closeModal?.addEventListener('click', () => {
    modal?.close();
})

// checked radio on click on  tag
const aTags = document.querySelectorAll('.label-radio');
aTags.forEach(item => item?.addEventListener('click', (e: Event) => {
    removeChecked();
    removeClassForms();
    if(e.target){
        e.target.parentElement.previousElementSibling.setAttribute("checked", "");
        e.target.parentElement.parentElement.parentElement.nextElementSibling.classList.add('active');
    }
 
 
}))

// checked radio on click a radio
const allRadios = document.querySelectorAll('#radio');
    allRadios.forEach(element => {
        removeChecked();
    element.addEventListener('click', ()=> {
        
        openDialog(element as HTMLInputElement);
    })
    
});

// open form dialog card
function openDialog(radio: HTMLInputElement){
        radio.setAttribute("checked", "")
        radio.parentElement!.parentElement!.nextElementSibling?.classList.add('active');
}


function removeChecked(){
    allRadios.forEach(element => {
        element.removeAttribute("checked")
    });
}


function removeClassForms() {
    const allForms = document.querySelectorAll('.form-card-modal');
    allForms.forEach(form => form.classList.remove('active'));
}


// open modal with the selected pledge
document.querySelectorAll('#btn-pledge').forEach((btn, index) => {
    if(btn.classList.contains('active')){
        btn.addEventListener('click',()=> {

            modal?.showModal();
            removeChecked();
            removeClassForms();
            openDialog(allRadios[index +1] as HTMLInputElement)
        })
    }
})


document.querySelectorAll('#btn-submit').forEach((btn, index) => {
    if(btn.classList.contains('active')){
        btn.addEventListener('click',(e: Event)=> {
            e.preventDefault();
            validInput(btn.previousElementSibling as HTMLInputElement)
            
        })
    }
})


function validInput(input: HTMLInputElement) {
    if(!input.value){
        input.parentElement?.classList.add('error-active')
        return false;
    }else {
        input.parentElement?.classList.remove('error-active')
        return true;
    }
}

function openDialogSubmit() {
    const modal = document.querySelector('.modal') as HTMLDialogElement;
    modal?.showModal()
}

function closeDialogSubmit() {
    const modal = document.querySelector('.modal') as HTMLDialogElement;
    modal?.close()
}