//
// Page of Cloud - Amazon Web services

import AWSArch from "../img/AWS_Arch.png";

function AwsComponent() {
  return (
    <div id="awsPage">
      <h3 className="text-center">Amazon Web Services</h3>
      <br />
      <hr />
      <section>
        <p>As cloud computing prevails in the market, it is not only a solution for a business entity,
        but also an option for home use. Photos, vedios and files can be managed on the cloud storage.
        </p>
        <p>This website is hosted on AWS as shown by the diagram.</p>
        <p>
        <img id="awsArch" src={AWSArch} alt="AWS Architecture" />
        </p>
        <p><b>EC2</b></p>
        <p>Elastic compute cloud is a web service that enables you to create Windows and Linux servers in the cloud.
        </p>
        <p><b>S3</b>
        </p>
        <p>
        The front end of this website is hosted on S3, consuming REST services.
        </p>
        <p><b>Elastic Beanstalk</b>
        </p>
        <p>
        The back end of this website is hosted on Elastic Beanstalk, providing REST services.
        </p>
        <p><b>Database</b>
        </p>
        <p>
        The database of this website is launched through Relational Database Service.
        </p>
        <p><b>Route 53</b>
        </p>
        <p>
        The hosted zone for this website is created and managed on Route 53.
        </p>
        <p><b>Security</b>
        </p>
        <p>AWS security and identity services provide you with identity management, data protection, infrastructure protection,
        detective controls and etc.
        </p>
        <p>More contents will be added later as I gain more insights and hands-on experience with AWS.
        </p>
      </section>
    </div>
  );
}

export default AwsComponent;
