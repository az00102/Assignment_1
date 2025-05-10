function formatString(input: string, toUpper: boolean = true): string {
    if (!toUpper) {
        return input = input.toLowerCase();
    }
    else {
        return input = input.toUpperCase();
    }
}

// console.log(formatString('Hello', true));

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    let filteredItem = items.filter((item) => item.rating >= 4)

    return filteredItem;
}

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];

// console.log(filterByRating(books)); 


function concatenateArrays<T>(...arrays: T[][]): T[] {
    let singleArray: T[] = [];

    for (let arr of arrays) {
        // console.log(arr)
        singleArray.push(...arr);
    }

    return singleArray;
}

// console.log(concatenateArrays(["a", "b"], ["c"]));
// console.log(concatenateArrays([1, 2], [3, 4], [5]));


class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }

    public getInfo() {
        console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
}

class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }

    public getModel() {
        console.log(`Model: ${this.model}`)
    }
}


// const myCar = new Car("Toyota", 2020, "Corolla");
// myCar.getInfo();   // Output: "Make: Toyota, Year: 2020"
// myCar.getModel();  // Output: "Model: Corolla"

function processValue(value: string | number): number {
    if (typeof (value) == 'string') {
        return value.length;
    }
    else {
        return value * 2
    }
}

// console.log(processValue("hello")); // Output: 5
// console.log(processValue(10));      // Output: 20

interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    let highestPrice = 0;
    let index = 0;

    for (let i = 0; i < products.length; i++) {
        if (products[i].price > highestPrice) {
            highestPrice = products[i].price;
            index = i;
        }
    }

    return products[index];
}

const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];

// console.log(getMostExpensiveProduct(products));  
// // Output: { name: "Bag", price: 50 }


enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day == 6) {
        return 'Weekend';
    }
    else {
        return 'Weekday';
    }
}

// console.log(getDayType(Day.Monday));   // Output: "Weekday"
// console.log(getDayType(Day.Sunday));   // Output: "Weekend"


async function squareAsync(n: number): Promise<number> {
    if (n >= 0) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(n)
            }, 1000)
        })
    } else {
        return Promise.reject('Negative number not allowed')
    }
}


// squareAsync(4).then(console.log);        // Output after 1s: 16
// squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed



