//
// Page of Extract Transform Load - Pentaho

import kettleArch from "../img/pentahoArch.png";

function PentahoComponent() {
  return (
    <div  id="penthaoPage">
      <h3 className="text-center">Pentaho</h3>
      <br />
      <hr />
      <section>
        <p>Although Pentaho offers BI suite, it is referred as Kettle in this text, the data integration suite.
        As an ETL platform, Pentaho provides extract, transform, load functionalities as the other peers do like
        Informatica Powercenter. On top of the main stream data sources and databases, Pentaho supports JSON, Hadoop, MongoDB
        inputs and outputs. It can consume REST services as well.
        </p>
        <p>
        On the other hand, Pentaho shows great flexibilities as a tool built on open technologies. Java and JavaScript
        transformation steps enable developers to implement complicate transformation logics.
        </p>
        <p>
        Pentaho offers community edition for free use.</p>
        <p><b>Kettle Architecture</b>
        </p>
        <p>
        The diagram below shows the architecture of Pentaho DI.<br />
        <img id="kettleArch" src={kettleArch} alt="Kettle Architecture" />
        </p>
        <ul className="listInPage">
            <li>Spoon: a desktop tool to design jobs and transformations.</li>
            <li>Carte: a light web server to execute jobs and transformations.</li>
            <li>Pan: a command line to execute transformations.</li>
            <li>Kitchen: a command line to execute jobs.</li>
            <li>Pentaho Sever: a comprehensive enterprise server including scheduling, monitoring, repository and data
            integration engine and security component.</li>
        </ul>
        <b>Jobs and Transformations</b><br />
        <ul className="listInPage">
            <li>Job - It provides high level flow control. The entries in a job is executed one by one in order.</li>
            <li>Transformation - It transforms data rows from source to target. All steps in a transformaton are executed in parallel.</li>
            <li>Hop - It connects transformation steps and job entries. It indicates data flow.</li>
        </ul>
        <p><b>For Enterprise</b>
        </p>
        <p>
        Pentaho introduces master server and slave server concept in a bid to optimize its scalability. In this deployment model, only one
        master server is allowed. The others are slave servers, even you have more than one Pentaho enterprise servers in the environment.
        </p>
        <p><b>A Few Transformation Steps</b>
        </p>
        <p>
        Pentaho offers a mechanism for realize complex transformation logics. Here are a few examples.
        </p>
        <p>
        Modified JavaScript Value step, is intuitive and efficient. You can use various functions as well as conditional/loop statements.
        One note is to use equals() or equalIgnoreCase() for string comparison instead of == operator.
        </p>
        <p>
        User Defined Java Class step enables developers to write Java codes in the step. It doesn't support generic function.
        </p>
        <p>
        Java Filter is easy-to-use. You will need 2 subsequent steps to handle in-scope data records and out-of-scope data rows, respectively.<br />
        </p>
      </section>
    </div>
  );
}

export default PentahoComponent;
