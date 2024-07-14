# LG Electronics

### Pages

1. [cart page](https://www.lg.com/tw/shop/checkout/cart/index)
2. [product page](https://www.lg.com/tw/monitors/lg-43sq700s-w)

### Note

1. 發現元素中有隱藏的字，像是複製型號名稱，可以使用 `split('\n')` 將文字按換行符號分割成陣列，使用 `[0]` 取得陣列的第一個元素（這裡假設第一行是我們想要的名稱）
2. 遇到每個 `<select>` 元素都有動態生成且各不相同的 ID 時，可以先觀察有無共同特徵，或是透過屬性選擇器，這樣可以確保選擇到每個動態生成的元素

### Demo

1. product info
   ![product info](https://i.imgur.com/qSug4YY.png)
2. cart products
   ![cart products](https://i.imgur.com/sr3e33P.png)
