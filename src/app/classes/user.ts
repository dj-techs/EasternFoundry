export class User {
    id: string
    firstname: string
    lastname: string
    avatar: string
    jobtitle: string
    office: string
    employer: string
    email: string
    contactNumber: string
    city: string
    state: string
    zip: string
    lastupdated: string
    information_accuracy: number
    degree: [
        {
            type: string,
            concentration: string,
            school: string,
            graduationDate: string
        }
    ]
    certificate: [
        {
            degree: string,
            dateEarned: string
        }
    ]
    clearance: [
        {
            type: string,
            awarded: string,
            expiration: string
        }
    ]
    award: [string]
    capability: [
        {
            name: string,
            score: number
        }
    ]
    skill: [string]
    interest: string
    agencyexperience: {
        main: {
            title: string,
            data: any[]
        },
        office1: {
            title: string,
            data: any[]
        },
        office2: {
            title:string,
            data: any[]
        }
    }
    career: [
        {
            year: number,
            detail:
            {
                title: string,
                from: string,
                company: string,
                career: string
            }
        }
    ]
    strength: [
        {
            skill: string,
            score: number
        }
    ]
    availability: [
        {
            date: string
            available: boolean
        }
    ]
}
