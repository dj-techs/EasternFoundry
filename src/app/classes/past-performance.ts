export class PastPerformance {
    id: string
    title: string
    client: string
    topic: string
    startdate: string
    enddate: string
    cleard: boolean
    location: string
    FTE: string
    value: string
    rating: string
    description: string
    avatar: string
    employees: [
        {
            title: string,
            stillwith: boolean
        }
    ]
    synopsis: string
    technical: string
    management: string
    other: string
}
