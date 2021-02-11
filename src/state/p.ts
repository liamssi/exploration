export const state = '10'


export const user = {
    username: 'Ismail',
    firstName: 'Belghit',
    lastName: 'Ismail'
}


export type category = {
    name: string,
    emoji: string, //yeah i knoe lol
    itemes?: food[]
}
export type food = {
    name: string,
    imgUrl: string,
    price: number,
    rating: number
    tags?: string[]

}

export const categories: category[] = [
    {
        name: 'Pizza',
        emoji: '🍕', //yeah i knoe lol
        itemes: [

            {
                name: "Mushroom Pizza",
                imgUrl: "./imgs/pi1.png",
                price: 7.49,
                rating: 5

            },
            {
                name: "Italian Pizza",
                imgUrl: "",
                price: 6.59,
                rating: 4
            },

            {
                name: "Sausage Pizza",
                imgUrl: "",
                price: 5.49,
                rating: 5
            },

        ]
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