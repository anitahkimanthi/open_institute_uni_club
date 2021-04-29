import React from 'react';
import {Link} from "react-router-dom"
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
    const { open, handleClose, data} = props

    return (
        <div className="dialog">
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <div className="dialog">
                    <div className="dialog-content row no-gutters  ">
                        <div className="col-12">
                            <Toolbar className="toolbar">
                                <IconButton
                                    edge="start"
                                    color="inherit"
                                    onClick={handleClose}
                                    aria-label="close"
                                    className="closeIcon"
                                >
                                    <CloseIcon />
                                </IconButton>
                            </Toolbar>
                            <div className="row h-100 justify-content-center">
                                <div className="col-12 col-lg-10 my-auto">
                                    <div className="row h-100">
                                        <div className="col-12 col-lg-5">
                                            <img src={data.image} alt=""/>
                                        </div>
                                        <div className="col-12 col-lg-7 my-auto">
                                            <h3>{data.title}</h3>
                                            <p>{data.description}</p>
                                            {data.moreInfo.map((d, i) =>
                                                <p key={i}>{d}</p>
                                            )}
                                            <Link to={`${data.link}`}>
                                                <Button variant="contained" className="join"  onClick={handleClose}>{data.linkText}</Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}