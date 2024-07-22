"use client";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomFormField from "../CustomFormField";
import { FormFieldType } from "@/lib/types";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ComeFromOptions, GenderOptions } from "@/constants";
import { SelectItem } from "../ui/select";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const CreateCustomersForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  return (
    <Card className="bg-[#242732] p-6 border-none shadow-xl">
      <Form {...form}>
        <form className="space-y-6 flex-6">
          <section className="space-y-4">
            <h1 className="header">Customer Information</h1>
          </section>

          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.INPUT}
              name="name"
              label="Name"
              placeholder="Enter Full Name"
            />
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.INPUT}
              name="customerCode"
              label="Customer Code"
              placeholder="Enter Customer Code"
            />
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.PHONE_INPUT}
              name="phone"
              label="Phone"
              placeholder="(959) 123-4567"
            />
          </div>

          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.INPUT}
              name="nrc"
              label="NRC"
              placeholder="Enter NRC"
            />
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.SELECT}
              label="Gender"
              name="gender"
              placeholder="Select Gender"
            >
              {GenderOptions.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </CustomFormField>
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.SELECT}
              label="Come From"
              name="comeFrom"
              placeholder="-Select Hometown-"
            >
              {ComeFromOptions.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </CustomFormField>
          </div>

          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.TEXTAREA}
            label="Address"
            name="address"
            placeholder="Enter Your Address"
          />

          <section className="space-y-4">
            <h1 className="header">Accounts' Information</h1>
          </section>

          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.INPUT}
              name="tiktokId"
              label="Tiktok ID"
              placeholder="Enter Tiktok ID"
            />
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.INPUT}
              name="appleAccount"
              label="Apple Account"
              placeholder="Enter Apple Account"
            />
          </div>

          <section className="space-y-4">
            <h1 className="header">Devices' Information</h1>
          </section>

          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.INPUT}
              name="vpnProfileNo"
              label="VPN Profile No."
              placeholder="Enter VPN Profile No."
            />
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.INPUT}
              name="routerLabelNo"
              label="Router Label NO."
              placeholder="Enter Router Label NO."
            />
          </div>
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.TEXTAREA}
            label="Support Phone Info"
            name="supportPhoneInfo"
            placeholder="Enter Support Phone Info"
          />

          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.DATE_PICKER}
              name="joinDate"
              label="Join Date"
              placeholder="DD/MM/YYYY"
            />
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.SELECT}
              name="status"
              label="Status"
              placeholder="-Select Status-"
            />
            <div className="flex-1"></div>
          </div>
          <div className="flex gap-4">
            <Button className="bg-green-600 w-20 rounded-xl border text-white border-green-400">
              Save
            </Button>
            <Button className="border bg-transparent w-20 rounded-xl border-gray-500">
              Cancle
            </Button>
          </div>
        </form>
      </Form>
    </Card>
  );
};

export default CreateCustomersForm;
