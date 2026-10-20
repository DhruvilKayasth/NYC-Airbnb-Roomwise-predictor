// ====== Settings ======
const API_URL = "http://127.0.0.1:8000"; // change if your FastAPI runs elsewhere

const NEIGHBOURHOODS = ["Allerton", "Arden Heights", "Arrochar", "Arverne", "Astoria", "Bath Beach", "Battery Park City", "Bay Ridge", "Bay Terrace", "Bay Terrace, Staten Island", "Baychester", "Bayside", "Bayswater", "Bedford-Stuyvesant", "Belle Harbor", "Bellerose", "Belmont", "Bensonhurst", "Bergen Beach", "Boerum Hill", "Borough Park", "Breezy Point", "Briarwood", "Brighton Beach", "Bronxdale", "Brooklyn Heights", "Brownsville", "Bull's Head", "Bushwick", "Cambria Heights", "Canarsie", "Carroll Gardens", "Castle Hill", "Castleton Corners", "Chelsea", "Chinatown", "City Island", "Civic Center", "Claremont Village", "Clason Point", "Clifton", "Clinton Hill", "Co-op City", "Cobble Hill", "College Point", "Columbia St", "Concord", "Concourse", "Concourse Village", "Coney Island", "Corona", "Crown Heights", "Cypress Hills", "DUMBO", "Ditmars Steinway", "Dongan Hills", "Douglaston", "Downtown Brooklyn", "Dyker Heights", "East Elmhurst", "East Flatbush", "East Harlem", "East Morrisania", "East New York", "East Village", "Eastchester", "Edenwald", "Edgemere", "Elmhurst", "Eltingville", "Emerson Hill", "Far Rockaway", "Fieldston", "Financial District", "Flatbush", "Flatiron District", "Flatlands", "Flushing", "Fordham", "Forest Hills", "Fort Greene", "Fort Hamilton", "Fresh Meadows", "Glendale", "Gowanus", "Gramercy", "Graniteville", "Grant City", "Gravesend", "Great Kills", "Greenpoint", "Greenwich Village", "Grymes Hill", "Harlem", "Hell's Kitchen", "Highbridge", "Hollis", "Holliswood", "Howard Beach", "Howland Hook", "Huguenot", "Hunts Point", "Inwood", "Jackson Heights", "Jamaica", "Jamaica Estates", "Jamaica Hills", "Kensington", "Kew Gardens", "Kew Gardens Hills", "Kingsbridge", "Kips Bay", "Laurelton", "Lighthouse Hill", "Little Italy", "Little Neck", "Long Island City", "Longwood", "Lower East Side", "Manhattan Beach", "Marble Hill", "Mariners Harbor", "Maspeth", "Melrose", "Middle Village", "Midland Beach", "Midtown", "Midwood", "Mill Basin", "Morningside Heights", "Morris Heights", "Morris Park", "Morrisania", "Mott Haven", "Mount Eden", "Mount Hope", "Murray Hill", "Navy Yard", "Neponsit", "New Brighton", "New Dorp", "New Dorp Beach", "New Springville", "NoHo", "Nolita", "North Riverdale", "Norwood", "Oakwood", "Olinville", "Ozone Park", "Park Slope", "Parkchester", "Pelham Bay", "Pelham Gardens", "Port Morris", "Port Richmond", "Prince's Bay", "Prospect Heights", "Prospect-Lefferts Gardens", "Queens Village", "Randall Manor", "Red Hook", "Rego Park", "Richmond Hill", "Ridgewood", "Riverdale", "Rockaway Beach", "Roosevelt Island", "Rosebank", "Rosedale", "Rossville", "Schuylerville", "Sea Gate", "Sheepshead Bay", "Shore Acres", "Silver Lake", "SoHo", "Soundview", "South Beach", "South Ozone Park", "South Slope", "Springfield Gardens", "Spuyten Duyvil", "St. Albans", "St. George", "Stapleton", "Stuyvesant Town", "Sunnyside", "Sunset Park", "Theater District", "Throgs Neck", "Todt Hill", "Tompkinsville", "Tottenville", "Tremont", "Tribeca", "Two Bridges", "Unionport", "University Heights", "Upper East Side", "Upper West Side", "Van Nest", "Vinegar Hill", "Wakefield", "Washington Heights", "West Brighton", "West Farms", "West Village", "Westchester Square", "Westerleigh", "Whitestone", "Williamsbridge", "Williamsburg", "Willowbrook", "Windsor Terrace", "Woodhaven", "Woodlawn", "Woodside"];

