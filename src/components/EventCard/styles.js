import colors from "../../config/colors";

export default {
  card: {
    maxWidth: 400,
    margin: "auto",
    marginBottom: "1em",
    marginTop: "1em"
  },
  cardHeader: {
    title: {
      textAlign: "left"
    },
    subheader: {
      textAlign: "left"
    }
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: "cover"
  },
  avatar: {
    margin: 10,
    backgroundColor: colors.b5
  }
};
