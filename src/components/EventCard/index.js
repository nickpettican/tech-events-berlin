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
// import LocationIcon from "@material-ui/icons/LocationOn";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import styles from "./styles";

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

const EventCard = ({
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
    <Card className={classes.card}>
      <CardHeader
        classes={{ title: classes.cardTitle, subheader: classes.cardSubheader }}
        avatar={<Avatar aria-label={origin} src={avatarTable[origin]} className={classes.avatar} />}
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
        <Typography align="left" gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography align="left" gutterBottom component="p" className={classes.h6}>
          {`${eventTimeStart.format("MMM Do YYYY")}, ${eventTimeStart.fromNow()}`}
        </Typography>
        <Typography align="left" gutterBottom component="p" className={classes.h6Bold}>
          {`${eventTimeStart.format("H:mm")} - ${eventTimeEnd.format("H:mm")}`}
        </Typography>
        {attendees ? (
          <Typography align="left" gutterBottom component="p" className={classes.h6}>
            {`${attendees} people attending`}
          </Typography>
        ) : null}
        <Typography align="left" component="p">
          <a className={classes.locationLink} href={convertToGoogleMapsLink(venue.address)}>
            {venue.address}
          </a>
        </Typography>
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
  );
};

EventCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EventCard);
