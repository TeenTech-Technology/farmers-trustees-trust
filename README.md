# Farmers & Trustees Trust Digital Platform: first version (demo)

Static website (HTML, CSS, plain JavaScript). No build step and no server code. All links are relative, so the folder can be published as-is on GitHub Pages or any static host.

Prepared by Teen Tech Technology, Lusaka.

## Pages
| File | Content |
|---|---|
| index.html | Home: hero, service previews, how it works, upcoming events |
| about.html | Mission, vision, core values, who we serve |
| membership.html | Categories, online registration, membership number (FTT-YYYY-000123), demo member dashboard, certificate (PNG download / print) |
| agriculture.html | Commodity listings, post produce, request produce, farmer registration and profiles, buyer registration, input supplier directory, farm advisory, sample market information |
| estate.html | Services, estate planning registration, family asset inventory (multiple rows), beneficiary registration (multiple rows) |
| talentlink.html | Job board with type filters, application form, candidate profiles, employer registration, recruitment dashboard (demo) |
| enterprise.html | Startup registration and funding request (pitch deck field), investor registration, directories, matchmaking by sector / stage / amount, funding opportunities |
| events.html | Upcoming events, online registration, attendance certificate (after staff mark attendance) |
| resources.html | Downloadable PDF forms (membership, internship, estate planning); templates and training materials marked coming soon |
| roadmap.html | Phase 2 and Phase 3 plans |
| contact.html | Phone, email, WhatsApp, contact form, send-to-WhatsApp, Google Map of Lusaka |
| admin.html | Demo staff dashboard (passcode `ftt-demo`): members, users, applications, estate records, attendance, other submissions, documents, reports with charts, CSV / JSON export |

## How the demo works
- Every form validates in the browser and saves to `localStorage` in the visitor's own browser. Nothing is sent anywhere.
- The admin dashboard reads those saved submissions, so you can show the full flow on one device: submit a form, then open admin.html.
- Records labelled "Example" or "Sample" are fake demo records, not real people, offers or prices.
- The admin passcode is a demo gate only. It is not security.
- File fields (CV, pitch deck) record only the file name.

## Needed for production (real backend)
- Database for members, applications, listings, estate records and event registrations
- Secure logins and roles (members, employers, investors, staff, admin), password reset
- Email and SMS / WhatsApp notifications (confirmations, staff alerts)
- Secure file storage for CVs, pitch decks and estate documents
- Encryption and access control for estate planning and personal data (Zambia Data Protection Act, 2021)
- Membership fee payments (mobile money: Airtel Money, MTN MoMo, Zamtel Kwacha; and cards)
- Verified certificate numbers (e.g. QR code check) and staff approval workflow
- Hosting, domain name and backups

## What the client still needs to provide
1. Final logo (the current emblem is a simple placeholder design made for this draft)
2. Own photos of members, farms, events and staff (current photos are free Unsplash images, see credits)
3. Real fees and benefits for each membership category (Student, Farmer, Ordinary, Associate, Corporate, Honorary)
4. Legal wording and disclaimers for estate planning services, reviewed by a lawyer, and names of partner legal practitioners
5. Registration details of the Trust (registration number, registered office address) for the footer and certificates
6. Signatory names and titles for certificates
7. Confirmed event dates, venues and the real job, supplier and investor listings
8. Business templates and training materials for the Resource Center
9. Privacy policy and terms of use
10. Physical office address for the map (currently shows Lusaka city)

## Photo credits
Resized copies are stored in `assets/img/`. Replace with the Trust's own photos before launch.
- Unsplash (Unsplash License): family.jpg, talent.jpg, enterprise.jpg, about.jpg, community.jpg, rural-road.jpg
- Wikimedia Commons:
  - hero.jpg: "Banana farmers of Chiawa, Zambia", KambiloMusopelo, CC BY-SA 4.0
  - market.jpg: "Market (5268484861)", SuSanA Secretariat, CC BY 2.0
  - training.jpg: "NAIS farmer Group Kasama Crossroads (2)", IICD, CC BY 2.0
  - field.jpg: "Conservation farming 02", 13tainonge, CC BY-SA 4.0

## Design
Fonts: Fraunces (headings) and Inter (body) from Google Fonts. Colours: forest #0F3D2E, gold #C9A227, cream #F7F4EC. Icons are inline SVG line icons in `assets/js/app.js`.

## Run locally
`python3 -m http.server 8471` inside this folder, then open http://localhost:8471/
