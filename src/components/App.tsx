// import React, { useState } from 'react';
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import TextField from '@material-ui/core/TextField';

// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import Icon from '@material-ui/core/Icon';
// import { Add, Close } from '@material-ui/icons';

// import './App.css';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     container: {
//       display: 'flex',
//       flexWrap: 'wrap',
//     },
//     heading: {
//       textAlign: 'center',
//       padding: 5,
//       color: '#333',
//     },
//     button: {
//       margin: theme.spacing(1),
//     },
//     button1: {
//       margin: theme.spacing(1),
//       backgroundColor: '#00e299',
//       color: '#fff',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     input: {
//       display: 'none',
//     },
//     textField: {
//       minWidth: '60%',
//       flexGrow: 1,
//       margin: theme.spacing(1),
//     },
//     number: {
//       width: '20%',
//       margin: theme.spacing(1),
//     },
//     dense: {
//       marginTop: 19,
//     },
//     menu: {
//       width: 200,
//     },
//     paper: {
//       maxWidth: '500px',
//       width: '95%',
//     },
//     fields: {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'space-between',
//       padding: 8,
//     },
//     centered: {
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     close: {
//       backgroundColor: '#ff0000',
//       color: '#fff',
//       height: '30px',
//       width: '30px',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       minWidth: '30px',
//     },
//   })
// );

// const App: React.FC = () => {
//   const classes = useStyles({});
//   const [values, setValues] = React.useState<State>({
//     name: '',
//     amt: '',
//   });

//   const [fields, setFields] = useState([{ value: null }]);

//   interface State {
//     name: string;
//     amt: string;
//   }

//   const handleChange = (name: keyof State) => (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setValues({ ...values, [name]: event.target.value });
//   };

//   function handleAdd() {
//     const values = [...fields];
//     values.push({ value: null });
//     setFields(values);
//   }

//   function handleRemove(i) {
//     const values = [...fields];
//     values.splice(i, 1);
//     setFields(values);
//   }
//   return (
//     <div
//       className='App'
//       style={{
//         width: '100vw',
//         minHeight: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         flexDirection: 'column',
//       }}
//     >
//       <Paper className={classes.paper}>
//         <Typography className={classes.heading} variant='h5'>
//           Block Splitter
//         </Typography>
//         {fields.map((field, idx) => {
//           return (
//             <div className={classes.fields}>
//               <TextField
//                 variant='outlined'
//                 label='Address'
//                 className={classes.textField}
//                 value={values.name}
//                 onChange={handleChange('name')}
//               />
//               <TextField
//                 variant='outlined'
//                 label='Amount'
//                 defaultValue='0'
//                 value={values.amt}
//                 onChange={handleChange('amt')}
//                 className={classes.number}
//               />
//               <Button
//                 variant='contained'
//                 color='default'
//                 className={`${classes.close} ${classes.centered}`}
//                 onClick={() => handleRemove(idx)}
//               >
//                 <Icon
//                   className={classes.centered}
//                   style={{
//                     height: '20px',
//                   }}
//                 >
//                   <Close />
//                 </Icon>
//               </Button>
//             </div>
//           );
//         })}
//         <div
//           style={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             width: '100%',
//           }}
//         >
//           <Button
//             variant='contained'
//             className={classes.button1}
//             onClick={() => handleAdd()}
//           >
//             <Icon className={classes.centered}>
//               <Add />
//             </Icon>
//           </Button>
//           <Button
//             variant='contained'
//             color='primary'
//             className={classes.button}
//           >
//             Submit
//           </Button>
//         </div>
//       </Paper>
//     </div>
//   );
// };

// export default App;
const App = () => {};
export { App };
