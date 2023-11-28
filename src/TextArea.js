
const TextArea = ({ label, name, setHandler, placeholder }) => {
    return (
      <div className="mb-4">
        <label className="text-gray-300 mb-2 block">{label}</label>
        <textarea
          className="w-full rounded border border-gray-300 px-4 py-2 h-32 resize-none"
          name={name}
          onChange={(event) => {
            console.log(setHandler)
            setHandler(event.target.value);
          }}
          placeholder={placeholder}
        ></textarea>
      </div>
    );
  };
  
  export default TextArea;