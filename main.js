document.addEventListener('DOMContentLoaded', function () {
    
    // ----------------------------------------------------------------------
    // 1. Sliding Navigation Menu Overlay
    // ----------------------------------------------------------------------
    const menuTrigger = document.querySelector('#menu a');

    if (menuTrigger) {
        const menuBackdrop = document.createElement('div');
        menuBackdrop.id = 'menuOverlayBackdrop';

        const menuPanel = document.createElement('div');
        menuPanel.id = 'menuOverlayPanel';
        menuPanel.innerHTML = `
            <div class="mo-header">
                <span class="mo-logo">Christian Louboutin</span>
                <button type="button" class="mo-close" aria-label="Close menu">&times;</button>
            </div>
            <div class="mo-items">
                <a href="index.html#section3" class="mo-item"><span>Latest Collections</span><span class="mo-chevron">&#8250;</span></a>
                <a href="index.html#WomenMain" class="mo-item"><span>Women</span><span class="mo-chevron">&#8250;</span></a>
                <a href="index.html#menMain" class="mo-item"><span>Men</span><span class="mo-chevron">&#8250;</span></a>
                <a href="index.html#section3" class="mo-item"><span>Bags &amp; Accessories</span><span class="mo-chevron">&#8250;</span></a>
                <a href="index.html#section3" class="mo-item"><span>Bridal</span><span class="mo-chevron">&#8250;</span></a>
                <a href="index.html#section5" class="mo-item"><span>The Maison</span><span class="mo-chevron">&#8250;</span></a>
            </div>
            <hr class="mo-hr">
            <div class="mo-links">
                <a href="contactUs.html">Visit a Boutique</a>
                <a href="contactUs.html">Book an Appointment</a>
                <a href="contactUs.html">Contact Us</a>
            </div>
            <div class="mo-footer">
                <span>Accessibility</span>
                <span>United States ($)</span>
            </div>
        `;

        document.body.appendChild(menuBackdrop);
        document.body.appendChild(menuPanel);

        const openMenu = () => {
            menuPanel.classList.add('open');
            menuBackdrop.classList.add('open');
            document.body.style.overflow = 'hidden';
        };

        const closeMenu = () => {
            menuPanel.classList.remove('open');
            menuBackdrop.classList.remove('open');
            document.body.style.overflow = '';
        };

        menuTrigger.addEventListener('click', function (e) {
            e.preventDefault();
            openMenu();
        });

        menuPanel.querySelector('.mo-close').addEventListener('click', closeMenu);
        menuBackdrop.addEventListener('click', closeMenu);

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeMenu();
        });
    }
