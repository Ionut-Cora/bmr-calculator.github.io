

const root = document.getElementById('root');

window.addEventListener('load', () => {
    root.innerHTML += `
        <div id="all-content">
            <div id="all-card">
                <h1>BMR Calculator</h1>
                <form>
                    <input type="number" name="weight" id="weight" placeholder="Weight (kg)">
                    <p class="weight-message">Please insert your weight !</p>

                    <input type="number" name="height" id="height" placeholder="Height (cm)">
                    <p class="height-message">Please insert your height !</p>

                    <input type="number" name="age" id="age" placeholder="Age">
                    <p class="age-message">Please insert your age !</p>

                    <select name="genders" id="genders">
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                    </select>

                    <select name="activities" id="activities">
                        <option value="Sedentary">Sedentary</option>
                        <option value="Lightly active">Lightly active</option>
                        <option value="Moderately active">Moderately active</option>
                        <option value="Very active">Very active</option>
                        <option value="Extra active">Extra active</option>
                    </select>
                    <input type="submit" id="submit" value="Calculate">
                </form>

                <div id="result">
                    <div id="bmr-card">
                        <p>BMR: </p>
                        <div id="bmr-div"></div>       
                    </div>

                    <div id="activity-card">
                        <p>HBE:</p>
                        <div id="activity-div"></div>      
                    </div>                    
                </div>
            </div>

            <div id="info">
                <h2>BMR - Basal Metabolic Rate</h2>    
                <div>
                    <h3>BMR for men calculation</h3>
                    <p>BMR (kcal/day) = 10 * weight(kg) + 6.25 * height(cm) - 5 * age(years) + 5(kcal/day)</p>
                    <h3>BMR for women calculation</h3>
                    <p>BMR (kcal/day) = 10 * weight(kg) + 6.25 * height(cm) - 5 * age(years) - 161(kcal/day)</p>           
                </div>

                <div>
                    <h2>Harris Benedict Formula (Harris Benedict Equation)</h2>
                    <ul>
                        <li><span>Little/no exercise:</span> BMR * 1.2 = Total Calorie Need</li>
                        <li><span>Light exercise:</span> BMR * 1.375 = Total Calorie Need</li>
                        <li><span>Moderate exercise (3-5 days/week):</span> BMR * 1.55 = Total Calorie Need</li>
                        <li><span>Very active (6-7 days/week):</span> BMR * 1.725 = Total Calorie Need</li>
                        <li><span>Extra active (very active & physical job):</span> BMR * 1.9 = Total Calorie Need</li>
                    </ul>              
                </div>
            </div>      
        </div>

        <footer>
            <p>&copy; made by Ionut Cora, 2021</p>
        </footer>
    `;

    const weight = document.getElementById('weight');
    const height = document.getElementById('height');
    const age = document.getElementById('age');
    const genders = document.getElementById('genders');
    const activities = document.getElementById('activities');
    const submitBtn =  document.getElementById('submit');
    const bmrDiv = document.getElementById('bmr-div');
    const activityDiv = document.getElementById('activity-div');

    const weightMessage = document.querySelector('.weight-message');
    const heightMessage = document.querySelector('.height-message');
    const ageMessage = document.querySelector('.age-message');

    submitBtn.addEventListener('click', (event) => {
        event.preventDefault();

        if (weight.value !== '' && height.value !== '' && age.value !== '') {

            for (let i = 0; i < genders.length; i++) {
                let gender = genders[i];
                // console.log(gender);
    
                if (gender.selected === true) {
                    if (gender.value === 'Men') {
                        
    
                        const bmrMen = (10 * weight.value) + (6.25 * height.value) - (5 * age.value) + 5;
    
                        bmrDiv.innerHTML = `<p><span>${bmrMen.toPrecision(6)}</span>kcal</p>`;
    
                        for (let i = 0; i < activities.length; i++) {
                            let activitie = activities[i];
    
                            if (activitie.selected === true) {
                                if (activitie.value === 'Sedentary') {
                                    let sedentary = bmrMen * 1.2;
    
                                    activityDiv.innerHTML = `<p><span>${sedentary.toPrecision(6)}</span>kcal</p>`;
                                } else if (activitie.value === 'Lightly active') {
                                    let lightlyActive = bmrMen * 1.375;
    
                                    activityDiv.innerHTML = `<p><span>${lightlyActive.toPrecision(6)}</span>kcal</p>`;
                                } else if (activitie.value === 'Moderately active') {
                                    let moderatelyActive = bmrMen * 1.55;
    
                                    activityDiv.innerHTML = `<p><span>${moderatelyActive.toPrecision(6)}</span>kcal</p>`;
                                } else if (activitie.value === 'Very active') {
                                    let veryActive = bmrMen * 1.725;
    
                                    activityDiv.innerHTML = `<p><span>${veryActive.toPrecision(6)}</span>kcal</p>`;
                                } else if (activitie.value === 'Extra active') {
                                    let extraActive = bmrMen * 1.9;
    
                                    activityDiv.innerHTML = `<p><span>${extraActive.toPrecision(6)}</span>kcal</p>`;
                                }
                            }
                        }
                    } else if (gender.value === 'Women') {
                        
    
                        const bmrWomen = (10 * weight.value) + (6.25 * height.value) - (5 * age.value) - 161;
    
                        bmrDiv.innerHTML = `<p><span>${bmrWomen.toPrecision(6)}</span>kcal</p>`;
    
                        for (let i = 0; i < activities.length; i++) {
                            let activitie = activities[i];
    
                            if (activitie.selected === true) {
                                if (activitie.value === 'Sedentary') {
                                    let sedentary = bmrWomen * 1.2;
    
                                    activityDiv.innerHTML = `<p><span>${sedentary.toPrecision(6)}</span>kcal</p>`;
                                } else if (activitie.value === 'Lightly active') {
                                    let lightlyActive = bmrWomen * 1.375;
    
                                    activityDiv.innerHTML = `<p><span>${lightlyActive.toPrecision(6)}</span>kcal</p>`;
                                } else if (activitie.value === 'Moderately active') {
                                    let moderatelyActive = bmrWomen * 1.55;
    
                                    activityDiv.innerHTML = `<p><span>${moderatelyActive.toPrecision(6)}</span>kcal</p>`;
                                } else if (activitie.value === 'Very active') {
                                    let veryActive = bmrWomen * 1.725;
    
                                    activityDiv.innerHTML = `<p><span>${veryActive.toPrecision(6)}</span>kcal</p>`;
                                } else if (activitie.value === 'Extra active') {
                                    let extraActive = bmrWomen * 1.9;
    
                                    activityDiv.innerHTML = `<p><span>${extraActive.toPrecision(6)}</span>kcal</p>`;
                                }
                            }
                        }
                    }
                }
            }

        } else {
            bmrDiv.innerHTML = ``;
            activityDiv.innerHTML = ``;
        }

        if (weight.value === '') {
            weightMessage.style.display = 'block';
        } else {
            weightMessage.style.display = 'none';
        }

        if (height.value === '') {
            heightMessage.style.display = 'block';
        } else {
            heightMessage.style.display = 'none';
        }

        if (age.value === '') {
            ageMessage.style.display = 'block';
        } else {
            ageMessage.style.display = 'none';
        }

    });

});