const cartList = document.querySelector('#span_ajaxCartList')
const productList = cartList.querySelectorAll('tbody:nth-of-type(n+2)')

const products = [...productList].map((product) => {
    const name = product.querySelector('.text-left > a')?.textContent?.trim() || product.querySelector('.text-left')?.textContent?.trim() || ''
    const price = +product.querySelector('.col-xs-1.hidden-sm')?.textContent || 0
    const qty = +product.querySelector('.col-xs-2.col-lg-1')?.textContent || 0
    const total = +product.querySelector('td:nth-child(5)')?.textContent || 0
    const memo = product.querySelector('td:nth-child(6)')?.textContent.trim() || ''

    return {
        name,
        price,
        qty,
        total,
        ...(memo && !name.startsWith('【組合包】') && { memo }),
    }
})

console.log('Cart products:', products)
