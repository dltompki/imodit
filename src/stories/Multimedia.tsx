import "./multimedia.css";
import AddIcon from "@mui/icons-material/Add";

interface MultimediaProps {
  image?: string;
  onClick?: () => void;
  redX?: boolean;
  onRedXClick?: () => void;
}

export function Multimedia(props: MultimediaProps) {
  return (
    <button
      className="button square flex-container"
      onClick={props.onClick ? props.onClick : () => {}}
      disabled={(props.redX === undefined || props.redX === false) ? false : true}
    >
      {props.redX ? (
          <button onClick={() => {
            console.log("red x clicked")
            if (props.onRedXClick) {
              props.onRedXClick();
            }
        }} >
          <svg className="corner-element-X flex-container" width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <rect width="50%" height="50%" x="20%" y="25%" fill="white"/>
            <path d="m32 2c-16.568 0-30 13.432-30 30s13.432 30 30 30 30-13.432 30-30-13.432-30-30-30m5.513 44.508l-5.514-9.894-5.825 9.894h-7.048l9.331-14.783-8.878-14.232h7.244l5.175 9.449 5.317-9.449h7.008l-8.878 13.996 9.429 15.02h-7.361z" fill="#e53935"/>
            <rect className="btn" x="0" y="0" width="64" height="64" fillOpacity={0} strokeOpacity={0}/>
          </svg>
          </button>
      ) : (
        <></>
      )}
      {props.image ? (
        <img src={props.image} alt="Multimedia" className="multimedia-image" />
      ) : (
        <>
          <AddIcon className="" />
          Add Multimedia
        </>
      )}
    </button>
  );
}
