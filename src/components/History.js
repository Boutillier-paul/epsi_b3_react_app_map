import './style.css'

import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@mui/material';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function History() {
    const [open, setOpen] = useState(false);
    const [history, setHistory] = useState([])

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    useEffect(() => {
        const data = localStorage.getItem('history');
        if (data) {
            setHistory(JSON.parse(data));
        }
    }, [localStorage.getItem('history')]);
  
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>Historique de navigation </Button>

            <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose}>

                <DialogTitle sx={{textAlign: 'center'}}>Historique</DialogTitle>
                <DialogContent>
                    { history.length > 0 && history.map((item, index) => 
                        <DialogContentText key={index}>{item.locationFrom.city.label} &gt; {item.locationTo.city.label}</DialogContentText>
                    )}

                    { history.length < 1 &&
                        <DialogContentText>Vous n'avez pas encore effectué de recherche.</DialogContentText>
                    }
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Retour</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}


export default History