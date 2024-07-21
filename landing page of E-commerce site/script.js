//back to top
let backToTopBtn = document.querySelector('.back-to-top')

window.onscroll = () =>{
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        backToTopBtn.style.display = 'flex'
    } else{
        backToTopBtn.style.display = 'none'
    }
}

// top nav menu
let menuItems = document.getElementsByClassName('menu-item')

Array.from(menuItems).forEach((item,index) => {
    item.onclick = (e) => {
        let currMenu = document.querySelector('.menu-item.active')
        currMenu.classList.remove('active')
        item.classList.add('active')
    }
})

// Food Category
let foodMenuList = document.querySelector('.food-item-wrap')

let foodCategory = document.querySelector('.food-category')

let categories = foodCategory.querySelectorAll('button')

Array.from(categories).forEach((item,index) => {
    item.onclick = (e) => {
        let currcat = foodCategory.querySelector('button.active')
        currcat.classList.remove('active')
        e.target.classList.add('active')
        foodMenuList.classList = e.target.getAttribute('data-food-type')
    }
})




//on scroll animation
let scroll = window.requestAnimationFrame || function(callback) {window.setTimeout(callback, 1000/60)}

let elToshow = document.querySelectorAll('.play-on-scroll')

isElInViewPort = (el) => {
    let react = el.getBoundingClientRect()

    return (
        (react.top <= 0 && react.bottom >= 0)
        ||
        (react.bottom >= (window.innerHeight || document.documentElement.clientHeight) && react.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (react.top >= 0 && react.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    )
}

loop = () => {
    elToshow.forEach((item, index) => {
        if(isElInViewPort(item)){
            item.classList.add('start')
        } else{
            item.classList.remove('start')
        }
    })
    scroll(loop)
}
loop()

// Mobile nav
let bottomNavItems = document.querySelectorAll('.mb-nav-item')
 
let bottomMove = document.querySelector('.mb-move-item')

bottomNavItems.forEach((item, index) => {
    item.onclick = (e) => {
        let crrItem = document.querySelector('.mb-nav-item.active')
        crrItem.classList.remove('active')
        item.classList.add('active')
        bottomMove.style.left = index * 25 + '%'
    }
})