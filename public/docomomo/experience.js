const get = (id) => document.getElementById(id);
const query = get('query');
const type = get('type');
const cards = [...get('cards').querySelectorAll('article')];

function filter() {
  const search = query.value.trim().toLowerCase();
  for (const card of cards) {
    card.hidden = !card.dataset.key.includes(search) || Boolean(type.value && type.value !== card.dataset.type);
  }
  const count = cards.filter((card) => !card.hidden).length;
  get('results').textContent = count ? `${count} matching ${count === 1 ? 'place' : 'places'}` : 'No matching places. Try another search.';
}
query.addEventListener('input', filter);
type.addEventListener('change', filter);
filter();

const archiveSearch = get('archive-query');
const archiveItems = [...get('archive-list').children];
function filterArchive() {
  const term = archiveSearch.value.trim().toLowerCase();
  for (const item of archiveItems) item.hidden = !item.textContent.toLowerCase().includes(term);
  const count = archiveItems.filter(item => !item.hidden).length;
  get('archive-count').textContent = count ? `${count} matching ${count === 1 ? 'record' : 'records'}` : 'No matching records. Try a different subject or year.';
}
archiveSearch.addEventListener('input', filterArchive);
filterArchive();
const period = get('period');
const quantity = get('quantity');
const member = get('member');
const checkout = get('checkout');
const confirmation = get('confirmation');
let verified = 'guest';
let order;
const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
function refreshPrice() {
  const early = period.value === 'early';
  const active = verified === 'active';
  const count = Number(quantity.value);
  const eligible = !early || (active && count === 1);
  get('review').disabled = !eligible;
  get('eligibility').textContent = early && !active ? 'Advance registration requires a verified active membership. Verify the active sample or select general sale.' : early && count > 1 ? 'Advance registration allows one member ticket in this sample. Choose one ticket to continue.' : active ? 'Verified active sample member. One member ticket is discounted.' : verified === 'expired' ? 'Expired sample membership. General admission is available.' : 'General admission applies.';
  get('total').textContent = eligible ? `Total ${money.format(count * 30 - (active ? 8 : 0))}` : 'Registration unavailable for this selection.';
  checkout.hidden = true;
  confirmation.hidden = true;
  order = undefined;
}
quantity.addEventListener('change', refreshPrice);
period.addEventListener('change', refreshPrice);
member.addEventListener('change', () => {
  verified = 'guest';
  get('eligibility').textContent = 'General admission applies until you simulate verification.';
  refreshPrice();
});
get('verify').addEventListener('click', () => {
  verified = member.value;
  get('eligibility').textContent = {
    active: 'Active demo membership. Member pricing applied.',
    expired: 'Expired demo membership. General admission applies.',
    guest: 'General admission applies.',
  }[verified];
  refreshPrice();
});
get('booking').addEventListener('submit', (event) => {
  event.preventDefault();
  if (get('review').disabled) return;
  const members = verified === 'active' ? 1 : 0;
  const general = Number(quantity.value) - members;
  order = [members ? '1 member ticket' : '', general ? `${general} general admission` : '', get('total').textContent].filter(Boolean).join(' · ');
  get('order').textContent = order;
  confirmation.hidden = true;
  checkout.hidden = false;
  get('checkout-title').focus();
});
get('purchase').addEventListener('click', () => {
  if (!order) return;
  confirmation.textContent = `Demo purchase confirmed. ${order}. No payment was processed.`;
  checkout.hidden = true;
  confirmation.hidden = false;
  order = undefined;
  confirmation.focus();
});
get('editor').addEventListener('submit', (event) => {
  event.preventDefault();
  get('draft-card').hidden = false;
  get('preview-title').textContent = get('draft').value.trim();
  get('preview-kind').textContent = get('kind').value + ' · Volunteer draft';
  get('preview-summary').textContent = get('draft-summary').value.trim();
  get('draft-preview').textContent = `${get('kind').value}: ${get('draft').value.trim()} · ${get('draft-status').value} · Local preview`;
});
