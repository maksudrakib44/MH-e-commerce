// Product Data 
const products = [
    {
        id: 1,
        title: "Samsung Galaxy S21 FE 5G",
        price: 54999,
        originalPrice: 64999,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        supplier: "Samsung Authorized Store",
        minOrder: "1 piece",
        badge: "Hot",
        rating: 4.5,
        reviewCount: 342,
        discount: 15
    },
    {
        id: 2,
        title: "Xiaomi Redmi Note 12 Pro",
        price: 32999,
        originalPrice: 36999,
        image: "https://itouchcommunications.com/wp-content/uploads/2023/01/REDMI-Note-12-Pro-5G.jpg",
        supplier: "Xiaomi Bangladesh",
        minOrder: "1 piece",
        rating: 4.3,
        reviewCount: 187,
        discount: 11
    },
    {
        id: 3,
        title: "Apple iPhone 17 Pro Max",
        price: 194999,
        originalPrice: 199999,
        image: "https://images.lifestyleasia.com/wp-content/uploads/sites/3/2025/10/07152337/Apple-iPhone-17-Pro-camera-close-up-250909-1600x900.jpg?tr=w-1600",
        supplier: "Apple Authorized Reseller",
        minOrder: "1 piece",
        badge: "New",
        rating: 4.9,
        reviewCount: 89,
        discount: 2.5
    },
    {
        id: 4,
        title: "HP Pavilion Gaming Laptop",
        price: 89999,
        originalPrice: 104999,
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        supplier: "HP World Bangladesh",
        minOrder: "1 piece",
        badge: "Sale",
        rating: 4.6,
        reviewCount: 124,
        discount: 14
    },
    {
        id: 5,
        title: "Sony WH-1000XM4 Headphones",
        price: 28999,
        originalPrice: 34999,
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        supplier: "Sony Center Dhaka",
        minOrder: "1 piece",
        rating: 4.7,
        reviewCount: 203,
        discount: 17
    },
    {
        id: 6,
        title: "Canon EOS R6 Camera",
        price: 219999,
        originalPrice: 249999,
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        supplier: "Canon Bangladesh",
        minOrder: "1 piece",
        badge: "Popular",
        rating: 4.8,
        reviewCount: 67,
        discount: 12
    },
    {
        id: 7,
        title: "Samsung 55-inch 4K Smart TV",
        price: 65999,
        originalPrice: 79999,
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        supplier: "Samsung Electronics",
        minOrder: "1 piece",
        badge: "Sale",
        rating: 4.4,
        reviewCount: 156,
        discount: 18
    },
    {
        id: 8,
        title: "Apple Watch Series 8",
        price: 45999,
        originalPrice: 52999,
        image: "https://tse1.mm.bing.net/th/id/OIP.QGRgkR-58ybY8Cccz02RqgHaFr?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
        supplier: "Apple Premium Reseller",
        minOrder: "1 piece",
        rating: 4.6,
        reviewCount: 98,
        discount: 13
    },
    {
        id: 9,
        title: "Nike Air Max 270",
        price: 12999,
        originalPrice: 15999,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        supplier: "Nike Official Store",
        minOrder: "1 pair",
        badge: "Hot",
        rating: 4.5,
        reviewCount: 287,
        discount: 19
    },
    {
        id: 10,
        title: "Adidas Ultraboost 22",
        price: 14999,
        originalPrice: 17999,
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        supplier: "Adidas Bangladesh",
        minOrder: "1 pair",
        rating: 4.7,
        reviewCount: 154,
        discount: 17
    },
    {
        id: 11,
        title: "Levi's 511 Slim Jeans",
        price: 2999,
        originalPrice: 3999,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        supplier: "Levi's Store Bangladesh",
        minOrder: "1 piece",
        badge: "Sale",
        rating: 4.4,
        reviewCount: 203,
        discount: 25
    },
    {
        id: 12,
        title: "Sony PlayStation 5",
        price: 58999,
        originalPrice: 69999,
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        supplier: "Sony Authorized Dealer",
        minOrder: "1 piece",
        badge: "New",
        rating: 4.9,
        reviewCount: 76,
        discount: 16
    }
];

// Cart data
let cart = [];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const flashProducts = document.getElementById('flashProducts');
const recommendedProducts = document.getElementById('recommendedProducts');
const cartIcon = document.getElementById('cartIcon');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const overlay = document.getElementById('overlay');
const cartItems = document.getElementById('cartItems');
const emptyCart = document.getElementById('emptyCart');
const cartFooter = document.getElementById('cartFooter');
const cartTotalPrice = document.getElementById('cartTotalPrice');
const cartCount = document.querySelector('.cart-count');
const mobileMenu = document.getElementById('mobileMenu');
const navLinks = document.querySelector('.nav-links');
const searchInput = document.getElementById('searchInput');

// Hero Slider Elements
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');
let currentSlide = 0;
let slideInterval;

