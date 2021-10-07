const books = [
    {titlu: "Singur", autor: "Sebastian Lazaroiu", citita: false, coperta: "https://cdn.dc5.ro/img-prod/726078731-0-240.jpeg"},
    {titlu: "Pacienta tacuta", autor: "Alex Michaelides", citita: true, coperta: "https://cdn.dc5.ro/img-prod/252045375-0-240.jpeg"},
    {titlu: "Olga", autor: "Bernhard Schlink", citita: true, coperta: "https://cdn.dc5.ro/img-prod/255932445-0-240.jpeg"},
    {titlu: "Barba Albastra", autor: "Kurt Vonegut", citita: false, coperta: "https://cdn.dc5.ro/img-prod/245422448-0-240.jpeg"},
    {titlu: "Hotul de carti", autor: "Markus Zusak", citita: true, coperta: "https://cdn.dc5.ro/img-prod/9786066096133-1854482-240.jpg"},
    {titlu: "Genul ala de fata", autor: "Tanaz Bhathna", citita: false, coperta: "https://cdn.dc5.ro/img-prod/223352364-0-240.jpeg"},
    {titlu: "Raman datoare", autor: "Sophie Kinsella", citita: false, coperta: "https://cdn.dc5.ro/img-prod/998304181-0-240.jpeg"},
]

const biblioteca = document.getElementsByClassName("biblioteca");
const titluBiblioteca = document.createElement('h1');
titluBiblioteca.textContent = 'Book List';
biblioteca[0].appendChild(titluBiblioteca);

const listaDeCarti = document.createElement('ul');
biblioteca[0].appendChild(listaDeCarti);

for ( let carti of books ) {
    const carteInLista = document.createElement('li');
    listaDeCarti.appendChild(carteInLista);
    carteInLista.innerHTML = `<img src="${carti.coperta}" alt="" class="copertaCarte"> Titlu: ${carti.titlu}, Autor: ${carti.autor} `;

    carti.citita ? carteInLista.style.color = "#659D32" : carteInLista.style.color = "#ff0000";
}