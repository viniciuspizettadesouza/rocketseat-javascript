var minhaPromise = function () {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', 'https://api.github.com/users/viniciuspzt')
        xhr.send(null)

        xhr.onreadystatechange = function () {

            // 4 é a variavel de resposta da requisição

            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject('Erro na requisição')
                }
            }
        }
    })
}

minhaPromise()
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.warn(error)
    })