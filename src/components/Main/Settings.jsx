import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar } from "../Navbar/navbar";
import { useNavigate } from "react-router-dom";
import { useGlobalStore } from "../../provider/provider";
import { Button } from "../Button/button";
import { Input } from "../Input/input";
import { routers } from "../../constants/router";

export const Settings = () => {
  const { setColors } = useGlobalStore();
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [colorData, setColorData] = useState({ name: "", code: "" });
  const [groupName, setGroupName] = useState("");
  const [name, setName] = useState("");

  const handleInputChange = (name, value) => {
    setColorData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const callFormData = () => {
    if (data.length < 6) {
      setData((prevData) => [...prevData, colorData]);
      setColorData({ name: "", code: "" });
    } else {
      toast.error("There can be a maximum of 6 colors in the palette");
      setColorData({ name: "", code: "" });
    }
  };

  const saveInputChange = (e) => {
    setName(e.target.value);
  };

  const callInputColor = () => {
    setGroupName(name);
  };

  const saveAllData = () => {
    const obj = {
      name: groupName,
      colors: data,
    };
    setColors((prevData) => [...prevData, obj]);
    setColorData(obj);
    navigate(routers.home);
  };

  const removeImage = (index) => {
    setData(data.filter((item, i) => i !== index));
  };

  let arr = Object.values(colorData);
  let isDisabled = arr.every((item) => item !== "");

  return (
    <>
      <Navbar />
      <ToastContainer />

      <section className="d-flex justify-content-center gap-5 p-4 mt-5">
        {/* upload color */}
        <div className="d-flex flex-column gap-4 w-25">
          <div className="shadow d-flex flex-column gap-4 bg-light p-2 rounded">
            <h4>Design your own color palette:</h4>

            <Input
              type={"text"}
              name={"name"}
              placeholder={"Color Name"}
              value={colorData.name}
              onInputChange={handleInputChange}
            />
            <Input
              type={"text"}
              name={"code"}
              placeholder={"Color Code"}
              value={colorData.code}
              onInputChange={handleInputChange}
            />
            <Button
              disabled={!isDisabled}
              title={"Confirm"}
              callFormData={callFormData}
            />
          </div>

          {/* make palette name */}
          <div className="shadow bg-light p-2 rounded d-flex flex-column gap-4">
            <h4>Set your palette name:</h4>
            <input
              className="form-control"
              type="text"
              placeholder="Palette Name"
              onChange={saveInputChange}
            />
            <button
              onClick={callInputColor}
              disabled={!name}
              className="btn btn-success"
            >
              Save
            </button>
          </div>
        </div>

        {/* your palette */}
        <div className="shadow d-flex flex-column bg-light rounded p-2 w-75">
          <h4>Palette Name: {groupName}</h4>

          <div className="my-auto d-flex justify-content-center align-items-center gap-2 flex-wrap py-2 h-75 rounded">
            {data.length > 0 ? (
              data.map((item, index) => (
                <div
                  style={{
                    width: "32%",
                    height: "120px",
                    background: item.code,
                    position: "relative",
                  }}
                  className="shadow rounded d-flex justify-content-center align-items-center"
                >
                  {item.name}
                  <div
                    onClick={() => removeImage(index)}
                    style={{
                      position: "absolute",
                      top: -10,
                      right: -10,
                      cursor: "pointer",
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                        fill="#FF4F4F"
                      />
                      <path
                        d="M15 9L9 15"
                        stroke="white"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 15L9 9"
                        stroke="white"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              ))
            ) : (
              <div className="fs-1 fw-bold text-center">
                Please Specify 6 colors
              </div>
            )}
          </div>
          <button
            className="btn btn-success"
            onClick={saveAllData}
            disabled={data.length < 6 || groupName == ""}
          >
            Create Palette
          </button>
        </div>
      </section>
    </>
  );
};
