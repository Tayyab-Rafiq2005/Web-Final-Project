/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header')
    if (this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')
    if (this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
})

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`, {
    interval: 200
})

/*==================== ADD TO CART & CHECKOUT ====================*/
const cart = []

function addToCart(name, price) {
    cart.push({ name, price: parseFloat(price) })
    updateCartCount()
    alert(`${name} added to cart!`)
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count')
    if (cartCount) {
        cartCount.textContent = cart.length
    }
}

document.querySelectorAll('.menu__button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault()
        const name = button.getAttribute('data-name')
        const price = button.getAttribute('data-price')
        if (name && price) {
            addToCart(name, price)
        }
    })
})

/*==================== MODAL HANDLING ====================*/
const modal = document.getElementById('cart-modal')
const cartIcon = document.getElementById('cart-icon')
const closeBtn = document.getElementById('close-cart')
const cartList = document.getElementById('cart-items')
const cartTotal = document.getElementById('cart-total')
const checkoutBtn = document.getElementById('checkout-button')

if (cartIcon) {
    cartIcon.addEventListener('click', (e) => {
        e.preventDefault()
        renderCart()
        modal.classList.remove('hidden')
    })
}

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden')
    })
}

if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert("Cart is empty!")
            return
        }
        alert("Thank you for your purchase!")
        cart.length = 0
        updateCartCount()
        modal.classList.add('hidden')
    })
}

function renderCart() {
    cartList.innerHTML = ''
    let total = 0
    if (cart.length === 0) {
        cartList.innerHTML = '<li>Your cart is empty.</li>'
    } else {
        cart.forEach(item => {
            const li = document.createElement('li')
            li.textContent = `${item.name} - Rs.${item.price.toFixed(0)}`
            cartList.appendChild(li)
            total += item.price
        })
    }
    cartTotal.textContent = total.toFixed(0)
}
