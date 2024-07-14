const data = document.querySelector('#CartPageForm > div > div:nth-child(1) > div')
const cart = data.querySelectorAll('.cart__item-details')

const products = [...cart].map((product) => {
    const title = product.querySelector('.cart__item-name').textContent.trim()
    const typeElement = product.querySelector('.cart__item-title div:nth-child(2) > div')
    const type = typeElement ? typeElement.textContent.trim().replace(/\s+/g, ' ') : 'N/A'
    const qty = +product.querySelector('.js-qty__num').value
    const price = +product.querySelector('.cart__item-price-col span > span:nth-child(1)').textContent.replace(/\D/g, '')

    return {
        title,
        type,
        qty,
        price,
    }
})

console.log(products)
