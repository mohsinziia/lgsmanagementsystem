"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  Home,
  LineChart,
  ListFilter,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Truck,
  Users2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import AttendancePieChart from "@/components/ui/custom/AttendancePieChart";
import { placeholderLeaves } from "@/lib/placeholder-data";

const AttendancePage = () => {
  const [leaves, setLeaves] = useState([...placeholderLeaves]);

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
            <CardHeader className="pb-3">
              <CardTitle>Leave request</CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                Introducing Our Dynamic Orders Dashboard for Seamless Management
                and Insightful Analysis.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button>Request a Leave</Button>
            </CardFooter>
          </Card>
          {/* <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-1">
            <CardHeader className="pb-2">
              <CardDescription>This Week</CardDescription>
              <CardTitle className="text-4xl">Labour Day</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                Thursday May 1st
              </div>
            </CardContent>
            <CardFooter>
              <Progress value={25} aria-label="25% increase" />
            </CardFooter>
          </Card> */}
          {/* <Card x-chunk="dashboard-05-chunk-2">
            <CardHeader className="pb-2">
              <CardDescription>This Month</CardDescription>
              <CardTitle className="text-4xl">$5,329</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                +10% from last month
              </div>
            </CardContent>
            <CardFooter>
              <Progress value={12} aria-label="12% increase" />
            </CardFooter>
          </Card> */}
        </div>
        <Tabs defaultValue="leaves">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="leaves">Leaves</TabsTrigger>
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 gap-1 text-sm"
                  >
                    <ListFilter className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only">Filter</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>
                    Fulfilled
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Declined</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Refunded</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
                <File className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only">Export</span>
              </Button>
            </div>
          </div>
          <TabsContent value="leaves">
            <Card x-chunk="dashboard-05-chunk-3">
              <CardHeader className="px-7">
                <CardTitle>Leaves</CardTitle>
                <CardDescription>Recent leaves</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Reason</TableHead>
                      <TableHead className="hidden sm:table-cell">
                        Date
                      </TableHead>
                      <TableHead className="hidden sm:table-cell">
                        Day
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {leaves.map((leave) => (
                      <TableRow
                        className={`flex flex-col items-center sm:table-row py-4`}
                        key={leave.date}
                      >
                        <TableCell className="p-1 sm:p-4">
                          <div className="font-medium text-wrap text-lg sm:text-sm">
                            {leave.reason}
                          </div>
                        </TableCell>
                        <TableCell className="p-1 sm:p-4">
                          <div className="font-medium text-wrap text-lg sm:text-sm">
                            {leave.date}
                          </div>
                        </TableCell>
                        <TableCell className="p-1 sm:p-4">
                          <div className="font-medium text-wrap text-lg sm:text-sm">
                            {leave.day}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <div>
        <AttendancePieChart />
      </div>
    </main>
  );
};

export default AttendancePage;
