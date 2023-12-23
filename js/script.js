// Header search
const searchWrap = document.querySelector('.header-search-wrap');
const searchBtn = document.querySelector('.header-search-icon');
const searchInp = document.querySelector('.header-search-inp');
const searchRemove = document.querySelector('.header-search-close');

searchBtn.addEventListener('click', function () {
    searchInp.classList.add('active');
    searchWrap.classList.add('active');
});
searchRemove.addEventListener('click', function () {
    searchInp.classList.remove('active');
    searchWrap.classList.remove('active');
})

// Header notification
const notificationBtn = document.querySelector('.header-notification-icon');
const notificationItem = document.querySelector('.header-notification-item');
notificationBtn.addEventListener('click', function () {
    this.classList.toggle('active');
    notificationItem.classList.toggle('active');
});


// Aos 
AOS.init({
    duration: 1500 //global duration
});