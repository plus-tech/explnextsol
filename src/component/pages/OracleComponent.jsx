//
// Page of Database - Oracle

import React, { Component } from 'react';
import OracleDWHArch from "../img/OraDWHArch.png";

class OracleComponent extends Component {
    render() {
        return (
            <div id="oraclePage">
                <h3 className="text-center">Oracle</h3>
                <br />
                <hr />
                <section>
                  <p>As a leading relational database system, Oracle is widely used for both OLTP and OLAP.
                  Oracle provides a bunch of analytic functions such as FIRST, LEAD, LAG, MAX, RANK and so forth.
                  Here I take a note of some points when dealing with a large-scale database.
                  </p>
                  <p>
                    <b>A Typical Data Warehouse Architecture</b><br />
                    <img id="oracleDWHArch" src={OracleDWHArch} alt="Typical DWH Architecture" /><br />
                    <i>&nbsp;&nbsp;Source: Oracel Database Database Concepts</i><br />
                  </p>
                  <p>In many cases, a staging area is created where data is preprocessed before entering the data
                  warehouse. An ETL solution is perfectly suitable for this process.<br />
                  A data mart is dedicated to a specific business process as shown on the above diagram. In my experience,
                  if the data fed into BI tools reaches millions of records, building a data mart storing the data with
                  a higher granularity significantly improves performance.
                  </p>
                  <p><b>Partition and Composite Partition</b>
                  </p>
                  <p>
                  For a large table, using partition function is an effective way to organize the table. As necessary,
                  subpartitions can be created inside a partition.<br />
                  To be noticed, partition keys should be placed on the left side when you specify a condition clause in
                  your SQL statement. On the right side of the condition, use function instead of a sub-query. Otherwise
                  you may see PARTITION RANGE ALL showing up on the SQL exeution plan.<br />
                  Partition-wise join improves performance. You should be able to see PX PARTITION HASH row source in the
                  execution plan.
                  </p>
                  <p><b>Using NOLOGGING</b>
                  </p>
                  <p>
                  Using NOLOGGING when creating tables will save spaces for the redo files. This will also speed up
                  data uploading with direct path INSERT. However, it won't impact the subsequent DML statements.
                  </p>

                  <p><b>Table Compression</b>
                  </p>
                  <p>
                  For tables designed for query, it is highly recommended to use compression technology. For example, use
                  COMPRESS FOR HIGH QUERY while creating tables for a data warehouse.
                  </p>
                  <p>
                  To be noted that update operation uncompresses the table, costing a lot of time. The table can be restored
                  back to compression status by using the command, ALTER TABLE <i>tablename</i> MOVE PARTITION&nbsp;
                  <i>partitionname</i> COMPRESS FOR QUERY HIGH. If you create the table with composite partitions, you
                  will need to specify SUBPARTITION instead of PARTITION.
                  </p>
                  <p><b>WITH clause</b>
                  </p>
                  <p>
                  In case you compose a long query SQL script, WITH clause is a good tool to organize your SQL.
                  WITH clause actually creates temporary tables, which can be used for query in the SQL. Using WITH
                  for a shared subquery will increase SQL statement's readability and maintenance.
                  </p>
                  <p><b>Hint Clause</b>
                  </p>
                  <p>
                  For SQL statements issued to the server, SQL optimizer generates multiple plans and chooses the plan with
                  the lowest cost. Hint clause provides a mechanism for engineers to affect the optimization process.
                  For example, using /*+ append */ hint will effectively improve data load performance.
                  </p>
                  <p><b>Join</b>
                  </p>
                  <p>
                  Every table has a granularity defined by some specific fields. They together indicate each unique record
                  and ensure that there are no duplicate records. When you join two tables with one-to-one relationship,
                  all the granularity fields should be included in the condition clause. In case a granularity field is omitted,
                  the JOIN will be carried out with many-to-many relationship, leading to an unexpected result.
                  </p>
                </section>
            </div>
        );
    }

}

export default OracleComponent;
