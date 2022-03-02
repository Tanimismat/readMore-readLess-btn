const readMoreBtn = document.querySelector('.read-more-btn');
const text = document.querySelector('.text');

readMoreBtn.addEventListener('click', (event) => {
    // toggiling a class in paragraph
    console.log('readmore')
    text.classList.toggle('show-more')
    // after dome the css
    // changing text in btn
    if (readMoreBtn.innerText === 'Read More') {
        readMoreBtn.innerText = 'Read Less'
    }
    else (
        readMoreBtn.innerText = 'Read More'
    )
})