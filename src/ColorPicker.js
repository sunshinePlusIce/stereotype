import React from 'react';
import { useState } from 'react';
import './dist/output.css';

const ColorPicker = ({propName, setHandler}) => {
  const [color, setColor] = useState('');

  return (
    <div className="flex flex-col items-center">
        <div className="w-full h-1/3 text-gray-300 text-sm">
            {propName}
        </div>
      <div className="mb-4">
        <input
          type="color"
          value={color}
          onChange={(event) => {
            setColor(event.target.value);
            setHandler(event.target.value);
          }}
          className="rounded border border-gray-300"
        ></input>
      </div>
    </div>
  );
};

export default ColorPicker;