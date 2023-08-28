const carId = localStorage.getItem('carId');
console.log(carId);

const addCarToScreen = (car)=>{
    const image = document.getElementById('car-image');
    image.src = car.image;

    const model = document.getElementById('car-model');
    model.innerHTML = car.model;

    const description = document.getElementById('car-description');
    description.innerHTML = car.description;

    const price = document.getElementById('car-price');
    price.innerHTML = `$${car.price}`;

    const location = document.getElementById('car-selling-location');
    location.innerHTML = car.location;
}

const getCar = async()=>{
    const response = await fetch('https://64ec59abf9b2b70f2bfa23f8.mockapi.io/cars/' + carId);
    const car = await response.json();

    console.log(car);
    addCarToScreen(car);
};

getCar();