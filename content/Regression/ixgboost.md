---
title: "XGBoost Analysis"
metaTitle: "XGBoost Analysis"
metaDescription: "XGBoost Analysis and results"
---

XGBoost model uses a graident boosting algorithm to implement machine learning prediction

# Inputs

|width|height|xmin|ymin|xmax|ymax|
|-----|------|----|----|----|----|
|3365.0|4960.0|130.943266|2641.117911|3056.174873|3938.119096|
|530.0  | 546.0 |  398.387161 |  681.459717  |1082.647551 | 1078.003818|
|1355.0 | 1355.0  | 455.852172  | 738.254618 | 1223.961207 | 1173.219835|
|1564.0 | 1566.0   |400.142435   |630.608587 | 1351.087420 | 1359.807868|
|3364.0  | 704.0|  1641.121945 |  960.335295  |2441.670330 | 1093.033422|
|4107.0 |  983.0 | 1093.556990  | 770.246822  |2386.957927   |987.176591|
|4286.0  |1317.0 | 2026.147064 | 1504.405753  |3132.509264  |1599.873141|
|2562.0  |2475.0   |927.652803  |1314.572335  |1249.234076  |1433.921758|
|898.0    |93.0   |313.110120   |113.112915   |561.777769   |226.515633|
|342.0   |348.0   |249.656984   |525.275889   |513.972849   |581.560096|
|713.0    |93.0   |492.655027   |994.701960  |1044.564271  |1225.640362|
|327.0   |874.0   |235.790528   |500.561502   |593.710909   |655.502067|
|227.0  |1066.0   |116.077132   |332.891634   |467.075238   |610.364364|
|1028.0  |2529.0   |370.625163  |1536.492660  |759.536914  |1707.244277|



# XGBoost Regression Source Code

Input data is split into train and test variables using **train_test_split**. Data is run through the regression algorithm, **XGBRegressor** to generate prediction outputs.

```python
d = pd.read_csv(
    datax, usecols=['w', 'h', 'xmin', 'ymin', 'xmax', 'ymax'])
res = pd.read_csv(
    datax, usecols=['xcentv', 'ycentv'])

x = d
y = res

x, y = np.array(x), np.array(y)

seed = 15
test_size = 0.2
xtrain, xtest, ytrain, ytest = train_test_split(x, y, test_size =test_size,random_state=seed)
model = MultiOutputRegressor(XGBRegressor(objective='reg:squarederror')).fit(xtrain, ytrain)

ypred = model.predict(xtest)

mse = mean_squared_error(ytest, ypred)
r2 = r2_score(ytest, ypred)
rmse = np.sqrt(mse)

xz = [output[z]]
y_new = model.predict(xz)
```

# Image Display

Image coordinates are resized and used to generate a predicted image display of different layers. A sample input of different layer images were used to generate images based upon inputted user coordinates

## XGBoost Image

![regression](img2/xgboost.png)
