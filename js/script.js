
const root = document.getElementById('root');
const date = new Date();
const year = date.getFullYear();

window.addEventListener('load', () => {
    root.innerHTML += `
        <div id="all-content">
            <div id="all-card">
                <h1>BMR Calculator</h1>
                <form>
                    <div class="form-col">
                        <div>                  
                            <label for="weight">Weight <span>(kg)</span></label>
                            <input type="number" name="weight" id="weight" placeholder="75">
                        </div>
                        <div>
                            <label for="weight">Height <span>(cm)</span></label>
                            <input type="number" name="height" id="height" placeholder="175">         
                        </div>
                    </div>
                    <div class="form-col">
                        <div>
                            <label for="weight">Age</label>
                            <input type="number" name="age" id="age" placeholder="30">           
                        </div>
                        <div>
                            <label for="weight">Gender</label>
                            <div class="select-wrapper">
                                <select name="genders" id="genders">
                                    <option value="Men">Men</option>
                                    <option value="Women">Women</option>
                                </select>                      
                            </div>
                        </div>
                    </div>
                    <div>
                        <label for="weight">Activity level</label>
                        <div class="select-wrapper activity-wrapper">
                            <select name="activities" id="activities">
                                <option value="Sedentary">Sedentary</option>
                                <option value="Lightly active">Lightly active</option>
                                <option value="Moderately active">Moderately active</option>
                                <option value="Very active">Very active</option>
                                <option value="Extra active">Extra active</option>
                            </select>                       
                        </div>
                    </div>
                    <input type="submit" id="submit" value="Calculate">
                </form>

                <div class="result" id="result">
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
        </div>

        <footer>
            <p>Copyright &copy; 2021 - ` + year + ` Made by Ionut Cora | All Rights Reserved</p>
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
    const resultsDiv = document.getElementById('result');

    submitBtn.addEventListener('click', (event) => {
        event.preventDefault();

        if (weight.value !== '' && height.value !== '' && age.value !== '') {

            for (let i = 0; i < genders.length; i++) {
                let gender = genders[i];
    
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

            resultsDiv.classList.add('green-class');

        } else {
            bmrDiv.innerHTML = ``;
            activityDiv.innerHTML = ``;
            resultsDiv.classList.remove('green-class');
        }

        if (weight.value === '') {
            weight.classList.add('error-class');
        } else {
            weight.classList.remove('error-class');
        }

        if (height.value === '') {
            height.classList.add('error-class');
        } else {
            height.classList.remove('error-class');
        }

        if (age.value === '') {
            age.classList.add('error-class');
        } else {
            age.classList.remove('error-class');
        }
    });
});
