# TypeScript Öğretici

![img](https://i.ytimg.com/vi/jex--OwVycc/maxresdefault.jpg)

## Kurs Özeti

### Bu öğreticide kısaca bahsetmek gerekirse öğreniceğimiz ve anlatıcağım konular

- Temel Tipler & Tip Tanımlama
- Tip Destekli Fonksiyon

##

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
