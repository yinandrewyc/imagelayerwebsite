---
title: "PyTorch Linear Regression"
metaTitle: "PyTorch"
metaDescription: "PytoLinear Regression Analysis and results"
---


# PyTorch Analysis

**Pytorch neural network data analysis process:**

![](img2/process.png)

**Algorithm with epoch of 1000:** <br/>
**Loss** determines the accuracy of the neural network prediction. It is reduced over epochs as algorithm adjusts its weights over time. The amount of epochs can determine the accuracy of the model.

```python
# input values
input = pd.read_csv("output.csv", header = None).values
data = ['frame1-layer10.csv','frame1-layer20 .csv','frame1-layer30.csv','frame1-layer40.csv','frame1-layer50.csv','frame1-layer60.csv','frame1-layer70.csv','frame1-layer80.csv','frame1-layer90.csv','frame1-layer100.csv','frame1-layer110.csv','frame1-layer120.csv','frame1-layer130.csv','frame1-layer140.csv']

# PyTorch Linear Regression algorithm
class linear_regression(nn.Module):

    # Constructor
    def __init__(self, input_size, output_size):
        super(linear_regression, self).__init__()
        self.linear = nn.Linear(input_size, output_size)

    # Prediction
    def forward(self, x):
        yhat = self.linear(x)
        return yhat


model = linear_regression(6,1)
optimizer = torch.optim.Adam(model.parameters(),lr=0.001)
criterion = nn.MSELoss()

LS = []
final = []
epochs = 1000

# Run through 1000 epochs of model
for epoch in range(epochs):
    # make a prediction
    yhat = model(xin)
    # calculate the loss
    loss = criterion(yhat, ydata)
    # store loss/cost
    if (epoch == 999):
        LS.append(loss.item())
        final.append(yhat)

    optimizer.zero_grad()
    # Backward pass: compute gradient of the loss with respect to all the learnable parameters
    loss.backward()
    # the step function on an Optimizer makes an update to its parameters
    optimizer.step()
return final, LS

for i in range(0, len(data)):
    datax = data[i]
    datax = np.array(pd.read_csv(datax))
    datax = datax.astype(np.float)


    # datax = (torch.from_numpy(datax)).float()
    input = torch.from_numpy(np.array(input)).float()

    x = datax[:, 2:6]
    y = datax[:, 0]

    xin = input[z]

    xf, ls = reg(y,xin)

    error.append(ls)
    x2.append(xf)
    z = z + 1

```


# Image Display

![pytorch](img2/pytorch.png)
