import React, { useEffect, useState } from "react";
import Hotels from "./Hotels";
import axios from "axios";

const HotelsList = () => {
  const [hotelsListData, setHotelsListData] = useState(null);
  const [blnLoader, setLoader] = useState(true);

  const fetchDetails = async () => {
    let hotelsData = await axios.get("http://localhost:3200/getHotels");
    setHotelsListData(hotelsData.data);
    setLoader(false)
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div>
        {blnLoader && <div
        className="m-12 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>}
      {hotelsListData &&
        hotelsListData.map((eachHotel) => (
          <Hotels key={eachHotel._id} hotelData={eachHotel} />
        ))}
    </div>
  );
};

export default HotelsList;
