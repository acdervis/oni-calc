import React from 'react';

// material
import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4,
  },
});

export class Dupes extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="display1">Dupe Management Coming Soon!</Typography>
      </div>
    );
  }
}

export default withStyles(styles)(Dupes);