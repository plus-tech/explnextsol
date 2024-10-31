//
// Page of Machine Learning - Python

import React, { Component } from 'react';

class PythonComponent extends Component {
    render() {
        return (
            <div id="pythonPage">
                <h3 className="text-center">Machine Learning in Python</h3>
                <br />
                <hr />
                <section>
                  <p>
                  As the wave of AI built up momentum, machine learning appears everywhere as a sub-field.
                  More articles, blogs, discussions are circulated on the internet.
                  More books are piled on the bookshelves. Cloud service providers include it in their service catalog.
                  Machine learning has become a buzzword nowadays.
                  <br />
                  <br />
                  As Gartner Hyper Cycle indicates, Cloud AI Services are on Slope of Enlightenment and are moving to
                  Plateau of Productivity in a few years.
                  <br />
                  <br />
                  Open libraries not only implement a wide range of estimators but also come up with sample datasets
                  for practice. So, we can load a sample dataset, for example, Iris dataset for classification,
                  California housing dataset for prediction, split it into training dataset and test dataset,
                  fit the model with the training data, and then classify or predict the test data.
                  The model will also provide a score indicating how well it works for the case.
                  <br />
                  <br />
                  Additionally, we can use Grid Search to find the best combination of hyper-parameters for the model.
                  <br />
                  <br />
                  This is how supervised learning works. Let us focus on it at this point.
                  <br />
                  <br />
                  <b>How does a model learn?</b>
                  <br />
                  A dataset consists of a group of features and labeled result. The model uses a loss function
                  to calculate the difference between the labeled result and the predicted values it
                  produced during the learning. Through reiterative calculations, the model finds the minimum error
                  given by the loss function. After being trained, the model is evaluated with the test dataset.
                  After all this works well, we can promote it to the production environment to process the
                  actual business cases.
                  <br />
                  <br />
                  So far, the whole thing looks quite straightforward. Yes, experts have taken care of the model development,
                  and applying it to a business scenario seems much easier.
                  <br />
                  <br />
                  <b>Validity of data</b>
                  <br />
                  Here comes a fundamental point, what data do we provide for a given business case?
                  From the perspective of engineering, surely we need to collect the data, cleanse it,
                  and get it ready for use. As needed, we can standardize or normalize the inputted data before
                  feeding it to the model.
                  <br />
                  <br />
                  However, does the data truly represent the business problem? Yes, the validity of data,
                  this is what we are talking about. We will need to look into the data from the angle of statistics,
                  for example, distribution, statistical inference, hypothesis testing etc.
                  Moreover, the correlation among the features is another dimension that we should consider.
                  <br />
                  <br />
                  We can also use the function provided by a model to gain the weight that a feature actually
                  contributes to the estimation. If necessary, we can reduce dimensionality of the data using Principal Component Analysis (PCA).
                  <br />
                  <br />
                  <b>A Typical Process</b>
                  <br />
                  Process can vary in response to the enterprise environment, or even can be tailored for a concrete business case.
                  A typical process,  for example, can be composed of the following activities:
                  <br />
                  <ul class="listInPage">
                      <li>Data collecting</li>
                      <li>Data preprocessing</li>
                      <li>Data validity analysis</li>
                      <li>Model selection</li>
                      <li>Model training</li>
                      <li>Evaluation</li>
                  </ul>
                  <br />
                  <b>More</b>
                  <br />
                  Besides supervised learning, machine learning includes other domains such as unsupervised learning
                  and reinforcement learning and deep learning.
                  <br />
                  <br />
                  Unsupervised learning, by definition, doesn't use labeled data for learning, indeed use only
                  the features to find the patterns in it. Clustering and Principal Component Analysis are
                  well-known algorithms.
                  <br />
                  <br />
                  Deep learning, developed on artificial neural networks, is widely used for image classification,
                  voice recognition, language processing and etc.
                  </p>
                </section>
            </div>
        );
    }

}

export default PythonComponent;
