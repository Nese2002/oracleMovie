import React, { useState } from "react";
import ReactSlider from "react-slider";
import { useDispatch, useSelector } from "react-redux";
import { addYear } from "../../../store/features/saveFilters/saveFiltersSlice.js";
import AllYears from "./AllYears.jsx";

function Slider() {
  const dispatch = useDispatch();
  const savedFilters = useSelector((state) => state.saveFilter);
  const filters = savedFilters?.years || [1950, 2023];
  // Use state to store the range of values
  const [range, setRange] = useState([filters[0], filters[1]]);
  const [yearsAfterSlider, setYearsAfterSlider] = useState(range);
  // Handle change event of the slider
  const handleChange = (value) => {
    setRange(value);
  };

  const updateStatus = () => {
    dispatch(addYear(range));
    setYearsAfterSlider(range);
  };

  return (
    <>
      <AllYears range={yearsAfterSlider} />
      <div className="w-2/3 m-auto">
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          // Pass the range as an array of two values
          value={range}
          // Set the minimum and maximum values
          min={1950}
          max={2023}
          // Enable two thumbs
          pearling
          // Display the current values as thumb children
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
          // Update the state on change
          onChange={handleChange}
          onAfterChange={updateStatus}
        />
        <div>{/* Display the selected range */}</div>
      </div>
    </>
  );
}

export default Slider;
