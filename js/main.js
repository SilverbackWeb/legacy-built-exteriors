/* ==========================================
   CONTRACTOR TEMPLATE - MAIN JS
   Loads config and populates all content
   with marquee animations
   ========================================== */

/* ==========================================
   CONFIG DEFINITION
   Embedded directly to avoid CORS issues on local filesystem
   ========================================== */
const siteConfig = {
    "business": {
        "name": "Legacy Built Exteriors",
        "tagline": "Roofing, Siding, Windows, Soffits & Gutters",
        "phone": "(240) 320-2174",
        "email": "legacybeoffice@gmail.com",
        "locations": [
            {
                "name": "Maryland",
                "address": "16701 Melford Blvd Suite 400",
                "city": "Bowie",
                "state": "MD",
                "zip": "20715",
                "mapUrl": "https://share.google/79zgGzRSorDlNUqk1"
            },
            {
                "name": "Virginia",
                "address": "1751 Pinnacle Dr Suite 600",
                "city": "McLean",
                "state": "VA",
                "zip": "22102",
                "mapUrl": "https://maps.app.goo.gl/ikdVVaTo8ywr59zw7"
            }
        ],
        "licenses": {
            "mhic": "113623",
            "virginia": "2705195717",
            "pennsylvania": "199779"
        },
        "social": {
            "instagram": "https://www.instagram.com/legacybuiltexteriors/",
            "bbb": "https://www.bbb.org/us/md/bowie/profile/residential-roofing/legacy-built-exteriors-llc-0241-236094862",
            "gaf": "https://www.gaf.com/en-us/roofing-contractors/residential/usa/md/bowie/legacy-built-exteriors-llc-1151002"
        }
    },

    "theme": {
        "primaryColor": "#b1ac93",
        "secondaryColor": "#000000",
        "accentColor": "#d4af37"
    },

    "logo": {
        "type": "legacy",
        "alt": "Legacy Built Exteriors Logo"
    },

    "logoOptions": {
        "legacy": "assets/solo-logo.webp",
        "legacy-black": "assets/Logo-black.webp",
        "legacy-white": "assets/logo-white.webp"
    },

    "hero": {
        "label": "Roofing & Siding Contractors, Maryland",
        "headline": "Legacy Built Exteriors",
        "tagline": "Where Quality Is The Priority",
        "ctaText": "Get Your Free Estimate",
        "backgroundImage": "assets/Hero-desktop.webp",
        "backgroundImageMobile": "assets/hero-mobile.webp"
    },

    "services": [
        {
            "title": "Roofing",
            "description": "Expert roofing installation, repair, and maintenance. We handle storm damage restoration and insurance claims to protect your home from the elements.",
            "image": "assets/ROOFING.webp",
            "imageMobile": "assets/ROOFING-100.jpg",
            "url": "roofing.html"
        },
        {
            "title": "Siding",
            "description": "High-quality siding installation and replacement. We enhance your home's curb appeal while providing superior protection and energy efficiency.",
            "image": "assets/SIDING.webp",
            "imageMobile": "assets/SIDING-100.jpg",
            "url": "siding.html"
        },
        {
            "title": "Gutters",
            "description": "Professional gutter installation and maintenance. We ensure proper water drainage to protect your foundation and landscaping.",
            "image": "assets/GUTTERS.webp",
            "imageMobile": "assets/GUTTERS.jpg",
            "url": "gutters.html"
        },
        {
            "title": "Soffits",
            "description": "Custom soffit installation and repair. We provide ventilation and aesthetic improvements for your home's exterior.",
            "image": "assets/SOFFITS.webp",
            "imageMobile": "assets/SOFFITS-100.jpg",
            "url": "soffits.html"
        }
    ],

    "about": {
        "headline": "Expert Roofing & Siding Contractors Serving the DMV & Pennsylvania",
        "description": "At Legacy Built Exteriors, we believe that your home deserves nothing less than the best. Specializing in roofing services, siding, gutters, soffit, and windows, we are dedicated to enhancing the beauty and durability of your home while ensuring peace of mind through our expertise in insurance claims and storm damage restoration.",
        "image": "assets/Hero-desktop.webp",
        "features": [
            "Licensed & Insured Professionals",
            "Storm Damage Experts",
            "Insurance Claims Expertise",
            "Serving Northern Virginia, Maryland & Pennsylvania",
            "Free Estimates & Consultations",
            "Warranty on All Work"
        ]
    },

    "gallery": {
        "headline": "Recent Roofing & Siding Projects - Quality Exterior Contractor Work",
        "images": [
            { "src": "Recent%20work%20photos/legacy-built-exteriors-roofing-maryland.002.jpeg", "alt": "Roofing Project 1" },
            { "src": "Recent%20work%20photos/drone-before-legacy-built-exteriors-roofing-maryland.003.jpeg", "alt": "Drone Roofing Project" },
            { "src": "Recent%20work%20photos/legacy-built-exteriors-siding-roofing-maryland.004.jpeg", "alt": "Siding Project 1" },
            { "src": "Recent%20work%20photos/legacy-built-exteriors-siding-roofing-maryland.005.jpeg", "alt": "Siding Project 2" },
            { "src": "Recent%20work%20photos/legacy-built-exteriors-siding-roofing-maryland.006.jpeg", "alt": "Complete Exterior Work" },
            { "src": "Recent%20work%20photos/legacy-built-exteriors-siding-roofing-maryland.007.jpeg", "alt": "Roofing Project 3" },
            { "src": "Recent%20work%20photos/legacy-built-exteriors-siding-roofing-maryland.008.jpeg", "alt": "Siding Project 3" },
            { "src": "Recent%20work%20photos/legacy-built-exteriors-siding-roofing-maryland.008.jpeg", "alt": "Siding & Roofing Combo" },
            { "src": "Recent%20work%20photos/legacy-built-exteriors-siding-roofing-maryland.009.jpeg", "alt": "Home Exterior Renovation" },
            { "src": "Recent%20work%20photos/legacy-built-exteriors-siding-roofing-maryland.010.jpeg", "alt": "Quality Craftsmanship" },
            { "src": "Recent%20work%20photos/legacy-built-exteriors-siding-roofing-maryland.011.jpeg", "alt": "Roofing Installation" },
            { "src": "Recent%20work%20photos/legacy-built-exteriors-siding-roofing-maryland.012.jpeg", "alt": "Exterior Transformation" },
            { "src": "Recent%20work%20photos/legacy-built-exteriors-siding-roofing-maryland.013.jpeg", "alt": "Professional Installation" },
            { "src": "Recent%20work%20photos/legacy-built-exteriors-siding-roofing-maryland.014.jpeg", "alt": "Finished Project" },
            { "src": "Recent%20work%20photos/legacy-built-exteriors-siding-roofing-maryland.015.jpeg", "alt": "Storm Damage Repair" },
            { "src": "Recent%20work%20photos/legacy-built-exteriors-siding-roofing-maryland.017.jpeg", "alt": "Home Improvement" },
            { "src": "Recent%20work%20photos/legacy-built-exteriors-siding-roofing-maryland.018.jpeg", "alt": "Exterior Excellence" }
        ]
    },

    "reviews": [
        {
            "quote": "Professional team that delivered exceptional work on our roof replacement. They handled our insurance claim seamlessly and the quality is outstanding.",
            "name": "John M.",
            "rating": 5
        },
        {
            "quote": "Legacy Built Exteriors transformed our home's exterior. New siding and gutters look amazing and the installation was flawless.",
            "name": "Sarah T.",
            "rating": 5
        },
        {
            "quote": "Excellent service from start to finish. They were responsive, professional, and the workmanship exceeded our expectations.",
            "name": "Michael R.",
            "rating": 5
        },
        {
            "quote": "Great experience with the entire process. Fast estimates, fair pricing, and they completed the work right on schedule.",
            "name": "Jennifer L.",
            "rating": 5
        },
        {
            "quote": "Highly recommend Legacy Built Exteriors. They handled our storm damage claim and rebuilt our roof better than original.",
            "name": "David K.",
            "rating": 5
        }
    ],

    "process": [
        {
            "title": "Free Consultation & Estimate",
            "description": "We assess your project, discuss your needs, and provide a detailed, no-obligation estimate."
        },
        {
            "title": "Insurance Claim Assistance",
            "description": "If storm damage is involved, we handle the insurance claim process to maximize your coverage."
        },
        {
            "title": "Expert Installation",
            "description": "Our licensed professionals execute the work with precision, using quality materials and proven techniques."
        },
        {
            "title": "Quality Inspection & Warranty",
            "description": "Final walkthrough ensures everything meets our standards, backed by our warranty on all work."
        }
    ],

    "serviceArea": {
        "mapImage": "assets/service-area-map.svg",
        "headline": "Roofing & Siding Contractors Throughout the Washington DC Region",
        "highlightText": "DMV Area",
        "description": "We provide roofing and siding services throughout the Washington DC metropolitan region, serving homeowners across Northern Virginia and Maryland, as well as select communities in Pennsylvania. Our team focuses primarily on residential and commercial projects in the surrounding suburbs of Washington DC.",
        "locations": [
            {
                "name": "Bowie, MD Office",
                "address": "16701 Melford Blvd Suite 400, Bowie, MD 20715",
                "mapUrl": "https://www.google.com/maps/place/16701+Melford+Blvd+Suite+400,+Bowie,+MD+20715,+USA/@38.9614408,-76.7172688,17z/data=!3m1!4b1!4m6!3m5!1s0x89b7edebfa6e2f41:0x6541b5f2ba279567!8m2!3d38.9614408!4d-76.7146939!16s%2Fg%2F11whr1v9bk?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
            },
            {
                "name": "McLean, VA Office",
                "address": "1751 Pinnacle Dr Suite 600, McLean, VA 22102",
                "mapUrl": "https://www.google.com/maps/place/1751+Pinnacle+Dr+%23600,+McLean,+VA+22102,+USA/@38.9214585,-77.2309871,17z/data=!3m1!4b1!4m6!3m5!1s0x89b64aee1848aba5:0x47167491ec87f132!8m2!3d38.9214585!4d-77.2284122!16s%2Fg%2F11q_6bhk61?entry=ttu&g_ep=EgoyMDI1MDQwOS4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
            }
        ],
        "serviceAreas": {
            "Fairfax County, VA": [
                "Arlington", "Fairfax", "Falls Church", "McLean", "Reston", "Vienna", "Great Falls", "Herndon", "Oakton"
            ],
            "Loudoun County, VA": [
                "Leesburg", "Ashburn", "Sterling", "Dulles", "Broadlands", "South Riding", "Purcellville"
            ],
            "Prince William County, VA": [
                "Manassas", "Woodbridge", "Burke", "Centreville", "Haymarket", "Springfield"
            ],
            "Montgomery County, MD": [
                "Bethesda", "Rockville", "Gaithersburg", "Silver Spring", "Kensington", "Germantown", "Clarksburg", "Poolesville"
            ],
            "Prince George's County, MD": [
                "Hyattsville", "Bowie", "Greenbelt", "College Park", "Laurel", "Takoma Park"
            ],
            "Pennsylvania": [
                "York", "Hanover", "Mechanicsburg", "Harrisburg"
            ]
        }
    },

    "contact": {
        "headline": "Get Your Free Roofing or Siding Estimate",
        "subheadline": "Tell us about your project. We'll review your details and get back to you quickly with a no-obligation estimate.",
        "processFooterText": "This process ensures quality, longevity, and a perfect final result — not rushed work that leads to problems later.",
        "processCtaText": "Schedule Your Project"
    },

    "footer": {
        "copyright": "Legacy Built Exteriors",
        "year": "2025"
    },

    "seo": {
        "title": "Legacy Built Exteriors | Roofing, Siding, Gutters & More | Washington DC Area",
        "description": "Professional roofing, siding, gutters, soffits, and window services in Maryland and Virginia. Expert storm damage repair and insurance claims. Free estimates.",
        "keywords": "roofing contractors, siding installation, gutter services, storm damage repair, Maryland, Virginia, Washington DC, insurance claims"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Synchronous loading for reliable local file access
    const config = siteConfig;
    // Apply theme colors from config
    applyThemeColors(config.theme);

    // Populate all sections
    populateSEO(config.seo);
    populateNavbar(config.business, config.logo, config.logoOptions);
    populateHero(config.hero, config.business);
    populateContactPageHero(config.hero);
    populateAbout(config.about);
    populateServices(config.services);
    populateGallery(config.gallery);
    populateReviews(config.reviews);
    populateProcess(config.process, config.contact);
    populateServiceArea(config.serviceArea);
    populateContact(config.contact, config.business, config.services);
    populateFooter(config.footer, config.business);

    // Initialize interactions
    initNavbar();
    initForm();
    initButtons();
    initAccordions();
    initMasonryGallery();
    initServiceSelector();
});


