// Add or remove entries here and the relevant gallery re-renders automatically.
// image: null means no photo yet -> a placeholder tile is shown instead.
// Once the client sends real photography, just fill in the image path
// (e.g. "images/collection/brass-table-lamp.jpg") and drop the file in that folder.

const COLLECTION_ITEMS = [
  { name: 'Tan Brown Round Tray', category: 'Trays', image: 'images/collection/tan-round-tray.png' },
  { name: 'Choco Brown Rectangular Tray', category: 'Trays', image: 'images/collection/choco-rect-tray.png' },
  { name: 'Cappuccino Laminate Platter', category: 'Tabletop', image: 'images/collection/cappuccino-platter.png' },
  { name: 'Blue Laminate Platter', category: 'Tabletop', image: 'images/collection/blue-laminate-platter.png' },
  { name: 'Light Brown Fabric Tray', category: 'Trays', image: 'images/collection/lt-brown-fabric-tray.png' },
  { name: 'Black Marble Coasters, Set of 4', category: 'Tabletop', image: 'images/collection/black-marble-coasters.png' },
  { name: 'Black Marble Tissue Box', category: 'Home', image: 'images/collection/black-marble-tissue-box.png' },
  { name: 'Ludo Board', category: 'Games', image: 'images/collection/ludo-set.jpg' },
]

// "Creative Curation" — styled/lifestyle shots reused as a curated showcase.
const PROJECT_ITEMS = [
  { name: 'Tan Brown Round Tray, styled', image: 'images/collection/tan-round-tray.png' },
  { name: 'Choco Brown Tray, table setting', image: 'images/collection/choco-rect-tray.png' },
  { name: 'Cappuccino Platter, in situ', image: 'images/collection/cappuccino-platter.png' },
  { name: 'Black Marble Tissue Box, styled', image: 'images/collection/black-marble-tissue-box.png' },
]

// TODO: certification/export-mark logos from the client.
// Add entries like: { name: 'Export House Certification', logo: 'images/certs/export-house.png' }
const CERTIFICATIONS = []
