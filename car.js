const carsURL = 'https://64ec59abf9b2b70f2bfa23f8.mockapi.io/cars/';

const url = new URL(window.location.href);
const carId = url.searchParams.get('carId');

const addToCartButton = document.getElementById('add-to-cart-btn');
const deleteButton = document.getElementById('delete-btn');
const returnToMainPageButton = document.getElementById('return-to-main-page-btn');

const cart = document.getElementById('cart');
const notification = document.createElement('div');

const allClicks = [];

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
    try{
        const response = await fetch(carsURL + carId);
        const car = await response.json();
        return car;
    } catch(err){
        return false;
    }
};


const deleteCar = async()=>{
    try{
        const response = await fetch(carsURL + carId,
        {
            method: 'DELETE',
        }
        );
    
        const data = await response.json();
        return data;
    } catch(err){
        return false;
    }
};

const onCarDeleted = (data)=>{
    const infoMessage = document.getElementById('info-message');
    if(data){
        infoMessage.innerHTML = 'The car has been deleted.';

        setTimeout(()=>{
            window.location.replace('./index.html');
        }, 3000);
    } else{
        infoMessage.innerHTML = 'Something went wrong. The car has not been deleted.';
    }
};

const onClickDeleteButton = async()=>{
    try{
        const response = await deleteCar();
        onCarDeleted(response);
    }catch(err){
        console.log(err);
    }
};

deleteButton.addEventListener('click', onClickDeleteButton);


const displayCar = async()=>{
    const car = await getCar();
    car && addCarToScreen(car);
};

displayCar();


returnToMainPageButton.addEventListener('click', ()=>{
    window.location.replace('./index.html');
});


addToCartButton.addEventListener('click', ()=>{
    localStorage.setItem('carId', carId);

    const numberOfClicks = {
    };
    allClicks.push(numberOfClicks);

    console.log(allClicks);

    notification.setAttribute('class', 'notification');
    notification.innerHTML = allClicks.length;

    cart.append(notification);

});