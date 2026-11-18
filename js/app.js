/* Urban Nest Realty - shared data and behaviour */
"use strict";

var LISTINGS = [
  { id: "sunlit-family-house", status: "sale", title: "Sunlit Family House", area: "Garden Town", type: "House", beds: 4, baths: 4, size: "5 Marla", price: 28500000, priceText: "Rs 2.85 Crore", img: "sale1.jpg", featured: true,
    features: ["Corner park facing street", "Tiled floors throughout", "Upper floor has a terrace off the main bedroom"] },
  { id: "corner-10-marla-house", status: "sale", title: "Corner 10 Marla House", area: "Lakeview", type: "House", beds: 5, baths: 6, size: "10 Marla", price: 56000000, priceText: "Rs 5.60 Crore", img: "sale2.jpg",
    features: ["Two kitchens", "Wide lawn on the corner side", "Solar panels already fitted on the roof"] },
  { id: "compact-3-marla-house", status: "sale", title: "Compact 3 Marla House", area: "Old Town", type: "House", beds: 3, baths: 3, size: "3 Marla", price: 14500000, priceText: "Rs 1.45 Crore", img: "sale3.jpg",
    features: ["Freshly renovated", "Small open kitchen", "Good first home or rental investment on a busy street"] },
  { id: "luxury-1-kanal-villa", status: "sale", title: "Luxury 1 Kanal Villa", area: "North Hills", type: "House", beds: 6, baths: 7, size: "1 Kanal", price: 117500000, priceText: "Rs 11.75 Crore", img: "sale4.jpg", featured: true,
    features: ["Basement home theatre room", "Imported fittings", "Mature garden with a sitting deck"] },
  { id: "bright-2-bed-apartment", status: "sale", title: "Bright 2 Bed Apartment", area: "University Road", type: "Flat", beds: 2, baths: 2, size: "950 sq ft", price: 9800000, priceText: "Rs 98 Lakh", img: "sale5.jpg", featured: true,
    features: ["Fourth floor with lift", "Balcony off the lounge", "Reserved car parking in the basement"] },
  { id: "penthouse-with-terrace", status: "sale", title: "Penthouse with Terrace", area: "Riverside", type: "Penthouse", beds: 3, baths: 4, size: "2,400 sq ft", price: 39000000, priceText: "Rs 3.90 Crore", img: "sale6.jpg", featured: true,
    features: ["Private roof terrace", "River side view", "Two parking bays and full building security"] },
  { id: "furnished-1-bed-apartment", status: "rent", title: "Furnished 1 Bed Apartment", area: "Garden Town", type: "Flat", beds: 1, baths: 1, size: "620 sq ft", price: 45000, priceText: "Rs 45,000 per month", img: "rent7.jpg", featured: true,
    features: ["Fully furnished", "Inverter ACs fitted", "Ideal for a working professional, available now"] },
  { id: "family-4-bed-house", status: "rent", title: "Family 4 Bed House", area: "Lakeview", type: "House", beds: 4, baths: 5, size: "10 Marla", price: 160000, priceText: "Rs 1,60,000 per month", img: "rent8.jpg", featured: true,
    features: ["Unfurnished", "Company lease preferred", "Lawn and servant quarter included"] },
  { id: "studio-apartment-near-university", status: "rent", title: "Studio Apartment near University", area: "University Road", type: "Studio", beds: 1, baths: 1, size: "420 sq ft", price: 28000, priceText: "Rs 28,000 per month", img: "rent9.jpg",
    features: ["Furnished with bed, desk and small kitchen", "Bills not included"] },
  { id: "3-bed-flat-with-balcony", status: "rent", title: "3 Bed Flat with Balcony", area: "Riverside", type: "Flat", beds: 3, baths: 3, size: "1,550 sq ft", price: 85000, priceText: "Rs 85,000 per month", img: "rent10.jpg",
    features: ["Semi furnished", "Lift and standby generator", "Family building"] },
  { id: "upper-portion-2-bed", status: "rent", title: "Upper Portion 2 Bed", area: "Old Town", type: "Portion", beds: 2, baths: 2, size: "5 Marla portion", price: 38000, priceText: "Rs 38,000 per month", img: "rent11.jpg",
    features: ["Separate entrance and separate meter", "Small terrace", "Quiet street"] },
  { id: "executive-5-bed-house", status: "rent", title: "Executive 5 Bed House", area: "North Hills", type: "House", beds: 5, baths: 6, size: "1 Kanal", price: 325000, priceText: "Rs 3,25,000 per month", img: "rent12.jpg",
    features: ["Furnished to a high standard", "Home office room", "Suitable for senior executives"] }
];

