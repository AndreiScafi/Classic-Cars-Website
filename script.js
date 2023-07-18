/* My own attempt to make the code */

/* 
const menu = document.querySelector('.menu');
const targets = document.querySelectorAll('.target');

menu.addEventListener('click', () => {
    targets.forEach(target => {
        target.classList.toggle('change')
    });
}) */

/* End of My own attempt to make the code */

/* Teacher code */

/* Menu */

document.querySelector('.menu').addEventListener('click', () => {
    document.querySelectorAll('.target').forEach((item) => {
        item.classList.toggle('change');
    })
});

document.querySelectorAll('.wrapper').forEach((item) => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.target').forEach((item) => {
            item.classList.remove('change');
        })
    })
})


/*End of  Menu */

/* Section 3 videos */

const videos = document.querySelectorAll('.video');

videos.forEach((video) => {
    video.addEventListener('mouseover', () => {
        video.play();
    })

    video.addEventListener('mouseout', () => {
        video.pause();
    })
})

/* End of Section 3 videos */


/* End of Teacher code */