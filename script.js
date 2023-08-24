const mode = document.getElementById('mode_icon')

mode.addEventListener('click', () => {
    const form = document.getElementById('login_form')
    if(mode.classList.contains('fa-moon')) {
    mode.classList.remove('fa-moon');
    mode.classList.add('fa-sun');

    form.classList.add('dark');
    return;
    }

    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');
    form.classList.remove('dark');
});

const openButton = document.querySelector("[data-open-modal]")
const closeButton = document.querySelector("[data-close-modal]")
const modal = document.querySelector("[data-modal]")

openButton.addEventListener("click", () => {
    modal.showModal()
})

closeButton.addEventListener("click", () =>{
    modal.close()
});
