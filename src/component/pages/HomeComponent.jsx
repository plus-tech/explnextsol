//
// Page of Home

import React, { Component } from 'react';
import ConceptualDiagram from "../img/SecuritiesSys_ConceptualDiag.png";

class HomeComponent extends Component {
    render() {
        return (
            <div id="homePage">
                <h3 className="text-center">Design Solutions in the <br />Context of Enterprise</h3>
                <br />
                <hr />
                <section>
                  <p>In an enterprise, a portfolio of applications works together to support day-to-day operations.
                  We can seldom see a monolithic application in this picture. The major applications
                  are integrated with each other at system level in a bid to optimize processes and reduce operation
                  errors at the same time. Although there are a small portion of local applications used as a
                  support tool by some users, they are fed with data in either a manual or an automatic way.
                  </p>
                  <p>
                  Solution design naturally falls into this system context. When a new application joins the big family,
                  it is required to communicate with the other members through data sharing or service sharing.
                  In effect there are still many legacy systems, obsolete systems and blackbox systems in operation in most companies.
                  According to survey, 60% of companies will keep using core systems for not less than 21 years by 2025. A new
                  solution weighs heavily on synergizing cutting edge technologies and existent ones.
                  </p>
                  <p>
                  On the other hand, a solution in nature is supposed to solve a specific business case. It takes
                  into shape within the specific business context. In principle, the business process it serves defines what the
                  solution needs to implement and positions it in the entire picture as well.
                  </p>
                  <p>
                  Additionally, there are many other factors to be taken into account such as development processes, enterprise
                  culture and etc. For instance, waterfall model as a traditional methodology is commonly used in Japan.
                  </p>
                  <p>
                  AWS Well-Architected Framework is an excellent reference which contains 5 pillars:
                  <ul class="listInPage">
                      <li>Operational excellence</li>
                      <li>Security</li>
                      <li>Performance</li>
                      <li>Reliability</li>
                      <li>Cost optimization</li>
                  </ul>
                  </p>
                </section>
            </div>
        );
    }

}

export default HomeComponent;
