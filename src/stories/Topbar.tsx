import { ArrowBackIos } from "@mui/icons-material"
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import { useEffect, useState } from "react"

interface TopbarProps{
    theRoute: string
}

export const Topbar: React.FC<TopbarProps> = (props: TopbarProps) => {

    const [title, setTitle] = useState("Get Started")

    useEffect(() => {
        function parseRoute(){
            const path = props.theRoute.split("/")
            if (path.length == 0){
                return
            }
            setTitle(path[path.length - 1])
        }
        parseRoute()
    }, [props.theRoute])

    return (
    <AppBar position="static">
        <Toolbar sx={{flex: 1, justifyContent: "space-between"}}>
            <Typography>
                <IconButton>
                    {props.nav ? <ArrowBackIos/> : <></>}
                </IconButton>
            </Typography>
            <Typography>
                {title}
            </Typography>
            <Typography>
                Cancel
            </Typography>
        </Toolbar>
    </AppBar>
)
}