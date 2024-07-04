const parent = document.querySelector('#CartProducts')
const cartProducts = parent.querySelectorAll('.tr')

const products = [...cartProducts].map(product => {
    const name = product.querySelector('.item__product-title').textContent
    const variantTitle = product.querySelector('.item__variant-title').textContent
    const price = +product.querySelector('div.td.price').textContent.replace(/[^\d.]/g, '')
    const qty = +product.querySelector('.item-quantity').value
    const total = +product.querySelector('div.td.sumprice').textContent.replace(/[^\d.]/g, '')

    return {
        name,
        variantTitle,
        price,
        qty,
        total
    }
})

console.log(products)