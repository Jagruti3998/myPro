import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { textAlign } from '@material-ui/system';






export default function login() {

    return (
        <div className="login">
             <Grid container spacing={3}>
             <Grid item xs={4}>
             </Grid> 
             <Grid item xs={4} >
                    <Grid item xs={12}>
                    <h2>Login</h2>
                    </Grid>                   
                   <Grid item xs={12}>
                   <TextField id="filled-basic" label="Username" />
                   </Grid>
                   <Grid item xs={12}>
                   <TextField id="filled-basic" label="Password" />
                   </Grid>
                   <Grid item xs={12}>
                        <Button variant="contained" color="primary">
                            Login
                         </Button>
                   </Grid>
            </Grid>  
            <Grid item xs={4}>
            </Grid>   
            </Grid>
            
        </div>
    );
}
