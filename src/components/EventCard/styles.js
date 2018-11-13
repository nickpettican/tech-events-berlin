import colors from "../../config/colors";

export default {
  card: {
    maxWidth: 500,
    margin: "auto",
    marginBottom: "1em",
    marginTop: "1em"
  },
  cardTitle: {
    textAlign: "left",
    fontSize: "1em"
  },
  cardSubheader: {
    textAlign: "left",
    fontSize: "1em"
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: "cover"
  },
  avatar: {
    margin: 10,
    backgroundColor: colors.b5
  },
  seeMoreButton: {
    marginLeft: "auto"
  },
  locationLink: {
    textDecoration: "none",
    color: colors.b6,
    fontSize: "1.1em"
  },
  h6: {
    fontSize: "1.1em"
  },
  h6Bold: {
    fontSize: "1.1em",
    fontWeight: 600
  }
};
