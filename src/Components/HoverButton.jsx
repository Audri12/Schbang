import React, { useState } from 'react';

export const HoverButton = () => {
  // State to handle hover effect
  const [isHovered, setIsHovered] = useState(false);

  return (
   <div>
    
     <button
    className="relative font-normal text-xl tracking-wide p-2 px-5 rounded-full overflow-hidden transition-transform duration-300 border border-black text-black bg-white"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    {/* Background effect that slides in from the bottom */}
    <span
      className={`absolute inset-0 bg-black transition-transform duration-300 ${
        isHovered ? 'translate-y-0' : 'translate-y-full'
      }`}
    ></span>
    
    {/* Text Content */}
    <span className={`relative ${isHovered ? 'text-white' : 'text-black'}`}>
      {isHovered ? 'Contact Us' : 'London: 11:54 AM'}
    </span>
  </button>

   </div>
  );
};
export const HoverButton5 = () => {
  // State to handle hover effect
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <button
        className="relative font-normal text-xl tracking-wide p-2 px-5 rounded-full overflow-hidden transition-transform duration-300 border border-black text-black bg-white"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background effect that slides in from the bottom */}
        <span
          className={`absolute inset-0 bg-black transition-transform duration-300 ${
            isHovered ? 'translate-y-0' : 'translate-y-full'
          }`}
        ></span>

        {/* Text Content */}
        <span className={`relative ${isHovered ? 'text-white' : 'text-black'}`}>
          {isHovered ? (
            'Contact Us'
          ) : (
            <>
              <strong>London:</strong> 11:54 AM
            </>
          )}
        </span>
      </button>
    </div>
  );
};

export const HoverButton3 = () => {
  // State to handle hover effect
  const [isHovered, setIsHovered] = useState(false);

  return (
   <div>
    
     <button
    className="relative font-normal text-xl tracking-wide p-2 px-5 rounded-full overflow-hidden transition-transform duration-300 border border-black text-black bg-white"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    {/* Background effect that slides in from the bottom */}
    <span
      className={`absolute inset-0 bg-black transition-transform duration-300 ${
        isHovered ? 'translate-y-0' : 'translate-y-full'
      }`}
    ></span>
    
    {/* Text Content */}
    <span className={`relative ${isHovered ? 'text-white' : 'text-black'}`}>
      {isHovered ? 'Contact Us' : 'Default Text'}
    </span>
  </button>

   </div>
  );
};
export const HoverButton4 = () => {
  // State to handle hover effect
  const [isHovered, setIsHovered] = useState(false);

  return (
   <div>
    
     <button
    className="relative font-normal text-xl tracking-wide p-2 px-5 rounded-full overflow-hidden transition-transform duration-300 border border-black text-black bg-white"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    {/* Background effect that slides in from the bottom */}
    <span
      className={`absolute inset-0 bg-black transition-transform duration-300 ${
        isHovered ? 'translate-y-0' : 'translate-y-full'
      }`}
    ></span>
    
    {/* Text Content */}
    <span className={`relative ${isHovered ? 'text-white' : 'text-black'}`}>
      {isHovered ? 'Contact Us' : 'Default Text'}
    </span>
  </button>

   </div>
  );
};
const HoverButton2 = () => {
  // State to handle hover effect
  const [isHovered, setIsHovered] = useState(false);

  return (
   <div>
    
     <button
    className="relative font-normal text-xl tracking-wide p-2 px-5 rounded-full overflow-hidden transition-transform duration-300 border border-black text-black bg-white"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    {/* Background effect that slides in from the bottom */}
    <span
      className={`absolute inset-0 bg-black transition-transform duration-300 ${
        isHovered ? 'translate-y-0' : 'translate-y-full'
      }`}
    ></span>
    
    {/* Text Content */}
    <span className={`relative ${isHovered ? 'text-white' : 'text-black'}`}>
      {isHovered ? 'Contact' : 'hi Text'}
    </span>
  </button>

   </div>
  );
};

export default HoverButton2;
