---
title: "Bayesian Ridge Analysis"
metaTitle: "Bayesian Ridge Analysis"
metaDescription: "Bayesian Ridge Analysis and results"
---

# BayesianRidge Regression Source Code

Input data is split into train and test variables using **train_test_split**. Data is run through the regression algorithm, **BayesianRidge** to generate prediction outputs.

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

![regression](img2/baysian2.png)
