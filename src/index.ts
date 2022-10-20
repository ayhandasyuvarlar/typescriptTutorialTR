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
