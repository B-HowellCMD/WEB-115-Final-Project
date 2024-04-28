document.addEventListener("DOMContentLoaded", function () {
    
    var form = document.createElement('form');
    form.id = 'mealPlanForm';

    var nameLabel = document.createElement('label');
    nameLabel.for = 'name';
    nameLabel.textContent = 'Name:';
    form.appendChild(nameLabel);
    form.appendChild(document.createElement('br'));

    var nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'name';
    nameInput.name = 'name';
    nameInput.required = true;
    form.appendChild(nameInput);
    form.appendChild(document.createElement('br'));

    // Create label and input for email
    var emailLabel = document.createElement('label');
    emailLabel.for = 'email';
    emailLabel.textContent = 'Email:';
    form.appendChild(emailLabel);
    form.appendChild(document.createElement('br'));

    var emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email';
    emailInput.name = 'email';
    emailInput.required = true;
    emailInput.pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";
    emailInput.title = "Please enter a valid email address";
    form.appendChild(emailInput);
    form.appendChild(document.createElement('br'));

    // Create label and input for goal
    var goalLabel = document.createElement('label');
    goalLabel.for = 'goal';
    goalLabel.textContent = 'Goal for the week:';
    form.appendChild(goalLabel);
    form.appendChild(document.createElement('br'));

    var goalInput = document.createElement('input');
    goalInput.type = 'text';
    goalInput.id = 'goal';
    goalInput.name = 'goal';
    goalInput.required = true;
    form.appendChild(goalInput);
    form.appendChild(document.createElement('br'));
    
    // Create div for meal plan
    var mealPlanDiv = document.createElement('div');
    mealPlanDiv.id = 'mealPlan';

    // Create divs for each day
    var days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    var meals = ['Breakfast', 'Snack1', 'Lunch', 'Snack2', 'Dinner'];
    days.forEach(function(day) {
        var dayDiv = document.createElement('div');
        dayDiv.id = day;

        var dayHeading = document.createElement('h2');
        dayHeading.textContent = day.charAt(0).toUpperCase() + day.slice(1) + ':';
        dayDiv.appendChild(dayHeading);

        meals.forEach(function(meal) {
            var mealLabel = document.createElement('label');
            mealLabel.for = day + meal;
            mealLabel.textContent = meal + ':';
            dayDiv.appendChild(mealLabel);
            dayDiv.appendChild(document.createElement('br'));

            var mealInput = document.createElement('input');
            mealInput.type = 'text';
            mealInput.id = day + meal;
            mealInput.name = day + meal;
            mealInput.required = true;
            dayDiv.appendChild(mealInput);
            dayDiv.appendChild(document.createElement('br'));
        });

        mealPlanDiv.appendChild(dayDiv);
    });

    // Append mealPlanDiv to form
    form.appendChild(mealPlanDiv);

    // Append form to formContainer div
    document.getElementById('formContainer').appendChild(form);

    // Create a div to hold the buttons
    var buttonDiv = document.createElement('div');
    buttonDiv.style.display = 'flex';
    buttonDiv.style.justifyContent = 'space-between';

    // Create submit button
    var submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Generate Meal Plan';
    buttonDiv.appendChild(submitButton); 

    submitButton.addEventListener('click', function(event) {
        // Check form validity
        if (!form.checkValidity()) {
            // If the form is invalid, show the validation message
            form.reportValidity();
            return;
        }

        event.preventDefault(); // Prevent form submission

        // Open new window
        var newWindow = window.open("", "Meal Plan", "width=600,height=600");

        // Write meal plan to new window
        newWindow.document.write("<h1>Meal Plan</h1>");

        
        days.forEach(function(day) {
            newWindow.document.write("<h2>" + day.charAt(0).toUpperCase() + day.slice(1) + "</h2>");
            meals.forEach(function(meal) {
                var mealInput = document.getElementById(day + meal);
                newWindow.document.write("<p>" + meal + ": " + mealInput.value + "</p>");
            });
        });
    });

    // Create clear button
    var clearButton = document.createElement('input');
    clearButton.type = 'button';
    clearButton.value = 'Clear Planner';
    buttonDiv.appendChild(clearButton);

    clearButton.addEventListener('click', function() {
        form.reset();
    });

    // Append the button div to the form
    form.appendChild(buttonDiv); 
});