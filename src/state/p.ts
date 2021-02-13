export const state = '10'


export const user = {
    username: 'Ismail',
    firstName: 'Belghit',
    lastName: 'Ismail'
}


export type category = {
    name: string,
    emoji: string, //yeah i knoe lol
    menu?: food[]
}
export type food = {
    name: string,
    imgUrl: string,
    price: number,
    rating: number
    tag?: string

}

export const categories: category[] = [
    {
        name: 'Pizza',
        emoji: '🍕', //yeah i knoe lol
        menu: [

            {
                name: "Mushroom Pizza",
                imgUrl: "./imgs/p1.png",
                price: 7.49,
                rating: 5,
                tag:'fire'



            },
            {
                name: "Italian Pizza",
                imgUrl: "./imgs/p2.png",
                price: 6.59,
                rating: 4,
                tag:'fav'
            },

            {
                name: "Sausage Pizza",
                imgUrl: "./imgs/p1.png",
                price: 5.49,
                rating: 5,
                tag:'popular'
            },

        ]
    }, {
        name: 'Burger',
        emoji: '🍔', //yeah i knoe lol
        menu: []
    }, {
        name: 'Hotdog',
        emoji: '🌭', //yeah i knoe lol
        menu: []
    }, {
        name: 'Taco',
        emoji: '🌮', //yeah i knoe lol
        menu: []
    }, {
        name: 'Snack',
        emoji: '🍿', //yeah i knoe lol
        menu: []
    }, {
        name: 'Drink',
        emoji: '🍹',
        menu: []
    }
] 