module.exports = {
    authPage: {
        loginButtonHome: "//button[contains(text(), 'Log In') or contains(text(), 'Đăng nhập')] | //a[contains(text(), 'Log In') or contains(text(), 'Đăng nhập')]",
        emailInput: "//input[@type='text' or @name='loginKey']",
        passwordInput: "//input[@type='password' or @name='password']",
        submitLoginBtn: "//button[contains(text(),'Đăng nhập') or contains(text(),'Log In')]",
        usernameAvatar: "//div[contains(@class, 'navbar__username')]"
    },
    searchPage: {
        searchInput: "//input[contains(@class,'shopee-searchbar-input')]",
        searchBtn: "//button[contains(@class,'btn-solid-primary')]",
        resultItems: "//div[contains(@data-sqe,'item')]"
    },
    productPage: {
        addToCartBtn: "//button[contains(.,'Thêm vào giỏ hàng') or contains(.,'Add To Cart')]",
        cartBadge: "//a[contains(@href, '/cart')]//div[contains(@class,'cart-number')]",
        variantBtn: "(//div[contains(@class, 'product-variation')])[1]" // selects the first variant just in case
    },
    ratePage: {
        commentInput: "//textarea",
        submitReviewBtn: "//button[contains(.,'Hoàn thành') or contains(.,'Submit')]",
        reviewText: "//div[contains(@class, 'shopee-product-rating__main')]"
    }
}
