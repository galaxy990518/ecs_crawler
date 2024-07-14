const parent = document.querySelector('#shopping-cart-table')
const products = parent.querySelectorAll('.item-info')

const items = [...products].map((product) => {
    const name = product.querySelector('.product-item-name').textContent.trim()
    const qty = +product.querySelector('[id^="cart-"]').value
    const price = +product.querySelector('td.col.price').textContent.replace(/\D/g, '')
    const total = +product.querySelector('td.col.subtotal span').textContent.replace(/\D/g, '')

    return {
        name,
        price,
        qty,
        total,
    }
})

console.log('productInfo:', items)
