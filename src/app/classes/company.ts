export class Company {
    id: string
    name: string
    email: string
    contactnumber: string
    address: string
    lastupdated: string
    information_accuracy: number
    leadership: [
        {userid: string}
    ]
    product: [
        {productid: string}
    ]
    service: [
        {serviceid: string}
    ]
    pastperformance: [
        {pastperformanceid: string}
    ]
    agencyexperience: [
        {title: string, score: number}
    ]
    vehicles: [
        {
            type: string
            quantity: number
        }
    ]
    schedule: [
        {
            date: string,
            content: string
        }
    ]
}
