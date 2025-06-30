document.addEventListener('DOMContentLoaded', () => {
    const moodSelect = document.getElementById('mood');
    const weatherSelect = document.getElementById('weather');
    const budgetSelect = document.getElementById('budget');
    const getRecommendationBtn = document.getElementById('get-recommendation');
    const recommendationText = document.getElementById('recommendation-text');
    const resultDiv = document.getElementById('result');
    const errorMessageDiv = document.getElementById('error-message');

    getRecommendationBtn.addEventListener('click', () => {
        const mood = moodSelect.value;
        const weather = weatherSelect.value;
        const budget = budgetSelect.value;

        recommendationText.textContent = '';
        resultDiv.style.display = 'none';
        errorMessageDiv.style.display = 'none';
        errorMessageDiv.textContent = '';

        if (!mood || !weather || !budget) {
            errorMessageDiv.textContent = 'Please select a value for Mood, Weather, and Budget.';
            errorMessageDiv.style.display = 'block';
            return;
        }

        let recommendation = '';

        if (mood === 'happy' && weather === 'sunny' && budget === 'high') {
            recommendation = 'Go for a beach day and enjoy some ice cream!';
        } else if (mood === 'sad' && weather === 'rainy' && budget === 'low') {
            recommendation = 'Have a cozy movie night at home.';
        } else {
            recommendation = 'Try something simple and relaxing, like a walk or a coffee break.';
        }

        recommendationText.textContent = recommendation;
        resultDiv.style.display = 'block';
    });
});
