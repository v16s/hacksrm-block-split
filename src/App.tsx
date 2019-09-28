import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import secView from './secView';

import './App.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  })
);

const App: React.FC = () => {
  const classes = useStyles({});
  const [fields, setFields] = useState([{ value: null }]);

  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }

  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }
  return (
    <div className='App'>
      {fields.map((field, idx) => {
        return (
          <div key={`${field}-${idx}`}>
            <input
              type='text'
              placeholder='Enter text'
              value={field.value || ''}
              onChange={e => handleChange(idx, e)}
            />
            <button type='button' onClick={() => handleRemove(idx)}>
              x
            </button>
            <br></br>
            <button type='button' onClick={() => handleAdd()}>
              Add new user
            </button>
            <Router>
              <Link to='/secView'>
                <Button
                  variant='contained'
                  color='primary'
                  className={classes.button}
                >
                  Primary
                </Button>
              </Link>
              <Switch>
                <Route path='/secView' component={secView} />
              </Switch>
            </Router>
          </div>
        );
      })}
    </div>
  );
};

export default App;
