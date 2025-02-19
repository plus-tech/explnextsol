//
// Page of Machine Learning - Python
import {
  Box,
  Divider,
  Heading,
  Text,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

function PythonComponent() {
  return (
    <Box className="boxToplevelpage">
      <Heading as='h3' size='md'>
        Machine Learning in Python
      </Heading>
      <br/>
      <Divider />
      <Text className="txtParagraph">
        As the wave of AI built up momentum, machine learning appears everywhere as a sub-field.
        More articles, blogs, discussions are circulated on the internet.
        More books are piled on the bookshelves. Cloud service providers include it in their service catalog.
        Machine learning has become a buzzword nowadays.
      </Text>

      <Text className="txtParagraph">
        As Gartner Hyper Cycle indicates, Cloud AI Services are on Slope of Enlightenment and are moving to
        Plateau of Productivity in a few years.
      </Text>

      <Text className="txtParagraph">
        Open libraries not only implement a wide range of estimators but also come up with sample datasets
        for practice. So, we can load a sample dataset, for example, Iris dataset for classification,
        California housing dataset for prediction, split it into training dataset and test dataset,
        fit the model with the training data, and then classify or predict the test data.
        The model will also provide a score indicating how well it works for the case.
      </Text>

      <Text className="txtParagraph">
        Additionally, we can use Grid Search to find the best combination of hyper-parameters for the model.
      </Text>

      <Text className="txtParagraph">
        This is how supervised learning works. Let us focus on it at this point.
      </Text>

      <Heading as='h4' className="hdIntext" size='sm'>How does a model learn?</Heading>
      <Text className="txtParagraph">
        A dataset consists of a group of features and labeled result. The model uses a loss function
        to calculate the difference between the labeled result and the predicted values it
        produced during the learning. Through reiterative calculations, the model finds the minimum error
        given by the loss function. After being trained, the model is evaluated with the test dataset.
        After all this works well, we can promote it to the production environment to process the
        actual business cases.
      </Text>
      <Text className="txtParagraph">
        So far, the whole thing looks quite straightforward. Yes, experts have taken care of the model development,
        and applying it to a business scenario seems much easier.
      </Text>

      <Heading as='h4' className="hdIntext" size='sm'>Validity of data</Heading>
      <Text className="txtParagraph">
        Here comes a fundamental point, what data do we provide for a given business case?
        From the perspective of engineering, surely we need to collect the data, cleanse it,
        and get it ready for use. As needed, we can standardize or normalize the inputted data before
        feeding it to the model.
      </Text>
      <Text className="txtParagraph">
        However, does the data truly represent the business problem? Yes, the validity of data,
        this is what we are talking about. We will need to look into the data from the angle of statistics,
        for example, distribution, statistical inference, hypothesis testing etc.
        Moreover, the correlation among the features is another dimension that we should consider.
      </Text>
      <Text className="txtParagraph">
        We can also use the function provided by a model to gain the weight that a feature actually
        contributes to the estimation. If necessary, we can reduce dimensionality of the data using Principal Component Analysis (PCA).
      </Text>

      <Heading as='h4' className="hdIntext" size='sm'>A Typical Process</Heading>
      <Text className="txtNormal">
        Process can vary in response to the enterprise environment, or even can be tailored for a concrete business case.
        A typical process,  for example, can be composed of the following activities:
      </Text>
      <Box className="boxMargbtm">
        <UnorderedList styleType="'- '">
          <ListItem>Data collecting</ListItem>
          <ListItem>Data preprocessing</ListItem>
          <ListItem>Data validity analysis</ListItem>
          <ListItem>Model selection</ListItem>
          <ListItem>Model training</ListItem>
          <ListItem>Evaluation</ListItem>
        </UnorderedList>
      </Box>

      <Heading as='h4' className="hdIntext" size='sm'>More</Heading>
      <Text className="txtParagraph">
        Besides supervised learning, machine learning includes other domains such as unsupervised learning
        and reinforcement learning and deep learning.
      </Text>
      <Text className="txtParagraph">
        Unsupervised learning, by definition, doesn't use labeled data for learning, indeed use only
        the features to find the patterns in it. Clustering and Principal Component Analysis are
        well-known algorithms.
      </Text>
      <Text className="txtParagraph">
        Deep learning, developed on artificial neural networks, is widely used for image classification,
        voice recognition, language processing and etc.
      </Text>

    </Box>
  );
}

export default PythonComponent;
