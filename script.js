let roupas = [
    {
        nome: "kit01",
        foto1: "https://github.com/Caiorossi00/Modish/blob/main/assets/img01.jpg?raw=true",
        foto2: "https://github.com/Caiorossi00/Modish/blob/main/assets/img02.jpg?raw=true",
    },
    {
        nome: "kit02",
        foto1: "https://github.com/Caiorossi00/Modish/blob/main/assets/img03.jpg?raw=true",
        foto2: "https://github.com/Caiorossi00/Modish/blob/main/assets/img04.jpg?raw=true",
    },
    {
        nome: "kit03",
        foto1: "https://github.com/Caiorossi00/Modish/blob/main/assets/img05.jpg?raw=true",
        foto2: "https://github.com/Caiorossi00/Modish/blob/main/assets/img06.jpg?raw=true",

    },
    {
        nome: "kit04",
        foto1: "https://github.com/Caiorossi00/Modish/blob/main/assets/img07.jpg?raw=true",
        foto2: "https://github.com/Caiorossi00/Modish/blob/main/assets/img08.jpg?raw=true",

    },
];

document.addEventListener("DOMContentLoaded", function () {
    const kitsContainer = document.getElementById("kits-container");

    roupas.forEach(roupa => {
        const kitElement = document.createElement("div");
        kitElement.classList.add("container-kits", "kits");

        const bgElement = document.createElement("div");
        bgElement.classList.add(`${roupa.nome}-bg`);
        kitElement.appendChild(bgElement);

        const foto1Element = document.createElement("img");
        foto1Element.src = roupa.foto1;
        foto1Element.alt = roupa.nome;
        foto1Element.classList.add("foto1-style", `${roupa.nome}-foto1-style`);

        const foto2Element = document.createElement("img");
        foto2Element.src = roupa.foto2;
        foto2Element.alt = roupa.nome;
        foto2Element.classList.add("foto2-style", `${roupa.nome}-foto2-style`);

        // const nomeElement = document.createElement("h3");
        // nomeElement.textContent = roupa.nome;

        kitElement.appendChild(bgElement);
        // kitElement.appendChild(nomeElement);
        kitElement.appendChild(foto1Element);
        kitElement.appendChild(foto2Element);

        kitsContainer.appendChild(kitElement);
    });
});

// const kits = document.querySelectorAll(".kits-container");
// window.addEventListener("scroll", appearKits);

// function appearKits() {
//     const triggerBottom = window.innerHeight / 5 * 4;
    
//     kits.forEach(kit => {
//         const kitTop = kit.getBoundingClientRect().top;

//         if (kitTop < triggerBottom) {
//             kit.classList.add("kits-show");
//         } else {
//             kit.classList.remove("kits-show");
//         }
//     });
// }
