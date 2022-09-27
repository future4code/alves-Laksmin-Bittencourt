//1:
export const toUpperCase1 = (str: string): string => {
    return str.toUpperCase()
} 

//2:
export const toSplit = (str: string): string[] => {
	return str.split("")
}

//3:
export const toNumber = (str: string): number => {
	return Number(str)
}

//4:
export const getLength = (str: string): number => {
	return str.length
}

//5:
export const randomNumberBetween1And10 = (): number => {
    const min = 1
    const max = 10
    const result = Math.floor(Math.random() * (max - min + 1)) + min

    return result
}

//6:
interface IUser {
    id: string,
    name: string,
    age: number
}

 export const users: IUser[] = [
    {
        id: "1",
        name: "Alice",
        age: 20
    },
    {
        id: "2",
        name: "Bob",
        age: 18
    },
    {
        id: "3",
        name: "Astrodev",
        age: 50
    }
]

//7:
export const calcAverage = (list: number[]): number => {
    let totalSum = 0
    
    for (let n of list) {
        totalSum += n
    }

    const average = Math.ceil(totalSum / list.length)

    return average
}

//8:
export const calcAge = (year: number): number => {
    const currentYear = new Date().getFullYear()
    const age = currentYear - year
    
    return age
}

//9:
export const formatDate = (initialDate: string): string => {
    const date = new Date(initialDate)
		const formattedDate = date.toLocaleDateString()

    return formattedDate 
}