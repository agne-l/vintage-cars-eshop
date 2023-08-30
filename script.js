
const carsWrapper = document.getElementById('all-cars-wrapper');

const buildCard = (car)=>{
    const carWrapper = document.createElement('a');
    carWrapper.setAttribute('class', 'car-wrapper');
    carWrapper.href = './car.html?carId=' + car.id;

    const carModelAndPriceWrapper = document.createElement('div');
    carModelAndPriceWrapper.setAttribute('class', 'car-model-and-price-wrapper')

    const model = document.createElement('h2');
    model.innerHTML = car.model;

    const price = document.createElement('h3');
    price.innerHTML = `$${car.price}`;

    const image = document.createElement('img');
    image.setAttribute('class', 'car-img');
    image.src = car.image;

    carModelAndPriceWrapper.append(model);
    carModelAndPriceWrapper.append(price);
    carWrapper.append(carModelAndPriceWrapper);
    carWrapper.append(image);

    return carWrapper;
};

const getAllCars = async()=>{
    const response = await fetch('https://64ec59abf9b2b70f2bfa23f8.mockapi.io/cars');
    const cars = await response.json();

    cars.forEach((car)=>{
        const card = buildCard(car);
        carsWrapper.appendChild(card);
    });
};

getAllCars();

const addCar = async()=>{
    const car = {
        model: "Opel Kapitan",
        price: 30000,
        description: "Opel Kapitan is a classic automobile manufactured from the 1930s through the 1970s. It was known for its stately appearance, comfortable interiors, and innovative features for its time. As a full-size luxury car, the Kapitan often featured advanced engineering, spacious cabins, and a variety of engine options. It holds historical significance in Opel's lineup and the automotive industry, making it a sought-after collector's item among vintage car enthusiasts.",
        location: "Stuttgart, Germany",
        image: "https://cdn.pixabay.com/photo/2021/12/07/10/59/car-6852996_1280.png",
    };

    const response = await fetch('https://64ec59abf9b2b70f2bfa23f8.mockapi.io/cars', {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(car)
    })
    const data = await response.json();

    console.log(data);
};

// addCar();
