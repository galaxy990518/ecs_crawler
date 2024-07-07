# Rhinoshield

### Pages

1. [cart page](https://rhinoshield.tw/cart)
2. [product page](https://rhinoshield.tw/collections/designers-pokemon?device=iphone-15-pro&type=solidsuit-classic&page=0&dcolor=Black&bcolor=shell_beige&prod=iphone-15-pro-solidsuit-classic-pe36&ctype=solidsuit-classic-magsafe)

### Note

1. 若是 element ID 帶有 `/`，像是網站中的 `quantity`，不能直接使用 `querySelector("#updates_gid://shopify/CheckoutLineItem/430763516888890?checkout=58b9b63b67f48df0099f87ec6e17e3680")` 而是要用 `querySelector('[id="updates_gid://shopify/CheckoutLineItem/430763516888890?checkout=58b9b63b67f48df0099f87ec6e17e3680"]')`
2. 要找到此 element 最適合的選擇器，以 `quantity` 作為例子，`.item-quantity`會是比較好的選擇器
3. 找選擇器盡量不要找樣式相關的，像是 `col`, `font-normal`, `flex` 等選擇器。

### Demo

1. product info
   ![product info](https://i.imgur.com/VojeSlu.png)
2. cart products
   ![cart products](https://i.imgur.com/WxettmW.png)
