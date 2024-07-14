document.querySelector('.btn.bn-keep').addEventListener('click', function () {
    const name = document.querySelector('.ProName').textContent.trim()
    const qty = +document.querySelector('#total.form-control').value
    const price = +document.querySelector('.sale.price_thousandth').textContent

    let productInfor = {
        name,
        qty,
        price,
    }
    console.log('productInfo:', productInfor)
})
