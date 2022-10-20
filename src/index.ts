type Colors = 'blue' | 'green' | 'red'

type CustomColors = 'black' | 'yellow' | 'darkred'

const myColor: Colors = 'blue'

const colorArray: (Colors | CustomColors)[] = [
  'blue',
  'green',
  'red',
  'yellow',
  'black',
  'darkred',
]

type AllColors = Colors | CustomColors

const allArrayColors: AllColors[] = ['black', 'blue', 'green', 'yellow']

type Person = {
  isim: string
  soyisim: string
  yas: number
}

type PersonDetails = {
  cinsi: string
  tür: string
}

type AllObjects = Person & PersonDetails

const AllObject: AllObjects[] = [
  {
    isim: 'Ayhan',
    cinsi: 'Erkek',
    tür: 'Türk',
    soyisim: 'Dasyuvarlar',
    yas: 21,
  },
]

type myMap = Map<string, Person>

const myMaps: myMap = new Map()

myMaps.set('Person ', {
  isim: 'ayhan',
  soyisim: 'dasyuvarlar',
  yas: 21,
})
