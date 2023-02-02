function myAll(arr) {
    return new Promise((resolve,reject) => {
        let result = []
        next(0)
        function next(i) {
            let item = arr[i]
            if(!item){
                resolve(result)
                return
            }
            if(item instanceof Promise){
                item.then(res => {
                    result.push(res)
                    next(i+1)
                }).catch(err => {
                    reject(err)
                })
            }else{
                result.push(item)
                next(i+1)
            }
          }
    })
  }

  function myRace(arr) {
    return new Promise((resolve,reject) => {
        arr.forEach(item => {
            if(item instanceof Promise){
                item.then(res => {
                    resolve(res)
                }).catch(err => {
                    reject(err)
                })
            }else{
                resolve(item)
            }
        });
    })
    }