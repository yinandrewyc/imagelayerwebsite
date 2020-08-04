---
title: "PyTorch Linear Regression"
metaTitle: "PyTorch"
metaDescription: "PytoLinear Regression Analysis and results"
---
Pytorch neural network data analysis process:

# Linear Regression Model with Two Regression steps

## Step 1
**Inputs from User:** Width and Height of every desired layer  
**Output:** Xmin, Xmax, Ymin, Ymax  

```python
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt
from sklearn.metrics import mean_squared_error

def reg():
    data = ['test10.csv','test20.csv','test30.csv','test40.csv','test50.csv','test60.csv','test70.csv','test80.csv','test90.csv','test100.csv','test110.csv','test120.csv','test130.csv','test140.csv']

    x_new = 'xnew.csv'
    x_new = pd.read_csv(x_new).values
    x_new = np.array(x_new)

    def reg1():
        x2 = []
        z = 0
        for i in range(0, len(data)):
            datax = data[i]

            d = pd.read_csv(
                datax, usecols=['w', 'h'])
            res = pd.read_csv(
                datax, usecols=['xmin', 'ymin', 'xmax', 'ymax'])

            x = d
            y = res

            x, y = np.array(x), np.array(y)
            model = LinearRegression().fit(x, y)

            xz = [x_new[z]]
            y_new = model.predict(xz)
            x2.append(y_new)
            z = z +1

        x2 = np.array(x2)
        x2.shape = 14, 4
        dx = pd.DataFrame(x2)
        dx.to_csv('xnew2.csv', index=False)

    reg1()
    x_new = pd.read_csv("xnew.csv")
    x_new2 = pd.read_csv("xnew2.csv")

    merged = x_new.merge(x_new2, left_index=True,right_index=True)
    merged.to_csv("output.csv",index = False)

    output = pd.read_csv("output.csv").values
    output = pd.DataFrame(output, columns = ['width','height','xmin', 'ymin', 'xmax', 'ymax'])
    print(output)

reg()
```

## Step 2

**Inputs (Generated from previous step):** Width, Height, Xmin, Xmax, Ymin, Ymax  
**Output:** X-center, Y-center (Normalized values)  

```python
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt
from sklearn.metrics import mean_squared_error

data = ['test10.csv','test20.csv','test30.csv','test40.csv','test50.csv','test60.csv','test70.csv','test80.csv','test90.csv','test100.csv','test110.csv','test120.csv','test130.csv','test140.csv']

x_new = 'output.csv'
x_new = pd.read_csv(x_new).values
x_new = np.array(x_new)

def reg2():
    z = 0
    yx = []
    for i in range(0,len(data)):
        datax = data[i]

        d = pd.read_csv(
        datax, usecols = ['w','h','xmin','ymin','xmax','ymax'])
        res = pd.read_csv(
        datax, usecols = ['xcentv','ycentv'])

        x = d
        y = res


        x, y = np.array(x), np.array(y)

        model = LinearRegression().fit(x, y)
        y_pred = model.predict(x)

        xz = [x_new[z]]
        y_new = model.predict(xz)

        yx.append(y_new)
        z = z + 1

    yx = np.array(yx)
    yx.shape = 14, 2
    dx = pd.DataFrame(yx, columns= ['xcenter','ycenter'])
    print(dx)

reg2()
```

# Image Display

Image coordinates are resized and used to generate a predicted image display of different layers. A sample input of different layer images were used to generate images based upon inputted user coordinates

## Linear Regression Image

![regression](img2/linear.png)
