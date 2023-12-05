import React from "react";

export const Card = ({ colors }) => {
  return (
    <>
      {colors?.map((item) => (
        <div
          style={{ width: "32%", height: "120px", background: item.code }}
          className="shadow rounded d-flex justify-content-center align-items-center">{item.name}
        </div>))}
    </>
  );
};
