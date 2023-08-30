const submitButton = document.getElementById('submit-btn');
const returnToMainPageButton = document.getElementById('return-to-main-page-btn');

const getCarObject = ()=>{
    const carModel = document.getElementById('model').value;
    const carPrice = document.getElementById('price').value;
    const carDescription = document.getElementById('description').value;
    const carLocation = document.getElementById('location').value;
    const carImage = document.getElementById('image').value;

    const addedCar = {
        model: carModel,
        price: carPrice,
        description: carDescription,
        location: carLocation,
        image: carImage
    };

    return addedCar;
};

const insertCar = async(car)=>{
    try{
        const response = await fetch('https://64ec59abf9b2b70f2bfa23f8.mockapi.io/cars', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(car)
        });

        const data = await response.json();
        return data;
    } catch(err){
        return false;
    }
};

const onCarInserted = (data)=>{
    const messageWrapper = document.getElementById('message-wrapper');
    
    if(data){
        messageWrapper.innerHTML = 'Congratulations! Your car has been added to our shop!';
    
        setTimeout(()=>{
            window.location.replace('./index.html');
        }, 3000);
    }
    else {
        messageWrapper.innerHTML = 'Something went wrong. Please check if the information provided is correct.';
    };
};

submitButton.addEventListener('click', async()=>{
    const car = getCarObject();
    const data = insertCar(car);
    onCarInserted(data);
});

returnToMainPageButton.addEventListener('click', ()=>{
    window.location.replace('./index.html');
});


