/**
 * Guru Tours & Travels - Production Application Script
 * Encapsulated ES6+ vanilla JavaScript for zero-dependency static deployment.
 */
(() => {
  'use strict';

  // ---------------------------------------------------------------------------
  // 1. Data Store
  // ---------------------------------------------------------------------------
  const siteData = {
    business: {
      name: "Guru Tours & Travels",
      whatsappNumber: "919876543210",
      phone: "+91 98765 43210",
      email: "enquiry@gurutourstravels.com",
      address: "The Mall Road, Rajpur Road Junction, Dehradun, Uttarakhand - 248001, India",
    },
    packages: [
      {
        id: "kedarnath-dham",
        name: "Sacred Kedarnath Pilgrimage",
        destination: "Kedarnath",
        category: "Spiritual",
        duration: "5 Days / 4 Nights",
        price: 14499,
        rating: 4.9,
        reviewsCount: 142,
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop",
        badge: "Most Popular",
        description: "Experience the profound divine aura of the Himalayan Jyotirlinga, scenic helicopter/trek options, and soul-stirring Ganga aarti at Haridwar & Rishikesh.",
        highlights: [
          "VIP Darshan assistance at Kedarnath Temple",
          "Scenic drive through Devprayag and Rudraprayag sangams",
          "Clean alpine tents & hotel stays at Guptkashi & Kedarnath",
          "Complimentary hot mountain meals and medical emergency kit"
        ],
        itinerary: [
          { day: "Day 1", title: "Haridwar / Rishikesh to Guptkashi", detail: "Scenic river valley drive via Devprayag confluence. Evening check-in and briefing." },
          { day: "Day 2", title: "Guptkashi to Sonprayag & Trek to Kedarnath", detail: "Early transfer to Gaurikund. Trek or heli to Kedarnath base. Evening temple aarti." },
          { day: "Day 3", title: "Morning Darshan & Trek back to Guptkashi", detail: "Pre-dawn temple worship with Garbhagriha views, followed by downhill trek and restful stay." },
          { day: "Day 4", title: "Guptkashi to Rishikesh", detail: "Leisurely return journey with stopover at Dhari Devi Temple and Rishikesh Triveni Ghat." },
          { day: "Day 5", title: "Departure", detail: "Morning Ganga walk and departure with divine memories." }
        ],
        inclusions: ["Deluxe Hotel & Swiss Camp accommodation", "Daily breakfast & dinner", "Dedicated private vehicle for mountain roads", "Driver allowances & toll taxes"],
        exclusions: ["Helicopter/Pony charges", "Personal expenses & tips", "Travel insurance", "Lunch meals"]
      },
      {
        id: "auli-ski-paradise",
        name: "Auli Snow & Himalayan Odyssey",
        destination: "Auli",
        category: "Adventure",
        duration: "4 Days / 3 Nights",
        price: 12999,
        rating: 4.8,
        reviewsCount: 98,
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
        badge: "Winter Special",
        description: "Glide across pristine snow slopes with 180° views of Nanda Devi, Kamet, and Dunagiri peaks. Includes Asia's longest cable car ride experience.",
        highlights: [
          "Iconic Joshimath to Auli ropeway experience",
          "Beginner ski coaching & equipment rental support",
          "Stunning Nanda Devi sunrise panorama viewpoints",
          "Visit to Gorson Bugyal alpine meadows"
        ],
        itinerary: [
          { day: "Day 1", title: "Rishikesh to Joshimath", detail: "Picturesque journey along Alaknanda River. Check-in at Joshimath mountain resort." },
          { day: "Day 2", title: "Cable Car to Auli & Ski Lessons", detail: "Ropeway ride to ski slopes, snow play, skiing session, and sunset photography." },
          { day: "Day 3", title: "Gorson Bugyal Nature Trek", detail: "Gentle trek through oak forests to sprawling meadows with close-up peak views." },
          { day: "Day 4", title: "Return to Dehradun / Rishikesh", detail: "Scenic downhill drive with river cafe stopovers." }
        ],
        inclusions: ["Cozy mountain resort stays", "Breakfast and chef-curated dinner", "Local sight exploration vehicle", "Ski instructor guidance coordination"],
        exclusions: ["Cable car tickets", "Ski equipment rental fees", "Personal snow attire", "Airfare/Train tickets"]
      },
      {
        id: "rishikesh-adventure",
        name: "Rishikesh River & Yoga Escape",
        destination: "Rishikesh",
        category: "Adventure",
        duration: "3 Days / 2 Nights",
        price: 6999,
        rating: 4.9,
        reviewsCount: 215,
        image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=800&auto=format&fit=crop",
        badge: "Best Value",
        description: "White water river rafting on the sacred Ganges, riverside luxury camping, cliff jumping, evening Parmarth Niketan Ganga Aarti, and serene cafe hopping.",
        highlights: [
          "16 km thrilling Grade III rafting stretch (Shivpuri to NIM Beach)",
          "Riverside glamping with evening bonfire & music",
          "Bungee jumping & giant swing booking assistance",
          "Spiritual Parmarth Niketan Ganga Aarti & Beatles Ashram visit"
        ],
        itinerary: [
          { day: "Day 1", title: "Arrival & Riverside Camp Check-in", detail: "Welcome drinks, check into luxury river camps, volleyball, evening bonfire and music." },
          { day: "Day 2", title: "White Water Rafting & Ganga Aarti", detail: "High-octane rafting down Rapids like Roller Coaster & Golf Course. Evening Aarti at Triveni Ghat." },
          { day: "Day 3", title: "Beatles Ashram & Departure", detail: "Morning yoga session, visit to historic Beatles Ashram and Laxman Jhula cafes." }
        ],
        inclusions: ["Luxury Swiss cottage tents with attached washrooms", "All 3 meals (Breakfast, Lunch, Dinner)", "16km River Rafting with licensed raft guide & gear", "Evening bonfire and snacks"],
        exclusions: ["Bungee jumping tickets", "Personal transfers to camp", "Alcoholic beverages"]
      },
      {
        id: "chopta-tungnath-trek",
        name: "Chopta & Tungnath Chandrashila",
        destination: "Chopta",
        category: "Trekking",
        duration: "4 Days / 3 Nights",
        price: 8999,
        rating: 4.9,
        reviewsCount: 110,
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
        badge: "Trekker Choice",
        description: "Explore Uttarakhand's 'Mini Switzerland'. Trek to Tungnath—the world's highest Shiva temple—and scale Chandrashila summit for breathtaking 360° Himalayan panoramas.",
        highlights: [
          "Mesmerizing Chandrashila summit sunrise at 13,000 ft",
          "Visit Tungnath Temple (over 1000 years ancient)",
          "Lush rhododendron and deodar forest trails",
          "Starlit camping in alpine meadows of Chopta"
        ],
        itinerary: [
          { day: "Day 1", title: "Rishikesh to Chopta", detail: "Scenic mountain route via Ukhimath. Check-in to alpine camp under the stars." },
          { day: "Day 2", title: "Trek to Tungnath & Chandrashila Peak", detail: "Pre-dawn trek initiation. Witness golden sunrise over Chaukhamba, Trishul, and Nanda Devi peaks." },
          { day: "Day 3", title: "Deoriatal Lake Trek & Leisure", detail: "Short trek to mirror lake Deoriatal with Chaukhamba reflections." },
          { day: "Day 4", title: "Chopta to Rishikesh / Dehradun", detail: "Breakfast and scenic descent back to foothill plains." }
        ],
        inclusions: ["Dome / Swiss camping accommodations", "Nutritious vegetarian mountain meals", "Certified local trek leader and first aid", "Forest entry permits"],
        exclusions: ["Trekking poles / jackets rental", "Pony charges", "Personal snacks"]
      },
      {
        id: "mussoorie-queen-hills",
        name: "Mussoorie Queen of Hills Retreat",
        destination: "Mussoorie",
        category: "Hill Station",
        duration: "3 Days / 2 Nights",
        price: 7499,
        rating: 4.7,
        reviewsCount: 180,
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
        badge: "Family Friendly",
        description: "Unwind along colonial Mall Road, visit Kempty Falls, witness winter line sunsets at Landour, and relish freshly baked goods at Char Dukan.",
        highlights: [
          "Landour colonial walking tour & Lal Tibba viewpoint",
          "Visit George Everest peak and Kempty Falls",
          "Leisure strolls on vintage Mall Road",
          "Family-friendly comfortable hotel stays with valley balconies"
        ],
        itinerary: [
          { day: "Day 1", title: "Dehradun to Mussoorie Arrival", detail: "Scenic climb up Rajpur hills. Check-in and evening stroll on Mall Road." },
          { day: "Day 2", title: "Landour, Char Dukan & George Everest", detail: "Heritage stroll through pine forests, pancakes at Landour Bakehouse, sunset at Everest peak." },
          { day: "Day 3", title: "Company Garden, Kempty Falls & Departure", detail: "Morning sightseeing followed by smooth descent to Dehradun railway/airport." }
        ],
        inclusions: ["3-Star valley view hotel", "Daily buffet breakfast", "Dedicated cab for local sightseeing", "Toll taxes and driver charges"],
        exclusions: ["Entry tickets to waterfalls / gardens", "Cable car to Gun Hill", "Lunch and dinner"]
      },
      {
        id: "nainital-lake-district",
        name: "Nainital Lake District & Bhimtal",
        destination: "Nainital",
        category: "Hill Station",
        duration: "3 Days / 2 Nights",
        price: 8499,
        rating: 4.8,
        reviewsCount: 165,
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop",
        badge: "Romantic Getaway",
        description: "Boating on the emerald Naini Lake, sacred Naina Devi Temple, high-altitude zoo, and scenic lake tours covering Bhimtal, Naukuchiatal, and Sattal.",
        highlights: [
          "Yacht / Gondola style boating on Naini Lake",
          "Snow View Point via aerial ropeway",
          "Excursion to Bhimtal aquarium and island cafe",
          "Candle shopping and Tibetan market food walks"
        ],
        itinerary: [
          { day: "Day 1", title: "Kathgodam / Delhi to Nainital", detail: "Scenic drive ascending Kumaon hills. Hotel check-in and sunset boat ride." },
          { day: "Day 2", title: "Lake Tour (Bhimtal, Sattal, Naukuchiatal)", detail: "Full day lake hopping with kayaking, bird watching, and nature trails." },
          { day: "Day 3", title: "Naina Peak View & Departure", detail: "Morning temple visit and viewpoint drive before transfer to railway station." }
        ],
        inclusions: ["Deluxe lakeside hotel stay", "Daily breakfast & dinner", "Private vehicle for entire tour", "Boating voucher for Naini Lake"],
        exclusions: ["Ropeway tickets", "Adventure activities like paragliding", "Monument entrance tickets"]
      },
      {
        id: "valley-of-flowers",
        name: "Valley of Flowers & Hemkund",
        destination: "Valley of Flowers",
        category: "Trekking",
        duration: "6 Days / 5 Nights",
        price: 15999,
        rating: 5.0,
        reviewsCount: 88,
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop",
        badge: "UNESCO Heritage",
        description: "Immerse yourself in hundreds of wild endemic Himalayan blooms inside this UNESCO World Heritage alpine valley, paired with the serene holy lake of Hemkund Sahib.",
        highlights: [
          "Walk amidst 500+ species of rare alpine flora",
          "Climb to celestial glacial lake of Hemkund Sahib (14,107 ft)",
          "Enchanting Pushpawati river cascades",
          "Experienced certified botanist-trek guides"
        ],
        itinerary: [
          { day: "Day 1", title: "Rishikesh to Govindghat", detail: "Scenic trans-Himalayan drive through Alaknanda valley." },
          { day: "Day 2", title: "Govindghat to Ghangaria", detail: "Scenic 10km trek alongside river to high base village of Ghangaria." },
          { day: "Day 3", title: "Ghangaria to Valley of Flowers & Return", detail: "Full day exploration of the UNESCO flower sanctuary with floral photography." },
          { day: "Day 4", title: "Ghangaria to Hemkund Sahib & Return", detail: "Spiritual ascent to world's highest Gurudwara beside pristine glacial lake." },
          { day: "Day 5", title: "Ghangaria to Govindghat & Drive to Joshimath", detail: "Trek down to Govindghat and evening temple visit." },
          { day: "Day 6", title: "Return to Rishikesh", detail: "Drive down with stops at scenic river confluences." }
        ],
        inclusions: ["Guesthouse / Lodge stays in Ghangaria", "Nutritious mountain meals", "National Park entry permits", "Certified local guide"],
        exclusions: ["Helicopter between Govindghat & Ghangaria", "Mule/porter charges", "Personal trekking kit"]
      },
      {
        id: "jim-corbett-safari",
        name: "Jim Corbett Tiger Safari Expedition",
        destination: "Jim Corbett",
        category: "Wildlife",
        duration: "3 Days / 2 Nights",
        price: 9999,
        rating: 4.8,
        reviewsCount: 172,
        image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=800&auto=format&fit=crop",
        badge: "Wildlife Special",
        description: "Venture deep into India's oldest national park. Experience thrilling 4x4 open jeep safaris in Bijrani / Dhikala zones to spot Royal Bengal Tigers, wild elephants, and 600+ bird species.",
        highlights: [
          "Open 4x4 Gypsy Tiger Safaris in premier buffer/core zones",
          "Luxury jungle resort stay with swimming pool & orchard gardens",
          "Corbett Falls & Garjiya Devi river temple visit",
          "Naturalist guided nature and birdwatching walks"
        ],
        itinerary: [
          { day: "Day 1", title: "Arrival & Jungle Resort Check-in", detail: "Welcome drink, lunch, pool leisure, and evening wildlife documentary with naturalist." },
          { day: "Day 2", title: "Morning & Afternoon Jeep Safaris", detail: "Early 6:00 AM safari into dense sal forests. Afternoon safari tracking big cats and herds." },
          { day: "Day 3", title: "Garjiya Temple Visit & Departure", detail: "Riverside breakfast, visit to Garjiya Temple on Kosi River, and departure." }
        ],
        inclusions: ["Luxury resort cottage stay", "All buffet meals (Breakfast, Lunch, Dinner)", "Open Gypsy Safari with forest permits & guide", "Resort recreation activities"],
        exclusions: ["Additional jeep safaris", "Camera fee if levied", "Personal safari tips"]
      }
    ],
    destinations: [
      {
        id: "dest-kedarnath",
        name: "Kedarnath Dham",
        type: "Temples",
        tag: "Sacred Chardham",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800&auto=format&fit=crop",
        shortDesc: "Majestic eighth-century stone shrine set against massive snow-capped peaks in the sacred Mandakini valley.",
        altitude: "3,583 m",
        bestTime: "May - Oct"
      },
      {
        id: "dest-auli",
        name: "Auli Snow Slopes",
        type: "Mountains",
        tag: "Snow & Skiing",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800&auto=format&fit=crop",
        shortDesc: "Pristine white snow slopes framed by Nanda Devi peak and Asia's longest cable car ropeway.",
        altitude: "3,050 m",
        bestTime: "Dec - Mar (Snow) / Apr - Jun"
      },
      {
        id: "dest-rishikesh",
        name: "Rishikesh",
        type: "Adventure",
        tag: "River & Yoga",
        image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=800&auto=format&fit=crop",
        shortDesc: "World Yoga Capital featuring thrilling white-water rafting, serene Ganga aartis, and vibrant mountain cafes.",
        altitude: "372 m",
        bestTime: "Sep - May"
      },
      {
        id: "dest-chopta",
        name: "Chopta Meadows",
        type: "Adventure",
        tag: "Mini Switzerland",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
        shortDesc: "The 'Mini Switzerland of India' leading to Tungnath Shiva temple and Chandrashila 360° summit views.",
        altitude: "2,680 m",
        bestTime: "Apr - Nov"
      },
      {
        id: "dest-mussoorie",
        name: "Mussoorie",
        type: "Hill Station",
        tag: "Scenic Mountains",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
        shortDesc: "The Queen of Hills known for colonial architecture, Landour pine trails, and winterline valley sunsets.",
        altitude: "2,005 m",
        bestTime: "Year Round"
      },
      {
        id: "dest-nainital",
        name: "Nainital Lake",
        type: "Lakes",
        tag: "Lake District",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop",
        shortDesc: "Sparkling emerald lake surrounded by seven mountain peaks, vibrant Tibetan bazaars, and scenic boat rides.",
        altitude: "2,084 m",
        bestTime: "Mar - Jun / Oct - Jan"
      },
      {
        id: "dest-valley-of-flowers",
        name: "Valley of Flowers",
        type: "Mountains",
        tag: "UNESCO Site",
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop",
        shortDesc: "A vibrant carpet of endemic wild alpine flowers nestled amidst glacial valleys and rushing streams.",
        altitude: "3,658 m",
        bestTime: "Jul - Sep"
      },
      {
        id: "dest-jim-corbett",
        name: "Jim Corbett Reserve",
        type: "Wildlife",
        tag: "Tiger Reserve",
        image: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=800&auto=format&fit=crop",
        shortDesc: "Dense sal jungle, open grasslands, and Ramganga river shores harboring tigers and elephant herds.",
        altitude: "400 m",
        bestTime: "Nov - Jun"
      }
    ],
    faqs: [
      {
        q: "How can I book a tour with Guru Tours & Travels?",
        a: "Booking is simple! You can fill out our Quick Enquiry form, click the 'Plan Your Trip' button, or reach out directly on WhatsApp (+91 98765 43210). Our travel specialists will discuss your dates, preferences, and send a customized itinerary with transparent pricing."
      },
      {
        q: "Can you customize a travel package for our specific needs?",
        a: "Yes, absolutely! Every package on our website can be customized. Whether you want to adjust the duration, upgrade your hotel categories, add extra sightseeing spots, or choose specific vehicle types (Sedan, Innova, Tempo Traveller), we tailor it to your needs."
      },
      {
        q: "Do you arrange both transportation and accommodation?",
        a: "Yes. We offer complete end-to-end packages including comfortable hotel/resort or alpine camp accommodations, dedicated mountain-experienced private vehicles for your entire tour, toll taxes, parking, and driver allowances."
      },
      {
        q: "How do I enquire about a trip or get a quick quotation?",
        a: "Click any 'Enquire Now' or 'WhatsApp Us' button across our site. This opens a pre-filled WhatsApp chat with our trip advisor. You can also submit the website enquiry form for a prompt response within 2 hours."
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept all major payment methods including UPI (Google Pay, PhonePe, Paytm), Net Banking (NEFT/IMPS), Credit/Debit Cards, and direct bank transfers. Written payment receipts and booking vouchers are issued for every transaction."
      },
      {
        q: "Can I plan a family holiday or a large group trip?",
        a: "Certainly! We specialize in customized family getaways, corporate retreats, student groups, and senior-citizen friendly pilgrimages. We arrange dedicated 12 to 26 seater luxury Tempo Travellers and group resort bookings."
      }
    ]
  };

  // ---------------------------------------------------------------------------
  // 2. Utility Helpers
  // ---------------------------------------------------------------------------
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const showToast = (message) => {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <path d="M20 6L9 17l-5-5"/>
      </svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  };

  const openWhatsApp = (customText) => {
    const defaultText = "Hello Guru Tours & Travels! I am exploring trips to Uttarakhand. Please share recommended packages.";
    const text = customText || defaultText;
    const url = `https://wa.me/${siteData.business.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // ---------------------------------------------------------------------------
  // 3. Render Packages
  // ---------------------------------------------------------------------------
  let activeCategory = 'All';

  const renderPackages = () => {
    const grid = document.getElementById('packages-grid');
    if (!grid) return;

    const filtered = activeCategory === 'All'
      ? siteData.packages
      : siteData.packages.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());

    grid.innerHTML = filtered.map(pkg => `
      <article class="pkg-card" data-id="${pkg.id}">
        <div class="pkg-card-media">
          <img src="${pkg.image}" alt="${pkg.name}" class="pkg-card-img" loading="lazy">
          <span class="pkg-badge">${pkg.badge}</span>
          <div class="pkg-duration-pill">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            <span>${pkg.duration}</span>
          </div>
        </div>

        <div class="pkg-card-body">
          <div class="pkg-meta-top">
            <span class="pkg-destination">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              ${pkg.destination}
            </span>
            <div class="pkg-rating">
              <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <span>${pkg.rating}</span>
              <span class="pkg-reviews-count">(${pkg.reviewsCount})</span>
            </div>
          </div>

          <h3 class="pkg-title">${pkg.name}</h3>
          <p class="pkg-desc">${pkg.description}</p>

          <div class="pkg-highlights">
            ${pkg.highlights.slice(0, 2).map(h => `
              <div class="pkg-highlight-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                <span>${h}</span>
              </div>
            `).join('')}
          </div>

          <div class="pkg-card-footer">
            <div class="pkg-price-box">
              <span class="pkg-price-label">Starting From</span>
              <span class="pkg-price-val">${formatCurrency(pkg.price)}</span>
            </div>
            <div class="pkg-actions">
              <button class="btn btn-secondary btn-sm btn-view-details" data-id="${pkg.id}">
                Details
              </button>
              <button class="btn btn-primary btn-sm btn-enquire-pkg" data-name="${pkg.name}">
                Enquire
              </button>
            </div>
          </div>
        </div>
      </article>
    `).join('');

    // Attach card event listeners
    grid.querySelectorAll('.btn-view-details').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        const pkg = siteData.packages.find(p => p.id === id);
        if (pkg) openPackageModal(pkg);
      });
    });

    grid.querySelectorAll('.btn-enquire-pkg').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const name = e.currentTarget.getAttribute('data-name');
        openPlanTripModal(name);
      });
    });
  };

  // ---------------------------------------------------------------------------
  // 4. Render Destinations
  // ---------------------------------------------------------------------------
  const renderDestinations = () => {
    const grid = document.getElementById('destinations-grid');
    if (!grid) return;

    grid.innerHTML = siteData.destinations.map(dest => `
      <div class="dest-card" data-name="${dest.name}">
        <img src="${dest.image}" alt="${dest.name}" class="dest-card-img" loading="lazy">
        <div class="dest-overlay"></div>

        <div class="dest-top-tag">
          <span class="dest-tag-chip">${dest.tag}</span>
        </div>

        <div class="dest-content">
          <div class="dest-altitude">Altitude: ${dest.altitude}</div>
          <h3 class="dest-name">${dest.name}</h3>
          <p class="dest-desc">${dest.shortDesc}</p>
          <div class="dest-cta-link">
            <span>Enquire Itinerary</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </div>
        </div>
      </div>
    `).join('');

    grid.querySelectorAll('.dest-card').forEach(card => {
      card.addEventListener('click', (e) => {
        const name = e.currentTarget.getAttribute('data-name');
        openPlanTripModal(name);
      });
    });
  };

  // ---------------------------------------------------------------------------
  // 5. Render FAQs Accordion
  // ---------------------------------------------------------------------------
  const renderFAQs = () => {
    const container = document.getElementById('faq-list');
    if (!container) return;

    container.innerHTML = siteData.faqs.map((faq, idx) => `
      <div class="faq-item ${idx === 0 ? 'open' : ''}">
        <button class="faq-question-btn" type="button" aria-expanded="${idx === 0}">
          <span>${faq.q}</span>
          <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
        </button>
        <div class="faq-answer">
          <p>${faq.a}</p>
        </div>
      </div>
    `).join('');

    container.querySelectorAll('.faq-question-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const item = e.currentTarget.closest('.faq-item');
        const isOpen = item.classList.contains('open');

        // Close others
        container.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

        if (!isOpen) {
          item.classList.add('open');
          e.currentTarget.setAttribute('aria-expanded', 'true');
        } else {
          e.currentTarget.setAttribute('aria-expanded', 'false');
        }
      });
    });
  };

  // ---------------------------------------------------------------------------
  // 6. Modals (Package Detail & Plan Trip)
  // ---------------------------------------------------------------------------
  const packageModal = document.getElementById('package-detail-modal');
  const planTripModal = document.getElementById('plan-trip-modal');

  const openPackageModal = (pkg) => {
    if (!packageModal) return;

    const body = document.getElementById('package-modal-body');
    if (!body) return;

    body.innerHTML = `
      <div class="modal-media-wrap">
        <img src="${pkg.image}" alt="${pkg.name}" class="modal-media-img">
      </div>

      <div class="modal-meta-row">
        <span class="modal-dest-tag">${pkg.destination} • ${pkg.duration}</span>
        <span class="modal-price-tag">${formatCurrency(pkg.price)} <small class="modal-price-sub">/ person</small></span>
      </div>

      <h2 class="modal-title-main">${pkg.name}</h2>
      <p class="modal-desc-main">${pkg.description}</p>

      <h4 class="modal-section-h4">Tour Highlights</h4>
      <ul class="modal-highlight-list">
        ${pkg.highlights.map(h => `
          <li class="modal-highlight-item">
            <span class="modal-check-icon">✓</span>
            <span>${h}</span>
          </li>
        `).join('')}
      </ul>

      <h4 class="modal-section-h4">Day-by-Day Itinerary</h4>
      <div class="modal-itinerary-list">
        ${pkg.itinerary.map(item => `
          <div class="modal-itinerary-card">
            <div class="modal-itinerary-title">${item.day}: ${item.title}</div>
            <div class="modal-itinerary-detail">${item.detail}</div>
          </div>
        `).join('')}
      </div>

      <div class="modal-actions-row">
        <button id="modal-whatsapp-btn" class="btn btn-whatsapp flex-1">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z"/></svg>
          <span>Book on WhatsApp</span>
        </button>
        <button id="modal-plan-btn" class="btn btn-primary flex-1">
          <span>Request Custom Quotation</span>
        </button>
      </div>
    `;

    document.getElementById('modal-whatsapp-btn')?.addEventListener('click', () => {
      const text = `Hello Guru Tours & Travels! I am interested in booking the "${pkg.name}" (${pkg.duration}) starting at ${formatCurrency(pkg.price)}. Please share booking details.`;
      openWhatsApp(text);
    });

    document.getElementById('modal-plan-btn')?.addEventListener('click', () => {
      closeAllModals();
      openPlanTripModal(pkg.name);
    });

    packageModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const openPlanTripModal = (presetDestination = '') => {
    if (!planTripModal) return;

    const destSelect = document.getElementById('modal-field-destination');
    if (destSelect && presetDestination) {
      destSelect.value = presetDestination;
    }

    planTripModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeAllModals = () => {
    document.querySelectorAll('.modal-backdrop').forEach(modal => modal.classList.remove('active'));
    document.body.style.overflow = '';
  };

  // ---------------------------------------------------------------------------
  // 7. Scroll Down Helper (Smooth Scrolling to Packages)
  // ---------------------------------------------------------------------------
  const scrollToPackages = () => {
    const target = document.getElementById('packages');
    if (target) {
      const navHeight = document.querySelector('.navbar-header')?.offsetHeight || 72;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  // ---------------------------------------------------------------------------
  // 8. Event Listeners & Initialization
  // ---------------------------------------------------------------------------
  const initApp = () => {
    // Render dynamic sections
    renderPackages();
    renderDestinations();
    renderFAQs();

    // Setup Category Filter Pills
    document.querySelectorAll('.filter-pill').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        activeCategory = e.currentTarget.getAttribute('data-category') || 'All';
        renderPackages();
      });
    });

    // SCROLL DOWN BUTTON CLICK EVENT (Requested Feature)
    const heroScrollDownBtn = document.getElementById('hero-scroll-down-btn');
    if (heroScrollDownBtn) {
      heroScrollDownBtn.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToPackages();
      });
    }

    // Hero secondary anchor link smooth scroll
    const heroBrowseLink = document.getElementById('hero-browse-link');
    if (heroBrowseLink) {
      heroBrowseLink.addEventListener('click', (e) => {
        e.preventDefault();
        scrollToPackages();
      });
    }

    // Mobile Navigation Drawer Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileDrawer = document.getElementById('mobile-nav-drawer');
    if (mobileToggle && mobileDrawer) {
      mobileToggle.addEventListener('click', () => {
        mobileDrawer.classList.toggle('open');
      });

      mobileDrawer.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => {
          mobileDrawer.classList.remove('open');
        });
      });
    }

    // Sticky Navbar shadow on scroll
    window.addEventListener('scroll', () => {
      const header = document.getElementById('navbar-header');
      if (header) {
        if (window.scrollY > 40) {
          header.style.backgroundColor = 'rgba(18, 21, 26, 0.98)';
          header.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.5)';
        } else {
          header.style.backgroundColor = 'rgba(18, 21, 26, 0.92)';
          header.style.boxShadow = 'none';
        }
      }

      // Back to top button visibility
      const backToTop = document.getElementById('back-to-top');
      if (backToTop) {
        if (window.scrollY > 400) {
          backToTop.classList.add('visible');
        } else {
          backToTop.classList.remove('visible');
        }
      }
    });

    // Back to top click
    document.getElementById('back-to-top')?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Floating WhatsApp Button
    document.getElementById('floating-whatsapp')?.addEventListener('click', (e) => {
      e.preventDefault();
      openWhatsApp();
    });

    // Topbar & Footer WhatsApp Triggers
    document.querySelectorAll('.btn-open-whatsapp').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openWhatsApp();
      });
    });

    // "Plan Your Trip" triggers
    document.querySelectorAll('.btn-trigger-plan-trip').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openPlanTripModal();
      });
    });

    // Hero Quick Search Form Submission
    const heroSearchForm = document.getElementById('hero-search-form');
    if (heroSearchForm) {
      heroSearchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const dest = document.getElementById('search-dest')?.value;
        const date = document.getElementById('search-date')?.value;
        const travellers = document.getElementById('search-travellers')?.value;

        if (dest) {
          openPlanTripModal(dest);
        } else {
          scrollToPackages();
        }
      });
    }

    // Quick Enquiry / Contact Form Submission
    const contactForm = document.getElementById('contact-enquiry-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('form-name')?.value || 'Traveler';
        const phone = document.getElementById('form-phone')?.value || '';
        const dest = document.getElementById('form-destination')?.value || 'Uttarakhand';
        const date = document.getElementById('form-date')?.value || 'Flexible';
        const message = document.getElementById('form-message')?.value || '';

        const text = `Hello Guru Tours & Travels! New Enquiry from Website:%0A• Name: ${encodeURIComponent(name)}%0A• Phone: ${encodeURIComponent(phone)}%0A• Destination: ${encodeURIComponent(dest)}%0A• Travel Date: ${encodeURIComponent(date)}%0A• Notes: ${encodeURIComponent(message)}`;

        showToast("Thank you! Connecting you to our travel desk via WhatsApp...");
        contactForm.reset();

        setTimeout(() => {
          window.open(`https://wa.me/${siteData.business.whatsappNumber}?text=${text}`, '_blank');
        }, 800);
      });
    }

    // Modal Plan Trip Form Submission
    const modalPlanForm = document.getElementById('modal-plan-form');
    if (modalPlanForm) {
      modalPlanForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('modal-field-name')?.value || 'Traveler';
        const phone = document.getElementById('modal-field-phone')?.value || '';
        const dest = document.getElementById('modal-field-destination')?.value || 'Uttarakhand';
        const date = document.getElementById('modal-field-date')?.value || 'Flexible';
        const travellers = document.getElementById('modal-field-travellers')?.value || '2';

        const text = `Hello Guru Tours & Travels! Custom Trip Planning Request:%0A• Name: ${encodeURIComponent(name)}%0A• Phone: ${encodeURIComponent(phone)}%0A• Destination: ${encodeURIComponent(dest)}%0A• Date: ${encodeURIComponent(date)}%0A• Travellers: ${encodeURIComponent(travellers)}`;

        showToast("Custom trip request initiated! Opening WhatsApp...");
        closeAllModals();
        modalPlanForm.reset();

        setTimeout(() => {
          window.open(`https://wa.me/${siteData.business.whatsappNumber}?text=${text}`, '_blank');
        }, 600);
      });
    }

    // Modal Close Buttons and Backdrop Click
    document.querySelectorAll('.modal-close-btn').forEach(btn => {
      btn.addEventListener('click', closeAllModals);
    });

    document.querySelectorAll('.modal-backdrop').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeAllModals();
      });
    });

    // Escape key closes modals
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeAllModals();
    });
  };

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
