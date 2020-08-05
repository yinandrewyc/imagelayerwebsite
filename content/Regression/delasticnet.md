---
title: "Elastic Net Analysis"
metaTitle: "Elastic net Analysis"
metaDescription: "Elastic net Analysis and results"
---

# ElaticNet Regression Source Code

Input data is split into train and test variables using **train_test_split**. Data is run through the regression algorithm, **ElasticNet** to generate prediction outputs.

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

elastic = ElasticNet(alpha=10).fit(xtrain, ytrain)
ypred = elastic.predict(xtest)
score = elastic.score(xtest, ytest)
mse = mean_squared_error(ytest, ypred)
rmse = np.sqrt(mse)


y_pred = elastic.predict(xin)
```

# Image Display


![](img2/1elasticnetcv.png)
