//
// Page of Database - Oracle
import {
  Box,
  Center,
  Divider,
  Heading,
  Text,
  Image,
} from '@chakra-ui/react';

import OracleDWHArch from "../img/OraDWHArch.png";

function OracleComponent() {
  return (
    <Box className="boxToplevelpage">
      <Heading as='h3' size='md'>
        Oracle
      </Heading>
      <br/>
      <Divider />
      <Text className="txtParagraph">
        As a leading relational database system, Oracle is widely used for both OLTP and OLAP.
        Oracle provides a bunch of analytic functions such as FIRST, LEAD, LAG, MAX, RANK and so forth.
        Here I take a note of some points when dealing with a large-scale database.
      </Text>

      <Heading as='h4' className="hdIntext" size='sm'>A Typical Data Warehouse Architecture</Heading>
      <Center className="cntDiagram">
        <Image src={OracleDWHArch} alt='Typical DWH Architecture' />
      </Center>
      <i>&nbsp;&nbsp;Source: Oracel Database Database Concepts</i><br />
      <Text className="txtParagraph">
        In many cases, a staging area is created where data is preprocessed before entering the data
        warehouse. An ETL solution is perfectly suitable for this process.
      </Text>
      <Text className="txtParagraph">
        A data mart is dedicated to a specific business process as shown on the above diagram. In my experience,
        if the data fed into BI tools reaches millions of records, building a data mart storing the data with
        a higher granularity significantly improves performance.
      </Text>

      <Heading as='h4' className="hdIntext" size='sm'>Partition and Composite Partition</Heading>
      <Text className="txtParagraph">
        For a large table, using partition function is an effective way to organize the table. As necessary,
        subpartitions can be created inside a partition.
      </Text>
      <Text className="txtParagraph">
        To be noticed, partition keys should be placed on the left side when you specify a condition clause in
        your SQL statement. On the right side of the condition, use function instead of a sub-query. Otherwise
        you may see PARTITION RANGE ALL showing up on the SQL exeution plan.
      </Text>
      <Text className="txtParagraph">
        Partition-wise join improves performance. You should be able to see PX PARTITION HASH row source in the
        execution plan.
      </Text>

      <Heading as='h4' className="hdIntext" size='sm'>Using NOLOGGING</Heading>
      <Text className="txtParagraph">
        Using NOLOGGING when creating tables will save spaces for the redo files. This will also speed up
        data uploading with direct path INSERT. However, it won't impact the subsequent DML statements.
      </Text>

      <Heading as='h4' className="hdIntext" size='sm'>Table Compression</Heading>
      <Text className="txtParagraph">
        For tables designed for query, it is highly recommended to use compression technology. For example, use
        COMPRESS FOR HIGH QUERY while creating tables for a data warehouse.
      </Text>
      <Text className="txtParagraph">
        To be noted that update operation uncompresses the table, costing a lot of time. The table can be restored
        back to compression status by using the command, ALTER TABLE <i>tablename</i> MOVE PARTITION&nbsp;
        <i>partitionname</i> COMPRESS FOR QUERY HIGH. If you create the table with composite partitions, you
        will need to specify SUBPARTITION instead of PARTITION.
      </Text>

      <Heading as='h4' className="hdIntext" size='sm'>WITH clause</Heading>
      <Text className="txtParagraph">
        In case you compose a long query SQL script, WITH clause is a good tool to organize your SQL.
        WITH clause actually creates temporary tables, which can be used for query in the SQL. Using WITH
        for a shared subquery will increase SQL statement's readability and maintenance.
      </Text>

      <Heading as='h4' className="hdIntext" size='sm'>Hint Clause</Heading>
      <Text className="txtParagraph">
        For SQL statements issued to the server, SQL optimizer generates multiple plans and chooses the plan with
        the lowest cost. Hint clause provides a mechanism for engineers to affect the optimization process.
        For example, using /*+ append */ hint will effectively improve data load performance.
      </Text>

      <Heading as='h4' className="hdIntext" size='sm'>Join</Heading>
      <Text className="txtParagraph">
        Every table has a granularity defined by some specific fields. They together indicate each unique record
        and ensure that there are no duplicate records. When you join two tables with one-to-one relationship,
        all the granularity fields should be included in the condition clause. In case a granularity field is omitted,
        the JOIN will be carried out with many-to-many relationship, leading to an unexpected result.
      </Text>

    </Box>
  );
}

export default OracleComponent;
