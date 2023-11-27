import logo from './logo.svg';
import Example from './example';
import './dist/output.css'
import ValueInput from './ValutInput';

function Canvas() {
  return (
    <>
      <div className="userbox-canvas">

      </div>
    </>
  )
}

function App() {
  return (
    <>
      <div className="h-screen flex flex-row w-full">
        <div className="h-full w-2/3 bg-slate-300">
          <div className="h-full flex flex-col">
            <div className="bg-slate-400 basis-2/3"></div>
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
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
