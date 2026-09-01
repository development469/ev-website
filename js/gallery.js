// ev — galleries + interactions
// Galleries render from the arrays in js/data.js. Add a photo there and it
// appears here automatically — no HTML editing per image.

function galleryItemHTML(item, showCaption) {
  const media = item.image
    ? `<img src="${item.image}" alt="${item.name}" loading="lazy" />`
    : `<div class="image-placeholder">${item.name} — photo pending</div>`
  const caption = showCaption
    ? `<div class="caption">
         ${item.category ? `<p class="caption-category">${item.category}</p>` : ''}
         <p class="caption-name">${item.name}</p>
       </div>`
    : ''
  return `<div class="item reveal">${media}${caption}</div>`
}

function renderGallery(containerId, items, { showCaption = true } = {}) {
  const el = document.getElementById(containerId)
  if (!el) return
  el.innerHTML = items.map((i) => galleryItemHTML(i, showCaption)).join('')
}

function renderCertifications(containerId, items) {
  const el = document.getElementById(containerId)
  if (!el) return
  if (!items || items.length === 0) {
    el.innerHTML = '<p class="todo-note">Certification logos to be added — placeholders shown below.</p>'
    return
  }
  el.innerHTML = `<div class="cert-logos">${items
    .map((c) => `<img src="${c.logo}" alt="${c.name}" />`)
    .join('')}</div>`
}

// ---- scroll reveal ----
function initReveal() {
  const els = document.querySelectorAll('.reveal')
  if (!('IntersectionObserver' in window)) {
    els.forEach((e) => e.classList.add('in'))
    return
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in')
          io.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  )
  els.forEach((e) => io.observe(e))
}

// ---- animated stat counters ----
function initCounters() {
  const nums = document.querySelectorAll('.stat .num[data-count]')
  if (!nums.length) return
  const run = (el) => {
    const target = parseFloat(el.dataset.count)
    const suffix = el.dataset.suffix || ''
    const dur = 1400
    const start = performance.now()
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      const val = target * eased
      el.textContent = (target % 1 ? val.toFixed(1) : Math.round(val)) + suffix
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          run(entry.target)
          io.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.6 }
  )
  nums.forEach((n) => io.observe(n))
}

// ---- header state + back to top ----
function initScrollUI() {
  const header = document.querySelector('.site-header')
  const toTop = document.querySelector('.to-top')
  const onScroll = () => {
    const y = window.scrollY
    if (header) header.classList.toggle('scrolled', y > 20)
    if (toTop) toTop.classList.toggle('show', y > 600)
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
  if (toTop) toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))
}

document.addEventListener('DOMContentLoaded', () => {
  if (typeof COLLECTION_ITEMS !== 'undefined') {
    renderGallery('collection-preview', COLLECTION_ITEMS.slice(0, 6))
    renderGallery('collection-full', COLLECTION_ITEMS)
  }
  if (typeof PROJECT_ITEMS !== 'undefined') {
    renderGallery('projects-gallery', PROJECT_ITEMS, { showCaption: true })
  }
  if (typeof CERTIFICATIONS !== 'undefined') {
    renderCertifications('cert-logos', CERTIFICATIONS)
  }

  // nav toggle
  const navToggle = document.querySelector('.nav-toggle')
  const navLinks = document.querySelector('.nav-links')
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => navLinks.classList.toggle('open'))
    navLinks.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => navLinks.classList.remove('open'))
    )
  }

  initScrollUI()
  initCounters()
  // reveal runs last so freshly-rendered gallery items are observed too
  initReveal()
})
