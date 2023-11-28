import logo from './logo.svg';
import Example from './example';
import './dist/output.css'
import ValueInput from './ValutInput';
import { useState } from 'react';
import ColorPicker from './ColorPicker';
import Input from './Input';
import TextArea from './TextArea';

function Canvas() {
  return (
    <>
      <div className="userbox-canvas">

      </div>
    </>
  )
}

function App() {
  let [width, setWidth] = useState(250);
  let [height, setHeight] = useState(50);
  let [borderColor, setBorderColor] = useState('');
  let [borderWidth, setBorderWidth] = useState(1);
  let [id, setId] = useState('');
  let [idWidth, setIdWidth] = useState('');
  let [contentBackgroundColor, setContentBackgroundColor] = useState('');
  let [content, setContent] = useState('');
  let [test, setTest] = useState('');

  return (
    <>
      <div className="h-screen flex flex-row w-full">
        <div className="h-full w-2/3 bg-slate-300">
          <div className="h-full flex flex-col">
            <div className="userbox-canvas bg-slate-400 basis-2/3 flex flex-col items-center justify-center">
              <div className="userbox border-solid bg-white flex flex-row" style={{
                width, height, borderWidth, borderColor
              }}>

                <div className="img-container grow-1">
                  <img src={id} alt="" style={{
                      maxHeight: (height - borderWidth * 2),
                      objectFit: 'cover'
                  }}/>
                </div>

                <div className="content text-center text-white flex items-center" style={{
                  flexGrow: 99,
                  backgroundColor: contentBackgroundColor,
                  verticalAlign: 'middle'
                }}>
                    {content}
                </div>
                
              </div> 
            </div>
            <div className="bg-slate-500"></div>
          </div>
        </div>
        <div className="h-full w-1/3 bg-slate-600">
          <div className="w-full h-1/6 flex flex-row">
            <div className="h-full w-1/2 px-1">
              <ValueInput 
                leading={""} 
                propName={"Width"} 
                unitList={[
                  "px"
                ]}
                placeholder={250}
                setHandler={setWidth}
              />
            </div>
            <div className="h-full w-1/2 px-1">
            <ValueInput 
                leading={""} 
                propName={"Height"} 
                unitList={[
                  "px"
                ]}
                placeholder={50}
                setHandler={setHeight}
              />
            </div>
          </div>
          <div className="w-full h-1/6 flex flex-row">
            <div className="h-full w-1/2 px-1">
              <ColorPicker 
                propName={"Border Color"}
                setHandler={setBorderColor}
              />
            </div>
            <div className="h-full w-1/2 px-1">
              <ValueInput 
                leading={""} 
                propName={"Border Width"} 
                unitList={[
                  "px"
                ]}
                placeholder={1}
                setHandler={setBorderWidth}
              />
            </div>
          </div>
          <div className="w-full h-1/6 flex flex-row">
            <Input 
              propName={"ID"}
              placeholder={"picture or text"}
              setHandler={setId}
            />
          </div> 
          <div className="w-full h-1/6 flex flex-row">
            <ColorPicker
              propName={"Content Background Color"}
              setHandler={setContentBackgroundColor}
            />
          </div> 
          <div className="w-full h-1/6 flex flex-row">
            <ColorPicker
              propName={"Content Background Color"}
              setHandler={setContentBackgroundColor}
            />
          </div> 
          <div className="w-full h-1/6 flex flex-row">
            <TextArea
              label={"Content"}
              setHandler={setContent}
              placeholder={"Type something"}>A
            </TextArea>
          </div> 
        </div>
      </div>
    </>
  );
}

export default App;
