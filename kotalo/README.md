# Kotalo — Online selling and quotation studio

A working, mobile-responsive, static MVP showcasing a business idea for small businesses that sell through WhatsApp and social platforms. Built October 2026.

## Try it

Open `index.html` in any current browser, or host this folder on GitHub Pages / Netlify / Vercel.

- Main page: `/#/`
- Dashboard: `/#/app`
- Product manager: `/#/products`
- Quotation studio: `/#/quotes`
- Sample customer storefront: `/#/shop`
- Business settings: `/#/settings`

## What's working

Product add/edit/delete, in-stock flags, categories and search, CSV import/export, customized business info and currency, quote builder with discounts/taxes, quote history, printable PDF via browser print dialog, WhatsApp text share, responsive customer storefront, cart and prepared WhatsApp order message, and JSON backup/restore. Browser localStorage saves changes on the same device.

## Important limitations

**This is a functional validation MVP, not a ready-to-sell multi-tenant SaaS.** The data is stored in the visitor's own browser only. Changing products in the admin will not change what other visitors see; each browser begins with sample data. Customers cannot submit orders into a shared database. No login, hosted database, payment processor, subscriptions, order fulfilment, or server-side security is implemented. The WhatsApp action only opens a prefilled message for the customer to send. Configure a real WhatsApp number in Settings before testing.

Do not treat demo quotation totals as revenue. Avoid storing sensitive customer information in this browser-only prototype.

## First production milestone

1. Add hosted database and authentication (Supabase/Postgres, for example) with per-business tenant isolation and server-side permissions.
2. Make storefronts shareable at a stable `/{shop_slug}` URL with product reads served from database.
3. Store buyer orders/quote requests server-side with explicit privacy, consent and retention policies.
4. Add payment subscriptions using a processor that legally supports the business's registration, residency and bank account; review Trinidad and Tobago constraints before choosing Stripe.
5. Add business email, domain, legal documents, analytics and customer-support workflows.
6. Test ten local businesses and collect paid pilot agreements before expanding the feature set.

## Revenue hypothesis (not a forecast)

Potential plans: USD $19 Starter, $49 Growth, $99 Studio. At $49/month, 1,701 paying businesses would generate USD $1,000,188 in gross annual recurring revenue **before churn, fees, tax, support and hosting**. Neither user demand nor product-market fit is yet verified.

## Files

- `index.html` — site entry
- `styles.css` — responsive styling
- `app.js` — local demo data and interactive app logic