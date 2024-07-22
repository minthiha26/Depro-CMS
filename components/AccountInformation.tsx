import React from "react";
import { Card } from "./ui/card";

const AccountInformation = () => {
  return (
    <Card className="bg-[#242732] p-6 border-none shadow-xl flex-1">
      <h1 className="header">Accounts’ Informations</h1>
      <div className="grid grid-cols-2 py-5">
        <div className="">
          <p className="text-[16px] text-gray-500">Tiktok ID</p>
          <p className="text-[16px]">@jujue2000</p>
        </div>
        <div className="">
          <p className="text-[16px] text-gray-500">Apple Account</p>
          <p className="text-[16px]">ju_jue2000@icloud.com</p>
        </div>
      </div>
    </Card>
  );
};

export default AccountInformation;
