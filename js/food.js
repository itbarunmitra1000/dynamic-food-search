const searchFood = () => {
    // console.log('click')
    const inputData = document.getElementById('input-food');
    const inputFoodName = inputData.value;
    inputData.value = '';
    // console.log(inputFoodName);
    const foodUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputFoodName}`;
    fetch(foodUrl)
        .then(res => res.json())
        .then(data => displayFood(data.meals))



}

const displayFood = (meals) => {
    // console.log(meals);
    const createCard = document.getElementById('create-card');
    createCard.textContent = '';
    meals.forEach(meal => {
        // console.log(meal);      
        const newDiv = document.createElement('div');
        newDiv.classList.add('col');
        newDiv.innerHTML = `
        <div onclick= "localMealDetails(${meal.idMeal}) " class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${meal.strMeal}</h5>
                  <p class="card-text">${meal.strInstructions.slice(0,250)}</p>
                </div>
              </div>
        `;
        createCard.appendChild(newDiv);
    });


}


const localMealDetails = async (mealId) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    const res = await fetch(url);
    const data = await res.json();
    displayMealDetails(data.meals[0]);
  
};
// const localMealDetails = (mealId) =>{
//     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
//     fetch(url)
//     .then(res => res.json())
//     .then(data => displayMealDetails(data.meals[0]))
// };

const displayMealDetails = (mealDetails)=>{
    console.log(mealDetails);
    const foodDetails = document.getElementById('foodDetails');
    foodDetails.textContent = '';
    const div = document.createElement('div');
  
    div.classList.add('card');
    div.innerHTML = `
    <img src="${mealDetails.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${mealDetails.strMeal}</h5>
      <p class="card-text">${mealDetails.strInstructions.slice(0,150)}</p>
      <a href="${mealDetails.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    
    `;
    foodDetails.appendChild(div);


};