/* ==========================================
   THEME APPLICATION
   ========================================== */

function applyThemeColors(theme) {
    const root = document.documentElement;
    root.style.setProperty('--primary', theme.primaryColor);
    root.style.setProperty('--secondary', theme.secondaryColor);
    root.style.setProperty('--accent', theme.accentColor);
}

/* ==========================================
   POPULATORS
   ========================================== */

function populateSEO(seo) {
    document.getElementById('page-title').textContent = seo.title;
    document.getElementById('meta-description').setAttribute('content', seo.description);
    document.getElementById('meta-keywords').setAttribute('content', seo.keywords);
}

function populateNavbar(business, logo, logoOptions) {
    const navLogo = document.getElementById('nav-logo');
    // If logo has a 'type' field, use logoOptions; otherwise use direct path
    const logoPath = logo.type ? logoOptions[logo.type] : logo.path;
    navLogo.src = logoPath;
    navLogo.alt = logo.alt;
    document.getElementById('nav-business-name').textContent = business.name;
}

function populateHero(hero, business) {
    // Check if hero elements exist (they won't on contact page)
    const heroLabel = document.getElementById('hero-label');
    if (!heroLabel) return; // Hero section doesn't exist on this page

    heroLabel.textContent = hero.label || 'Professional Services';
    document.getElementById('hero-headline').textContent = hero.headline;
    if (hero.tagline) {
        document.getElementById('hero-tagline').textContent = hero.tagline;
    } else {
        document.getElementById('hero-tagline').style.display = 'none';
    }
    if (hero.subheadline) {
        document.getElementById('hero-subheadline').textContent = hero.subheadline;
    } else {
        document.getElementById('hero-subheadline').style.display = 'none';
    }
    document.getElementById('hero-cta').textContent = hero.ctaText;

    // Phone button
    const phoneBtn = document.getElementById('hero-phone');
    phoneBtn.href = `tel:${business.phone.replace(/[^0-9]/g, '')}`;
    phoneBtn.querySelector('span').textContent = business.phone;

    // Background image (responsive)
    if (hero.backgroundImage) {
        const isMobile = window.innerWidth < 768;
        const imageSrc = isMobile && hero.backgroundImageMobile ? hero.backgroundImageMobile : hero.backgroundImage;
        document.getElementById('hero').style.backgroundImage = `url(${imageSrc})`;
    }
}

