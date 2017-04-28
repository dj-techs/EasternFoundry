export class Product {
    id: string
    feature: [string]
    description: string
    moreinfolink: string
    viewdemolink: string
    customization: boolean
    maintenance: boolean
    customers: {
        defense: [
            {
                img: string,
                name: string
            }
        ],
        civilian: [
            {
                img: string,
                name: string
            }
        ],
        commercial: [
            {
                img: string,
                name: string
            }
        ]
    }

}
