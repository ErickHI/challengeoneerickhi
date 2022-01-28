//VARIABLES
    var botonEncriptar = document.querySelector("#btn-encriptar");
    var botonDesencriptar = document.querySelector("#btn-desencriptar");
    var cajaTexto = document.querySelector("#input-texto");
    var texto;
    var resultado = document.querySelector("#msg");
    var botonCopiar = document.querySelector("#btn-copy");

    var caracteresPermitidos = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z"," "];
//COPIAR AL PORTAPAPELES
function copiar() {
    resultado.select();
    document.execCommand("copy");
    //alert("Copiado");
}
botonCopiar.addEventListener("click",copiar);
//FUNCIONES DE MENSAJES
function caracterInvalido() {
    textoEncriptado = ["Caracter no permitido"];
    alert(textoEncriptado);
    i = textoArreglo.length;
}
function mensajeNoEncriptado() {
    textoEncriptado = ["El mensaje no está encriptado o tiene un error de encriptación"];
    alert(textoEncriptado);
    i = textoArreglo.length;
}

// ENCRIPTAR
    botonEncriptar.addEventListener("click",function (event){
        event.preventDefault();
        texto = cajaTexto.value;
        var textoArreglo = texto.split("");
        var textoEncriptado = [];
        for(var i = 0;i < textoArreglo.length;i++) {
            if(caracteresPermitidos.includes(textoArreglo[i])) {
                if(textoArreglo[i] == "a") {
                    textoEncriptado.push("ai");
                }else
                if(textoArreglo[i] == "e") {
                    textoEncriptado.push("enter");
                }else
                if(textoArreglo[i] == "i") {
                    textoEncriptado.push("imes");
                }else
                if(textoArreglo[i] == "o") {
                    textoEncriptado.push("ober");
                }else
                if(textoArreglo[i] == "u") {
                    textoEncriptado.push("ufat");
                }else
                textoEncriptado.push(textoArreglo[i]);
            }else {
                caracterInvalido();
            }
        }

        console.log(textoEncriptado.join(""));
        resultado.value = textoEncriptado.join("");

    });

// DESENCRIPTAR
    botonDesencriptar.addEventListener("click",function (event){
    event.preventDefault();
    texto = cajaTexto.value;
    var textoArreglo = texto.split("");
    var textoDesencriptado = [];
    for(var i = 0;i < textoArreglo.length;i++) {
        if(caracteresPermitidos.includes(textoArreglo[i])) {
            if(textoArreglo[i] == "a") {
                if(textoArreglo[i+1] == "i") {
                    textoDesencriptado.push("a");
                    i = i + 1;
                } else mensajeNoEncriptado();
            }else
            if(textoArreglo[i] == "e") {
                if(textoArreglo[i+1] == "n") {
                    if(textoArreglo[i+2] == "t") {
                        if(textoArreglo[i+3] == "e") {
                            if(textoArreglo[i+4] == "r") {
                                textoDesencriptado.push("e");
                                i = i + 4;
                            } else mensajeNoEncriptado();
                        } else mensajeNoEncriptado();
                    } else mensajeNoEncriptado();
                } else mensajeNoEncriptado();
            }else
            if(textoArreglo[i] == "i") {
                if(textoArreglo[i+1] == "m") {
                    if(textoArreglo[i+2] == "e") {
                        if(textoArreglo[i+3] == "s") {
                                textoDesencriptado.push("i");
                                i = i + 3;
                        } else mensajeNoEncriptado();
                    } else mensajeNoEncriptado();
                } else mensajeNoEncriptado();
            }else
            if(textoArreglo[i] == "o") {
                if(textoArreglo[i+1] == "b") {
                    if(textoArreglo[i+2] == "e") {
                        if(textoArreglo[i+3] == "r") {
                                textoDesencriptado.push("o");
                                i = i + 3;
                        } else mensajeNoEncriptado();
                    } else mensajeNoEncriptado();
                } else mensajeNoEncriptado();
            }else
            if(textoArreglo[i] == "u") {
                if(textoArreglo[i+1] == "f") {
                    if(textoArreglo[i+2] == "a") {
                        if(textoArreglo[i+3] == "t") {
                                textoDesencriptado.push("u");
                                i = i + 3;
                        } else mensajeNoEncriptado();
                    } else mensajeNoEncriptado();
                } else mensajeNoEncriptado();
            }else
            textoDesencriptado.push(textoArreglo[i]);
        }else {
            caracterInvalido();
        }
    }
    console.log(textoDesencriptado.join(""));
    resultado.value = textoDesencriptado.join("");

});