function populateContactPageHero(hero) {
    const contactHero = document.getElementById('contact-hero');
    if (!contactHero) return; // Contact page hero doesn't exist on this page

    // Set background image based on screen size
    const isMobile = window.innerWidth < 768;
    const imageSrc = isMobile && hero.backgroundImageMobile ? hero.backgroundImageMobile.replace('Hero-desktop', 'Hero-about-contact-mobile').replace('Hero-', 'Hero-about-contact-') : (hero.backgroundImage ? hero.backgroundImage.replace('Hero-desktop', 'Hero-about-contact-desktop').replace('Hero-', 'Hero-about-contact-') : '');

    // Use the specific contact page hero images
    const desktopImage = 'assets/Hero-about-contact-desktop.webp';
    const mobileImage = 'assets/Hero-about-contact-mobile.webp';
    const bgImage = isMobile ? mobileImage : desktopImage;

    contactHero.style.backgroundImage = `url(${bgImage})`;
}

function populateAbout(about) {
    const aboutHeadline = document.getElementById('about-headline');
    if (!aboutHeadline) return; // About section doesn't exist on this page

    aboutHeadline.textContent = about.headline;
    document.getElementById('about-description').textContent = about.description;

    const featuresList = document.getElementById('about-features');
    featuresList.innerHTML = '';
    about.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
}

