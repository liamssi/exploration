export const state = '10'


export const user = {
    username: 'Ismail',
    firstName: 'Belghit',
    lastName: 'Ismail'
}


export type category = {
    name: string,
    emoji: string, //yeah i knoe lol
    itemes?: {}[]
}

export const categories: category[] = [
    {
        name: 'Pizza',
        emoji: '🍕', //yeah i knoe lol
        itemes: []
    }, {
        name: 'Burger',
        emoji: '🍔', //yeah i knoe lol
        itemes: []
    }, {
        name: 'Hotdog',
        emoji: '🌭', //yeah i knoe lol
        itemes: []
    }, {
        name: 'Taco',
        emoji: '🌮', //yeah i knoe lol
        itemes: []
    }, {
        name: 'Snack',
        emoji: '🍿', //yeah i knoe lol
        itemes: []
    }, {
        name: 'Drink',
        emoji: '🍹',
        itemes: []
    }
] 