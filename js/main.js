
function cambiarLetra(texto, posicion, reemplazo) {
    return texto.slice(0, posicion) + reemplazo + texto.slice(posicion + 1)
}
function sinTexto() {
    p.style.display = "none";
    boton_copiar.style.display = "none";
    colocarImagen();
    sin_entrada.style.display = "block";
    salida_texto.style.justifyContent = "center"
}

function colocarImagen() {
    if (window.innerWidth >= 768) {
        imagen_mun.style.display = "block";
    } else {
        imagen_mun.style.display = "none";
    }
}

function colocarTexto(texto) {
    imagen_mun.style.display = "none"
    sin_entrada.style.display = "none"
    salida_texto.style.justifyContent = "space-between"
    p.style.display = "block"
    p.classList.add('parrafo-salida');
    p.textContent = texto;
    salida_texto.appendChild(p);
    boton_copiar.style.display = "block"
    boton_copiar.innerText = 'Copiar'
    boton_copiar.classList.add('boton');
    boton_copiar.classList.add('boton-copiar');
    salida_texto.appendChild(boton_copiar);
}
const boton_encriptar = document.querySelector('.encriptar');
const boton_copiar = document.createElement('BUTTON');
const p = document.createElement('P');
const imagen_mun = document.querySelector('#imagen-mun')
const sin_entrada = document.querySelector('#sin-entrada')
const salida_texto = document.querySelector('#salida-texto')

boton_encriptar.addEventListener('click', e => {
    e.preventDefault();
    let textarea_entrada = document.querySelector('textarea').value;
    let fin = textarea_entrada.length;
    if (fin > 0) {
        for (let i = 0; i < fin; i++) {
            switch (textarea_entrada[i]) {
                case 'a':
                    textarea_entrada = cambiarLetra(textarea_entrada, i, 'ai')
                    i = i + 1;
                    break;
                case 'e':
                    textarea_entrada = cambiarLetra(textarea_entrada, i, 'enter')
                    i = i + 4;
                    break;
                case 'i':
                    textarea_entrada = cambiarLetra(textarea_entrada, i, 'imes')
                    i = i + 3;
                    break;
                case 'o':
                    textarea_entrada = cambiarLetra(textarea_entrada, i, 'ober')
                    i = i + 3;
                    break;
                case 'u':
                    textarea_entrada = cambiarLetra(textarea_entrada, i, 'ufat')
                    i = i + 3;
                    break;
            }
            fin = textarea_entrada.length

        }
        colocarTexto(textarea_entrada)
    } else {
        window.addEventListener('resize', () => {
            let textarea_entrada = document.querySelector('textarea').value;

            if (window.innerWidth >= 768 && textarea_entrada.length === 0) {
                imagen_mun.style.display = "block";
            } else {
                imagen_mun.style.display = "none";
            }

        })
        sinTexto();
    }
});


const boton_desencriptar = document.querySelector('.desencriptar')
boton_desencriptar.addEventListener('click', (e) => {
    e.preventDefault();
    let textarea_entrada = document.querySelector('textarea').value;
    if (textarea_entrada !== '') {
        textarea_entrada = textarea_entrada.replace(/ai/gi, 'a');
        textarea_entrada = textarea_entrada.replace(/enter/gi, 'e');
        textarea_entrada = textarea_entrada.replace(/imes/gi, 'i');
        textarea_entrada = textarea_entrada.replace(/ober/gi, 'o');
        textarea_entrada = textarea_entrada.replace(/ufat/gi, 'u');
        colocarTexto(textarea_entrada)
    } else {
        window.addEventListener('resize', () => {
            let textarea_entrada = document.querySelector('textarea').value;

            if (window.innerWidth >= 768 && textarea_entrada.length === 0) {
                imagen_mun.style.display = "block";
            } else {
                imagen_mun.style.display = "none";
            }
        })
        sinTexto();

    }
})

boton_copiar.addEventListener('click', (e) => {
    e.preventDefault();
    let p = document.querySelector('.parrafo-salida').innerText;
    navigator.clipboard.writeText(p)

})

window.addEventListener('resize', () => {
    colocarImagen()

})