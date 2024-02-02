//
// Page of Business Intelligence - Tableau

import React, { Component } from 'react';
import TableauVizComponent from "../js/tableauviz.js";
import { Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const publicURL = "https://public.tableau.com/profile/jian#!/";

class TableauComponent extends Component {
    render() {
        return (
            <div id="tableauPage">
                <h3 className="text-center">Tableau</h3>
                <br />
                <hr />
                <section>
                  <p>Tableau is a business intelligence software.
                  Tableau is well known for easy-to-use, fast analytics and insightful dashboards.
                  Tableau data connector can connect to a wide range of data sources, such as text files,
                  databases, clouds and other platforms. It supports both live connections and extracts.</p>
                  <p>Tableau software started official support for Tableau Prep recently.
                  Tableau Prep is a visual tool to clean, transform and share data before it is fed into Tableau for
                  visualization. It helps extend Tableau to the data preparation process which is usually done
                  by SQL or ETL.</p>
                  <p>Tableau has a huge community where you can use Tableau Public to develop
                  visualizations and get connected with professionals all over the world.</p>
                  <p>Tableau is selected as one of the leaders by Gartner in the Magic Quadrant for 2020
                  for analytics and business intelligence tools.</p>
                  <p><b>For Enterprise</b></p>
                  <p>
                  At enterprise level, Tableau supports cluster deployment model with a scalable capability. You can
                  configure a primary server and multiple worker servers. Therefore, you can deploy Tableau server
                  components on each server accordingly, for example, application server, vizQL server, data server,
                  backgrounder and so forth.
                  </p>
                  <p>
                  Tableau supports integration with security platforms. Trusted tickets can secure the access to the dashboards.
                  </p>
                  <p>
                  Map is a very important feature in Tableau. Tableau can be integrated with a separate map server.
                  In addition, it can talk to the statistics calculation engine R.
                  </p>
                  <p><b>Performance Tuning</b>
                  </p>
                  <p>
                  For Performance tuning, Tableau provides a lot of tools on both desktop side and server side. First you can use
                  performance recorders to identify where the issues are. Accordingly you can tune calculations, queries,
                  data preparations, server related hardware and so forth. <br />
                  In case your data grows up to millions of records, it may be a good option to build a data mart where you can
                  summarize data on a higher granularity.
                  </p>
                  <p><b>Interesting Numbers</b></p>
                  <p>
                  4-type calculations: row-level calculations, aggregate calculations, table calculations and LOD expressions.
                  </p>
                  <p>
                  3-layered metadata model: connection, data model, vizQL model.
                  </p>
                  <p>
                  3-type caches: model cache, in-proc cache and external cache.
                  </p>
                  </section>
                  <hr/>
                  <p>
                    <Link href={publicURL} color="blue" isExternal>
                      Profile on Tableau Public <ExternalLinkIcon mx='2px' />
                    </Link>
                  </p>
                <TableauVizComponent />
            </div>
        );
    }

}

export default TableauComponent;
