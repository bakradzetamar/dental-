/**
 * DentPro Supplies - Bilingual Application (Georgian/English)
 * Vanilla JavaScript ES6+ SPA for Dental Supplies Catalog
 * With Embedded Product Data
 */

// ==========================================
// EMBEDDED PRODUCTS DATA
// ==========================================

const DEFAULT_PRODUCTS = [
    {
        "id": "p001",
        "name": {
            "ka": "უნივერსალური კომპოზიტი - ჩრდილი A2",
            "en": "Universal Composite Restorative - Shade A2"
        },
        "category": "Restoratives",
        "shortDescription": {
            "ka": "მაღალი სიმტკიცის კომპოზიტი, დაბალი შეკუმშვით.",
            "en": "High-strength composite, low shrinkage."
        },
        "description": {
            "ka": "პრემიუმ ნანო-ჰიბრიდული კომპოზიტური მასალა განსაკუთრებული მახასიათებლებით და მაღალი პოლირებადობით. დაბალი პოლიმერიზაციის შეკუმშვა უზრუნველყოფს შესანიშნავ მარჯინალურ ინტეგრიტეტს. იდეალურია წინა და უკანა კბილების აღსადგენად.",
            "en": "Premium nano-hybrid composite restorative material featuring exceptional handling characteristics and high polishability. Low polymerization shrinkage ensures excellent marginal integrity. Ideal for anterior and posterior restorations with natural aesthetics."
        },
        "price": 45.90,
        "currency": "GEL",
        "unit": "per syringe (3g)",
        "stockQuantity": 24,
        "sku": "COMP-A2-3G",
        "dimensions": { "width_mm": 10, "height_mm": 150, "depth_mm": 10 },
        "images": ["https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=640&h=480&fit=crop"],
        "manufacturer": "DentalCo",
        "tags": ["composite", "restorative", "a2"],
        "createdAt": "2026-03-04"
    },
    {
        "id": "p002",
        "name": {
            "ka": "პროგუტა პერჩას პიკები - ზომა 25მმ",
            "en": "ProGutta Percha Points - Size 25mm"
        },
        "category": "Endodontics",
        "shortDescription": {
            "ka": "კონუსური გუტაპერჩა ფესვის არხის შესავსებად.",
            "en": "Tapered gutta percha for root canal filling."
        },
        "description": {
            "ka": "მაღალი ხარისხის გუტაპერჩას პიკები სტანდარტიზებული კონუსით თანმიმდევრული ფესვის არხის შესავსებად. შესანიშნავი რადიოგარაჟით და მარტივი მოპყრობით. თავსებადია ყველა მთავარ ნიკელ-ტიტანის როტაციულ სისტემასთან.",
            "en": "High-quality gutta percha points with standardized taper for consistent root canal obturation. Excellent radiopacity and easy handling. Compatible with all major nickel-titanium rotary systems."
        },
        "price": 28.50,
        "currency": "GEL",
        "unit": "per box (60 points)",
        "stockQuantity": 15,
        "sku": "GP-25-060",
        "dimensions": { "width_mm": 50, "height_mm": 30, "depth_mm": 20 },
        "images": ["https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=640&h=480&fit=crop"],
        "manufacturer": "EndoPro",
        "tags": ["endodontics", "gutta percha", "root canal"],
        "createdAt": "2026-03-03"
    },
    {
        "id": "p003",
        "name": {
            "ka": "ქირურგიული ასპირატორის ნემსები - სტერილური",
            "en": "Surgical Aspirator Tips - Sterile"
        },
        "category": "Surgery",
        "shortDescription": {
            "ka": "სტერილური ერთჯერადი ქირურგიული ასპირატორის ნემსები.",
            "en": "Sterile disposable surgical aspirator tips."
        },
        "description": {
            "ka": "მაღალი მოცულობის ქირურგიული ასპირატორის ნემსები სამედიცინო კლასის პოლიმერისგან. სტერილური ერთჯერადი დიზაინი უზრუნველყოფს მაქსიმალურ ინფექციის კონტროლს. მოქნილი მაგრამ მყარი კონსტრუქცია უზრუნველყოფს ოპტიმალურ ასპირაციის კონტროლს ქირურგიული პროცედურების დროს.",
            "en": "High-volume surgical aspirator tips made from medical-grade polymer. Sterile single-use design ensures maximum infection control. Flexible yet rigid construction provides optimal suction control during surgical procedures."
        },
        "price": 12.00,
        "currency": "GEL",
        "unit": "per pack (25 pcs)",
        "stockQuantity": 0,
        "sku": "ASP-25-S",
        "dimensions": { "width_mm": 80, "height_mm": 150, "depth_mm": 40 },
        "images": ["https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=640&h=480&fit=crop"],
        "manufacturer": "SurgiMed",
        "tags": ["surgery", "aspirator", "disposable"],
        "createdAt": "2026-03-02"
    },
    {
        "id": "p004",
        "name": {
            "ka": "დენტალური იმპლანტი - ტიტანი 4.0 x 10მმ",
            "en": "Dental Implant - Titanium 4.0 x 10mm"
        },
        "category": "Implants",
        "shortDescription": {
            "ka": "მაღალი ხარისხის ტიტანის დენტალური იმპლანტი.",
            "en": "High-quality titanium dental implant."
        },
        "description": {
            "ka": "კლას IV ტიტანის დენტალური იმპლანტი SLA ზედაპირით. შესანიშნავი ოსტეოინტეგრაციისთვის. შიდა hex კავშირი უზრუნველყოფს სტაბილურობას. შეიცავს სამკუთხა კავშირს და დამცავ საფარს.",
            "en": "Grade IV titanium dental implant with SLA surface treatment. Excellent for osteointegration. Internal hex connection ensures stability. Includes tri-lobe connection and protective cover."
        },
        "price": 350.00,
        "currency": "GEL",
        "unit": "per piece",
        "stockQuantity": 8,
        "sku": "IMP-4.0-10",
        "dimensions": { "width_mm": 4, "height_mm": 10, "depth_mm": 4 },
        "images": ["https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=640&h=480&fit=crop"],
        "manufacturer": "ImplantPro",
        "tags": ["implant", "titanium", "surgery"],
        "createdAt": "2026-03-01"
    },
    {
        "id": "p005",
        "name": {
            "ka": "ორთოდონტიული ბრეკეტები - მეტალის კერამიკა",
            "en": "Orthodontic Brackets - Metal Ceramic"
        },
        "category": "Orthodontics",
        "shortDescription": {
            "ka": "მინი ტყუპი ბრეკეტები თვითლიგატირებით.",
            "en": "Mini twin brackets with self-ligating system."
        },
        "description": {
            "ka": "მინი ტყუპი ორთოდონტიული ბრეკეტები თვითლიგატირებით. დაბალი ტრიბული და მაღალი ესთეტიკა. 0.022 სლოტი Roth სისტემა. მარტივი ჩაკეტვა და გახსნა.",
            "en": "Mini twin orthodontic brackets with self-ligating system. Low friction and high aesthetics. 0.022 slot Roth system. Easy locking and unlocking mechanism."
        },
        "price": 125.00,
        "currency": "GEL",
        "unit": "per set (20 brackets)",
        "stockQuantity": 12,
        "sku": "BRK-MINI-022",
        "dimensions": { "width_mm": 60, "height_mm": 40, "depth_mm": 25 },
        "images": ["https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=640&h=480&fit=crop"],
        "manufacturer": "OrthoTech",
        "tags": ["orthodontics", "brackets", "self-ligating"],
        "createdAt": "2026-02-28"
    },
    {
        "id": "p006",
        "name": {
            "ka": "დენტალური რენტგენი - სენსორი RVG",
            "en": "Dental X-Ray Sensor - RVG"
        },
        "category": "Radiology",
        "shortDescription": {
            "ka": "ციფრული რენტგენის სენსორი მაღალი გაფართოებით.",
            "en": "Digital X-ray sensor with high resolution."
        },
        "description": {
            "ka": "ციფრული RVG სენსორი CMOS ტექნოლოგიით. 20 მგ პიქსელი გაფართოება. USB კავშირი. მყისიერი გამოსახულება. მცირე ზომა პაციენტის კომფორტისთვის. თავსებადია ყველა მთავარ დენტალურ პროგრამასთან.",
            "en": "Digital RVG sensor with CMOS technology. 20 megapixel resolution. USB connection. Instant imaging. Small size for patient comfort. Compatible with all major dental software."
        },
        "price": 2800.00,
        "currency": "GEL",
        "unit": "per sensor",
        "stockQuantity": 3,
        "sku": "RVG-CMOS-20",
        "dimensions": { "width_mm": 35, "height_mm": 25, "depth_mm": 8 },
        "images": ["https://images.unsplash.com/photo-1579154204601-01588f351e67?w=640&h=480&fit=crop"],
        "manufacturer": "RadioDent",
        "tags": ["radiology", "x-ray", "digital", "sensor"],
        "createdAt": "2026-02-27"
    }
];

