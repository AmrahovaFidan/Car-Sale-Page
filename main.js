const cars = [
    {
        title: "Kia Rio",
        price: "2500$",
        imgUrl: "https://www.kayak.com/news/wp-content/uploads/sites/19/2023/11/THEME_CAR_TRANSPORTATION-shutterstock-portfolio_677345539-scaled-1.jpg",
    },

    {
        title: "Mercedes",
        price: "3500$",
        imgUrl: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_ab3219a4235d43d3a95fa96a403e6328.webp",
    },

    {
        title: "BMW X6",
        price: "5500$",
        imgUrl: "https://images.dealer.com/ddc/vehicles/2024/Acura/Integra/Hatchback/trim_ASpec_Tech_Package_72b3f2/color/Majestic%20Black%20Pearl-BK-29%2C29%2C29-640-en_US.jpg?impolicy=resize&w=640",
    },
    {
        title: "Kia Rio",
        price: "2500$",
        imgUrl: "https://www.kayak.com/news/wp-content/uploads/sites/19/2023/11/THEME_CAR_TRANSPORTATION-shutterstock-portfolio_677345539-scaled-1.jpg",
    },

    {
        title: "Mercedes",
        price: "3500$",
        imgUrl: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_ab3219a4235d43d3a95fa96a403e6328.webp",
    },

    {
        title: "BMW X6",
        price: "5500$",
        imgUrl: "https://images.dealer.com/ddc/vehicles/2024/Acura/Integra/Hatchback/trim_ASpec_Tech_Package_72b3f2/color/Majestic%20Black%20Pearl-BK-29%2C29%2C29-640-en_US.jpg?impolicy=resize&w=640",
    },

];

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (!cars) {
            reject({ message: "Not found is data", status: 404 });
            return;
        }
        resolve({ status: 200, message: "Ok", result: { data: cars } });
    }, 1000);
});


let cardList = document.querySelector("#cardList");
let errorAlert = document.querySelector("#errorAlert");
let container = document.querySelector(".container");
let loadingEl = document.querySelector("#loadingEl");

showLoading(true);
myPromise.then((resolve) => {
    console.log(resolve.result.data);

    renderCars(resolve.result.data);
})
    .catch((err) => {
        console.log(err);
        showError(err.message, true);
        showLoading(show);
    }).finally(() => {
        showLoading(false);
    });


function renderCars(arr) {
    container.innerHTML = arr.map((car) => (`<div class="card text-start" style="width: 18rem;" id="cardList">
    <img class="card-img-top"
        src="${car.imgUrl}"
        alt="Car" />
    <div class="card-body">
        <h4 class="card-title">${car.title}</h4>
        <p class="card-text">${car.price}</p>
    </div>
    <a href="#" class="btn btn-danger pull right">Read more</a>
</div>`)).join("");
};

//burada show-true false deyerini qebul edecek
function showError(mes, show) {
    errorAlert.innerHTML = mes;
    if (show) {
        errorAlert.classList.add("d-block");
        errorAlert.classList.remove("d-none");
        return;
    }
    errorAlert.classList.remove("d-block");
    errorAlert.classList.add("d-none");
}

function showLoading(show) {
    if (show) {
        loadingEl.classList.add("d-block");
        loadingEl.classList.remove("d-none");
        return;
    }
    loadingEl.classList.remove("d-block");
    loadingEl.classList.add("d-none");
}