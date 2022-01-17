import React , { useState}  from 'react';

function App() {
  return <div>
    <Folder name='Desktop'>
      <Folder name='Songs'>
        <File name = 'ringer.mp3' />
        <File name = 'express.mp4' />
      </Folder>
      <File name = 'cats.png' />
      <File name = 'dogs.png' />
    </Folder>
    <Folder name='Apps'/>
    
  </div>

}



const Folder = (props) => {

  const [ isOpen, setIsOpen] = useState(true);
  const {name, children } = props;
  const direction = isOpen ? 'down ': 'right'; 

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return <div>
    <span onClick={handleClick}>
      <i className=" brown folder icon"></i>
      <i className={`caret ${direction} icon`} ></i>
    </span>
    {name}
    <div style={{marginLeft: '15px'}}> 
    {isOpen ? children : null}
     </div>
  </div>
}

const File = (props) => {

  const {name} = props;
  const fileExtension = name.split('.')[1];
  const fileIcons = {
    mp4: 'headphones',
    jpeg: 'image',
    png: 'file image outline',
    mp3: 'headphones'
  }
  return <div>
    <i className={` ${fileIcons[fileExtension]} icon`} ></i>
    {name}
    
  </div>
}
export default App;