var AREAS = [
  { name: "Garden Town", img: "tile-gardentown.jpg", guide: "Leafy streets, good schools nearby, mostly 5 and 10 Marla houses. Popular with families." },
  { name: "Lakeview", img: "tile-lakeview.jpg", guide: "Newer development around the lake park, wide roads, mix of houses and plots, prices rising steadily." },
  { name: "Old Town", img: "tile-oldtown.jpg", guide: "The original city centre, smaller plots, busy markets, strong rental demand and lower entry prices." },
  { name: "North Hills", img: "tile-northhills.jpg", guide: "Quiet elevated area, large houses and villas, the premium end of the city market." },
  { name: "University Road", img: "tile-university.jpg", guide: "Flats and apartments near the universities and hospitals, best area for rental income." },
  { name: "Riverside", img: "tile-riverside.jpg", guide: "Modern apartment blocks along the river road, popular with young professionals." }
];

var PRICE_BUCKETS = [
  { key: "any", label: "Any price", test: function (p) { return true; } },
  { key: "b1", label: "Up to Rs 50,000", test: function (p) { return p <= 50000; } },
  { key: "b2", label: "Rs 50,000 to Rs 1,00,000", test: function (p) { return p > 50000 && p <= 100000; } },
  { key: "b3", label: "Rs 1,00,000 to Rs 2 Crore", test: function (p) { return p > 100000 && p <= 20000000; } },
  { key: "b4", label: "Rs 2 Crore to Rs 5 Crore", test: function (p) { return p > 20000000 && p <= 50000000; } },
  { key: "b5", label: "Over Rs 5 Crore", test: function (p) { return p > 50000000; } }
];

function byId(id) { return document.getElementById(id); }
function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;"); }
function getListing(id) {
  for (var i = 0; i < LISTINGS.length; i++) { if (LISTINGS[i].id === id) return LISTINGS[i]; }
  return null;
}
function areaCount(area, status) {
  return LISTINGS.filter(function (l) { return l.area === area && (!status || l.status === status); }).length;
}
function fmtGrouped(n) {
  return Math.round(n).toLocaleString("en-IN");
}

function cardHTML(l) {
  var tag = l.status === "sale" ? "For Sale" : "For Rent";
  return '<article class="card">' +
    '<a href="property.html?id=' + l.id + '"><img src="images/' + l.img + '" alt="' + esc(l.title) + ' in ' + esc(l.area) + '"></a>' +
    '<div class="card-body">' +
    '<span class="card-tag">' + tag + '</span>' +
    '<h3><a href="property.html?id=' + l.id + '">' + esc(l.title) + '</a></h3>' +
    '<p class="card-area">' + esc(l.area) + '</p>' +
    '<p class="card-facts">' + l.beds + (l.beds === 1 ? " Bed" : " Beds") + ' &middot; ' + l.baths + (l.baths === 1 ? " Bath" : " Baths") + ' &middot; ' + esc(l.size) + '</p>' +
    '<p class="card-price">' + l.priceText + '</p>' +
    '<a class="btn" href="property.html?id=' + l.id + '">View Details</a>' +
    '</div></article>';
}

function areaCardHTML(a) {
  var sale = areaCount(a.name, "sale"), rent = areaCount(a.name, "rent"), total = sale + rent;
  return '<article class="card area-card">' +
    '<img src="images/' + a.img + '" alt="' + esc(a.name) + '">' +
    '<div class="card-body">' +
    '<h3>' + esc(a.name) + '</h3>' +
    '<p>' + esc(a.guide) + '</p>' +
    '<p class="area-count">' + total + (total === 1 ? " home" : " homes") + ' listed here</p>' +
    '<div class="area-links">' +
    '<a href="buy.html?area=' + encodeURIComponent(a.name) + '">For sale (' + sale + ')</a>' +
    '<a href="rent.html?area=' + encodeURIComponent(a.name) + '">For rent (' + rent + ')</a>' +
    '</div></div></article>';
}

/* Mobile nav */
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  var page = document.body.getAttribute("data-page");
  if (page === "home") initHome();
  if (page === "buy") initListings("sale");
  if (page === "rent") initListings("rent");
  if (page === "property") initProperty();
  if (page === "areas") initAreas();
  initFaq();
  initForms();
});

