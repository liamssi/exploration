import { outro_and_destroy_block } from 'svelte/internal'
import { writable, readable } from 'svelte/store'

export const user: User = {
    username: 'Jeremy',
    fisrtName: 'Jeremy',
    lastNam: 'Jeremy',
    type: 'User', //
    avatarUrl: "./imgs/avatar.png"
}

export const notifications = writable([{
    title: 'Title1',
    content: 'content '
}, {
    title: 'Title2',
    content: 'content '
}, {
    title: 'Title3',
    content: 'content '
}])

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
                tag: 'fire'



            },
            {
                name: "Italian Pizza",
                imgUrl: "./imgs/p2.png",
                price: 6.59,
                rating: 4,
                tag: 'fav'
            },

            {
                name: "Sausage Pizza",
                imgUrl: "./imgs/p1.png",
                price: 5.49,
                rating: 5,
                tag: 'popular'
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


export type User = {
    username: string
    fisrtName: string
    lastNam: string
    type: string //
    avatarUrl: string
}

export type Order = {
    item: food,
    quantity: number
}
const ords: Order[] = [{
    item: {
        name: "Mushroom Pizza",
        imgUrl: "./imgs/p1.png",
        price: 7.49,
        rating: 5,
        tag: 'fire'



    },
    quantity: 2
}, {
    item: {
        name: "Italian Pizza",
        imgUrl: "./imgs/p2.png",
        price: 6.59,
        rating: 4,
        tag: 'fav'
    },
    quantity: 1
}, {
    item: {
        name: "Sausage Pizza",
        imgUrl: "./imgs/p1.png",
        price: 5.49,
        rating: 5,
        tag: 'popular'
    },
    quantity: 1
}, {
    item: {
        name: "Mushroom Pizza",
        imgUrl: "./imgs/p1.png",
        price: 7.49,
        rating: 5,
        tag: 'fire'



    },
    quantity: 2
}, {
    item: {
        name: "Italian Pizza",
        imgUrl: "./imgs/p2.png",
        price: 6.59,
        rating: 4,
        tag: 'fav'
    },
    quantity: 1
}, {
    item: {
        name: "Sausage Pizza",
        imgUrl: "./imgs/p1.png",
        price: 5.49,
        rating: 5,
        tag: 'popular'
    },
    quantity: 1
}, {
    item: {
        name: "Mushroom Pizza",
        imgUrl: "./imgs/p1.png",
        price: 7.49,
        rating: 5,
        tag: 'fire'



    },
    quantity: 2
}, {
    item: {
        name: "Italian Pizza",
        imgUrl: "./imgs/p2.png",
        price: 6.59,
        rating: 4,
        tag: 'fav'
    },
    quantity: 1
}, {
    item: {
        name: "Sausage Pizza",
        imgUrl: "./imgs/p1.png",
        price: 5.49,
        rating: 5,
        tag: 'popular'
    },
    quantity: 1
}
]

export const orders = writable(ords)