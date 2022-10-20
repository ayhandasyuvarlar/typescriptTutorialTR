# TypeScript Öğretici

![img](https://i.ytimg.com/vi/jex--OwVycc/maxresdefault.jpg)

## Kurs Özeti

### Bu öğreticide kısaca bahsetmek gerekirse öğreniceğimiz ve anlatıcağım konular

- Temel Tipler & Tip Tanımlama
- Tip Destekli Fonksiyon

### Temel Tipler - Tip Tanımlama

```ts
let b = 'hello' as 'hi' | 'how are you'

const form = {
  label: 'label',
  input: 'input' as 'input' | 'hi' | 'how are you',
}

form.input = 'how are you'

const input = document.querySelector('#data') as HTMLInputElement

const array: string[] = ['hello']
const arrayTwo = ['5', 10, true] as (string | number | boolean)[]
const arrayThree = [] as Array<string | number | object>
//  as Array<string | number | object> = generics

const personArray: [string, string, number] = [
  'Ayhan',
  'Frontend Web Developer',
  25,
]
const [name, job, age] = personArray
```

#### Typescript 'as' nedir ?

#### as anahtar sözcüğü, TypeScript'te derleyiciye nesneyi, derleyicinin nesnenin çıkaracağı türden başka bir tür olarak düşünmesini söyleyen bir Tür Onaylamasıdır

#### Typescript 'generics' nedir ?

#### TypeScript Generics, yeniden kullanılabilir bileşenler oluşturmanın bir yolunu sağlayan bir araçtır . Tek bir veri türü yerine çeşitli veri türleri ile çalışabilen bir bileşen oluşturur. Kullanıcıların bu bileşenleri tüketmelerine ve kendi türlerini kullanmalarına olanak tanır.s

### Tip Destekli Fonksiyon

```ts
// 1. Örnek
function LogPerson(name: string, lastname: string, age: number) {
  console.log({ name, lastname, age })
}

LogPerson('ayhan', 'dasyuvarlar', 25)

// 2. Örnek

function personData(parameter: {
  firstName: string
  lastname: string
  age: number
}): Promise<string | number> {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve(parameter.lastname)
    } else {
      reject('hata olustu')
    }
  })
}
personData({
  firstName: 'ayhan',
  lastname: 'dasyuvarlar',
  age: 20,
})
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log(err)
  })
```

#### Promise yapısını bilmeyenler için [bu linkden öğrenebilirsiniz](https://medium.com/codefiction/javascriptte-promise-kullan%C4%B1m%C4%B1-ccca1123989a)

#### Promise yapısı için kısaca şöyle anlatmak gerekirse callback fonksiyonları yerine çıkarılmış bir javascript söz dizimidir .

- Promise’leri new öneki ile tanımlıyoruz.
- Başarılı (resolve) ve başarısız (reject) durumlarda çağıralacak iki fonksiyon ile birlikte oluşturuyoruz. (Sıralamayı değiştirmemek kaydıyla bu iki fonksiyona farklı isimler de verebilirsiniz ancak genelde bu isimler tercih edilmektedir.)
- Promise’leri bir değişkene atayabiliriz. (Örnekteki sozVerdik değişkeni gibi.)
- Promise beklenilen işlemi gerçekleştirdikten sonra yapılacak adımlar için .then( ) fonksiyonu çağırılır. İçerisindeki fonksiyonun parametresi resolve() ile gönderilen parametredir.
- Eğer istek dahilinde reject() çağırıldığında veya öngörülemeyen bir hata sonucu promise başarısız olduğunda .then() fonksiyonu es geçilerek, .catch() içerisindeki fonksiyon çağırılır ve hatalı durumda yapılacak adımlar izlenir.

#### Promise örnek

```js
const Greeter = new Promise(function (resolve, reject) {
  if (true) {
    resolve('Hoşgeldiniz')
  } else {
    reject('Bir sıkıntı var...')
  }
})d

sozVerdik
  .then((result) => {
    console.log(result) // 'Hoşgeldiniz!' yazısını basar
  })
  .catch((err) => {
    console.log(err) // 'Bir sıkıntı var...' yazısını basar
  })

// örnek 2

const restartName = (name, restart) => {
  return new Promise((resolve, rejects) => {
    if (resolve) {
        for (let i = 0; i < restart; i++) {
          console.log(name)
      }
    } else {
      rejects("hatali islem");
    }
  });
};
restartName('ayhan', 5)
  .then((result) => console.log(result))
  .catch((err) => {
    console.log(err);
  });
```