// ==========================================
// CONFIGURATION
// ==========================================

const CONFIG = {
    currency: 'GEL',
    itemsPerPage: 12,
    storageKey: 'dentpro_products',
    defaultImage: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="320" height="240" viewBox="0 0 320 240"%3E%3Crect fill="%23e2e8f0" width="320" height="240"/%3E%3Ctext fill="%2394a3b8" font-family="sans-serif" font-size="16" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3ENo Image%3C/text%3E%3C/svg%3E'
};

// ==========================================
// TRANSLATIONS
// ==========================================

let currentLang = localStorage.getItem('dentpro_lang') || "ka";

const translations = {
    ka: {
        pageTitle: "DentPro - სტომატოლოგიური მასალები",
        heroTitle: "სიზუსტის მასალები თანამედროვე სტომატოლოგიისთვის",
        heroSubtitle: "სანდოობა, ხარისხი და ინოვაცია - მსოფლიოს მასშტაბით სტომატოლოგების რჩეული",
        admin: "ადმინი",
        searchPlaceholder: "პროდუქტის ძებნა...",
        allCategories: "ყველა კატეგორია",
        inStock: "მხოლოდ მარაგში",
        minPrice: "მინ. ფასი",
        maxPrice: "მაქს. ფასი",
        sortBy: "სორტირება:",
        sortNewest: "უახლესი",
        sortPriceAsc: "ფასი: ზრდადობით",
        sortPriceDesc: "ფასი: კლებადობით",
        sortName: "სახელი: ა-ჰ",
        noResults: "თქვენს კრიტერიუმებს არცერთი პროდუქტი არ შეესაბამება.",
        contact: "კონტაქტი",
        phone: "ტელ: +995 32 2 123 456",
        address: "მისამართი: ცანცაძის ქ. 123, თბილისი",
        legal: "იურიდიული ინფორმაცია",
        allRights: "ყველა უფლება დაცულია.",
        medicalReg: "სამედიცინო მოწყობილობის რეგისტრაცია: MD-GEO-2026-001",
        isoCert: "ISO 13485 სერთიფიცირებული",
        adminPanel: "ადმინ პანელი",
        tabProducts: "პროდუქტები",
        tabAddProduct: "პროდუქტის დამატება",
        labelCategory: "კატეგორია",
        labelSku: "SKU",
        labelPrice: "ფასი *",
        labelCurrency: "ვალუტა",
        labelUnit: "ერთეული",
        labelStock: "მარაგის რაოდენობა",
        labelManufacturer: "მწარმოებელი",
        labelDimensions: "ზომები (მმ)",
        labelImages: "სურათის URL-ები (თითო ხაზზე)",
        labelTags: "ტეგები (მძიმით გამოყოფილი)",
        width: "სიგანე",
        height: "სიმაღლე",
        depth: "სიღრმე",
        btnSave: "პროდუქტის შენახვა",
        btnCancel: "გაუქმება",
        btnDownload: "products.json ჩამოტვირთვა",
        btnReset: "ნაგულისხმევზე დაბრუნება",
        inStockBadge: "მარაგშია",
        outOfStockBadge: "არ არის მარაგში",
        perUnit: "ცალი",
        details: "დეტალები",
        close: "დახურვა",
        edit: "რედაქტირება",
        delete: "წაშლა",
        confirmDelete: "ნამდვილად გსურთ ამ პროდუქტის წაშლა?",
        saveSuccess: "პროდუქტი წარმატებით შეინახა!",
        updateSuccess: "პროდუქტი წარმატებით განახლდა!",
        resetConfirm: "ეს მოქმედება გააუქმებს ყველა ცვლილებას. გსურთ გაგრძელება?"
    },
    en: {
        pageTitle: "DentPro Supplies - Premium Dental Materials",
        heroTitle: "Precision Materials for Modern Dentistry",
        heroSubtitle: "Trusted by dental professionals worldwide for quality, reliability, and innovation.",
        admin: "Admin",
        searchPlaceholder: "Search products...",
        allCategories: "All Categories",
        inStock: "In Stock Only",
        minPrice: "Min Price",
        maxPrice: "Max Price",
        sortBy: "Sort by:",
        sortNewest: "Newest",
        sortPriceAsc: "Price: Low to High",
        sortPriceDesc: "Price: High to Low",
        sortName: "Name: A-Z",
        noResults: "No products found matching your criteria.",
        contact: "Contact",
        phone: "Phone: +995 32 2 123 456",
        address: "Address: 123 Dental Street, Tbilisi, Georgia",
        legal: "Legal",
        allRights: "All rights reserved.",
        medicalReg: "Medical Device Registration: MD-GEO-2026-001",
        isoCert: "ISO 13485 Certified",
        adminPanel: "Admin Panel",
        tabProducts: "Products",
        tabAddProduct: "Add Product",
        labelCategory: "Category",
        labelSku: "SKU",
        labelPrice: "Price *",
        labelCurrency: "Currency",
        labelUnit: "Unit",
        labelStock: "Stock Quantity",
        labelManufacturer: "Manufacturer",
        labelDimensions: "Dimensions (mm)",
        labelImages: "Image URLs (one per line)",
        labelTags: "Tags (comma separated)",
        width: "Width",
        height: "Height",
        depth: "Depth",
        btnSave: "Save Product",
        btnCancel: "Cancel",
        btnDownload: "Download products.json",
        btnReset: "Reset to Default",
        inStockBadge: "In Stock",
        outOfStockBadge: "Out of Stock",
        perUnit: "unit",
        details: "Details",
        close: "Close",
        edit: "Edit",
        delete: "Delete",
        confirmDelete: "Are you sure you want to delete this product?",
        saveSuccess: "Product saved successfully!",
        updateSuccess: "Product updated successfully!",
        resetConfirm: "This will reset all changes. Continue?"
    }
};

