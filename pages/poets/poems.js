const poems = document.querySelectorAll('.cut');
for (const poem of poems) {
    const cutButton = poem.querySelector('.cut-button');
    const cut = poem.querySelector('p');
    let cutOpen = false;

    cutButton.addEventListener('click', () => {
        cutOpen = !cutOpen;
        cut.classList.toggle('hidden');
        cutButton.querySelector('img').src = cutOpen 
            ? '../../../assets/arrow-up.svg'
            : '../../../assets/arrow-down.svg';
    });
}