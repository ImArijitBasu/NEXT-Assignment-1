function formatValue(
  value: string | number | boolean
): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return !value;
  }
}

function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
}


class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`
  }
}


type RatedItem = {
  title: string;
  rating: number;
};

function filterByRating(items: RatedItem[]): RatedItem[] {
  return items.filter((item) => item.rating >= 4);
}


interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function filterActiveUsers(users: User[]): User[] {
  return users.filter((user) => user.isActive === true);
}
//

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): string {
  const availability = book.isAvailable ? "Yes" : "No";

  return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`;
}



function getUniqueValues(
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] {
  const result: (number | string)[] = [];

  function addUnique(arr: (number | string)[]) {
    for (let i = 0; i < arr.length; i++) {
      let exist = false;
      for (let j = 0; j < result.length; j++) {
        if (arr[i] === result[j]) {
          exist = true;
          break;
        }
      }
      if (!exist) {
        result[result.length] = arr[i];
      }
    }
  }
  addUnique(arr1);
  addUnique(arr2);

  return result;
}



interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) return 0;

  return products
    .map((product) => {
      let total = product.price * product.quantity;
      if (product.discount) {
        total = total - (total * product.discount) / 100;
      }
      return total;
    })
    .reduce((acc, curr) => acc + curr, 0);
}