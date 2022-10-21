import {Routes, Route} from "react-router-dom";
import {Home} from '../pages/Home'
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {Typography} from "@mui/material";

const AppRoutes = () => {

    return (
        <>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        React File Upload
                    </Typography>
                </Toolbar>

            </AppBar>
            <Routes>
                <Route path="/" index element={<Home/>}/>
            </Routes>

        </>
    )
}

export default AppRoutes