const BOROUGHS = {
  "Manhattan": [40.7831, -73.9712], "Brooklyn": [40.6782, -73.9442],
  "Queens": [40.7282, -73.7949], "Bronx": [40.8448, -73.8648],
  "Staten Island": [40.5795, -74.1502],
};

// Model classes come back in alphabetical order
const CLASSES = ["Entire home/apt", "Private room", "Shared room"];

const ROOMS = {
  "Entire home/apt": {
    title: "Entire home or apartment",
    blurb: "Guests get the whole place to themselves, with no shared spaces.",
    svg: `<svg viewBox="0 0 210 150"><path class="draw" d="M20 70 L105 12 L190 70 M36 60 V138 H174 V60 M142 34 V18 H156 V44" fill="none" stroke="#14233b" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/><g class="fill"><rect x="94" y="90" width="24" height="48" rx="12 12 0 0" fill="#0e8f8a"/><rect x="52" y="78" width="28" height="28" rx="3" fill="#ffc857"/><rect x="134" y="78" width="28" height="28" rx="3" fill="#ffc857"/></g></svg>`
  },
  "Private room": {
    title: "Private room",
    blurb: "A room of your own inside a larger home, with some shared areas.",
    svg: `<svg viewBox="0 0 210 150"><path class="draw" d="M20 128 H190 M30 128 V84 H180 V128 M30 84 V60 H64 V84" fill="none" stroke="#14233b" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"/><g class="fill"><rect x="70" y="66" width="104" height="18" rx="9" fill="#0e8f8a"/><rect x="38" y="30" width="46" height="34" rx="3" fill="#ffc857" opacity=".0"/><rect x="132" y="22" width="44" height="34" rx="3" fill="#ffc857"/></g></svg>`
  },
  "Shared room": {
    title: "Shared room",
    blurb: "Guests sleep in a space that other people use too, like a bunk room.",
    svg: `<svg viewBox="0 0 210 150"><path class="draw" d="M30 138 V20 M180 138 V20 M30 62 H180 M30 108 H180" fill="none" stroke="#14233b" stroke-width="5" stroke-linecap="round"/><g class="fill"><rect x="38" y="44" width="136" height="16" rx="8" fill="#0e8f8a"/><rect x="38" y="90" width="136" height="16" rx="8" fill="#35c1b4"/><circle cx="58" cy="36" r="8" fill="#ffc857"/><circle cx="58" cy="82" r="8" fill="#ffc857"/></g></svg>`
  },
};

const EXAMPLES = [
  { g:"Manhattan", n:"Midtown", price:240, min:2, avail:300, rev:45, rpm:1.6, host:4 },
  { g:"Brooklyn", n:"Bedford-Stuyvesant", price:70, min:3, avail:120, rev:18, rpm:0.7, host:1 },
  { g:"Queens", n:"Jamaica", price:35, min:1, avail:340, rev:6, rpm:0.3, host:2 },
];

// ====== Helpers ======
const $ = id => document.getElementById(id);
const form = $("form");
let exampleIdx = 0, coordsTouched = false;

// Chips for boroughs
Object.keys(BOROUGHS).forEach((name, i) => {
  const b = document.createElement("button");
  b.type = "button"; b.className = "chip"; b.textContent = name; b.dataset.value = name;
  b.setAttribute("role", "radio"); b.setAttribute("aria-checked", i === 2 ? "true" : "false");
  b.onclick = () => selectBorough(name);
  $("boroughs").appendChild(b);
});
function selectBorough(name, keepCoords) {
  document.querySelectorAll(".chip").forEach(c => c.setAttribute("aria-checked", c.dataset.value === name));
  if (!keepCoords && !coordsTouched) setCoords(name);
}
const currentBorough = () => document.querySelector('.chip[aria-checked="true"]').dataset.value;
function setCoords(name) {
  const [lat, lng] = BOROUGHS[name];
  $("latitude").value = (lat + (Math.random() - .5) * .04).toFixed(5);
  $("longitude").value = (lng + (Math.random() - .5) * .04).toFixed(5);
}
["latitude", "longitude"].forEach(id => $(id).addEventListener("input", () => coordsTouched = true));
$("hoods").innerHTML = NEIGHBOURHOODS.map(n => `<option value="${n}">`).join("");
setCoords("Manhattan");

// Sliders: live value + filled track
const sliders = [
  ["price", "priceOut", v => "$" + v], ["minimum_nights", "minOut", v => v], ["availability_365", "availOut", v => v],
];
function paint(el) { el.style.setProperty("--p", ((el.value - el.min) / (el.max - el.min) * 100) + "%"); }
sliders.forEach(([id, out, fmt]) => {
  const el = $(id);
  const update = () => { $(out).textContent = fmt(el.value); paint(el); };
  el.addEventListener("input", update); update();
});
function setSlider(id, v) { $(id).value = v; $(id).dispatchEvent(new Event("input")); }

