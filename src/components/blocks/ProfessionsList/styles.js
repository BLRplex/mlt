export default theme => ({
  linksContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  link: {
    marginRight: theme.spacing.unit,
    textDecoration: 'none',
    color: theme.palette.action.active,
  },
});
