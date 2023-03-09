const promise1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('A is Resolved')
            }, 5000)
        })

        const promise2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('B is Resolved')
            }, 3000)
        })

        const promise3 = new Promise((resolve, reject) => {
            setTimeout(() => {
                // resolve('C is Resolved')
                reject('C is Rejected')
            }, 1000)
        })

        const res = Promise.race([promise1, promise2, promise3]);

        res
        .then(data => console.log(data))
        .catch(error => console.log(error));