// Timer Elements
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Render Products
function renderProducts(productsToRender, container) {
    container.innerHTML = '';
    
    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        const badge = product.badge ? `<div class="product-badge">${product.badge}</div>` : '';
        const originalPrice = product.originalPrice ? `<span class="original-price">৳${product.originalPrice.toLocaleString()}</span>` : '';
        const discount = product.discount ? `<span class="discount">-${product.discount}%</span>` : '';
        const stars = renderStars(product.rating);
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
                ${badge}
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">
                    <span class="current-price">৳${product.price.toLocaleString()}</span>
                    ${originalPrice}
                    ${discount}
                </div>
                <div class="product-rating">
                    <div class="stars">
                        ${stars}
                    </div>
                    <span class="rating-count">(${product.reviewCount})</span>
                </div>
                <div class="product-actions">
                    <button class="add-to-cart" data-id="${product.id}">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                    <button class="contact-supplier">
                        <i class="fas fa-heart"></i> Wishlist
                    </button>
                </div>
            </div>
        `;
        
        container.appendChild(productCard);
    });
    
    // Add event listeners to Add to Cart buttons
    container.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.closest('.add-to-cart').getAttribute('data-id'));
            addToCart(productId);
        });
    });
}

// Render Stars based on rating
function renderStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Add to Cart Function
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Check if product already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            supplier: product.supplier,
            quantity: 1
        });
    }
    
    // Update cart UI
    updateCartUI();
    
    // Show cart sidebar
    cartSidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Animation effect
    cartIcon.classList.add('bounce');
    setTimeout(() => {
        cartIcon.classList.remove('bounce');
    }, 1000);
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

// Update Cart Quantity
function updateCartQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
        }
        updateCartUI();
    }
}

// Update Cart UI
function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
    if (cart.length === 0) {
        emptyCart.style.display = 'block';
        cartFooter.style.display = 'none';
        cartItems.innerHTML = '';
        cartItems.appendChild(emptyCart);
    } else {
        emptyCart.style.display = 'none';
        cartFooter.style.display = 'block';
        
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.title}" class="cart-item-img">
                <div class="cart-item-info">
                    <h4 class="cart-item-title">${item.title}</h4>
                    <div class="cart-item-price">৳${item.price.toLocaleString()}</div>
                    <div class="cart-item-actions">
                        <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn increase" data-id="${item.id}">+</button>
                        <button class="remove-item" data-id="${item.id}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
            cartItems.appendChild(cartItem);
        });
        
        // Add event listeners to cart item buttons
        document.querySelectorAll('.decrease').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = parseInt(e.target.closest('.decrease').getAttribute('data-id'));
                const item = cart.find(item => item.id === productId);
                if (item) {
                    updateCartQuantity(productId, item.quantity - 1);
                }
            });
        });
        
        document.querySelectorAll('.increase').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = parseInt(e.target.closest('.increase').getAttribute('data-id'));
                const item = cart.find(item => item.id === productId);
                if (item) {
                    updateCartQuantity(productId, item.quantity + 1);
                }
            });
        });
        
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = parseInt(e.target.closest('.remove-item').getAttribute('data-id'));
                removeFromCart(productId);
            });
        });
        
        // Update total price
        const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotalPrice.textContent = `৳${totalPrice.toLocaleString()}`;
    }
}

// Search Functionality
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm.length === 0) {
        renderProducts(products.slice(0, 8), productsGrid);
        return;
    }
    
    const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(searchTerm) ||
        product.supplier.toLowerCase().includes(searchTerm)
    );
    
    renderProducts(filteredProducts.slice(0, 8), productsGrid);
});

// Mobile Menu Toggle
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Cart Toggle
cartIcon.addEventListener('click', () => {
    cartSidebar.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeCart.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
});

overlay.addEventListener('click', () => {
    cartSidebar.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Hero Slider Functions
function initSlider() {
    // Set first slide as active
    slides[0].classList.add('active');
    indicators[0].classList.add('active');
    
    // Start auto slide
    startSlideInterval();
}

function goToSlide(n) {
    // Remove active class from current slide and indicator
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    
    // Add previous class for animation
    slides[currentSlide].classList.add('previous');
    
    // Update current slide
    currentSlide = (n + slides.length) % slides.length;
    
    // Add active class to new slide and indicator
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
    
    // Remove previous class after animation
    setTimeout(() => {
        document.querySelector('.slide.previous').classList.remove('previous');
    }, 800);
    
    // Reset auto slide interval
    resetSlideInterval();
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function prevSlide() {
    goToSlide(currentSlide - 1);
}

function startSlideInterval() {
    slideInterval = setInterval(nextSlide, 5000);
}

function resetSlideInterval() {
    clearInterval(slideInterval);
    startSlideInterval();
}

// Timer Function
function updateTimer() {
    let hours = parseInt(hoursElement.textContent);
    let minutes = parseInt(minutesElement.textContent);
    let seconds = parseInt(secondsElement.textContent);
    
    seconds--;
    
    if (seconds < 0) {
        seconds = 59;
        minutes--;
        
        if (minutes < 0) {
            minutes = 59;
            hours--;
            
            if (hours < 0) {
                // Timer ended, reset to 24 hours
                hours = 23;
                minutes = 59;
                seconds = 59;
            }
        }
    }
    
    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
}

// Newsletter Form Submission
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input[type="email"]');
    
    if (emailInput.value) {
        // In a real application, you would send this to a server
        alert('Thank you for subscribing to our newsletter!');
        emailInput.value = '';
    }
});

// Initialize the page
function init() {
    // Render products in different sections
    renderProducts(products.slice(0, 8), productsGrid);
    renderProducts(products.slice(0, 6), flashProducts);
    renderProducts(products.slice(4, 12), recommendedProducts);
    
    // Initialize slider
    initSlider();
    
    // Update cart UI
    updateCartUI();
    
    // Start timer
    setInterval(updateTimer, 1000);
    
    // Add event listeners for slider controls
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Event listeners for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToSlide(index);
        });
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', init);