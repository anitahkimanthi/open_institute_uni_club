import { makeStyles } from "@material-ui/core";
import LinearProgress from '@material-ui/core/LinearProgress';

const drawerWidth = 300

export const headerStyles = makeStyles(
    (theme) => ({

        brand : {
            flexGrow: 1,
        },
        
        avator : {
            marginRight: theme.spacing(1)
        },
        menuButton: {
            [theme.breakpoints.up("sm")] : {
               display : "none"
            },
            marginRight : theme.spacing(2),
        },
        text : {
            
        },

        drawer: {
            width: drawerWidth
        },
        paper: {
            width: "100% !important",
        },
          
        toolbar : theme.mixins.toolbar,

        toolbar : {
            backgroundColor: "#ffffff",
            color: "#3f3f3f"
        },

        close : {
            float: "right",
            marginTop: "10px",
            marginRight: "20px"
        },
        navitems : {
            display: "inherit",
            [theme.breakpoints.down("sm")]:{
                display : "none"
            },
        }
    })
)

