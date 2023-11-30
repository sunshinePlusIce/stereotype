import './dist/output.css'
import ValueInput from './ValutInput';
import { useState } from 'react';
import ColorPicker from './ColorPicker';
import Input from './Input';
import TextArea from './TextArea';
import Userbox from './Userbox';
import { renderToString } from 'react-dom/server';
import format from 'html-format'

function App() {
  let [width, setWidth] = useState(250);
  let [height, setHeight] = useState(50);
  let [borderColor, setBorderColor] = useState('');
  let [borderWidth, setBorderWidth] = useState(1);
  let [id, setId] = useState('');
  let [idWidth, setIdWidth] = useState('');
  let [contentBackgroundColor, setContentBackgroundColor] = useState('');
  let [content, setContent] = useState('');
  let [contentColor, setContentColor] = useState('');
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

                <div className="img-container shrink-0">
                  <img src={id} alt="" style={{
                      maxHeight: (height - borderWidth * 2),
                      objectFit: 'cover'
                  }}/>
                </div>

                <div className="content text-center text-white flex items-center" style={{
                  flexGrow: 99,
                  backgroundColor: contentBackgroundColor,
                  verticalAlign: 'middle',
                  color: contentColor
                }}>
                    {content}
                </div>
                
              </div> 
            </div>
            <div className="bg-slate-500">

            <div class="relative max-w-2xl mx-auto mt-24">
              <div class="bg-gray-900 text-white p-4 rounded-md">
                <div class="flex justify-between items-center mb-2">
                  <span class="text-gray-400">Code:</span>
                  <button class="code bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-md" data-clipboard-target="#code">
                    Copy
                  </button>
                </div>
                <div class="overflow-x-auto">
                  <pre id="code" class="text-gray-300">
                <code>
                  {
                    
                    format(renderToString(
                      <div className="userbox border-solid bg-white flex flex-row" style={{
                        width, height, borderWidth, borderColor,
                        borderStyle: 'solid',
                        display: 'flex',
                        flexDirection: 'row'
                      }}>
    
                    <div className="img-container" style={{
                      flexShrink: 0
                    }}>
                      <img src={id} alt="" style={{
                          maxHeight: (height - borderWidth * 2),
                          objectFit: 'cover',
                          
                      }}/>
                    </div>
    
                    <div className="content text-center text-white flex items-center" style={{
                      flexGrow: 99,
                      backgroundColor: contentBackgroundColor,
                      verticalAlign: 'middle',
                      textAlign: 'center',
                      display: 'flex',
                      alignItems: 'center',
                      color: contentColor
                    }}>
                        {content}
                    </div>
                    
                  </div> ),
                  " ".repeat(2), 40)
                  }
                </code>

              </pre>
                      </div>
                  </div>
              </div>
              <article className="prose">
                {
                }
              </article>
            </div>
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
              propName={"Content Color"}
              setHandler={setContentColor}
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
