document.querySelector('.btn.btn-primary.btn-lg.add-to-cart').addEventListener('click', function () {
    const name = document.querySelector('.model-title').textContent.trim()
    const itemNumber = document.querySelector('.model-name').textContent.trim().split('\n')[0].trim()
    const price = +document.querySelector('div.total-price-num > strong').textContent.replace(/\D/g, '')

    let productInfo = {
        name,
        itemNumber,
        price,
    }

    console.log('productInfo:', productInfo)
})
