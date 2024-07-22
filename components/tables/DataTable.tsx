"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import Link from "next/link";

type CustomerManagementType = {
  id: string;
  name: string;
  status: "Active" | "Inactive";
  joinDate: string;
};

export const data: CustomerManagementType[] = [
  {
    id: "1",
    name: "User 1",
    status: "Active",
    joinDate: "26/08/1996",
  },
  {
    id: "2",
    name: "User 2",
    status: "Inactive",
    joinDate: "26/08/1996",
  },
  {
    id: "3",
    name: "User 3",
    status: "Active",
    joinDate: "26/08/1996",
  },
  {
    id: "4",
    name: "User 4",
    status: "Inactive",
    joinDate: "26/08/1996",
  },
  {
    id: "5",
    name: "User 5",
    status: "Active",
    joinDate: "26/08/1996",
  },
  {
    id: "6",
    name: "User 6",
    status: "Active",
    joinDate: "26/08/1996",
  },
  {
    id: "7",
    name: "User 7",
    status: "Inactive",
    joinDate: "26/08/1996",
  },
  {
    id: "8",
    name: "User 8",
    status: "Active",
    joinDate: "26/08/1996",
  },
  {
    id: "9",
    name: "User 9",
    status: "Active",
    joinDate: "26/08/1996",
  },
  {
    id: "10",
    name: "User 10",
    status: "Inactive",
    joinDate: "26/08/1996",
  },
  {
    id: "11",
    name: "User 11",
    status: "Active",
    joinDate: "26/08/1996",
  },
  {
    id: "12",
    name: "User 12",
    status: "Active",
    joinDate: "26/08/1996",
  },
  {
    id: "13",
    name: "User 13",
    status: "Inactive",
    joinDate: "26/08/1996",
  },
  {
    id: "14",
    name: "User 14",
    status: "Inactive",
    joinDate: "26/08/1996",
  },
  {
    id: "15",
    name: "User 15",
    status: "Active",
    joinDate: "26/08/1996",
  },
  {
    id: "16",
    name: "User 16",
    status: "Active",
    joinDate: "26/08/1996",
  },
  {
    id: "17",
    name: "User 17",
    status: "Active",
    joinDate: "26/08/1996",
  },
  {
    id: "18",
    name: "User 18",
    status: "Inactive",
    joinDate: "26/08/1996",
  },
  {
    id: "19",
    name: "User 19",
    status: "Active",
    joinDate: "26/08/1996",
  },
  {
    id: "20",
    name: "User 20",
    status: "Active",
    joinDate: "26/08/1996",
  },
];

export const isOdd = (number: number) => number % 2 !== 0;
export const columns: ColumnDef<CustomerManagementType>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <button
          // variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex"
        >
          ID
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("id")}</div>,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <button
          // variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex"
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "joinDate",
    header: ({ column }) => {
      return (
        <button
          // variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex"
        >
          Join Date
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("joinDate")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">
        <button
          className={`border-2 ${
            row.getValue("status") == "Active"
              ? "border-[#1ECA51] bg-green-600"
              : "border-[#FF4444] bg-[#53323B]"
          }  w-[90px] h-[36px] rounded-lg`}
        >
          {row.getValue("status")}
        </button>
      </div>
    ),
  },
  {
    id: "actions",
    // header: "Actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return <div className="invisible">Lorem</div>;
    },
  },
  {
    id: "actions",
    header: "Actions",
    // enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <div className="flex items-center gap-2">
          <Link href={"/customeroverview"}>
            <Image
              src={"/assets/images/details.png"}
              width={82}
              height={28}
              alt="details"
            />
          </Link>

          <button>
            <Image
              src={"/assets/images/edit.png"}
              width={28}
              height={28}
              alt="details"
            />
          </button>
          <button>
            <Image
              src={"/assets/images/delete.png"}
              width={28}
              height={28}
              alt="details"
            />
          </button>
        </div>
      );
    },
  },
];

const DataTable = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <h1 className="text-[32px] mb-5">Customers Mangement</h1>

        <div className="flex justify-end items-center gap-2">
          <Input
            placeholder="Search..."
            value={
              (table.getColumn("name")?.getFilterValue() as string) ||
              (table.getColumn("id")?.getFilterValue() as string) ||
              (table.getColumn("status")?.getFilterValue() as string)
            }
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="max-w-sm row-bg rounded-full w-[177px] border-0 outline-none"
          />
          <button className="border-2 border-[#3FA45D] bg-green-600 w-[177px] h-[36px] rounded-lg text-[16px]">
            + Add New Customer
          </button>
        </div>
      </div>
      <div className="rounded-md">
        <Table>
          <TableHeader className="border-0">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="border-0 border-transparent"
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row, index) => (
                <TableRow
                  key={row.id}
                  className={`${!isOdd(index) && "row-bg"} border-0 rounded-lg`}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          Showing 10 of
          {table.getFilteredRowModel().rows.length} customers.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
