import React from 'react';

const buttons = [
    {message: "Downloading!", children: "Download File"},
    {message: "Sharing", children: "Share Document"},
    {message: "Uploading!", children: "Upload File"},
];


const AlertButton = () => {
    return (
        buttons.map((element) => {
          
            const handleClick = () => {
                alert(element.message);
            };
            return (
                <div>
                    <button onClick={handleClick} key={element.children}>
                        {element.children}
                    </button>
                </div>  
            )
        })
      
);};

const Toolbar =() => {
    return (
        <div>
            <AlertButton/>  
        </div>
            
    );
};

export default Toolbar;