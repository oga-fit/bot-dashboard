import React, { Component } from "react";

// Components
import {
  TextField,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  InputAdornment,
  ListSubheader,
  Typography,
} from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";

// Styles
import "./Profile.scss";

const sports = [
  {
    key: "a",
    sports: ["American Football", "Athletics", "Archery"],
  },
  {
    key: "b",
    sports: ["Badminton", "Baseball", "Basketball", "Boxing", "Bowls"],
  },
  {
    key: "c",
    sports: ["Canoeing", "Curling", "Cricket", "Cycling"],
  },
  {
    key: "d",
    sports: ["Darts", "Diving"],
  },
  {
    key: "e",
    sports: ["Equestrian"],
  },
  {
    key: "f",
    sports: ["Fencing", "Football"],
  },
  {
    key: "g",
    sports: ["Golf", "Gymnastics"],
  },
  {
    key: "h",
    sports: ["Handball", "Hockey", "Horse Racing"],
  },
  {
    key: "i",
    sports: ["Ice Hockey"],
  },
  {
    key: "j",
    sports: ["Judo"],
  },
  {
    key: "m",
    sports: ["Mixed Martial Arts", "Modern Pentathlon"],
  },
  {
    key: "n",
    sports: ["Netball"],
  },
  {
    key: "r",
    sports: ["Rowing", "Rugby League", "Rugby Union"],
  },
  {
    key: "s",
    sports: ["Sailing", "Snooker", "Squash", "Swimming"],
  },
  {
    key: "t",
    sports: ["Table Tennis", "Taekwondo", "Tennis", "Triathlon"],
  },
  {
    key: "v",
    sports: ["Volleyball"],
  },
  {
    key: "w",
    sports: ["Weightlifting", "Winter Sports", "Wrestling"],
  },
];

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      profile: {
        weight: "",
        length: "",
        dob: null,
        goal: "",
        bodyType: "",
        gender: "",
        special: "",
        region: "",
        sport: "",
      },
    };

    // Binds
    this.handleChange = this.handleChange.bind(this);
    this.handleDobChange = this.handleDobChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      ...this.state,
      profile: {
        ...this.state.profile,
        [name]: value,
      },
    });
  }

  handleDobChange(e) {
    this.setState({
      ...this.state,
      profile: {
        ...this.state.profile,
        dob: e,
      },
    });
  }

  get age() {
    const ageDifMs = Date.now() - new Date(this.state.profile.dob).getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  render() {
    return (
      <div className="Page">
        <div className="form">
          <div className="section">
            <TextField
              name="weight"
              className="large-field"
              label="Current weight"
              type="number"
              variant="outlined"
              onChange={this.handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">KG</InputAdornment>
                ),
              }}
            />
            <TextField
              name="length"
              className="large-field"
              label="Current length"
              type="number"
              variant="outlined"
              onChange={this.handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">CM</InputAdornment>
                ),
              }}
            />
            <KeyboardDatePicker
              className="large-field"
              format="dd/MM/yyyy"
              name="dob"
              label="Birthday"
              variant="inline"
              inputVariant="outlined"
              autoOk
              maxDate={new Date()}
              value={this.state.profile.dob}
              InputAdornmentProps={{ position: "start" }}
              onChange={this.handleDobChange}
            />
          </div>
          <div className="section">
            <FormControl variant="outlined" className="large-field">
              <InputLabel id="goals-label">Goal</InputLabel>
              <Select
                name="goal"
                labelId="goals-label"
                type="select"
                variant="outlined"
                onChange={this.handleChange}
                value={this.state.profile.goal}
                label="Goal">
                <MenuItem value="Gain mass">Gain mass</MenuItem>
                <MenuItem value="Maintain weight">Maintain weight</MenuItem>
                <MenuItem value="Lose weight">Lose weight</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" className="large-field">
              <InputLabel id="body-type-label">Body type</InputLabel>
              <Select
                name="bodyType"
                type="select"
                label="Body type"
                labelId="body-type-label"
                onChange={this.handleChange}
                value={this.state.profile.bodyType}
                variant="outlined">
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Bulked up">Bulked up</MenuItem>
                <MenuItem value="Overweight">Overweight</MenuItem>
                <MenuItem value="Lean">Lean</MenuItem>
                <MenuItem value="Healthy weight">Healthy weight</MenuItem>
                <MenuItem value="Skinny">Skinny</MenuItem>
                <MenuItem value="Underweight">Underweight</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" className="large-field">
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
                name="gender"
                variant="outlined"
                label="Gender"
                labelId="gender-label"
                onChange={this.handleChange}
                value={this.state.profile.gender}
                type="select">
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" className="large-field">
              <InputLabel id="special-label">Special</InputLabel>
              <Select
                name="special"
                variant="outlined"
                label="Special"
                labelId="special-label"
                onChange={this.handleChange}
                value={this.state.profile.special}
                type="select">
                <MenuItem value="None">None</MenuItem>
                <MenuItem value="Calisthenics">Calisthenics (no gym)</MenuItem>
                <MenuItem value="Pokemon GO">Pokemon GO User</MenuItem>
                <MenuItem value="MyFitnessPal">MyFitnessPal User</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" className="large-field">
              <InputLabel id="region-label">Region</InputLabel>
              <Select
                name="region"
                variant="outlined"
                label="Region"
                labelId="region-label"
                onChange={this.handleChange}
                value={this.state.profile.region}
                type="select">
                <MenuItem value="Europe">Europe</MenuItem>
                <MenuItem value="North America">North America</MenuItem>
                <MenuItem value="South America">South America</MenuItem>
                <MenuItem value="Asia">Asia</MenuItem>
                <MenuItem value="Africa">Africa</MenuItem>
                <MenuItem value="Oceania">Oceania</MenuItem>
              </Select>
            </FormControl>
            <FormControl key="sport" variant="outlined" className="large-field">
              <InputLabel id="sport-label">Favorite Sport</InputLabel>
              <Select
                name="sport"
                variant="outlined"
                label="Favorite Sport"
                labelId="sport-label"
                onChange={this.handleChange}
                value={this.state.profile.sport}
                defaultValue=""
                type="select">
                <MenuItem value="">None</MenuItem>
                {sports.map((item) => [
                  <ListSubheader disableSticky>
                    {item.key.toUpperCase()}
                  </ListSubheader>,
                  item.sports.map((sport) => (
                    <MenuItem value={sport}>{sport}</MenuItem>
                  )),
                ])}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="preview">
          <Typography variant="h5" color="textPrimary" className="title">
            Preview
          </Typography>
          <div className="embed">
            <Typography variant="body1" color="inherit" className="title">
              User Profile
            </Typography>
            <Typography variant="body1" color="inherit" className="description">
              This is the profile of user Lexouden#1001
            </Typography>
            <div className="fields">
              <div className="field">
                <Typography
                  variant="body2"
                  color="textPrimary"
                  className="field-name">
                  Age
                </Typography>
                <Typography
                  variant="body2"
                  color="textPrimary"
                  className="field-value">
                  {this.age || "--"}
                </Typography>
              </div>
              <div className="field">
                <Typography
                  variant="body2"
                  color="textPrimary"
                  className="field-name">
                  Current weight
                </Typography>
                <Typography
                  variant="body2"
                  color="textPrimary"
                  className="field-value">
                  {this.state.profile.weight || "---"} kg |{" "}
                  {Math.floor(this.state.profile.weight / 0.45359237)} lbs
                </Typography>
              </div>
              <div className="field">
                <Typography
                  variant="body2"
                  color="textPrimary"
                  className="field-name">
                  Current length
                </Typography>
                <Typography
                  variant="body2"
                  color="textPrimary"
                  className="fiels-value">
                  {this.state.profile.length || "---"} cm |{" "}
                  {Math.floor((this.state.profile.length * 0.3937) / 12)}&prime;
                  {Math.round(((this.state.profile.length * 0.3937) / 12) * 12)}
                  &Prime;
                </Typography>
              </div>
              <div className="field">
                <Typography
                  variant="body2"
                  color="textPrimary"
                  className="field-name">
                  Gender
                </Typography>
                <Typography
                  variant="body2"
                  color="textPrimary"
                  className="field-value">
                  {this.state.profile.gender}
                </Typography>
              </div>
              <div className="field">
                <Typography
                  variant="body2"
                  color="textPrimary"
                  className="field-name">
                  Goal
                </Typography>
                <Typography
                  variant="body2"
                  color="textPrimary"
                  className="field-value">
                  {this.state.profile.goal}
                </Typography>
              </div>
              <div className="field">
                <Typography
                  variant="body2"
                  color="textPrimary"
                  className="field-name">
                  Body type
                </Typography>
                <Typography
                  variant="body2"
                  color="textPrimary"
                  className="field-value">
                  {this.state.profile.bodyType}
                </Typography>
              </div>
              <div className="field">
                <Typography
                  variant="body2"
                  color="textPrimary"
                  className="field-name">
                  Special
                </Typography>
                <Typography
                  variant="body2"
                  color="textPrimary"
                  className="field-value">
                  {this.state.profile.special}
                </Typography>
              </div>
              <div className="field">
                <Typography
                  variant="body2"
                  color="textPrimary"
                  className="field-name">
                  Region
                </Typography>
                <Typography
                  variant="body2"
                  color="textPrimary"
                  className="field-value">
                  {this.state.profile.region}
                </Typography>
              </div>
              <div className="field">
                <Typography
                  variant="body2"
                  color="textPrimary"
                  className="field-name">
                  Favorite Sport
                </Typography>
                <Typography
                  variant="body2"
                  color="textPrimary"
                  className="field-value">
                  {this.state.profile.sport}
                </Typography>
              </div>
            </div>
          </div>
          <div className="image"></div>
        </div>
      </div>
    );
  }
}

export default Profile;
