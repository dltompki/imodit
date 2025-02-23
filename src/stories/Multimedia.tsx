import "./multimedia.css";
import AddIcon from '@mui/icons-material/Add';

interface MultimediaProps {
  image?: string;
  threeD?: boolean;
  onClick?: () => void;
}

export function Multimedia(props: MultimediaProps) {
  return (
    <button className="button square flex-container" onClick={ props.onClick ? props.onClick : () => {} }>
     { props.threeD ? <div className="corner-element flex-container">
        <strong>3D</strong>
      </div>: <></>}
      { props.image ? <img src={props.image} alt="Multimedia" className="multimedia-image"  /> : <><AddIcon className=""/>
      Add Multimedia</>}
      
    </button>
  );
}
