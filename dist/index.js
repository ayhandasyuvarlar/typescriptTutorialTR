function personData(parameter) {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve(parameter);
        }
        else {
            reject('hata olustu');
        }
    });
}
personData({
    firstName: 'ayhan',
    lastname: 'dasyuvarlar',
    age: 20,
})
    .then((result) => {
    console.log(result);
})
    .catch((err) => {
    console.log(err);
});
