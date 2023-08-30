const deleteButton = document.getElementById('delete-btn');
const returnToMainPageButton = document.getElementById('return-to-main-page-btn');

const url = new URL(window.location.href);
const carId = url.searchParams.get('carId');

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

deleteButton.addEventListener('click', async()=>{

    try{
        const response = await fetch('https://64ec59abf9b2b70f2bfa23f8.mockapi.io/cars/' + carId,
        {
            method: 'DELETE',
        }
        );

        const data = await response.json();

        if(data){
            const infoMessage = document.getElementById('info-message');
            infoMessage.innerHTML = 'The car has been deleted.';

            setTimeout(()=>{
                window.location.replace('./index.html');
            }, 3000);
        }
    }catch(err){
        const infoMessage = document.getElementById('info-message');
        infoMessage.innerHTML = 'Something went wrong. The car has not been deleted.';
    }
});

returnToMainPageButton.addEventListener('click', ()=>{
    window.location.replace('./index.html');
});