import {
  Card,
  CardActions,
  CardContent,
  Chip,
  FormControl,
  IconButton,
  Input,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import { Settings } from "@material-ui/icons";
import React from "react";
import { Actions } from "../utils/constants/constants";

const useStyles = makeStyles({
  card: {
    width: 400,
  },
  title: {
    fontSize: 16,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    height: 30,
    marginLeft: 2,
    marginRight: 2,
  },
  select: {
    width: "100%",
  },
});

export default function SettingCard({
  title,
  actions = false,
  children = null,
  noCardActions = false,
}) {
  const classes = useStyles();
  const automodActions = Object.values(Actions);

  const [selectedActions, setSelectedActions] = React.useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedActions(event.target.value as string[]);
  };

  return (
    <>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title}>{title}</Typography>
          {actions && (
            <FormControl className={classes.select}>
              <Select
                multiple
                value={selectedActions}
                onChange={handleChange}
                input={<Input />}
                renderValue={(selected) => (
                  <div className={classes.chips}>
                    {(selected as string[]).map((value) => (
                      <Chip
                        key={value}
                        className={classes.chip}
                        label={value}
                      />
                    ))}
                  </div>
                )}>
                {automodActions.map((action) => (
                  <MenuItem key={action} value={action}>
                    {action}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
          {children}
        </CardContent>
        {!noCardActions && (
          <CardActions>
            <IconButton>
              <Settings />
            </IconButton>
          </CardActions>
        )}
      </Card>
    </>
  );
}
