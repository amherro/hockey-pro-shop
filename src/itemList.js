import hyperlite from './assets/hyperlite2.png'
import mach from './assets/mach_01.png'
import ft6 from './assets/jetspeedft6.png'
import goalieSkates from './assets/goalie-skates.png'

const Items = [
    {
        id: 1,
        title: 'Baure Vapor Hyperlite 2 Skate',
        description: 'The HYPERLITE 2 skate is built for pro-level and pro-aspiring players looking for maximum quickness and unrivaled agility.',
        price: 1099.99,
        img: hyperlite
    },
    {
        id: 2,
        title: 'Supreme Mach Skate',
        description: 'Engineered for the most powerful elite level athletes in the game, the new SUPREME MACH is designed to boost your stride length and maximize your top end speed.',
        price: 1059.99,
        img: mach
    },
    {
        id: 3,
        title: 'Jetspeed FT6 Pro Skates',
        description: 'A pair of skates',
        price: 1149.99,
        img: ft6
    },
    {
        id: 4,
        title: 'EFLEX 6.5 Goalie Skates',
        description: 'A pair of skates',
        price: 249.99,
        img: goalieSkates
    },
]

const getItemData = (id) => {
    let itemData = Items.find(item => item.id === id)
    itemData == undefined && console.log(`Product Not Found for ID: ${id}`)
    return itemData
}

export { Items, getItemData }