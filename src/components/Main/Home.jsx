import React from "react";
import logo from "../../assets/logo.svg"
import { Navbar } from "../Navbar/navbar";
import { Card } from "../Card/card";
import { useGlobalStore } from "../../provider/provider";

export const Home = () => {
  const { colors } = useGlobalStore();

  return (
    <>
      <Navbar />

      {colors.length > 0 ? colors.map((item) => (
        <section className="shadow rounded bg-light my-5 py-2 w-75 mx-auto text-center d-flex flex-column gap-3">
          <h1>{item?.name}</h1>

          <div className=" d-flex justify-content-center align-items-center gap-3 flex-wrap p-4 rounded">
            <Card colors={item?.colors} />
          </div>
        </section>
      )) : <div className="d-flex mt-5 flex-column justify-content-center align-items-center">
        <h1 className="fw-bold">GO TO THE "SETTINGS" THEN CREATE YOUR OWN COLOR PALETTE</h1>
        <img style={{marginTop:"-100px", width:"40%"}}src={logo}/>
      </div>}
    </>
    
  );
};
