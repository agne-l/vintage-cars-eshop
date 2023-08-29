const button = document.getElementById('submit-btn');

button.addEventListener('click', async()=>{
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

    // console.log(addedCar);

    try{
        const response = await fetch('https://64ec59abf9b2b70f2bfa23f8.mockapi.io/cars', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addedCar)
        })

        const data = await response.json();

        // console.log(data);

        if(data){
            const messageWrapper = document.getElementById('message-wrapper');
            messageWrapper.innerHTML = 'Congratulations! Your car has been added to the list!';

            setTimeout(()=>{
                window.location.replace('./index.html');
            }, 3000);
        }
    }catch(err){
        const messageWrapper = document.getElementById('message-wrapper');
        messageWrapper.innerHTML = 'Something went wrong. Please check if the information provided is correct.';

    }

});