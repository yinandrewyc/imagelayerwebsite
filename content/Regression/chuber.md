---
title: "Huber/RANSACR/TheilSen Regressor Analysis"
metaTitle: "Huber/RANSACR/TheilSen Regressor Analysis"
metaDescription: "Huber/RANSACR/TheilSen Regressor Analysis and results"
---

# Regression Source Code

Data is run through the regression algorithms **HuberRegressor, RANSACRegressor, TheilSenRegressor** to generate prediction outputs.

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

huber = HuberRegressor(epsilon=1.9).fit(x,y)
ransacr = RANSACRegressor(LinearRegression(), residual_threshold=10, random_state=0)
theilsen = TheilSenRegressor(random_state=0).fit(x, y)

y_huber = huber.predict(xin)
y_ransacr = ransacr.predict(xin)
y_theilsen = theilsen.predict(xin)
```

# Image Display


**Huber Regressor &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; RANSACR Regressor &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; TheilSen Regressor**
![](img2/3combined.jpg)
