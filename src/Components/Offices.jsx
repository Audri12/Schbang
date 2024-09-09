import React, { useEffect, useState } from "react";

const Offices = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("Office.json")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
      });
  }, []);
  return (
    <div>
      <div>
        {cards.map((card) => (
          <div className="container mx-auto max-w-[1400px]">
            <div key={card.id}>
              <div className="w-full">
                <div className="grid grid-cols-4 items-center justify-center p-12 ">
                  <div>
                    <img
                      src={card.image}
                      className="object-cover  w-full h-full "
                    ></img>
                  </div>
                  <div>
                    <h1 className="text-center justify-center font-sora font-bold text-[38px]">
                      {card.Location}
                    </h1>
                  </div>
                  <div>
                    <p className="text-sm ">{card.address}</p>
                  </div>
                  <div>
                    <p className="text-sm ">{card.email}</p>
                  </div>
                </div>
                
              </div>
            </div>
            <hr class="   border-black " />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offices;
