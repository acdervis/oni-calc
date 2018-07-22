import React from 'react';

import { withStyles, Typography } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  chip: {
    marginRight: theme.spacing.unit,
  },
  avatar: {
    height: '75%',
    width: '75%',
  },
});

export class ResourceChips extends React.Component {
  render() {
    const { classes, ios } = this.props;

    let mappedIOs = ios
      .sort((a, b) => {
        return a.name > b.name;
      })
      .map((io, index) => {
        const rate = io.rate;
        if (io.unit) {
          io.rate = io.rate.replace('per ', '/').replace('second', 's');
        }

        const imageUrl = `/images/resources/${io.name
          .toLowerCase()
          .split(' ')
          .join('-')}.png`;

        return (
          <Chip
            key={index}
            className={classes.chip}
            avatar={
              <Avatar>
                <div
                  className={classes.avatar}
                  style={{
                    background: `url(${imageUrl}) no-repeat center center`,
                    backgroundSize: 'contain',
                  }}
                />
              </Avatar>
            }
            label={[io.name, io.value, (io.unit || '') + rate].join(' ')}
          />
        );
      });
    if (mappedIOs.length === 0) {
      mappedIOs = <Typography>No resources found</Typography>;
    }
    return <div>{mappedIOs}</div>;
  }
}

export default withStyles(styles)(ResourceChips);