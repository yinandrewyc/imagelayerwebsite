---
title: "Huber/RANSCAR/TheilSen Regressor Analysis"
metaTitle: "Huber/RANSCAR/TheilSen Regressor Analysis"
metaDescription: "Huber/RANSCAR/TheilSen Regressor Analysis and results"
---

# Huber/RANSCAR/TheilSen Regression Source Code

Input data is split into train and test variables using **train_test_split**. Data is run through the regression algorithm, **XGBRegressor** to generate prediction outputs.

```python
d = pd.read_csv(
    datax, usecols=['w', 'h', 'xmin', 'ymin', 'xmax', 'ymax'])
res = pd.read_csv(
    datax, usecols=['xcentv'])

x = d
y = res



x, y = np.array(x), np.array(y)


xin = output[z]
xin = np.array(xin)
xin = xin.reshape(-1, 6)
x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.3, random_state=40)

regressor = BayesianRidge(al)
regressor.fit(x,y)

y_predtrain = regressor.predict(x)
mse = mean_squared_error(y, y_predtrain)
rmse = np.sqrt(mse)

y_pred = regressor.predict(xin)
```

# Image Display

Image coordinates are resized and used to generate a predicted image display of different layers. A sample input of different layer images were used to generate images based upon inputted user coordinates

## Huber Image

<!-- |Huber Regression|RANSCAR Regression|TheilSen Regression|
:----------------|:--------------:|:-----------------
![regression](img2/2huber.png)|![ransac](img2/2ransac.png)|![theilsen](img2/2theilsen.png) -->
