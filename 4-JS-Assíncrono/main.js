var xhr = new XMLHttpRequest()

xhr.open('GET', 'https://api.github.com/users/viniciuspzt')
xhr.send(null)

xhr.onreadystatechange = function () {

    // 4 é a variavel de resposta da requisição

    if (xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText))
    }
}