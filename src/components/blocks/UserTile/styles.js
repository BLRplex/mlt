export default theme => ({
  tile: {
    cursor: 'pointer',
    '&>div': {
      borderRadius: theme.spacing.unit,
    },
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  popover: {
    cursor: 'pointer',
    padding: theme.spacing.unit * 4,
  },
});
