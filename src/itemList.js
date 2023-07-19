const Items = [
    {
        id: 1,
        title: 'Skates1',
        description: 'A pair of skates',
        price: 99.99,
        img: ''
    },
    {
        id: 2,
        title: 'Skates2',
        description: 'A pair of skates',
        price: 92.99,
        img: ''
    },
    {
        id: 3,
        title: 'Skates3',
        description: 'A pair of skates',
        price: 93.99,
        img: ''
    },
    {
        id: 4,
        title: 'Skates4',
        description: 'A pair of skates',
        price: 94.99,
        img: ''
    },
]

const getItemData = (id) => {
    let itemData = Items.find(item => item.id === id)
    itemData == undefined && console.log(`Product Not Found for ID: ${id}`)
    return itemData
}

export { Items, getItemData }