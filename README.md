# 🏠 NYC Airbnb Roomwise Predictor

A Machine Learning web application that predicts Airbnb room types in New York City based on listing details.

## 📌 About the Project

NYC Airbnb Roomwise Predictor helps users estimate the most likely room type for an Airbnb listing using machine learning. It also displays the predicted probabilities for different room categories, helping users understand the model's predictions.

## ✨ Features

- 🤖 Machine Learning-based room type prediction
- 📊 Predicted probabilities for different room categories
- 📍 Uses location details such as latitude and longitude
- 🏡 Predicts categories such as Private Room, Entire Home/Apartment, and Shared Room
- 🌐 Web interface for easy user interaction

## 🛠️ Technologies Used

- **Python** – Programming language
- **Pandas & NumPy** – Data processing
- **Scikit-learn** – Machine learning and preprocessing
- **FastAPI** – Backend API
- **HTML & CSS** – Frontend interface

## ⚙️ How to Run Locally

1. Clone this repository:

   ```bash
   git clone https://github.com/DhruvilKayasth/NYC-Airbnb-Roomwise-predictor.git
   ```

2. Open the project folder:

   ```bash
   cd NYC-Airbnb-Roomwise-predictor
   ```

3. Install the required libraries:

   ```bash
   pip install -r requirements.txt
   ```

4. Start the FastAPI application (replace `main:app` if your Python filename or FastAPI instance name differs):

   ```bash
   uvicorn main:app --reload
   ```

5. Open your browser and visit:

   `http://127.0.0.1:8000`

   If your app serves its interface at another route, such as `/docs` or `/`, open the appropriate URL.

## 🎯 Project Objective

The objective of this project is to demonstrate how machine learning can classify Airbnb room types using listing information and present prediction probabilities through a simple web application.

## 👨‍
