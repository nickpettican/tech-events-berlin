import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import styles from "./styles";

const avatarTable = {
  meetup:
    "https://yt3.ggpht.com/-2E49RwVO-qM/AAAAAAAAAAI/AAAAAAAAAAA/ARo6iJwdG40/s68-c-k-no-mo-rj-c0xffffff/photo.jpg",
  eventbrite:
    "https://cdn.evbstatic.com/s3-s3/static/images/support_site/support_about_us/eventbrite_logo_thumb.jpg"
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
  console.log(origin);
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Avatar aria-label={origin} src={avatarTable[origin]} className={classes.avatar} />}
        title={organiser.name}
        subheader={moment(timeStart).calendar()}
      />
      <CardMedia
        component="img"
        alt={name}
        className={classes.media}
        height="140"
        image={photoUrl}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography component="p">{venue.address}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" href={eventUrl}>
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