async function populateServices(services) {
    const grid = document.getElementById('services-grid');
    if (!grid) return; // Services section doesn't exist on this page
    grid.innerHTML = '';

    for (const service of services) {
        const card = document.createElement('div');
        card.className = 'service-card';

        let imageContent = '';
        if (service.image) {
            const isMobile = window.innerWidth < 768;
            const imageSrc = isMobile && service.imageMobile ? service.imageMobile : service.image;
            imageContent = `<a href="${service.url || '#contact'}" class="service-image-link"><div class="service-image"><img src="${imageSrc}" alt="${service.title}"></div></a>`;
        }

        card.innerHTML = `
            ${imageContent}
            <div class="service-content">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <a href="${service.url || '#contact'}" class="btn btn-secondary btn-small">Learn More</a>
            </div>
        `;
        grid.appendChild(card);
    }
}

function populateGallery(gallery) {
    const marquee = document.getElementById('gallery-marquee');
    if (!marquee) return; // Gallery section doesn't exist on this page
    marquee.innerHTML = '';

    // Get screen size for responsive images
    const isMobile = window.innerWidth < 768;

    // Create items and duplicate for seamless loop
    const items = gallery.images.map((image, index) => {
        const item = document.createElement('div');
        item.className = 'marquee-item';

        // Use mobile version if available and on mobile, otherwise desktop
        const imageSrc = isMobile && image.srcMobile ? image.srcMobile : image.src;

        item.innerHTML = `
            <img src="${imageSrc}" alt="${image.alt}" onerror="this.style.display='none'; this.parentElement.innerHTML='<span style=\\"display:flex;align-items:center;justify-content:center;height:100%;width:100%;background:#111827;\\">Image ${index + 1}</span>';">
        `;
        return item;
    });

    // Add items twice for seamless loop
    items.forEach(item => marquee.appendChild(item.cloneNode(true)));
    items.forEach(item => marquee.appendChild(item.cloneNode(true)));
}

