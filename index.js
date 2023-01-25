const previousEl = document.getElementById('previous');
const nextEl = document.getElementById('next');
const sliderEl = document.getElementById('slider');

previousEl.addEventListener('click', onPreviousClick)
nextEl.addEventListener('click', onNextClick)

function onPreviousClick() {
    const sliderWidth = sliderEl.offsetWidth;
    sliderEl.scrollLeft -= sliderWidth + 40;
}

function onNextClick() {
    const sliderWidth = sliderEl.offsetWidth;
    sliderEl.scrollLeft += sliderWidth + 40;
}

const tabs = document.querySelectorAll('[data-target]'),
    tabsContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabsContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')

    })
}) 