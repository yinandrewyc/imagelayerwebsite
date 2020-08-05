---
title: "ARDRegression Analysis"
metaTitle: "ARDRegression Analysis"
metaDescription: "ARDRegression Analysis and results"
---

# ARDRegression Regression Source Code

Input data is split into train and test variables using **train_test_split**. Data is run through the regression algorithm, **ARDRegression** to generate prediction outputs.

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

regression = ARDRegression.fit(x,y)

y_pred = regression.predict(xin)
```

# Image Display


![](img2/1ard.png)
