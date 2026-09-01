// The single place to manage gallery photos.
// Add an entry (name, category, image) and it appears in the gallery automatically.
// Images live in images/collection/ as optimized .webp files.

const COLLECTION_ITEMS = [
  { name: 'Tan Brown Round Tray', category: 'Trays', image: 'images/collection/tan-round-tray.webp' },
  { name: 'Gold Leopard Glass Box', category: 'Décor', image: 'images/collection/gold-leopard-box.webp' },
  { name: 'Choco Brown Rectangular Tray', category: 'Trays', image: 'images/collection/choco-rect-tray.webp' },
  { name: 'Blue-Ivory Fabric Box', category: 'Boxes', image: 'images/collection/blue-ivory-fabric-box.webp' },
  { name: 'Cappuccino Laminate Platter', category: 'Tabletop', image: 'images/collection/cappuccino-platter.webp' },
  { name: 'Gold Dog Glass Box', category: 'Décor', image: 'images/collection/gold-dog-box.webp' },
  { name: 'Blue Laminate Platter', category: 'Tabletop', image: 'images/collection/blue-laminate-platter.webp' },
  { name: 'Ivory Fabric Box', category: 'Boxes', image: 'images/collection/ivory-fab-box.webp' },
  { name: 'Black Glass Leopard Tray', category: 'Trays', image: 'images/collection/black-glass-leopard-tray.webp' },
  { name: 'Light Brown Fabric Tray', category: 'Trays', image: 'images/collection/lt-brown-fabric-tray.webp' },
  { name: 'Gold Scalloped Frame', category: 'Frames', image: 'images/collection/metal-photo-frame.webp' },
  { name: 'Black Marble Coasters, Set of 4', category: 'Tabletop', image: 'images/collection/black-marble-coasters.webp' },
  { name: 'Black Marble Tissue Box', category: 'Home', image: 'images/collection/black-marble-tissue-box.webp' },
  { name: 'Ludo Board', category: 'Games', image: 'images/collection/ludo-set.webp' },
]

// "Creative Curation" — styled/lifestyle scenes showing ev pieces in real spaces.
const PROJECT_ITEMS = [
  { name: 'Gold Leopard Box, styled', category: 'Living room', image: 'images/collection/gold-leopard-box.webp' },
  { name: 'Leopard Tray, table setting', category: 'Coffee table', image: 'images/collection/black-glass-leopard-tray.webp' },
  { name: 'Ivory Box, on the shelf', category: 'Study', image: 'images/collection/ivory-fab-box.webp' },
  { name: 'Gold Dog Box, in situ', category: 'Console', image: 'images/collection/gold-dog-box.webp' },
  { name: 'Tan Round Tray, styled', category: 'Vignette', image: 'images/collection/tan-round-tray.webp' },
  { name: 'Craft, up close', category: 'Detail', image: 'images/story/craft.webp' },
]

const CERTIFICATIONS = []
