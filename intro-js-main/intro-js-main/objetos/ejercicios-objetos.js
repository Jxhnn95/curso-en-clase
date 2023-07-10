


let usuarios = [
    {
        username: "Lian",
        password: "xxxxxxxx",
        email: "xxx@xxx.com",
    },
    {
        username: "Cristel",
        password: "yyyyyyyy",
        email: "yyy@yyy.com",
    }, {
        username: "Jean",
        password: "zzzzzzzz",
        email: "zzz@zzz.com",
    }
];
for (let i = 0; i < usuarios.legth; i++) {
    console.log({ usuarios })
    console.log(usuario.email)

};

let masUsuarios = [{
    username: "sofyn",
    password: "zzzzzzzz",
    email: "sss@sss.com",
}, {
    username: "Darell",
    password: "zzzzzzzz",
    email: "ddd@ddd.com",
}];

imprimirUsuarios2({ usuarios });

listaUsuarios = [{ usuarios }, { masUsuarios }]

function imprimirUsuarios2(listaUsuarios) {
    for (let i = 0; i < usuarios.legth; i++) {
        let usuario = usuarios[i];
        let contenedorusuarios = document.querySelector("#contenedorUsuaeios")
        contenedorusuarios.innetHTML += `<p>${usuario.name}</p>`;
        document.write(usuario.username, usuario.email, usuario.password)


    }
}

imprimirUsuario3({ masUsuarios });
function imprimirusuarios3(listaUsuarios) {
    for (let i = 0; i < usuarios.legth; i++) {
        let usuario = usuarios[i];
        let contenedorusuarios = document.querySelector("#contenedorUsuaeios")
        contenedorusuarios.innetHTML += `<p>${usuario.name}</p>`;
        document.write(usuario.username, usuario.email, usuario.password)
    }

}



//ejercicio 5
function login(email, pass) {
    let usuarioCorrecto = null
    for (let i = 0; i < usuario.legth; i++) {
        let usuario = usuarios[i];
        let password = password[i];
        if (usuario.email === email && usuario.password === pass) {
            usuarioCorrecto = usuario;

        }
    }
    return usuarioCorrecto;
}


let Lian = login("xxx@xxx.com", "xxxxxxxx");
let Cristel = login("yyy@yyy.com", "yyyyyyyy");
let Jean = login("zzz@zzz.com", "zzzzzzzz");

console.log(Lian);
console.log(Cristel);
console.log(Jean);


let formularioLogin = document.querySelector("#loginForm");
formularioLogin.addEventListener("submit", function(event){
     event.preventDefault()});

let inputEmail = docuemnt.querySelector("#email");
let email = inputEmail.value;
console.log({ email });
let inputPass = document.querySelector("#pass");
let pass = inputPass.value;
let usuarioLogeado= login(email,pass);
let feedbacjContainer= document.querySelector("#feedback");

if(usuarioLogeado){
    console.log("Login COrrect");

}else(usuarioLogeado!){
    
    console.error(c"Login Incorrect");
}
co)
    );
}

/*let loginData= {email,pass};
console.log{loginData};
});*/
