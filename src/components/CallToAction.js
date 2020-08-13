import React from "react";
import Button from '@material-ui/core/Button';


export default function CallToAction(props) {
    return(
        <div className="CallToAction">
            <div className="CallToAction__Box">
                <h1 className="CallToAction__Header">Ready to get a headstart on your business?</h1>
                <Button className="CallToAction__Button" variant="contained" color="secondary">Demo</Button>
                <Button className="CallToAction__Button--2" variant="outlined" color="secondary">Pricing</Button>
            </div>
        </div>
    );
}