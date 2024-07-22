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
const PaymentForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  return (
    <Card className="bg-[#242732] p-6 border-none shadow-xl mt-5">
      <Form {...form}>
        <form className="space-y-6 flex-6">
          <section className="space-y-4">
            <h1 className="header">Payment Information</h1>
          </section>

          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.INPUT}
              name="totalAmount"
              label="Total Amount"
              placeholder="Enter Total Amount"
            />
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.SELECT}
              label="Rate"
              name="rate"
              placeholder="-Select Rate-"
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
              name="streamerType"
              label="Streamer Type"
              placeholder="-Selecet-"
            >
              {ComeFromOptions.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </CustomFormField>
          </div>

          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.DATE_PICKER}
              name="month"
              label="Month"
              placeholder="MM"
              dateFormat="MM"
            />
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.DATE_PICKER}
              name="year"
              label="Year"
              placeholder="YYYY"
              dateFormat="yyyy"
            />
            <div className="flex-1"></div>
          </div>
          <Button className="bg-green-600 w-20 rounded-xl border text-white border-green-400">
            Calculate
          </Button>
        </form>
      </Form>
    </Card>
  );
};

export default PaymentForm;