// ==========================================
// STATE MANAGEMENT
// ==========================================

const state = {
    products: [],
    filteredProducts: [],
    currentFilter: {
        search: '',
        category: '',
        inStock: true,
        minPrice: null,
        maxPrice: null,
        sort: 'newest'
    },
    editingProduct: null
};

// ==========================================
// DOM ELEMENTS
// ==========================================

const elements = {
    productGrid: document.getElementById('productGrid'),
    noResults: document.getElementById('noResults'),
    searchInput: document.getElementById('searchInput'),
    categoryFilter: document.getElementById('categoryFilter'),
    stockToggle: document.getElementById('stockToggle'),
    minPrice: document.getElementById('minPrice'),
    maxPrice: document.getElementById('maxPrice'),
    sortSelect: document.getElementById('sortSelect'),
    resultsCount: document.getElementById('resultsCount'),
    adminBtn: document.getElementById('adminBtn'),
    productModal: document.getElementById('productModal'),
    adminModal: document.getElementById('adminModal'),
    modalBody: document.getElementById('modalBody'),
    adminProductList: document.getElementById('adminProductList'),
    productForm: document.getElementById('productForm'),
    categoryList: document.getElementById('categoryList'),
    downloadJson: document.getElementById('downloadJson'),
    resetData: document.getElementById('resetData'),
    cancelEdit: document.getElementById('cancelEdit'),
    langKa: document.getElementById('langKa'),
    langEn: document.getElementById('langEn')
};

// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', async () => {
    await initializeData();
    setupEventListeners();
    setupLanguageSwitcher();
    updateLanguage(currentLang);
    renderApp();
});

async function initializeData() {
    // Try to load from localStorage first
    const stored = localStorage.getItem(CONFIG.storageKey);
    
    if (stored) {
        try {
            state.products = JSON.parse(stored);
            // Migrate old format to bilingual if needed
            state.products = state.products.map(migrateToBilingual);
            console.log('Loaded from localStorage');
        } catch (e) {
            console.error('Error parsing localStorage:', e);
            loadDefaultProducts();
        }
    } else {
        // No localStorage - use embedded default products
        loadDefaultProducts();
    }
    
    state.filteredProducts = [...state.products];
}

function loadDefaultProducts() {
    // Deep copy embedded products to avoid reference issues
    state.products = JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
    console.log('Loaded from embedded data');
}

function migrateToBilingual(product) {
    // If product is already bilingual, return as-is
    if (typeof product.name === 'object' && product.name.ka) {
        return product;
    }
    
    // Migrate old format to bilingual
    return {
        ...product,
        name: {
            ka: product.name || '',
            en: product.name || ''
        },
        shortDescription: {
            ka: product.shortDescription || '',
            en: product.shortDescription || ''
        },
        description: {
            ka: product.description || '',
            en: product.description || ''
        }
    };
}

