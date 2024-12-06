function changeLink() {
    var dropdown = document.getElementById('categoryDropdown');
    var selectedValue = dropdown.options[dropdown.selectedIndex].value;
    console.log(selectedValue)
    switch (selectedValue) {
        case "1":
            window.location.href = "NINKI.html";
            break;
        case "2":
            window.location.href = "pokeka.html";
            break;
        case "3":
            window.location.href = "op.html";
            break;
        case "4":
            window.location.href = "yugioh.html";
            break;
        default:
           
    }

}
//######## Hàm cập nhật số lượng sản phẩm trong giỏ hàng trên giao diện người dùng
function updateCartUI(cartLength) {
    var cartCountElement = document.querySelector('.cart p');
    cartCountElement.textContent = cartLength;
}

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(productName, productPrice) {
    // Lấy thông tin sản phẩm
    var product = {
        name: productName,
        price: productPrice
    };

    // Lưu thông tin sản phẩm vào giỏ hàng (có thể sử dụng localStorage)
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Cập nhật số lượng sản phẩm trong giỏ hàng trên giao diện người dùng
    updateCartUI(cart.length);
}
// @@@@@@ phần add vào vỏ hàng
document.addEventListener('DOMContentLoaded', function () {
    var buyNowBtns = document.querySelectorAll('.buy-now');
    buyNowBtns.forEach(function(buyNowBtn) {
        buyNowBtn.addEventListener('click', function (event) {
            event.preventDefault();
            var productItem = event.target.closest('.products-item');
            var productName = productItem.querySelector('.product-nam').textContent;
            var productPrice = productItem.querySelector('.product-info div').textContent;
            addToCart(productName, productPrice);

            // Hiển thị thông báo sản phẩm đã được thêm vào giỏ hàng
            alert("The product has been added to cart!");
        });
    });
});
function toggleCart() {
    var cartInfo = document.getElementById("product-info");
    cartInfo.style.display = (cartInfo.style.display === "block") ? "none" : "block";
}
// Hàm đặt lại giỏ hàng khi trang tải lại
function resetCartOnLoad() {
    localStorage.setItem('cart', JSON.stringify([])); // Đặt lại giỏ hàng thành rỗng
    updateCartUI(0); // Cập nhật giao diện để hiển thị số lượng là 0
}

// Gọi hàm đặt lại giỏ hàng khi trang được tải
window.onload = resetCartOnLoad;