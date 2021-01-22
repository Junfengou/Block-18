import PriceInput from "../components/PriceInput"

export default {
    name: 'menu',
    title: 'Menu',
    type: 'document',
    icon: () => '🍔',
    fields: [
        {
            name: 'name',
            title: 'Menu title',
            type: 'string',
            description: 'Name of the item on the menu'
        },

        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'name',
              maxLength: 100,
            },
        },

        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true, // The purpose of hotspot is to let you sort of customize your photo by highlighting certain spot before uploading it to the database
            }
        },

        {
            name: 'description',
            title: 'Description',
            type: 'string',
            description: 'description of the burger'
        },

        {
            name: 'price',
            title: 'Price',
            type: 'number',
            description: 'Price of the burger in cents',
            validation: Rule => Rule.min(1000).max(50000),
            inputComponent: PriceInput,
        },


    ]
}