export default (theme) => ({
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
    marginTop: "70px"
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  }
});
