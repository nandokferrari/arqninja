// @mui
import { Container, Grid, Typography } from '@mui/material';
// components
import Page from '../components/Page';
// sections
import { Observability, Summary } from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Embedded">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Embedded
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Summary title="Tabelas" total={714000} icon={'ant-design:database-outlined'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Summary title="Users" total={1352831} color="info" icon={'ant-design:user-outlined'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Summary title="TBs" total={1723315} color="warning" icon={'ant-design:code-sandbox-outlined'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Summary title="Alertas" total={234} color="error" icon={'ant-design:warning-outlined'} />
          </Grid>

          <Grid item xs={12}>
            <Observability
              title="Observability"
              // subheader="(+43%) than last year"
              chartLabels={['07/01/2003', '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003']}
              chartData={[
                {
                  name: 'Item 1',
                  type: 'column',
                  fill: 'solid',
                  data: [37, 21, 44, 22, 30],
                },
                {
                  name: 'Item 2',
                  type: 'area',
                  fill: 'gradient',
                  data: [21, 41, 56, 27, 43],
                },
                {
                  name: 'Item 3',
                  type: 'line',
                  fill: 'solid',
                  data: [64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
