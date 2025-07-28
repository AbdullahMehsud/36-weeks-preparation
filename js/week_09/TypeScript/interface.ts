interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googlId?: string,
    startTrail: () => string,
    startTrail2(): string,
    getCoupon(couponname: string, value: number): number
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role?: 'admin' | 'user' | 'editer'
}

const abdullah: User = {dbId: 123, email: 'abdullah@gmail.com', userId: 122, 
    startTrail: () => {
        return '1234'
    },
    getCoupon(name: 'azadi', off: 10) {
        return 10
    },
    startTrail2: () =>  ('hey'),
    githubToken: 'token23j232t232e'
}
export {}