/* Home */
function initHome() {
  var fg = byId("featuredGrid");
  if (fg) {
    fg.innerHTML = LISTINGS.filter(function (l) { return l.featured; }).map(cardHTML).join("");
  }
  var ag = byId("homeAreas");
  if (ag) { ag.innerHTML = AREAS.map(areaCardHTML).join(""); }
  var areaSel = byId("searchArea");
  if (areaSel) {
    AREAS.forEach(function (a) {
      var o = document.createElement("option");
      o.value = a.name; o.textContent = a.name;
      areaSel.appendChild(o);
    });
  }
  var priceSel = byId("searchPrice");
  if (priceSel) {
    PRICE_BUCKETS.forEach(function (b) {
      var o = document.createElement("option");
      o.value = b.key; o.textContent = b.label;
      priceSel.appendChild(o);
    });
  }
  var form = byId("homeSearch");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = byId("searchStatus").value;
      var area = byId("searchArea").value;
      var price = byId("searchPrice").value;
      var params = [];
      if (area) params.push("area=" + encodeURIComponent(area));
      if (price && price !== "any") params.push("price=" + encodeURIComponent(price));
      var target = (status === "rent" ? "rent.html" : "buy.html");
      window.location.href = target + (params.length ? "?" + params.join("&") : "");
    });
  }
}

/* Buy / Rent listing pages */
function initListings(status) {
  var grid = byId("listingGrid");
  if (!grid) return;
  var areaSel = byId("fArea"), typeSel = byId("fType"), bedSel = byId("fBeds"),
      priceSel = byId("fPrice"), sortSel = byId("fSort"), count = byId("resultCount");

  AREAS.forEach(function (a) {
    var o = document.createElement("option");
    o.value = a.name; o.textContent = a.name;
    areaSel.appendChild(o);
  });
  PRICE_BUCKETS.forEach(function (b) {
    var o = document.createElement("option");
    o.value = b.key; o.textContent = b.label;
    priceSel.appendChild(o);
  });

  var q = new URLSearchParams(window.location.search);
  if (q.get("area")) areaSel.value = q.get("area");
  if (q.get("price")) priceSel.value = q.get("price");
  if (q.get("type")) typeSel.value = q.get("type");
  if (q.get("beds")) bedSel.value = q.get("beds");

  function bucketTest(key) {
    for (var i = 0; i < PRICE_BUCKETS.length; i++) {
      if (PRICE_BUCKETS[i].key === key) return PRICE_BUCKETS[i].test;
    }
    return PRICE_BUCKETS[0].test;
  }

  function render() {
    var area = areaSel.value, type = typeSel.value, beds = bedSel.value,
        price = priceSel.value, sort = sortSel.value;
    var rows = LISTINGS.filter(function (l) { return l.status === status; });
    if (area) rows = rows.filter(function (l) { return l.area === area; });
    if (type) rows = rows.filter(function (l) { return l.type === type; });
    if (beds) {
      if (beds === "5") rows = rows.filter(function (l) { return l.beds >= 5; });
      else rows = rows.filter(function (l) { return l.beds === parseInt(beds, 10); });
    }
    rows = rows.filter(function (l) { return bucketTest(price)(l.price); });
    if (sort === "low") rows = rows.slice().sort(function (a, b) { return a.price - b.price; });
    if (sort === "high") rows = rows.slice().sort(function (a, b) { return b.price - a.price; });
    count.textContent = rows.length + (rows.length === 1 ? " home" : " homes") + " found";
    if (rows.length === 0) {
      grid.innerHTML = '<div class="no-results" style="grid-column:1/-1"><h3>No homes match those filters</h3><p>Try a wider price range or a different area. Every home we list is on this page once the filters are cleared.</p></div>';
    } else {
      grid.innerHTML = rows.map(cardHTML).join("");
    }
  }
  [areaSel, typeSel, bedSel, priceSel, sortSel].forEach(function (el) {
    el.addEventListener("change", render);
  });
  var clear = byId("clearFilters");
  if (clear) {
    clear.addEventListener("click", function () {
      areaSel.value = ""; typeSel.value = ""; bedSel.value = ""; priceSel.value = "any"; sortSel.value = "featured";
      render();
    });
  }
  render();
}