// Example button
$("example").onclick = () => {
  const e = EXAMPLES[exampleIdx++ % EXAMPLES.length];
  coordsTouched = false; selectBorough(e.g);
  $("neighbourhood").value = e.n;
  setSlider("price", e.price); setSlider("minimum_nights", e.min); setSlider("availability_365", e.avail);
  $("number_of_reviews").value = e.rev; $("reviews_per_month").value = e.rpm;
  $("calculated_host_listings_count").value = e.host;
  form.requestSubmit();
};

// API health check
fetch(API_URL + "/").then(r => r.ok ? setStatus(true) : setStatus(false)).catch(() => setStatus(false));
function setStatus(ok) {
  const s = $("apiStatus");
  s.textContent = ok ? "API connected" : "API offline";
  s.className = "pill " + (ok ? "ok" : "bad");
}

// ====== Submit ======
function showError(msg) { const e = $("error"); e.textContent = msg; e.hidden = !msg; e.style.animation = "none"; void e.offsetWidth; e.style.animation = ""; }

form.addEventListener("submit", async ev => {
  ev.preventDefault(); showError("");
  document.querySelectorAll("input").forEach(i => i.classList.remove("invalid"));

  const hood = $("neighbourhood").value.trim();
  const bad = [...form.querySelectorAll("input[required]")].find(i => !i.checkValidity() || !i.value.trim());
  if (bad) { bad.classList.add("invalid"); bad.focus(); return showError("Please enter a valid value for “" + (bad.closest("label")?.firstChild.textContent.trim() || "this field") + "”."); }
  if (!NEIGHBOURHOODS.includes(hood)) { $("neighbourhood").classList.add("invalid"); return showError("Pick a neighbourhood from the suggestions list."); }

  const payload = {
    latitude: +$("latitude").value, longitude: +$("longitude").value,
    price: +$("price").value, minimum_nights: +$("minimum_nights").value,
    number_of_reviews: +$("number_of_reviews").value, reviews_per_month: +$("reviews_per_month").value,
    calculated_host_listings_count: +$("calculated_host_listings_count").value,
    availability_365: +$("availability_365").value,
    neighbourhood_group: currentBorough(), neighbourhood: hood,
  };

  const btn = $("submit"); btn.classList.add("loading"); btn.disabled = true;
  try {
    const res = await fetch(API_URL + "/predict", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    const data = await res.json();
    if (!res.ok) {
      const d = data.detail;
      throw new Error(Array.isArray(d) ? d.map(x => `${x.loc.slice(-1)}: ${x.msg}`).join(" · ") : (d || "The server rejected the request."));
    }
    setStatus(true); render(data);
  } catch (err) {
    showError(err instanceof TypeError ? `Can't reach the API at ${API_URL}. Is the server running?` : err.message);
    setStatus(!(err instanceof TypeError));
  } finally { btn.classList.remove("loading"); btn.disabled = false; }
});

// ====== Render result ======
function render(data) {
  const room = ROOMS[data.Predicted_room_type] || ROOMS["Private room"];
  $("empty").hidden = true;
  const ans = $("answer"); ans.hidden = true; void ans.offsetWidth; ans.hidden = false;
  $("roomArt").innerHTML = room.svg;
  $("roomName").textContent = room.title;
  $("roomBlurb").textContent = room.blurb;

  const probs = data.Probability;
  const top = probs.indexOf(Math.max(...probs));
  $("bars").innerHTML = CLASSES.map((c, i) => `
    <div class="bar ${i === top ? "top" : ""}">
      <div class="bar-top"><span>${ROOMS[c].title}</span><b data-to="${(probs[i] * 100).toFixed(1)}">0%</b></div>
      <div class="track"><div class="fillbar"></div></div>
    </div>`).join("");

  requestAnimationFrame(() => requestAnimationFrame(() => {
    document.querySelectorAll(".bar").forEach((bar, i) => {
      bar.querySelector(".fillbar").style.width = (probs[i] * 100) + "%";
      countUp(bar.querySelector("b"), +bar.querySelector("b").dataset.to);
    });
  }));
  if (window.innerWidth < 900) $("result").scrollIntoView({ behavior: "smooth", block: "start" });
}
function countUp(el, to) {
  const t0 = performance.now();
  (function step(t) {
    const k = Math.min((t - t0) / 1100, 1), e = 1 - Math.pow(1 - k, 3);
    el.textContent = (to * e).toFixed(1) + "%";
    if (k < 1) requestAnimationFrame(step);
  })(t0);
}
