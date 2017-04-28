export class User {
    id: string
    firstname: string
    lastname: string
    jobtitle: string
    employer: string
    email: string
    contactNumber: string
    city: string
    state: string
    zip: string
    avatar: string
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
            dataEarned: string
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
    interest: string
    agencyexperience: [
        {
            title: string
            score: number
        }
    ]
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
