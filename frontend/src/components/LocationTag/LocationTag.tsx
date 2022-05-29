import { ChangeEvent } from "react";
import "./locationTag.css";

type PropTypes = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const LocationTag = ({ onChange }: PropTypes) => {
  return (
    <input
      className="inputLocationTag"
      type="text"
      id="locationTag"
      name="locationTag"
      placeholder="Insert your location tag number"
      onChange={onChange}
    />
  );
};

export default LocationTag;