function populateReviews(reviews) {
    const marquee = document.getElementById('reviews-marquee');
    if (!marquee) return; // Reviews section doesn't exist on this page
    marquee.innerHTML = '';

    // Create items and duplicate for seamless loop
    const items = reviews.map(review => {
        const card = document.createElement('div');
        card.className = 'review-card';
        card.innerHTML = `
            <div class="review-stars">${'★'.repeat(review.rating)}</div>
            <p class="review-quote">"${review.quote}"</p>
            <p class="review-name">${review.name}</p>
        `;
        return card;
    });

    // Add items twice for seamless loop
    items.forEach(item => marquee.appendChild(item.cloneNode(true)));
    items.forEach(item => marquee.appendChild(item.cloneNode(true)));
}

function populateProcess(steps, contact) {
    const container = document.getElementById('process-steps');
    if (!container) return; // Process section doesn't exist on this page
    container.innerHTML = '';

    steps.forEach((step, index) => {
        const stepDiv = document.createElement('div');
        stepDiv.className = 'process-step';
        stepDiv.innerHTML = `
            <div class="process-number">${index + 1}</div>
            <div class="process-content">
                <h3>${step.title}</h3>
                <p>${step.description}</p>
            </div>
        `;
        container.appendChild(stepDiv);
    });

    // Set footer content
    document.getElementById('process-footer-text').textContent = contact.processFooterText || 'This process ensures strength, longevity, and a clean final result — not rushed work that leads to problems later.';
    document.getElementById('process-cta').textContent = contact.processCtaText || 'Schedule Your Project';
}

function populateServiceArea(serviceArea) {
    const serviceAreaMap = document.getElementById('service-area-map');
    if (!serviceAreaMap) return; // Service area section doesn't exist on this page
    serviceAreaMap.src = serviceArea.mapImage;

    const headline = document.getElementById('service-area-headline');
    headline.innerHTML = serviceArea.headline.replace(
        serviceArea.highlightText,
        `<span>${serviceArea.highlightText}</span>`
    );

    document.getElementById('service-area-description').textContent = serviceArea.description;

    const benefitsContainer = document.getElementById('service-area-benefits');
    benefitsContainer.innerHTML = '';

    if (serviceArea.serviceAreas) {
        Object.entries(serviceArea.serviceAreas).forEach(([region, cities]) => {
            const regionDiv = document.createElement('div');
            regionDiv.className = 'service-region';

            const regionTitle = document.createElement('h4');
            regionTitle.textContent = region;
            regionDiv.appendChild(regionTitle);

            const citiesList = document.createElement('ul');
            citiesList.className = 'cities-list';

            cities.forEach(city => {
                const cityItem = document.createElement('li');
                cityItem.textContent = city;
                citiesList.appendChild(cityItem);
            });

            regionDiv.appendChild(citiesList);
            benefitsContainer.appendChild(regionDiv);

            // Add click handler for accordion
            regionTitle.addEventListener('click', () => {
                regionDiv.classList.toggle('active');
            });
        });
    } else if (serviceArea.benefits) {
        serviceArea.benefits.forEach(benefit => {
            const benefitDiv = document.createElement('div');
            benefitDiv.className = 'benefit-item';
            benefitDiv.innerHTML = `
                <div class="benefit-dot"></div>
                <div>
                    <h4>${benefit.title}</h4>
                    <p>${benefit.description}</p>
                </div>
            `;
            benefitsContainer.appendChild(benefitDiv);
        });
    }
}

