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
```

#### 'as' nedir ?

#### as anahtar sözcüğü, TypeScript'te derleyiciye nesneyi, derleyicinin nesnenin çıkaracağı türden başka bir tür olarak düşünmesini söyleyen bir Tür Onaylamasıdır
