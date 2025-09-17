import hyperlite from './assets/hyperlite2.png';
import mach from './assets/mach_01.png';
import ft6 from './assets/jetspeedft6.png';
import goalieSkates from './assets/goalie-skates.png';
import vapor3x from './assets/vapor-3x.png';
import nexus from './assets/nexus.png';
import ft6Stick from './assets/ft6-stick.png';
import hyperliteHelmet from './assets/hyperlite2helmet.png';
import reakt85 from './assets/Re-Akt85.png';
import tacks720 from './assets/tacks720.png';
import tacks910 from './assets/tacks910.png';

const Items = [
  {
    id: 'price_1PVL1LIvAmQ0UuMI9aVLrlgN',
    title: 'Baure Vapor Hyperlite 2 Skate',
    description:
      'The HYPERLITE 2 skate is built for pro-level and pro-aspiring players looking for maximum quickness and unrivaled agility.',
    price: 1099.99,
    img: hyperlite,
    isFeatured: true,
  },
  {
    id: 'price_1PVL2JIvAmQ0UuMIbQLtcfLY',
    title: 'Supreme Mach Skate',
    description:
      'Engineered for the most powerful elite level athletes in the game, the new SUPREME MACH is designed to boost your stride length and maximize your top end speed.',
    price: 1059.99,
    img: mach,
    isFeatured: false,
  },
  {
    id: 'price_1PVL36IvAmQ0UuMIVOIXbgUZ',
    title: 'Jetspeed FT6 Pro Skates',
    description:
      'The new and improved One-Piece Boot SPEED is all about performance and acceleration, now featuring Game Ready Fit for the ultimate anatomical connection from your foot to your skate, maximizing comfort and force transmission.',
    price: 1149.99,
    img: ft6,
    isFeatured: true,
  },
  {
    id: 'price_1PVL3sIvAmQ0UuMIsoHKizsg',
    title: 'EFLEX 6.5 Goalie Skates',
    description:
      'The EFLEX 6.5 goalie skate is lightweight and stiff, with an EVA foam footbed for ergonomic comfort and reliable support, ensuring show-stopping saves.',
    price: 249.99,
    img: goalieSkates,
    isFeatured: true,
  },
  {
    id: 'price_1PVL4XIvAmQ0UuMIIgmiKGn5',
    title: 'Vapor 3X Pro Stick',
    description:
      'Releases the puck 5% quicker, with reduced weight and improved recoil speed.',
    price: 219.99,
    img: vapor3x,
    isFeatured: false,
  },
  {
    id: 'price_1PVL5SIvAmQ0UuMI1XiJEBbA',
    title: 'Nexus Sync Stick',
    description: 'Better connection. Better control. Lightest Nexus ever.',
    price: 339.99,
    img: nexus,
    isFeatured: true,
  },
  {
    id: 'price_1PVL64IvAmQ0UuMI3HnTdncT',
    title: 'Jetspeed FT6 Pro Stick',
    description:
      "The JETSPEED FT6 PRO hockey stick introduces a brand-new shaft technology, Nanolite Shield, composed of thicker carbon fiber layers protecting the stick's ultra-light core.",
    price: 349.99,
    img: ft6Stick,
    isFeatured: false,
  },
  {
    id: 'price_1PVL77IvAmQ0UuMISfdJE5bU',
    title: 'Ribcor Trigger 7 Pro Stick',
    description:
      'Nanolite carbon layering technology gives it balance enabling you to unleash accurate shots faster than ever before.',
    price: 349.99,
    img: ft6Stick,
    isFeatured: false,
  },
  {
    id: 'price_1PVL7hIvAmQ0UuMIcboDWym6',
    title: 'Bauer Hyperlite 2 Helmet',
    description:
      'Engineered for the elite and pro-inspired player who doesn’t want to compromise on comfort, protection, or performance, the HYPERLITE 2 HELMET offers an optimum level of performance in a state-of-the-art package.',
    price: 399.99,
    img: hyperliteHelmet,
    isFeatured: true,
  },
  {
    id: 'price_1PVL8kIvAmQ0UuMIl62RANQh',
    title: 'Bauer RE-AKT 85-Helmet',
    description:
      '3D wrap Aerolite base creates a round base around the player’s head, reducing the potential for pressure points. Additionally, the 3D wrap Aerolite base helps mitigate high-energy impacts.',
    price: 139.99,
    img: reakt85,
    isFeatured: false,
  },
  {
    id: 'price_1PVL9HIvAmQ0UuMIbFHNRSft',
    title: 'Tacks 720 Combo Helmet',
    description:
      'Drawing from the unprecedented success of our SUPER TACKS X helmet, the TACKS 720 hockey helmet was designed to keep your noggin cool, comfortable and protected during every shift.',
    price: 239.99,
    img: tacks720,
    isFeatured: false,
  },
  {
    id: 'price_1PVL9hIvAmQ0UuMIC6eXokEr',
    title: 'Tacks 910 Helmet',
    description:
      'Equipped with Fluid Inside™ pods and our rate-sensitive D3O® Smart Material, this bucket is designed to distribute impact energy evenly in complete comfort.',
    price: 239.99,
    img: tacks910,
    isFeatured: true,
  },
];

const getItemData = (id) => {
  let itemData = Items.find((item) => item.id === id);
  itemData == undefined && console.log(`Product Not Found for ID: ${id}`);
  return itemData;
};

export { Items, getItemData };