function populateContact(contact, business, services) {
    console.log('Populating contact with:', { contact, business });

    // Contact page elements - only exist on contact.html
    const contactHeadline = document.getElementById('contact-headline');
    if (contactHeadline) {
        contactHeadline.textContent = contact.headline;
    }

    const contactSubheadline = document.getElementById('contact-subheadline');
    if (contactSubheadline) {
        contactSubheadline.textContent = contact.subheadline;
    }

    const phoneLink = document.getElementById('contact-phone');
    if (phoneLink) {
        phoneLink.href = `tel:${business.phone.replace(/[^0-9]/g, '')}`;
        phoneLink.textContent = business.phone;
        console.log('Phone populated:', business.phone);
    }

    // Email removed for security - emails on public websites attract spam/bot scraping

    // Populate all locations with icons
    const addressesContainer = document.getElementById('contact-addresses');
    if (!addressesContainer) return; // Contact elements don't exist on this page
    addressesContainer.innerHTML = '';

    const locationIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`;

    if (business.locations && business.locations.length > 0) {
        business.locations.forEach(location => {
            const contactItem = document.createElement('div');
            contactItem.className = 'contact-item';
            const fullAddress = `${location.address}, ${location.city}, ${location.state} ${location.zip}`;
            contactItem.innerHTML = `
                ${locationIcon}
                <div>
                    <strong>${location.name}</strong><br>
                    <span>${fullAddress}</span>
                </div>
            `;
            addressesContainer.appendChild(contactItem);
        });
    } else if (business.address) {
        const contactItem = document.createElement('div');
        contactItem.className = 'contact-item';
        contactItem.innerHTML = `
            ${locationIcon}
            <span>${business.address}, ${business.city}, ${business.state} ${business.zip}</span>
        `;
        addressesContainer.appendChild(contactItem);
    }

    // Populate service dropdown (if it exists - JotForm may handle this differently)
    const serviceSelect = document.getElementById('service');
    if (serviceSelect) {
        services.forEach(service => {
            const option = document.createElement('option');
            option.value = service.title;
            option.textContent = service.title;
            serviceSelect.appendChild(option);
        });
    }
}

function populateFooter(footer, business) {
    console.log('Populating footer with:', { footer, business });

    const footerName = document.getElementById('footer-business-name');
    if (footerName) footerName.textContent = business.name;

    const footerTagline = document.getElementById('footer-tagline');
    if (footerTagline) footerTagline.textContent = business.tagline;

    const footerPhone = document.getElementById('footer-phone');
    if (footerPhone) footerPhone.textContent = business.phone;

    // Email removed for security - emails on public websites attract spam/bot scraping

    const footerYear = document.getElementById('footer-year');
    if (footerYear) footerYear.textContent = footer.year;

    const footerCopyright = document.getElementById('footer-copyright-name');
    if (footerCopyright) footerCopyright.textContent = footer.copyright;

    // Populate locations in footer
    const locationsContainer = document.getElementById('footer-locations');
    if (!locationsContainer) return; // Footer location elements might not exist
    locationsContainer.innerHTML = '';

    if (business.locations && business.locations.length > 0) {
        business.locations.forEach(location => {
            const locationDiv = document.createElement('div');
            locationDiv.className = 'footer-location-item';
            const fullAddress = `${location.address}, ${location.city}, ${location.state} ${location.zip}`;
            if (location.mapUrl) {
                locationDiv.innerHTML = `<a href="${location.mapUrl}" target="_blank">${fullAddress}</a>`;
            } else {
                locationDiv.textContent = fullAddress;
            }
            locationsContainer.appendChild(locationDiv);
        });
    }

    // Populate licenses in footer
    const licensesContainer = document.getElementById('footer-licenses');
    if (licensesContainer && business.licenses) {
        licensesContainer.innerHTML = '';
        const licensesList = document.createElement('ul');
        licensesList.className = 'footer-licenses-list';

        if (business.licenses.mhic) {
            const mhicLi = document.createElement('li');
            mhicLi.textContent = `MHIC# ${business.licenses.mhic}`;
            licensesList.appendChild(mhicLi);
        }
        if (business.licenses.virginia) {
            const vaLi = document.createElement('li');
            vaLi.textContent = `VA# ${business.licenses.virginia}`;
            licensesList.appendChild(vaLi);
        }
        if (business.licenses.pennsylvania) {
            const paLi = document.createElement('li');
            paLi.textContent = `PA# ${business.licenses.pennsylvania}`;
            licensesList.appendChild(paLi);
        }

        licensesContainer.appendChild(licensesList);
    }

    console.log('Footer populated successfully');
}