/* Property detail */
function initProperty() {
  var q = new URLSearchParams(window.location.search);
  var l = getListing(q.get("id")) || LISTINGS[0];
  document.title = l.title + " | Urban Nest Realty";
  byId("crumbStatus").innerHTML = '<a href="' + (l.status === "sale" ? "buy.html" : "rent.html") + '">' + (l.status === "sale" ? "Buy a Home" : "Rent a Home") + '</a>';
  byId("crumbTitle").textContent = l.title;
  byId("propTitle").textContent = l.title;
  byId("propArea").textContent = l.area + " · " + (l.status === "sale" ? "For Sale" : "For Rent");
  byId("propPrice").textContent = l.priceText;

  var base = l.img.replace(".jpg", "");
  var shots = [l.img, base + "-g2.jpg", base + "-g3.jpg"];
  var main = byId("galleryMain");
  main.src = "images/" + shots[0];
  main.alt = l.title + " in " + l.area;
  var thumbs = byId("galleryThumbs");
  thumbs.innerHTML = shots.map(function (s, i) {
    return '<button type="button" class="' + (i === 0 ? "active" : "") + '" data-src="images/' + s + '" aria-label="Photo ' + (i + 1) + ' of ' + esc(l.title) + '"><img src="images/' + s + '" alt=""></button>';
  }).join("");
  thumbs.addEventListener("click", function (e) {
    var btn = e.target.closest("button");
    if (!btn) return;
    main.src = btn.getAttribute("data-src");
    thumbs.querySelectorAll("button").forEach(function (b) { b.classList.remove("active"); });
    btn.classList.add("active");
  });

  byId("factStatus").textContent = l.status === "sale" ? "For Sale" : "For Rent";
  byId("factType").textContent = l.type;
  byId("factArea").textContent = l.area;
  byId("factBeds").textContent = l.beds;
  byId("factBaths").textContent = l.baths;
  byId("factSize").textContent = l.size;
  byId("factPrice").textContent = l.priceText;
  byId("propFeatures").innerHTML = l.features.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("");

  var calcBox = byId("calcBox");
  if (l.status === "sale" && calcBox) {
    calcBox.style.display = "block";
    var priceIn = byId("calcPrice"), depIn = byId("calcDeposit"), yrsIn = byId("calcYears"), out = byId("calcOut");
    priceIn.value = l.price;
    function calc() {
      var price = parseFloat(priceIn.value) || 0;
      var dep = parseFloat(depIn.value) || 0;
      var yrs = parseFloat(yrsIn.value) || 0;
      if (price <= 0 || yrs <= 0 || dep < 0 || dep >= 100) {
        out.textContent = "Please enter a price, a deposit under 100 percent and at least 1 year.";
        return;
      }
      var monthly = (price - (price * dep / 100)) / (yrs * 12);
      out.innerHTML = 'Estimated monthly payment: <span class="amount">Rs ' + fmtGrouped(monthly) + '</span>';
    }
    [priceIn, depIn, yrsIn].forEach(function (el) { el.addEventListener("input", calc); });
    calc();
  }

  var form = byId("viewingForm");
  if (form) {
    byId("viewingPropName").textContent = l.title;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var name = byId("vName").value.trim();
      var date = byId("vDate").value;
      var box = byId("viewingSuccess");
      box.innerHTML = "<strong>Thank you, " + esc(name) + ".</strong> Your viewing request for <strong>" + esc(l.title) + "</strong> in " + esc(l.area) + " has been received" + (date ? " for " + esc(date) : "") + ". We will confirm your time the same day. This is a demo form, so nothing has been sent anywhere.";
      box.style.display = "block";
      form.style.display = "none";
      box.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  var sim = LISTINGS.filter(function (x) { return x.status === l.status && x.id !== l.id; }).slice(0, 3);
  byId("similarGrid").innerHTML = sim.map(cardHTML).join("");
}

/* Areas page */
function initAreas() {
  var g = byId("areasGrid");
  if (g) { g.innerHTML = AREAS.map(areaCardHTML).join(""); }
}

/* FAQ accordion */
function initFaq() {
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var btn = item.querySelector(".faq-q");
    var panel = item.querySelector(".faq-a");
    if (!btn || !panel) return;
    btn.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach(function (other) {
        other.classList.remove("open");
        other.querySelector(".faq-a").style.maxHeight = "0px";
        other.querySelector(".faq-q").setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("open");
        panel.style.maxHeight = panel.scrollHeight + "px";
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
}

/* Generic demo forms (sell, projects, contact) */
function initForms() {
  document.querySelectorAll("form[data-demo-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var nameField = form.querySelector("[data-name-field]");
      var name = nameField ? nameField.value.trim() : "there";
      var msg = form.getAttribute("data-success").replace("{name}", name);
      var box = document.createElement("div");
      box.className = "success-box";
      box.innerHTML = msg;
      form.replaceWith(box);
      box.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
  document.querySelectorAll("[data-project-link]").forEach(function (link) {
    link.addEventListener("click", function () {
      var sel = byId("pProject");
      if (sel) sel.value = link.getAttribute("data-project-link");
    });
  });
}
