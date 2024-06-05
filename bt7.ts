function myForEach<T>(array: T[], callback: (element: T, index: number, array: T[]) => void): void {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

const numbers: number[] = [1, 2, 3, 4, 5, 6];

myForEach(numbers, (element, index, array) => {
    console.log(`Vị trí: ${index} | Phần tử: ${element} | Mảng: [${array.join(', ')}]`);
});
