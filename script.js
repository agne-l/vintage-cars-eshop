
const carsWrapper = document.getElementById('all-cars-wrapper');


const getAllCars = async()=>{
    const response = await fetch('https://64ec59abf9b2b70f2bfa23f8.mockapi.io/cars');
    const cars = await response.json();
    console.log(cars);

    cars.forEach((car)=>{
        const carWrapper = document.createElement('div');
        carWrapper.setAttribute('class', 'car-wrapper');

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

        carsWrapper.appendChild(carWrapper);



    })

};

getAllCars();