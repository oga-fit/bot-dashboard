import { Container, Grid, Input, Typography } from "@material-ui/core";
import Navbar from "../components/Navbar";
import SettingCard from "../components/SettingCard";
import { AutoModTypes } from "../utils/constants/constants";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container className="container">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" className={`mb-5`}>
              Automod settings
            </Typography>
            <Grid container justify="flex-start" spacing={2}>
              {Object.values(AutoModTypes).map((value, index) => (
                <Grid key={index} item>
                  <SettingCard
                    noCardActions
                    key={value.toString()}
                    actions
                    title={value}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" className={`mb-5`}>
              Bump settings
            </Typography>
            <Grid container justify="flex-start" spacing={2}>
              <Grid key={1} item>
                <SettingCard
                  noCardActions
                  key="Bump channel"
                  title="Bump channel">
                  <Input fullWidth placeholder="Channel ID" />
                </SettingCard>
              </Grid>
              <Grid key={2} item>
                <SettingCard
                  noCardActions
                  key="Reminder role"
                  title="Reminder role">
                  <Input fullWidth placeholder="Role ID" />
                </SettingCard>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" className={`mb-5`}>
              Staff settings
            </Typography>
            <Grid container justify="flex-start" spacing={2}>
              <Grid key={1} item>
                <SettingCard
                  noCardActions
                  key="Staff channel"
                  title="Staff channel">
                  <Input fullWidth placeholder="Channel ID" />
                </SettingCard>
              </Grid>
              <Grid key={2} item>
                <SettingCard
                  noCardActions
                  key="General staff role"
                  title="General staff role">
                  <Input fullWidth placeholder="Role ID" />
                </SettingCard>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
