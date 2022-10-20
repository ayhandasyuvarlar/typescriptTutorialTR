const restartName = (
  name: string,
  restart: number,
): Promise<string | number> => {
  return new Promise((resolve, rejects) => {
    if (resolve) {
      for (let i = 1; i < restart; i++) {
       console.log(name)
      }
    }
    else{ 
        rejects('hatali islem')
    }
  })
}

restartName('ayhan', 5)
.then(result=> console.log(result))
.catch((err)=>{
   console.log(err)
})