// ----------------------------------------------------------------------
// Isolated Search Overlay Script
// ----------------------------------------------------------------------
    const searchBackdrop = document.createElement('div');
    searchBackdrop.id = 'searchOverlayBackdrop';

    const searchPanel = document.createElement('div');
    searchPanel.id = 'searchOverlayPanel';
    searchPanel.innerHTML = `
        <div class="search-popup">
            <div class="so-header">
                <h2>SEARCH</h2>
                <button type="button" class="so-close-btn" aria-label="Close search">&times;</button>
            </div>

            <hr>

            <div class="search-box">
                <label for="searchOverlayInput">Search by keyword</label>
                <div class="input-group">
                    <input type="text" id="searchOverlayInput" class="search-input" placeholder="e.g. Kate, Pigalle, Sneakers...">
                    <button type="button" class="search-btn" aria-label="Search">&#128269;</button>
                </div>
            </div>

            <hr>

            <div class="popular-searches">
                <div class="popular-title">Popular Searches</div>
                <button type="button" class="chip-btn">Heels</button>
                <button type="button" class="chip-btn">Sneakers</button>
                <button type="button" class="chip-btn">Boots</button>
                <button type="button" class="chip-btn">Kate</button>
                <button type="button" class="chip-btn">Bags</button>
            </div>
        </div>
    `;

    document.body.appendChild(searchBackdrop);
    document.body.appendChild(searchPanel);

    const searchInput = searchPanel.querySelector('#searchOverlayInput');
    const chipButtons = searchPanel.querySelectorAll('.chip-btn');
    const closeBtn = searchPanel.querySelector('.so-close-btn');

    function openSearch() {
        searchPanel.classList.add('open');
        searchBackdrop.classList.add('open');
        document.body.style.overflow = 'hidden';
        if (searchInput) {
            setTimeout(() => searchInput.focus(), 100);
        }
    }

    function closeSearch() {
        searchPanel.classList.remove('open');
        searchBackdrop.classList.remove('open');
        document.body.style.overflow = '';
    }

    // Intercept clicks on search icon (#searchbar a)
    document.addEventListener('click', function (e) {
        const trigger = e.target.closest('#searchbar a, #searchbar, .bi-search');
        if (trigger) {
            e.preventDefault();
            openSearch();
        }
    });

    if (closeBtn) closeBtn.addEventListener('click', closeSearch);
    searchBackdrop.addEventListener('click', closeSearch);

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeSearch();
    });

    chipButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            if (searchInput) {
                searchInput.value = this.textContent.trim();
                searchInput.focus();
            }
        });
    });
});

    // ----------------------------------------------------------------------
    // 2. Account / Login Modal Overlay
    // ----------------------------------------------------------------------
    const loginTrigger = document.querySelector('#login a');

    if (loginTrigger) {
        const loginBackdrop = document.createElement('div');
        loginBackdrop.id = 'loginOverlayBackdrop';

        const loginPanel = document.createElement('div');
        loginPanel.id = 'loginOverlayPanel';
        loginPanel.innerHTML = `
            <div class="lo-header">
                <h2 class="lo-title">MY ACCOUNT</h2>
                <button type="button" class="lo-close" aria-label="Close account panel">&times;</button>
            </div>
            <hr class="lo-hr">
            <p class="lo-intro">If you have an account with us, log in using your email address.</p>
            <div class="lo-required">* Required fields</div>
            <form class="lo-form">
                <div class="lo-field">
                    <input type="email" id="loEmail" class="lo-input" placeholder="Email (ex: XXX@XXX.com)*" required>
                </div>
                <div class="lo-field lo-password-field">
                    <input type="password" id="loPassword" class="lo-input" placeholder="Password*" required>
                    <button type="button" class="lo-toggle-pw" aria-label="Show password">&#128065;</button>
                </div>
                <a href="#" class="lo-forgot">Forgot your password?</a>
                <button type="submit" class="lo-signin-btn">SIGN IN</button>
            </form>
            <hr class="lo-hr">
            <h3 class="lo-noaccount-title">Don't have an account?</h3>
            <p class="lo-noaccount-desc">Create an account in order to pay faster, save multiple shipping addresses, view and track your orders, and more!</p>
            <button type="button" class="lo-create-btn">CREATE AN ACCOUNT</button>
        `;

        document.body.appendChild(loginBackdrop);
        document.body.appendChild(loginPanel);

        const openLogin = () => {
            loginPanel.classList.add('open');
            loginBackdrop.classList.add('open');
            document.body.style.overflow = 'hidden';
        };

        const closeLogin = () => {
            loginPanel.classList.remove('open');
            loginBackdrop.classList.remove('open');
            document.body.style.overflow = '';
        };

        loginTrigger.addEventListener('click', function (e) {
            e.preventDefault();
            openLogin();
        });

        loginPanel.querySelector('.lo-close').addEventListener('click', closeLogin);
        loginBackdrop.addEventListener('click', closeLogin);

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeLogin();
        });

        // Toggle password visibility
        const pwInput = loginPanel.querySelector('#loPassword');
        const pwToggle = loginPanel.querySelector('.lo-toggle-pw');
        pwToggle.addEventListener('click', function () {
            pwInput.type = pwInput.type === 'password' ? 'text' : 'password';
        });

        loginPanel.querySelector('.lo-form').addEventListener('submit', function (e) {
            e.preventDefault();
        });
    }

    // ----------------------------------------------------------------------
    // 3. Media Controls (Play / Pause / Mute on Home Page Video)
    // ----------------------------------------------------------------------
    const video = document.querySelector('.Video-video');
    const playBtn = document.querySelector('#playbtn\\/pausebtn');
    const muteBtn = document.querySelector('#mute\\/Unmutebtn');

    if (video && playBtn && muteBtn) {
        playBtn.addEventListener('click', function () {
            if (video.paused) {
                video.play();
                playBtn.innerHTML = '<i class="bi bi-pause"></i>';
            } else {
                video.pause();
                playBtn.innerHTML = '<i class="bi bi-play"></i>';
            }
        });

        muteBtn.addEventListener('click', function () {
            video.muted = !video.muted;
            muteBtn.innerHTML = video.muted
                ? '<i class="bi bi-volume-mute"></i>'
                : '<i class="bi bi-volume-up"></i>';
        });
    };

