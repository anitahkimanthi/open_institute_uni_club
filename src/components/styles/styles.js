import { makeStyles } from "@material-ui/core";

export const headerStyles = makeStyles(
    (theme) => ({
        auth: {
            [theme.breakpoints.down("sm")]:{
                display : "none"
            },
        },
        appBar: {
            boxShadow : "none",
            backgroundColor : "#010616"
        },
        avator : {
            marginRight: theme.spacing(1),
            border:" 1px solid #ffffff",
            color: "#ffffff",
            padding : "10px",

        },
        menuButton: {
            [theme.breakpoints.up("sm")] : {
               display : "none"
            },
            marginRight : theme.spacing(2),
        },
        headerLinks: {
            [theme.breakpoints.up("sm")] : {
                display : "flex",
                flexGrow : 1
             },
        },
        links:{
            [theme.breakpoints.up("sm")] : {
                display : "flex",
                flexGrow : 1
             },
            [theme.breakpoints.down("sm")]:{
                display : "none"
            },
        },
        linkItem : {
            width : "auto"
        },
        buttonItem: {
            [theme.breakpoints.up("sm")] : {
                display : "flex",
             },
        },
        toolbar : theme.mixins.toolbar,

        toolbar : {
            backgroundColor: "transparent",
            color: "#3f3f3f"
        },

        close : {
            float: "right",
            marginTop: "10px",
            marginRight: "20px"
        }
    })
)

