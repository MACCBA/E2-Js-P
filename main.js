const infoPizza = document.querySelector('.info-pizza')
const input = document.querySelector('.seleccionar');
const seleccionarBtn = document.querySelector('.seleccionar-btn');
const errorMessage = document.querySelector('.error-message')
const Pizzas = [
    {
        id: 1,
        nombre: 'Mozzarella',
        precio: 590,
        Ingredientes: ['Queso', 'Salsa', ],
      },
      {
        id: 2,
        nombre: 'Especial',
        precio: 800,
        Ingredientes: ['Queso', 'Salsa', 'Jamon'],
      },
      {
        id: 3,
        nombre: 'Napolitana',
        precio:  1000,
        Ingredientes: ['Queso', 'Salsa', 'Jamon', 'Tomate'],
      },
      {
        id: 4,
        nombre: 'Fugazza',
        precio: 1100,
        Ingredientes: ['Queso', 'Cebolla'],
      },
      {
        id: 5,
        nombre: 'de Champignones',
        precio: 1200,
        Ingredientes: ['Queso', 'Champignones', 'Jamon' ],
      },
      {
        id: 6,
        nombre: 'de Cuatro Quesos',
        precio: 1200,
        Ingredientes: ['Queso Azul', 'Parmesano', 'Cremoso', 'Mozzarella'],
      },
];

let newPizzas = []

const pizzaId = () => {

    const filterId = input.value;

    if (!filterId.length) {
        errorMessage.style.visibility = 'visible';
        errorMessage.innerHTML = createHtmlErrorNoneText();
        newPizzas = [];
        input.value = '';
        renderPizza(nuevoPizzas);
        return;

    } else if (filterId < 1 || filterId > 6) {
        errorMessage.style.visibility = 'visible';
        errorMessage.innerHTML = createHtmlErrorOptions()
        newPizzas = [];
        input.value = '';
        renderPizza(nuevoPizzas);
        return;

    } else if (
        newPizzas = Pizzas.filter(pizza => pizza.id === parseInt(filterId))
    ) {
        errorMessage.style.visibility = 'hidden';
    }

    renderPizza(newPizzas);

}


const createHtmlPizza = pizzas => {
    return `<h2 class="title"><p>Variedad: </p>${pizzas.nombre}</h2>
      <h4 class="precio"><p>Precio: </p>$${pizzas.precio}</h4>`
}

const createHtmlErrorNoneText = () => {
    return `<h4 class="message">Por favor, elegi una opcion del 1 al 6 !</h4>`
}

const createHtmlErrorOptions = () => {
    return `<h4 class="message">Opciones disponibles del 1 al 6 !</h4>`
}

const renderPizza = pizza => infoPizza.innerHTML = pizza.map(pizzita => createHtmlPizza(pizzita))



const init = () => {
    seleccionarBtn.addEventListener('click', pizzaId)
    errorMessage.style.visibility = 'hidden';

}


init();
