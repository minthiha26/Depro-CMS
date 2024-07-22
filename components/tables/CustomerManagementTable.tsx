"use client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import DataTable from "./DataTable";

type CustomerManagementType = {
  id: string;
  name: string;
  status: "active" | "inactive";
  joinDate: string;
};

export const customers: CustomerManagementType[] = [
  {
    id: "1",
    name: "User 1",
    status: "active",
    joinDate: "26/08/1996",
  },
  {
    id: "2",
    name: "User 2",
    status: "active",
    joinDate: "26/08/1996",
  },
  {
    id: "3",
    name: "User 3",
    status: "active",
    joinDate: "26/08/1996",
  },
  {
    id: "4",
    name: "User 4",
    status: "inactive",
    joinDate: "26/08/1996",
  },
  {
    id: "5",
    name: "User 5",
    status: "active",
    joinDate: "26/08/1996",
  },
  {
    id: "6",
    name: "User 6",
    status: "inactive",
    joinDate: "26/08/1996",
  },
  {
    id: "7",
    name: "User 7",
    status: "active",
    joinDate: "26/08/1996",
  },
  {
    id: "8",
    name: "User 8",
    status: "active",
    joinDate: "26/08/1996",
  },
  {
    id: "9",
    name: "User 9",
    status: "inactive",
    joinDate: "26/08/1996",
  },
  {
    id: "10",
    name: "User 10",
    status: "active",
    joinDate: "26/08/1996",
  },
  {
    id: "11",
    name: "User 11",
    status: "active",
    joinDate: "26/08/1996",
  },
  {
    id: "12",
    name: "User 12",
    status: "inactive",
    joinDate: "26/08/1996",
  },
  {
    id: "13",
    name: "User 13",
    status: "active",
    joinDate: "26/08/1996",
  },
  {
    id: "14",
    name: "User 14",
    status: "inactive",
    joinDate: "26/08/1996",
  },
  {
    id: "15",
    name: "User 15",
    status: "active",
    joinDate: "26/08/1996",
  },
  {
    id: "16",
    name: "User 16",
    status: "active",
    joinDate: "26/08/1996",
  },
  {
    id: "17",
    name: "User 17",
    status: "active",
    joinDate: "26/08/1996",
  },
  {
    id: "18",
    name: "User 18",
    status: "active",
    joinDate: "26/08/1996",
  },
  {
    id: "19",
    name: "User 19",
    status: "active",
    joinDate: "26/08/1996",
  },
  {
    id: "20",
    name: "User 20",
    status: "active",
    joinDate: "26/08/1996",
  },
];

export const columns: ColumnDef<CustomerManagementType>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "joinDate",
    header: "Join Date",
  },
];

const CustomerManagementTable = () => {
  return (
    <div className="">
      <DataTable />
    </div>
  );
};

export default CustomerManagementTable;