// ==========================================
// LANGUAGE SYSTEM
// ==========================================

function setupLanguageSwitcher() {
    elements.langKa.addEventListener('click', () => updateLanguage('ka'));
    elements.langEn.addEventListener('click', () => updateLanguage('en'));
}

function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('dentpro_lang', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update active button state
    elements.langKa.classList.toggle('active', lang === 'ka');
    elements.langEn.classList.toggle('active', lang === 'en');
    
    // Update all translated elements
    document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.getAttribute("data-translate");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll("[data-translate-placeholder]").forEach(el => {
        const key = el.getAttribute("data-translate-placeholder");
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
    
    // Update search input placeholder
    if (elements.searchInput) {
        elements.searchInput.placeholder = translations[lang].searchPlaceholder;
    }
    
    // Update page title
    document.title = translations[lang].pageTitle;
    
    // Re-render products with new language
    renderProducts();
    updateCategoryFilter();
    
    // Update admin product list if open
    if (!elements.adminModal.hidden) {
        renderAdminProductList();
    }
}

// ==========================================
// EVENT LISTENERS
// ==========================================

function setupEventListeners() {
    // Search and filters
    elements.searchInput.addEventListener('input', debounce(handleSearch, 300));
    elements.categoryFilter.addEventListener('change', handleFilter);
    elements.stockToggle.addEventListener('change', handleFilter);
    elements.minPrice.addEventListener('input', debounce(handleFilter, 300));
    elements.maxPrice.addEventListener('input', debounce(handleFilter, 300));
    elements.sortSelect.addEventListener('change', handleSort);
    
    // Admin
    elements.adminBtn.addEventListener('click', () => openAdminModal());
    elements.productForm.addEventListener('submit', handleProductSubmit);
    elements.downloadJson.addEventListener('click', downloadProductsJson);
    elements.resetData.addEventListener('click', resetToDefault);
    elements.cancelEdit.addEventListener('click', cancelEditing);
    
    // Modal close buttons
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', closeAllModals);
    });
    
    // Close modal on backdrop click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeAllModals();
        });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAllModals();
    });
    
    // Admin tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });
}

// ==========================================
// RENDER FUNCTIONS
// ==========================================

function renderApp() {
    renderProducts();
    updateCategoryFilter();
    updateResultsCount();
}

function renderProducts() {
    const { filteredProducts } = state;
    
    if (filteredProducts.length === 0) {
        elements.productGrid.innerHTML = '';
        elements.noResults.hidden = false;
        return;
    }
    
    elements.noResults.hidden = true;
    elements.productGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    
    // Add click handlers
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => openProductDetail(card.dataset.id));
    });
}

function createProductCard(product) {
    const inStock = product.stockQuantity > 0;
    const stockText = inStock ? translations[currentLang].inStockBadge : translations[currentLang].outOfStockBadge;
    const stockClass = inStock ? 'in-stock' : 'out-of-stock';
    const imageUrl = product.images && product.images[0] ? product.images[0] : CONFIG.defaultImage;
    
    // Get bilingual text
    const name = product.name[currentLang] || product.name.en || product.name;
    const shortDesc = product.shortDescription[currentLang] || product.shortDescription.en || product.shortDescription || '';
    
    return `
        <article class="product-card" data-id="${product.id}" role="listitem" tabindex="0">
            <div class="product-image-wrapper">
                <img src="${imageUrl}" 
                     alt="${name}" 
                     class="product-image"
                     loading="lazy"
                     onerror="this.src='${CONFIG.defaultImage}'">
                <span class="stock-badge ${stockClass}">${stockText}</span>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category || 'Uncategorized'}</div>
                <h3 class="product-name">${escapeHtml(name)}</h3>
                <p class="product-description">${escapeHtml(shortDesc)}</p>
                <div class="product-footer">
                    <div class="product-price">
                        ${formatPrice(product.price, product.currency)}
                        <span class="product-unit">/${product.unit || translations[currentLang].perUnit}</span>
                    </div>
                </div>
            </div>
        </article>
    `;
}

