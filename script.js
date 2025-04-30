// Change product image when thumbnail is clicked
function changeImage(element) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = element.src;
    
    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
    });
    element.classList.add('active');
}

// Add to cart functionality
function addToCart() {
    const cartCount = document.querySelector('.cart-count');
    let count = parseInt(cartCount.textContent);
    cartCount.textContent = count + 1;
    
    // Animation effect
    cartCount.style.transform = 'scale(1.5)';
    setTimeout(() => {
        cartCount.style.transform = 'scale(1)';
    }, 300);
    
    alert('Item added to cart!');
}

// Add to wishlist functionality
function addToWishlist() {
    const wishlistBtn = document.querySelector('.wishlist');
    wishlistBtn.innerHTML = '<i class="fas fa-heart"></i> Wishlisted';
    wishlistBtn.style.color = '#e74c3c';
    wishlistBtn.style.borderColor = '#e74c3c';
}

// Modal functions
function openModal() {
    document.getElementById('quickViewModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('quickViewModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('quickViewModal');
    if (event.target == modal) {
        closeModal();
    }
}