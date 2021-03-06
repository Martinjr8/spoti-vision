import React from 'react';
import _ from 'lodash';
import {
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';

import { useStyles } from '../utils/styles';
import TopsLoader from './TopsLoader';

const Tops = ({ tops }) => {
  const classes = useStyles();

  return (
    <div className="profile">
      <Typography variant="h5" component="h3">
        My top artists:
      </Typography>
      <List>
        {!_.isEmpty(tops) ? (
          tops.map((top, index) => {
            return (
              <ListItem key={top.id}>
                <Typography
                  className={classes.numbers}
                  variant="body1"
                  component="p"
                >
                  {index + 1}
                </Typography>
                <ListItemAvatar>
                  <Avatar
                    src={
                      top?.album ? top.album.images[2].url : top.images[2].url
                    }
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={top.name}
                  secondary={
                    top?.album
                      ? top.artists[0].name
                      : `Followers: ${top.followers.total}`
                  }
                />
              </ListItem>
            );
          })
        ) : (
          <TopsLoader />
        )}
      </List>
    </div>
  );
};

export default Tops;
