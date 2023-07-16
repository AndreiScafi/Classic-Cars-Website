/* My own attempt to make the code */

const menu = document.querySelector('.menu');
const targets = document.querySelectorAll('.target');

menu.addEventListener('click', () => {
    targets.forEach(target => {
        target.classList.toggle('change')
    });
})

/* End of My own attempt to make the code */
