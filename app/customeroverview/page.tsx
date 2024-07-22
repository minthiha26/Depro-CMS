import AccountInformation from "@/components/AccountInformation";
import CustomerInformation from "@/components/CustomerInformation";
import DevicesInformation from "@/components/DevicesInformation";
import PaymentForm from "@/components/forms/PaymentForm";
import React from "react";

const CustomerOverview = () => {
  return (
    <section className="remove-scrollbar">
      <h1 className="text-[32px] mb-5">Customer Overview</h1>
      <div className="flex flex-col gap-6 xl:flex-row">
        <CustomerInformation />
        <div className="flex-1 max-h-[450px] flex flex-col gap-5">
          <AccountInformation />
          <DevicesInformation />
        </div>
      </div>
      <PaymentForm />
    </section>
  );
};

export default CustomerOverview;
