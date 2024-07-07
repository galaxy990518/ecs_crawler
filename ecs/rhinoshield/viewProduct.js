document.querySelector('.add-to-cart-btn.available').addEventListener('click', function () {
    const productType = document.querySelector('.product-selector__product').textContent.trim()
    const device = document.querySelector('.device-filter select').value
    const deviceColor = document.querySelector('li.active input.color').value
    const productName = document.querySelector('.product-form__content__title').textContent.trim()
    const series = document.querySelector('.product-form__content__subtitle').textContent.trim()
    const version = document.querySelector('.options__type--active > p').textContent
    const caseColor = document.querySelector('.case-color-selectors .title__color').textContent.replace('-', '').trim()

    let productInfo = {
        productType,
        device,
        deviceColor,
        productName,
        series,
        version,
        caseColor,
    }

    console.log('product info: ', productInfo)
})