/* ==========================================
   INTERACTIONS
   ========================================== */

function initNavbar() {
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    // Mobile menu toggle
    mobileBtn.addEventListener('click', () => {
        mobileBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Handle dropdown menu behavior
    const dropdownItems = navLinks.querySelectorAll('.nav-dropdown');
    let hideDropdownTimeout;

    dropdownItems.forEach(item => {
        const link = item.querySelector('a');
        const dropdown = item.querySelector('.dropdown-menu');

        // Show dropdown on hover (desktop)
        item.addEventListener('mouseenter', () => {
            if (window.innerWidth >= 1024) {
                clearTimeout(hideDropdownTimeout);
                dropdown.style.display = 'block';
            }
        });

        // Hide dropdown with delay when mouse leaves nav-dropdown
        item.addEventListener('mouseleave', () => {
            if (window.innerWidth >= 1024) {
                hideDropdownTimeout = setTimeout(() => {
                    dropdown.style.display = 'none';
                }, 200);
            }
        });

        // Keep dropdown open when hovering over the menu itself
        dropdown.addEventListener('mouseenter', () => {
            clearTimeout(hideDropdownTimeout);
            dropdown.style.display = 'block';
        });

        dropdown.addEventListener('mouseleave', () => {
            hideDropdownTimeout = setTimeout(() => {
                dropdown.style.display = 'none';
            }, 200);
        });

        // Handle dropdown on mobile
        link.addEventListener('click', (e) => {
            if (window.innerWidth < 1024) {
                e.preventDefault();
                item.classList.toggle('active');
                dropdown.style.display = item.classList.contains('active') ? 'block' : 'none';
            }
        });
    });

    // Close mobile menu on regular link click (not dropdown toggle)
    navLinks.querySelectorAll('a:not(.nav-dropdown a)').forEach(link => {
        link.addEventListener('click', () => {
            mobileBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Close dropdown and menu when clicking on dropdown items
    navLinks.querySelectorAll('.dropdown-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileBtn.classList.remove('active');
            navLinks.classList.remove('active');
            dropdownItems.forEach(item => item.classList.remove('active'));
            dropdownItems.forEach(item => {
                const dropdown = item.querySelector('.dropdown-menu');
                if (dropdown) dropdown.style.display = 'none';
            });
        });
    });
}

function initForm() {
    const form = document.getElementById('contact-form');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Placeholder - replace with JotForm or actual submission
        alert('Form submitted! (This is a placeholder. Replace with JotForm embed for production.)');
        form.reset();
    });
}

function initButtons() {
    // Hero button to contact section
    const heroCta = document.getElementById('hero-cta');
    if (heroCta) {
        heroCta.addEventListener('click', () => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Service area buttons
    const serviceAreaBtn2 = document.getElementById('service-area-btn2');
    if (serviceAreaBtn2) {
        serviceAreaBtn2.addEventListener('click', () => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Process CTA
    const processCta = document.getElementById('process-cta');
    if (processCta) {
        processCta.addEventListener('click', () => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

function initAccordions() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (!question) return;

        question.addEventListener('click', () => {
            // Close other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

function initMasonryGallery() {
    const masonryItems = document.querySelectorAll('.masonry-item');

    masonryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            if (img) {
                // Open image in a new window/tab
                window.open(img.src, '_blank');
            }
        });
    });
}

function initServiceSelector() {
    const selectorCards = document.querySelectorAll('.selector-card');

    selectorCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove active class from all cards
            selectorCards.forEach(c => c.classList.remove('active'));
            // Add active class to clicked card
            card.classList.add('active');
        });
    });
}
