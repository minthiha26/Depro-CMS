import { Card } from "./ui/card";

const CustomerInformation = () => {
  return (
    <Card className="bg-[#242732] p-6 border-none shadow-xl flex-1 max-h-[450px]">
      <h1 className="header">Customer Information</h1>
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-2">
          <div className="">
            <p className="text-[16px] text-gray-500">ID</p>
            <p className="text-[16px]">0001</p>
          </div>
          <div className="">
            <p className="text-[16px] text-gray-500">Name</p>
            <p className="text-[16px]">Ju Jue Honey Htwe</p>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="">
            <p className="text-[16px] text-gray-500">Customer Code</p>
            <p className="text-[16px]">jjhh2000</p>
          </div>
          <div className="">
            <p className="text-[16px] text-gray-500">Phone</p>
            <p className="text-[16px]">09-23940223</p>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="">
            <p className="text-[16px] text-gray-500">NRC</p>
            <p className="text-[16px]">12/BA Ta Hta (C)233812</p>
          </div>
          <div className="">
            <p className="text-[16px] text-gray-500">Gender</p>
            <p className="text-[16px]">Female</p>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="">
            <p className="text-[16px] text-gray-500">Come From</p>
            <p className="text-[16px]">Yangon,Botahtaung</p>
          </div>
          <div className="">
            <p className="text-[16px] text-gray-500">Join Date</p>
            <p className="text-[16px]">16-1-2024</p>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="">
            <p className="text-[16px] text-gray-500">Active Status</p>
            <p className="text-[16px] text-green-500">Active</p>
          </div>
          <div className="">
            <p className="text-[16px] text-gray-500">Address</p>
            <p className="text-[16px]">
              65/345, (50) Street,lower Block, Botahtaung, Yangon
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CustomerInformation;
