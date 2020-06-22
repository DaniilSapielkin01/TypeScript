interface Person {
  name: string;
  age: number;
}
type PersonKeys = keyof Person; // "name" | "age"

//только те параметры кот-е указаны в type  )
let myKey: PersonKeys = "name";
myKey = "age";

//TYPE
type User = {
  _id: number;
  name: string;
  email: string;
  createdAt: Date;
};

type UserKeysNoMeta1 = Exclude<keyof User, "_id" | "createdAt">; // мы исключили в < > то то нам нуне нужно в этом типе , и теперь там прису-ет все остальное("name" | "email")

type UserKeysNoMeta2 = Pick<User, "name" | "email">; // тут указываем в < > те поля которые нужно забрать

let user1: UserKeysNoMeta1 = "name";
user1 = "_id"; //ошибка потому что _id нету в type UserKeysNoMeta1
