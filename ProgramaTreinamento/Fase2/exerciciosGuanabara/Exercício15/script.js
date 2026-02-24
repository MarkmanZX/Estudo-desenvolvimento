function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        genero = "Homem"
            if (idade >=0 && idade < 10) {

                //Criança
                img.setAttribute('src', 'img/menino.png')
                img.setAttribute('width', '350px')
                img.setAttribute('height', '350px')

            } else if (idade < 21) {

                //Jovem
                img.setAttribute('src', 'img/homem.png')
                img.setAttribute('width', '350px')
                img.setAttribute('height', '350px')

            } else if (idade < 50) {

                //Adulto
                img.setAttribute('src', 'img/homem.png')
                img.setAttribute('width', '350px')
                img.setAttribute('height', '350px')

            } else {

                //Idoso
                img.setAttribute('src', 'img/idoso.png')
                img.setAttribute('width', '350px')
                img.setAttribute('height', '350px')

            }
    } else if (fsex[1].checked) {

        genero = "Mulher"

        if (idade >=0 && idade < 10) {

                //Criança
                img.setAttribute('src', 'img/menina.png')
                img.setAttribute('width', '350px')
                img.setAttribute('height', '350px')

            } else if (idade < 21) {

                //Jovem
                img.setAttribute('src', 'img/mulher.png')
                img.setAttribute('width', '350px')
                img.setAttribute('height', '350px')

            } else if (idade < 50) {

                //Adulto
                img.setAttribute('src', 'img/mulher.png')
                img.setAttribute('width', '350px')
                img.setAttribute('height', '350px')

            } else {

                //Idoso
                img.setAttribute('src', 'img/idosa.png')
                img.setAttribute('width', '350px')
                img.setAttribute('height', '350px')

            }

    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
}