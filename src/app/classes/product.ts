export class Product {
    id: string
    name: string
    feature: [
        {
            name: string,
            score: number
        }        
    ]
    description: string
    moreinfolink: string
    viewdemolink: string
    customization: boolean
    training: boolean
    maintenance: boolean
    customers: {
        defense: [
            {
                avatar: string,
                name: string
            }
        ],
        civilian: [
            {
                avatar: string,
                name: string
            }
        ],
        commercial: [
            {
                avatar: string,
                name: string
            }
        ]
    }
}
