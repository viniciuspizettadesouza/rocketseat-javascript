// -------------------- 1º exercício --------------------
function checaIdade(idade) {
    return new Promise(function (response, error) {
        setTimeout(() => {
            if (idade >= 18) {
                response("Maior que 18")
            } else {
                error("Menor que 18")
            }
        }, 2000)
    })
}

checaIdade(20)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// -------------------- 2º exercício --------------------





// -------------------- 3º exercício --------------------

//axios.get('https://api.github.com/users/viniciuspzt')
//    .then(function (response) {
//        console.log(response)
//    })
//    .catch(function (error) {
//        console.warn(error)
//    })