const arrayOfNumber: Array<number> = [1, 2, 3, 4, 5];
const arrayOfStrings: Array<string> = ["hello", "Bobi"];

// Данный параметр T[] будет подстраивайтся под те хначения которые мы передаем
function reverse<T>(array: T[]): T[] {
  return array.reverse();
}

reverse(arrayOfNumber); //работате корректно
reverse(arrayOfStrings); //работате корректно
