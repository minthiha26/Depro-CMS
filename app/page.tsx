import AccountInformation from "@/components/AccountInformation";
import CustomerInformation from "@/components/CustomerInformation";
import DevicesInformation from "@/components/DevicesInformation";
import CreateCustomersForm from "@/components/forms/CreateCustomersForm";
import PaymentForm from "@/components/forms/PaymentForm";
import CustomerManagementTable from "@/components/tables/CustomerManagementTable";
import React from "react";

const Home = () => {
  return (
    <div className="">
      <h1 className="text-[32px] mb-5">Create Customers</h1>
      <CreateCustomersForm />
    </div>
  );
};

export default Home;
