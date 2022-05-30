import { ChangeEvent } from "react";
import "./locationTag.css";

type PropTypes = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const LocationTag = ({ onChange }: PropTypes) => {
  return (
    <>
      <h3 className="heading">Location Tag Identifier</h3>
      <input
        className="inputLocationTag"
        type="text"
        id="locationTag"
        name="locationTag"
        placeholder="Insert your location tag number"
        onChange={onChange}
      />
    </>
  );
};

export default LocationTag;