function openProductDetail(productId) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;
    
    const inStock = product.stockQuantity > 0;
    const imageUrl = product.images && product.images[0] ? product.images[0] : CONFIG.defaultImage;
    
    // Get bilingual text
    const name = product.name[currentLang] || product.name.en || product.name;
    const description = product.description[currentLang] || product.description.en || product.description || '';
    
    elements.modalBody.innerHTML = `
        <div class="product-detail">
            <div>
                <img src="${imageUrl}" alt="${name}" class="detail-image" onerror="this.src='${CONFIG.defaultImage}'">
            </div>
            <div class="detail-info">
                <div class="product-category">${product.category || 'Uncategorized'}</div>
                <h2 id="modalTitle">${escapeHtml(name)}</h2>
                <div class="detail-meta">
                    <div class="detail-meta-item">
                        <span class="detail-meta-label">SKU</span>
                        <span class="detail-meta-value">${product.sku || 'N/A'}</span>
                    </div>
                    <div class="detail-meta-item">
                        <span class="detail-meta-label">${translations[currentLang].labelManufacturer}</span>
                        <span class="detail-meta-value">${product.manufacturer || 'N/A'}</span>
                    </div>
                    <div class="detail-meta-item">
                        <span class="detail-meta-label">${translations[currentLang].labelStock}</span>
                        <span class="detail-meta-value" style="color: ${inStock ? 'var(--success)' : 'var(--danger)'}">
                            ${inStock ? product.stockQuantity + ' ' + translations[currentLang].inStockBadge.toLowerCase() : translations[currentLang].outOfStockBadge}
                        </span>
                    </div>
                </div>
                <div class="detail-price">${formatPrice(product.price, product.currency)} <span style="font-size: 16px; color: var(--text-muted);">/ ${product.unit || translations[currentLang].perUnit}</span></div>
                <p class="detail-description">${escapeHtml(description)}</p>
                ${product.dimensions ? `
                    <div class="detail-meta">
                        <div class="detail-meta-item">
                            <span class="detail-meta-label">${translations[currentLang].labelDimensions}</span>
                            <span class="detail-meta-value">${product.dimensions.width_mm}×${product.dimensions.height_mm}×${product.dimensions.depth_mm} mm</span>
                        </div>
                    </div>
                ` : ''}
                ${product.tags && product.tags.length ? `
                    <div class="detail-tags">
                        ${product.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}
                    </div>
                ` : ''}
            </div>
        </div>
    `;
    
    elements.productModal.hidden = false;
    setTimeout(() => elements.productModal.classList.add('active'), 10);
    document.body.style.overflow = 'hidden';
}

// ==========================================
// FILTERING & SORTING
// ==========================================

function handleSearch(e) {
    state.currentFilter.search = e.target.value.toLowerCase();
    applyFilters();
}

function handleFilter() {
    state.currentFilter.category = elements.categoryFilter.value;
    state.currentFilter.inStock = elements.stockToggle.checked;
    state.currentFilter.minPrice = elements.minPrice.value ? parseFloat(elements.minPrice.value) : null;
    state.currentFilter.maxPrice = elements.maxPrice.value ? parseFloat(elements.maxPrice.value) : null;
    applyFilters();
}

function handleSort(e) {
    state.currentFilter.sort = e.target.value;
    applyFilters();
}

