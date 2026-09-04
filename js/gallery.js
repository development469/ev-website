// ev — v2 interactions: typewriter hero, full-bleed gallery, reveal, header UI.
// Galleries render from the arrays in js/data.js.

function pad(n) { return String(n).padStart(2, '0') }

function tileHTML(item, i, href) {
  const media = item.image
    ? `<img src="${item.image}" alt="${item.name}" loading="lazy" />`
    : `<div class="image-placeholder">${item.name}<br>photo pending</div>`
  const cat = item.category ? `<span class="cat">${item.category}</span>` : ''
  return `<a class="tile reveal" href="${href}">
    <div class="thumb"><span class="num">${pad(i + 1)}</span>${media}</div>
    <div class="meta">
      <span class="txt">${cat}<span class="name">${item.name}</span></span>
      <span class="go">&#8599;</span>
    </div>
  </a>`
}

function renderGallery(containerId, items, href = 'collection.html') {
  const el = document.getElementById(containerId)
  if (!el) return
  el.innerHTML = items.map((it, i) => tileHTML(it, i, href)).join('')
}

function renderBadges(containerId, items) {
  const el = document.getElementById(containerId)
  if (!el || !items || !items.length) return
}

// ---- Typewriter ----
function initTypewriter() {
  const el = document.getElementById('typewriter')
  if (!el) return
  let phrases
  try { phrases = JSON.parse(el.dataset.phrases) } catch { phrases = [el.textContent] }
  if (!phrases || !phrases.length) return
  let p = 0, c = 0, deleting = false
  const type = () => {
    const word = phrases[p]
    c += deleting ? -1 : 1
    el.textContent = word.slice(0, c)
    let delay = deleting ? 45 : 85
    if (!deleting && c === word.length) { delay = 1600; deleting = true }
    else if (deleting && c === 0) { deleting = false; p = (p + 1) % phrases.length; delay = 350 }
    setTimeout(type, delay)
  }
  type()
}

// ---- Scroll reveal ----
function initReveal() {
  const els = document.querySelectorAll('.reveal')
  if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('in')); return }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } })
  }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' })
  els.forEach((e) => io.observe(e))
}

// ---- Header state + back to top ----
function initScrollUI() {
  const header = document.querySelector('.site-header')
  const toTop = document.querySelector('.to-top')
  const onScroll = () => {
    const y = window.scrollY
    if (header) header.classList.toggle('scrolled', y > 16)
    if (toTop) toTop.classList.toggle('show', y > 700)
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
  if (toTop) toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))
}

document.addEventListener('DOMContentLoaded', () => {
  if (typeof COLLECTION_ITEMS !== 'undefined') {
    renderGallery('collection-full', COLLECTION_ITEMS, 'collection.html')
    renderGallery('collection-preview', COLLECTION_ITEMS, 'collection.html')
  }
  if (typeof PROJECT_ITEMS !== 'undefined') {
    renderGallery('projects-gallery', PROJECT_ITEMS, 'projects.html')
  }

  const navToggle = document.querySelector('.nav-toggle')
  const navLinks = document.querySelector('.nav-links')
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => navLinks.classList.toggle('open'))
    navLinks.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => navLinks.classList.remove('open')))
  }

  initTypewriter()
  initScrollUI()
  initReveal()
})
