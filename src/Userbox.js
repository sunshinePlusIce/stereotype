
const Userbox = ({
    width, 
    height, 
    borderWidth, 
    borderColor, 
    contentBackgroundColor, 
    content,
    id
}) => {
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
          verticalAlign: 'middle'
        }}>
            {content}
        </div>
        
      </div> 
}

export default Userbox;