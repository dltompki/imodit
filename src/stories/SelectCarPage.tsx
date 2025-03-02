import { Box, InputLabel, MenuItem, Select } from "@mui/material"
import { Topbar } from "./Topbar"
import { ReactNode, useState } from "react"

interface SelectionBoxProps{
    type: string
    selection: string[]
}

const SelectionBox = (selectionBoxProps: SelectionBoxProps) => {

    function mapSelections(){
        return selectionBoxProps.selection.map((value, index) => {
            return <MenuItem key={index}>{value}</MenuItem>
        })
    }

    return (<InputLabel>
        <Select label={selectionBoxProps.type}>
            {mapSelections as unknown as ReactNode[]}
        </Select>
    </InputLabel>)
}

export const SelectCarPage = () => {

    const [carList, setCarList] = useState([])

    return (<Box>
        <Topbar title="Learn"/>
        <Box>
            <SelectionBox type="Make" selection={[]}/>
            <SelectionBox type="Model" selection={[]}/>
            <SelectionBox type="Year" selection={[]}/>
        </Box>
        <Box>

        </Box>
    </Box>)
}