function applyFilters() {
    let result = [...state.products];
    const { search, category, inStock, minPrice, maxPrice, sort } = state.currentFilter;
    
    // Search (search in both languages)
    if (search) {
        result = result.filter(p => {
            const nameMatch = (p.name.ka && p.name.ka.toLowerCase().includes(search)) || 
                             (p.name.en && p.name.en.toLowerCase().includes(search));
            const descMatch = (p.shortDescription.ka && p.shortDescription.ka.toLowerCase().includes(search)) || 
                             (p.shortDescription.en && p.shortDescription.en.toLowerCase().includes(search)) ||
                             (p.description.ka && p.description.ka.toLowerCase().includes(search)) || 
                             (p.description.en && p.description.en.toLowerCase().includes(search));
            return nameMatch || descMatch;
        });
    }
    
    // Category
    if (category) {
        result = result.filter(p => p.category === category);
    }
    
    // Stock
    if (inStock) {
        result = result.filter(p => p.stockQuantity > 0);
    }
    
    // Price range
    if (minPrice !== null) {
        result = result.filter(p => p.price >= minPrice);
    }
    if (maxPrice !== null) {
        result = result.filter(p => p.price <= maxPrice);
    }
    
    // Sort
    switch (sort) {
        case 'price-asc':
            result.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            result.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            result.sort((a, b) => {
                const nameA = a.name[currentLang] || a.name.en || '';
                const nameB = b.name[currentLang] || b.name.en || '';
                return nameA.localeCompare(nameB);
            });
            break;
        case 'newest':
        default:
            result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
    
    state.filteredProducts = result;
    renderProducts();
    updateResultsCount();
}

function updateCategoryFilter() {
    const categories = [...new Set(state.products.map(p => p.category).filter(Boolean))].sort();
    const currentValue = elements.categoryFilter.value;
    
    elements.categoryFilter.innerHTML = `<option value="">${translations[currentLang].allCategories}</option>` +
        categories.map(cat => `<option value="${cat}">${cat}</option>`).join('');
    
    elements.categoryFilter.value = currentValue;
    
    // Update datalist for admin form
    elements.categoryList.innerHTML = categories.map(cat => `<option value="${cat}">`).join('');
}

function updateResultsCount() {
    const count = state.filteredProducts.length;
    const total = state.products.length;
    elements.resultsCount.textContent = `${count} / ${total}`;
}

// ==========================================
// ADMIN PANEL
// ==========================================

function openAdminModal() {
    elements.adminModal.hidden = false;
    setTimeout(() => elements.adminModal.classList.add('active'), 10);
    document.body.style.overflow = 'hidden';
    renderAdminProductList();
    switchTab('products');
}

function switchTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabName);
    });
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.toggle('active', content.id === tabName + 'Tab');
    });
    
    if (tabName === 'products') {
        renderAdminProductList();
    }
}

function renderAdminProductList() {
    elements.adminProductList.innerHTML = state.products
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map(product => {
            const name = product.name[currentLang] || product.name.en || product.name;
            return `
                <div class="admin-product-item">
                    <div class="admin-product-info">
                        <div class="admin-product-name">${escapeHtml(name)}</div>
                        <div class="admin-product-sku">${product.sku || 'No SKU'} • ${product.category || 'No category'}</div>
                    </div>
                    <div class="admin-product-actions">
                        <button class="btn btn-sm btn-secondary" onclick="editProduct('${product.id}')">${translations[currentLang].edit}</button>
                        <button class="btn btn-sm btn-danger" onclick="deleteProduct('${product.id}')">${translations[currentLang].delete}</button>
                    </div>
                </div>
            `;
        }).join('');
}

