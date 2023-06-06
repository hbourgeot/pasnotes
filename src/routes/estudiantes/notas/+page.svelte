<script>
     import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';

     const HEADER = [
        {
        estudiante: "estudiante",
        materia: 'materia',
        curso: 'curso',
        turno: 'nocturno'
     }
     ]
</script>


<DataTable table$aria-label="People list" style="max-width: 100%;" class='text-center flex flex-center gap-2'>
    <Head class='bg-color-900 ' >
      <Row>
        <Cell>Name</Cell>
        <Cell>Favorite Color</Cell>
        <Cell numeric>Favorite Number</Cell>
      </Row>
    </Head>
    <Body>
      <Row>
        <Cell>Steve</Cell>
        <Cell>Red</Cell>
        <Cell numeric>45</Cell>
      </Row>
      <Row>
        <Cell>Sharon</Cell>
        <Cell>Purple</Cell>
        <Cell numeric>5</Cell>
      </Row>
      <Row>
        <Cell>Rodney</Cell>
        <Cell>Orange</Cell>
        <Cell numeric>32</Cell>
      </Row>
      <Row>
        <Cell>Mack</Cell>
        <Cell>Blue</Cell>
        <Cell numeric>12</Cell>
      </Row>
    </Body>
  </DataTable>
   

