document.querySelector('.js-add-to-cart-btn').addEventListener('click', function () {
    const name = document.querySelector('.title.translate').textContent.trim()
    const price = +document.querySelector('.amount').textContent
    const qty = +document.querySelector('.js-quantity-select').value
    const optionValue = document.querySelector('.variation-select').value
    const category = document.querySelector(`option[value='${optionValue}']`).textContent

    let productInfo = {
        name,
        price,
        qty,
        category,
    }

    if (document.querySelector('.variation-select').selectedIndex !== 0) {
        console.log(productInfo)
    }
})