function handleProductSubmit(e) {
    e.preventDefault();
    
    const productData = {
        id: elements.productForm.querySelector('#productId').value || 'p' + Date.now(),
        name: {
            ka: document.getElementById('prodNameKa').value,
            en: document.getElementById('prodNameEn').value
        },
        category: document.getElementById('prodCategory').value,
        shortDescription: {
            ka: document.getElementById('prodShortDescKa').value,
            en: document.getElementById('prodShortDescEn').value
        },
        description: {
            ka: document.getElementById('prodDescKa').value,
            en: document.getElementById('prodDescEn').value
        },
        price: parseFloat(document.getElementById('prodPrice').value),
        currency: document.getElementById('prodCurrency').value || CONFIG.currency,
        unit: document.getElementById('prodUnit').value,
        stockQuantity: parseInt(document.getElementById('prodStock').value) || 0,
        sku: document.getElementById('prodSku').value,
        manufacturer: document.getElementById('prodManufacturer').value,
        dimensions: {
            width_mm: parseInt(document.getElementById('dimWidth').value) || 0,
            height_mm: parseInt(document.getElementById('dimHeight').value) || 0,
            depth_mm: parseInt(document.getElementById('dimDepth').value) || 0
        },
        images: document.getElementById('prodImages').value.split('\n').filter(url => url.trim()),
        tags: document.getElementById('prodTags').value.split(',').map(t => t.trim()).filter(Boolean),
        createdAt: state.editingProduct ? state.editingProduct.createdAt : new Date().toISOString().split('T')[0]
    };
    
    if (state.editingProduct) {
        const index = state.products.findIndex(p => p.id === state.editingProduct.id);
        if (index !== -1) {
            state.products[index] = productData;
        }
    } else {
        state.products.push(productData);
    }
    
    saveToLocalStorage();
    resetForm();
    switchTab('products');
    applyFilters();
    updateCategoryFilter();
    
    alert(state.editingProduct ? translations[currentLang].updateSuccess : translations[currentLang].saveSuccess);
}

function editProduct(productId) {
    const product = state.products.find(p => p.id === productId);
    if (!product) return;
    
    state.editingProduct = product;
    
    document.getElementById('productId').value = product.id;
    document.getElementById('prodNameKa').value = product.name.ka || '';
    document.getElementById('prodNameEn').value = product.name.en || '';
    document.getElementById('prodCategory').value = product.category || '';
    document.getElementById('prodShortDescKa').value = product.shortDescription.ka || '';
    document.getElementById('prodShortDescEn').value = product.shortDescription.en || '';
    document.getElementById('prodDescKa').value = product.description.ka || '';
    document.getElementById('prodDescEn').value = product.description.en || '';
    document.getElementById('prodPrice').value = product.price;
    document.getElementById('prodCurrency').value = product.currency || CONFIG.currency;
    document.getElementById('prodUnit').value = product.unit || '';
    document.getElementById('prodStock').value = product.stockQuantity;
    document.getElementById('prodSku').value = product.sku || '';
    document.getElementById('prodManufacturer').value = product.manufacturer || '';
    document.getElementById('dimWidth').value = product.dimensions?.width_mm || '';
    document.getElementById('dimHeight').value = product.dimensions?.height_mm || '';
    document.getElementById('dimDepth').value = product.dimensions?.depth_mm || '';
    document.getElementById('prodImages').value = product.images ? product.images.join('\n') : '';
    document.getElementById('prodTags').value = product.tags ? product.tags.join(', ') : '';
    
    document.getElementById('cancelEdit').hidden = false;
    switchTab('add');
}

function deleteProduct(productId) {
    if (!confirm(translations[currentLang].confirmDelete)) return;
    
    state.products = state.products.filter(p => p.id !== productId);
    saveToLocalStorage();
    renderAdminProductList();
    applyFilters();
    updateCategoryFilter();
}

function cancelEditing() {
    resetForm();
    switchTab('products');
}

function resetForm() {
    elements.productForm.reset();
    document.getElementById('productId').value = '';
    document.getElementById('prodCurrency').value = CONFIG.currency;
    document.getElementById('cancelEdit').hidden = true;
    state.editingProduct = null;
}

function saveToLocalStorage() {
    localStorage.setItem(CONFIG.storageKey, JSON.stringify(state.products));
}

function downloadProductsJson() {
    const dataStr = JSON.stringify(state.products, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'products.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function resetToDefault() {
    if (!confirm(translations[currentLang].resetConfirm)) return;
    
    localStorage.removeItem(CONFIG.storageKey);
    loadDefaultProducts();
    applyFilters();
    updateCategoryFilter();
    renderAdminProductList();
    alert('Reset to default products complete.');
}

// ==========================================
// UTILITIES
// ==========================================

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.hidden = true;
        }, 300);
    });
    document.body.style.overflow = '';
    resetForm();
}

function formatPrice(price, currency) {
    const curr = currency || CONFIG.currency;
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: curr,
        minimumFractionDigits: 2
    }).format(price);
}

function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Expose functions for inline event handlers
window.editProduct = editProduct;
window.deleteProduct = deleteProduct;