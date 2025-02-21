import { ArrowBackIos, Home } from "@mui/icons-material"
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material"
import { useEffect, useState } from "react"

interface TopbarProps{
    theRoute: string
}

export const Topbar: React.FC<TopbarProps> = (props: TopbarProps) => {

    const [title, setTitle] = useState("Get Started")
    const [back, setBack] = useState(false)

    useEffect(() => {
        function parseRoute(){
            const path = props.theRoute.split("/")
            if (path[path.length - 1] == ""){
                return
            }
            setBack(path.length > 2)
            setTitle(`${path[path.length - 1].charAt(0).toUpperCase() + path[path.length - 1].substring(1)}`)
        }
        parseRoute()
    }, [props.theRoute])

    return (
    <AppBar position="static">
        <Toolbar sx={{flex: 1, justifyContent: "space-between"}}>
            <Typography>
                <IconButton>
                    {back ? <ArrowBackIos/> : <Home/>}
                </IconButton>
            </Typography>
            <Typography>
                {title}
            </Typography>
            <Button variant="text" sx={{color: "white"}}>
                Cancel
            </Button>
        </Toolbar>
    </AppBar>
)
}