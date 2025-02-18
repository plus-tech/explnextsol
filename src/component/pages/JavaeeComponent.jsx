//
// Page of Application - Java EE

import NLayerDiag from "../img/JavaeeNLayerDiag.png";
import LegaSysDiag from "../img/JavaeeLegaDiag.png";
import MyHomepageArch from "../img/myHomepageArch.png";

function JavaeeComponent() {
  return (
    <div id="javaeePage">
      <h3 className="text-center">Java EE</h3>
      <br />
      <hr />
      <section>
        <p>Java EE is the mostly used platform for enterprise applications. An application is made up
        of components that communicate with each other as designed. A bunch of open source application development
        frameworks come with Java EE. Spring is the most popular one among them. Here we take a quick tour of
        the multi-layered architecture for web applications.
        </p>
        </section>
        <section>
        <p><b>Multi-layered Architecture</b><br />
        <img id="nLayerDiag" src={NLayerDiag} alt="Multi-layered Architecture" /><br />
        </p>
        <p>
        In general, we use 3-layer model as the reference, presentation layer, business layer and persistence
        layer. We can build more sub-layers bearing specific functions inside them as illustrated on the
        above diagram. For example, we can introduce a business logic layer that implements the lowest granularity business
        logics and a service layer that organizes logic layer functions as a facade.
        </p>
        <p><b>Integration with Legacy Systems</b><br />
        <img id="legaSysDiag" src={LegaSysDiag} alt="Multile Layered Architecture" /><br />
        </p>
        <p>
        This multi-layered architecture shows great flexibility in terms of integration with legacy systems,
        which are still in use in many companies. The above diagram shows a scenario where Websphere MQ is used to
        communicate with legacy systems.
        </p>
        </section>
        <section>
        <p><b>Architecture Used for This Website</b><br />
        <img id="myHomepageArch" src={MyHomepageArch} alt="Architecture Used for This Website" /><br />
        </p>
        <p>
        This website employs the architecture illustrated as above. React is used to build the user interfaces, consuming
        the REST services provided by the back end application.
        </p>
      </section>
    </div>
  );
}

export default JavaeeComponent;
