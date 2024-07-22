import React from "react";
import { Card } from "./ui/card";

const DevicesInformation = () => {
  return (
    <Card className="bg-[#242732] p-6 border-none shadow-xl flex-1">
      <h1 className="header">Devices’ Informations</h1>
      <div className="grid grid-cols-2 py-5">
        <div className="">
          <p className="text-[16px] text-gray-500">VPN Profile Info</p>
          <p className="text-[16px]">testvpnpno</p>
        </div>
        <div className="">
          <p className="text-[16px] text-gray-500">Router Label No</p>
          <p className="text-[16px]">ju_jue2000@icloud.com</p>
        </div>
      </div>
      <div className="">
        <p className="text-[16px] text-gray-500">Support Phone Info</p>
        <p className="text-[16px]">Iphone 15 Pro Max (Titanium) 128 gb</p>
      </div>
    </Card>
  );
};

export default DevicesInformation;
