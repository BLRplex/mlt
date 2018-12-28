export default theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  avatar: {
    margin: theme.spacing.unit / 2,
    marginBottom: 0,
    width: 60,
    height: 60,
  },
  avatarWrapper: {
    width: 64,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    cursor: 'pointer',
  },
});
