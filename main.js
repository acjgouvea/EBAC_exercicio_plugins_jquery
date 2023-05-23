$(document).ready(function () {
    $(".carousel-imagens").slick({
        autoplay: true,
    });
    $(".menu-hamburguer").click(function () {
        $("nav").slideToggle();
    });

    $("#telefone").mask("(00) 0000-0000");

    $("form").validate({
        rules: {
            nome: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            telefone: {
                required: true,
            },
            mensagem: {
                required: true,
            },
            veiculoInteresse: {
                required: false,
            },
        },
        messages: {
            nome: "Por favor, insira o seu nome",
        },
        messages: {
            cpf: "CPF é obrigatorio",
        },
        submitHandler: function (form) {
            console.log(form);
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        },
    });

    });