import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import moment from "moment";
import styles from "./styles";
import { TableBody, TableRow, TableCell } from "@material-ui/core";
import { CalendarToday, AccessTime, People, LocationOn } from "@material-ui/icons";

const avatarTable = {
  meetup:
    "https://yt3.ggpht.com/-2E49RwVO-qM/AAAAAAAAAAI/AAAAAAAAAAA/ARo6iJwdG40/s68-c-k-no-mo-rj-c0xffffff/photo.jpg",
  eventbrite:
    "https://cdn.evbstatic.com/s3-s3/static/images/support_site/support_about_us/eventbrite_logo_thumb.jpg"
};

const convertToGoogleMapsLink = (address) => {
  try {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURI(
      address.split(" ").join("+")
    )}`;
  } catch (error) {
    return "https://www.google.com/maps";
  }
};

const EventGridCard = ({
  classes,
  origin,
  name,
  eventUrl,
  id,
  photoUrl,
  venue,
  timeStart,
  timeEnd,
  attendees,
  waitlistCount,
  organiser
}) => {
  let eventTimeStart = moment(timeStart);
  let eventTimeEnd = moment(timeEnd);
  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <Card className={classes.card}>
        <CardHeader
          classes={{ title: classes.cardTitle, subheader: classes.cardSubheader }}
          avatar={
            <Avatar aria-label={origin} src={avatarTable[origin]} className={classes.avatar} />
          }
          title={organiser.name}
          subheader={eventTimeStart.calendar()}
        />
        <CardMedia
          component="img"
          alt={name}
          className={classes.media}
          height="150"
          image={photoUrl}
          title={name}
        />
        <CardContent>
          <Typography align="left" gutterBottom variant="h6" component="h2">
            {name}
          </Typography>
          <TableBody>
            <TableRow>
              <TableCell align="left" className={classes.tableIcon}>
                <CalendarToday />
              </TableCell>
              <TableCell>
                <Typography align="left" gutterBottom component="p" className={classes.h6}>
                  {`${eventTimeStart.format("MMM Do YYYY")}, ${eventTimeStart.fromNow()}`}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left" className={classes.tableIcon}>
                <AccessTime />
              </TableCell>
              <TableCell>
                <Typography align="left" gutterBottom component="p" className={classes.h6Bold}>
                  {`${eventTimeStart.format("H:mm")} - ${eventTimeEnd.format("H:mm")}`}
                </Typography>
              </TableCell>
            </TableRow>
            {attendees ? (
              <TableRow>
                <TableCell align="left" className={classes.tableIcon}>
                  <People />
                </TableCell>
                <TableCell>
                  <Typography align="left" gutterBottom component="p" className={classes.h6}>
                    {`${attendees} people attending`}
                  </Typography>
                </TableCell>
              </TableRow>
            ) : null}
            <TableRow>
              <TableCell align="left" className={classes.tableIcon}>
                <LocationOn />
              </TableCell>
              <TableCell>
                <Typography align="left" gutterBottom component="p">
                  <a className={classes.locationLink} href={convertToGoogleMapsLink(venue.address)}>
                    {venue.address}
                  </a>
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </CardContent>
        <CardActions>
          <Button
            classes={{ root: classes.seeMoreButton }}
            size="small"
            color="primary"
            href={eventUrl}
          >
            See more
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

EventGridCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventGridCard);
