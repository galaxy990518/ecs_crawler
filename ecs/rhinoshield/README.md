# Rhinoshield

### Cart page
[rhinoshield ](https://rhinoshield.tw/cart)

### Note
1. 若是 element ID 帶有 `/`，像是網站中的 `quantity`，不能直接使用 `querySelector("#updates_gid://shopify/CheckoutLineItem/430763516888890?checkout=58b9b63b67f48df0099f87ec6e17e3680")` 而是要用 `querySelector('[id="updates_gid://shopify/CheckoutLineItem/430763516888890?checkout=58b9b63b67f48df0099f87ec6e17e3680"]')`
2. 要找到此 element 最適合的選擇器，以 `quantity` 作為例子，`.item-quantity`會是比較好的選擇器
3. 找選擇器盡量不要找樣式相關的，像是 `col`, `font-normal`, `flex` 等選擇器。

### Demo
![alt text](https://i.imgur.com/WxettmW.png)