// ----------------------------------------------------------------------
// 4. Shopping Bag / Cart Overlay Drawer
// ----------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
const cartTrigger = document.querySelector('#Cart a');

if (cartTrigger) {
    const cartBackdrop = document.createElement('div');
    cartBackdrop.id = 'cartOverlayBackdrop';

    const cartPanel = document.createElement('div');
    cartPanel.id = 'cartOverlayPanel';
    cartPanel.innerHTML = `
        <div class="bag-panel">
            <div class="sb-header">
                <h2 class="sb-title">SHOPPING BAG</h2>
                <button type="button" class="sb-close" aria-label="Close shopping bag">&times;</button>
            </div>

            <div class="sb-returns-banner">
                <span class="sb-returns-icon">&#8635;</span>
                <span>Free returns – no ifs, ands, or buts</span>
            </div>

            <div class="sb-empty">
                <p>It's looking a little empty in here.</p>
                <button type="button" class="sb-continue-btn">CONTINUE SHOPPING</button>
            </div>

            <div class="sb-recommend">
                <h3 class="sb-recommend-title">You may also like</h3>

                <div class="sb-carousel-nav">
                    <div class="sb-dots" id="sbDots"></div>
                    <button type="button" class="sb-next-btn" id="sbNextBtn" aria-label="Next">&#8250;</button>
                </div>

                <div class="sb-carousel" id="sbCarousel">
                    <div class="sb-product-card">
                        <div class="sb-product-media"></div>
                        <span class="sb-badge">Bestseller</span>
                        <div class="sb-product-row">
                            <h4 class="sb-product-name">Me Dolly</h4>
                            <button type="button" class="sb-wishlist-btn" aria-label="Add to wishlist">&#9825;</button>
                        </div>
                        <p class="sb-product-desc">100 mm Mules - Patent calf leather - Bianco - Women</p>
                        <div class="sb-product-price">$945.00</div>
                        <div class="sb-swatch-group">
                            <span class="sb-swatch" style="background-color:#ffffff"></span>
                            <span class="sb-swatch" style="background-color:#000000"></span>
                        </div>
                    </div>

                    <div class="sb-product-card">
                        <div class="sb-product-media"></div>
                        <span class="sb-badge">Bestseller</span>
                        <div class="sb-product-row">
                            <h4 class="sb-product-name">Miss Z Mule</h4>
                            <button type="button" class="sb-wishlist-btn" aria-label="Add to wishlist">&#9825;</button>
                        </div>
                        <p class="sb-product-desc">100 mm Mules - Patent calf leather - Black - Women</p>
                        <div class="sb-product-price">$1,045.00</div>
                        <div class="sb-swatch-group">
                            <span class="sb-swatch" style="background-color:#000000"></span>
                            <span class="sb-swatch" style="background-color:#ffffff"></span>
                            <span class="sb-swatch" style="background-color:#c98a4b"></span>
                            <span class="sb-swatch" style="background-color:#4a7fb5"></span>
                            <span class="sb-swatch-more">+</span>
                        </div>
                    </div>

                    <div class="sb-product-card">
                        <div class="sb-product-media"></div>
                        <span class="sb-badge">Bestseller</span>
                        <div class="sb-product-row">
                            <h4 class="sb-product-name">Miss Z Mule</h4>
                            <button type="button" class="sb-wishlist-btn" aria-label="Add to wishlist">&#9825;</button>
                        </div>
                        <p class="sb-product-desc">100 mm Mules - Patent calf leather - Bianco - Women</p>
                        <div class="sb-product-price">$1,045.00</div>
                        <div class="sb-swatch-group">
                            <span class="sb-swatch" style="background-color:#ffffff"></span>
                            <span class="sb-swatch" style="background-color:#000000"></span>
                            <span class="sb-swatch" style="background-color:#c98a4b"></span>
                            <span class="sb-swatch" style="background-color:#4a7fb5"></span>
                            <span class="sb-swatch-more">+</span>
                        </div>
                    </div>

                    <div class="sb-product-card">
                        <div class="sb-product-media"></div>
                        <span class="sb-badge">Bestseller</span>
                        <div class="sb-product-row">
                            <h4 class="sb-product-name">Hot Chick</h4>
                            <button type="button" class="sb-wishlist-btn" aria-label="Add to wishlist">&#9825;</button>
                        </div>
                        <p class="sb-product-desc">100 mm Pumps - Patent calf leather - Black - Women</p>
                        <div class="sb-product-price">$895.00</div>
                        <div class="sb-swatch-group">
                            <span class="sb-swatch" style="background-color:#000000"></span>
                            <span class="sb-swatch" style="background-color:#c98a4b"></span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="sb-help">
                <span class="sb-help-icon">&#9993;</span>
                <span class="sb-help-text">NEED HELP?</span>
                <span class="sb-help-chevron">&#8250;</span>
            </div>

            <div class="sb-accordion">
                <div class="sb-accordion-item" data-open="false">
                    <div class="sb-accordion-head">
                        <span class="sb-accordion-icon">&#128274;</span>
                        <div>
                            <div class="sb-accordion-title">PAYMENT IS 100% SECURE</div>
                            <div class="sb-accordion-subtitle">The Christian Louboutin online boutique is a secure website.</div>
                        </div>
                        <span class="sb-accordion-chevron">&#8964;</span>
                    </div>
                    <div class="sb-accordion-body">
                        <p>We accept Mastercard, Visa, American Express, Discover, PayPal, and Apple Pay.</p>
                    </div>
                </div>

                <div class="sb-accordion-item" data-open="false">
                    <div class="sb-accordion-head">
                        <span class="sb-accordion-icon">&#8635;</span>
                        <div>
                            <div class="sb-accordion-title">FREE RETURNS &amp; EXCHANGES</div>
                            <div class="sb-accordion-subtitle">Accepted within 30 days of delivery in original condition.</div>
                        </div>
                        <span class="sb-accordion-chevron">&#8964;</span>
                    </div>
                    <div class="sb-accordion-body">
                        <p>Items must be unworn, unwashed, and in original packaging with all tags attached.</p>
                    </div>
                </div>

                <div class="sb-accordion-item" data-open="false">
                    <div class="sb-accordion-head">
                        <span class="sb-accordion-icon">&#128666;</span>
                        <div>
                            <div class="sb-accordion-title">GROUND FREE DELIVERY OFFERED</div>
                            <div class="sb-accordion-subtitle">Complimentary ground shipping on Mainland U.S. orders!</div>
                        </div>
                        <span class="sb-accordion-chevron">&#8964;</span>
                    </div>
                    <div class="sb-accordion-body">
                        <p>Orders typically arrive within 3-7 business days.</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(cartBackdrop);
    document.body.appendChild(cartPanel);

    // ---- Open / Close behavior ----
    const openCart = () => {
        cartPanel.classList.add('open');
        cartBackdrop.classList.add('open');
        document.body.style.overflow = 'hidden';
    };

    const closeCart = () => {
        cartPanel.classList.remove('open');
        cartBackdrop.classList.remove('open');
        document.body.style.overflow = '';
    };

    cartTrigger.addEventListener('click', function (e) {
        e.preventDefault();
        openCart();
    });

    cartPanel.querySelector('.sb-close').addEventListener('click', closeCart);
    cartPanel.querySelector('.sb-continue-btn').addEventListener('click', closeCart);
    cartBackdrop.addEventListener('click', closeCart);

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeCart();
    });

    // ---- Inner Carousel Interactivity ----
    const carousel = cartPanel.querySelector('#sbCarousel');
    const cards = carousel.querySelectorAll('.sb-product-card');
    const dotsContainer = cartPanel.querySelector('#sbDots');

    cards.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.className = 'sb-dot' + (i === 0 ? ' active' : '');
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.sb-dot');
    const setActiveDot = (index) => {
        dots.forEach((d, i) => d.classList.toggle('active', i === index));
    };

    cartPanel.querySelector('#sbNextBtn').addEventListener('click', () => {
        const cardWidth = cards[0].getBoundingClientRect().width + 16;
        carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });

    carousel.addEventListener('scroll', () => {
        const cardWidth = cards[0].getBoundingClientRect().width + 16;
        const index = Math.round(carousel.scrollLeft / cardWidth);
        setActiveDot(Math.min(index, dots.length - 1));
    });

    // ---- Accordion Toggles ----
    cartPanel.querySelectorAll('.sb-accordion-item').forEach((item) => {
        item.querySelector('.sb-accordion-head').addEventListener('click', () => {
            const isOpen = item.getAttribute('data-open') === 'true';
            item.setAttribute('data-open', isOpen ? 'false' : 'true');
        });
    });
}
});
