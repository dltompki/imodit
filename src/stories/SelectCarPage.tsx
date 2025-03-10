import {
  Box,
  FormControl,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Topbar } from "./Topbar";
import { Dispatch, useState } from "react";
import BottomNavBar from "./BottomNavBar";
import { useNavigate } from "react-router-dom";

const mockCarData: Car[] = [
  {
    make: "Toyota",
    model: "Camry",
    year: 2015,
    image: "/CarImages/toyota_camry.png",
  },
  {
    make: "Toyota",
    model: "Crown",
    year: 2012,
    image: "/CarImages/toyota_crown.png",
  },
  {
    make: "Toyota",
    model: "Prius",
    year: 2015,
    image: "/CarImages/toyota_prius.png",
  },
  {
    make: "Toyota",
    model: "Corolla",
    year: 2015,
    image: "/CarImages/toyota_corolla.png",
  },
];

interface Car {
  make: string;
  model: string;
  year: number;
  image: string;
}

interface SelectionBoxProps {
  type: string;
  selection: string[];
  filterCallback: Dispatch<React.SetStateAction<string>>;
}

const SelectionBox = (selectionBoxProps: SelectionBoxProps) => {
  const [filter, setFilter] = useState(selectionBoxProps.type);

  function handleChange(event: SelectChangeEvent) {
    setFilter(event.target.value);
    selectionBoxProps.filterCallback(event.target.value);
  }

  function mapSelections() {
    return selectionBoxProps.selection.map((value, index) => {
      return (
        <MenuItem key={index} value={value}>
          {value}
        </MenuItem>
      );
    });
  }

  return (
    <FormControl>
      <InputLabel>{selectionBoxProps.type}</InputLabel>
      <Select
        label={selectionBoxProps.type}
        value={filter}
        sx={{ minWidth: 125, height: 30 }}
        onChange={handleChange}
      >
        {mapSelections()}
      </Select>
    </FormControl>
  );
};

export const SelectCarPage = () => {
  const [carList] = useState<Car[]>(mockCarData);
  const [makeFilter, setMakeFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [modelFilter, setModelFilter] = useState("");
  const navigation = useNavigate();

  function compileListOfModels() {
    const modelList = carList.map((value) => {
      return value.model;
    });
    return [...new Set(modelList)];
  }

  function compileListOfMakes() {
    const makeList = carList.map((value) => {
      return value.make;
    });
    return [...new Set(makeList)];
  }

  function compileListOfYears() {
    const yearList = carList.map((value) => {
      return value.year as unknown as string;
    });
    return [...new Set(yearList)];
  }

  function filterCars() {
    return carList.filter((value) => {
      let make = true;
      let year = true;
      let model = true;

      if (makeFilter != "") {
        make = value.make === makeFilter;
      }

      if (yearFilter != "") {
        year = (value.year as unknown as string) == yearFilter;
      }

      if (modelFilter != "") {
        model = value.model === modelFilter;
      }

      return make && year && model;
    });
  }

  function mapCars() {
    return filterCars().map((value, index) => {
      return (
        <button
          key={index}
          style={{
            display: "flex",
            border: "0px",
            backgroundColor: "transparent",
          }}
          onClick={() => {
            void navigation(
              "/learn/" + `${value.make}_${value.model}_${value.year}`,
            );
          }}
        >
          <ListItem>{`${value.year} ${value.make} ${value.model}`}</ListItem>
          <img src={value.image} width={250} height={125}></img>
        </button>
      );
    });
  }

  return (
    <>
      <Topbar title="Learn" leftButtonText="HomeIcon" />
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        <Box sx={{ width: "100%", height: "11dvh" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <SelectionBox
            type="Make"
            selection={compileListOfMakes().sort()}
            filterCallback={setMakeFilter}
          />
          <SelectionBox
            type="Model"
            selection={compileListOfModels().sort()}
            filterCallback={setModelFilter}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 2,
          }}
        >
          <SelectionBox
            type="Year"
            selection={compileListOfYears().sort()}
            filterCallback={setYearFilter}
          />
        </Box>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            overflowY: "scroll",
            scrollbarWidth: "none",
            height: "70%",
          }}
        >
          {mapCars()}
        </List>
      </Box>
      <BottomNavBar></BottomNavBar>
    </>
  );
};
