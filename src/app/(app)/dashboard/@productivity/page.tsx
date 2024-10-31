"use client";
import React, { useState } from "react";
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
  CheckSquare2,
  XSquareIcon,
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
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";
import { toast } from "sonner";
import { placeholderTodos } from "@/lib/placeholder-data";
import RemoveTodo from "@/components/ui/custom/RemoveTodo";
import CompleteTodo from "@/components/ui/custom/CompleteTodo";
import { todoSchema } from "@/schemas/todoSchema";

const ProductivityPage = () => {
  const [todos, setTodos] = useState([...placeholderTodos]);
  const fulfilledTodos = todos.filter((todo) => todo.completed);
  const pendingTodos = todos.filter((todo) => !todo.completed);

  const form = useForm<z.infer<typeof todoSchema>>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      todo: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof todoSchema>) => {
    try {
      const response = await axios.post("/api/create-todo", {
        todo: data.todo,
      });
      console.log("Todo created successfully");
      toast.success("Todo has been created successfully");
    } catch (error) {
      const axiosError = error as AxiosError;
      console.log(axiosError);
      toast.error("Error while creating todo");
      console.log(`Error while creating todo: ${error}`);
    }
  };

  const handleDeleteTodo = async (todoId: string) => {
    setTodos(todos.filter((todo) => todo._id !== todoId));
  };

  const handleCompleteTodo = async (todoId: string) => {
    const newTodos = todos.map((todo) => {
      if (todo._id === todoId) return { ...todo, completed: true };
      return todo;
    });

    setTodos(newTodos);
  };

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
            <CardHeader className="pb-3">
              <CardTitle>Todo</CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                Introducing Our Dynamic Orders Dashboard for Seamless Management
                and Insightful Analysis.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Popover>
                <PopoverTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
                  Add a Todo
                </PopoverTrigger>
                <PopoverContent className="w-80" sideOffset={10} side="bottom">
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <FormField
                        control={form.control}
                        name="todo"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Add a new todo</FormLabel>
                            <FormControl>
                              <div className="flex w-full max-w-sm items-center space-x-2">
                                <Input
                                  type="text"
                                  placeholder="Enter your todo here"
                                  {...field}
                                />
                                <Button type="submit">Submit</Button>
                              </div>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </form>
                  </Form>
                </PopoverContent>
              </Popover>
            </CardFooter>
          </Card>
        </div>
        <Tabs defaultValue="all-todos">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="all-todos">Todos</TabsTrigger>
              <TabsTrigger value="completed-todos">Completed Todos</TabsTrigger>
              <TabsTrigger value="remaining-todos">Remaining Todos</TabsTrigger>
            </TabsList>
            {/* <div className="ml-auto flex items-center gap-2">
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
            </div> */}
          </div>
          <TabsContent value="all-todos">
            <Card x-chunk="dashboard-05-chunk-3">
              <CardHeader className="px-7">
                <CardTitle>Todos</CardTitle>
                <CardDescription>All Todos</CardDescription>
              </CardHeader>
              <CardContent>
                <Table className="">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Todo</TableHead>
                      <TableHead className="hidden sm:table-cell">
                        Status
                      </TableHead>
                      {/* <TableHead className="hidden md:table-cell">
                        Date
                      </TableHead>
                      <TableHead className="hidden md:table-cell">
                        Time
                      </TableHead> */}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {todos.map((todo) => (
                      <TableRow
                        className={`${
                          todo.completed && "bg-accent"
                        }  flex flex-col items-center sm:table-row py-4`}
                        key={todo.name}
                      >
                        <TableCell className="p-1 sm:p-4">
                          <div className="font-medium text-wrap text-lg sm:text-sm">
                            {todo.name}
                          </div>
                          {/* <div className="hidden text-sm text-muted-foreground md:inline">
                          Complete physics assignment
                        </div> */}
                        </TableCell>
                        <TableCell className="sm:table-cell p-1 sm:p-4">
                          <Badge
                            className="text-xs"
                            variant={todo.completed ? "default" : "destructive"}
                          >
                            {todo.completed ? "Fulfilled" : "Pending"}
                          </Badge>
                        </TableCell>
                        {/* <TableCell className="hidden md:table-cell">
                          {todo.date}
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {todo.time}
                        </TableCell> */}
                        <TableCell className="md:table-cell p-1 sm:p-4">
                          <div className="justify-self-end flex sm:w-max sm:grid sm:grid-cols-2 gap-2">
                            {!todo.completed && (
                              <CompleteTodo
                                todoId={todo._id}
                                onTodoComplete={handleCompleteTodo}
                              />
                            )}

                            <RemoveTodo
                              onTodoDelete={handleDeleteTodo}
                              todoId={todo._id}
                            />
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="completed-todos">
            <Card x-chunk="dashboard-05-chunk-3">
              <CardHeader className="px-7">
                <CardTitle>Todos</CardTitle>
                <CardDescription>Completed Todos</CardDescription>
              </CardHeader>
              <CardContent>
                <Table className="">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Todo</TableHead>
                      <TableHead className="hidden sm:table-cell">
                        Status
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {fulfilledTodos.map((todo) => (
                      <TableRow
                        className={`bg-accent flex flex-col items-center sm:table-row py-4`}
                        key={todo.name}
                      >
                        <TableCell className="p-1 sm:p-4">
                          <div className="font-medium text-wrap text-lg sm:text-sm">
                            {todo.name}
                          </div>
                          {/* <div className="hidden text-sm text-muted-foreground md:inline">
                          Complete physics assignment
                        </div> */}
                        </TableCell>
                        <TableCell className="sm:table-cell p-1 sm:p-4">
                          <Badge className="text-xs" variant={"default"}>
                            Fulfilled
                          </Badge>
                        </TableCell>
                        <TableCell className="md:table-cell p-1 sm:p-4">
                          <div className="justify-self-end flex sm:w-max sm:grid sm:grid-cols-2 gap-2">
                            <RemoveTodo
                              onTodoDelete={handleDeleteTodo}
                              todoId={todo._id}
                            />
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="remaining-todos">
            <Card x-chunk="dashboard-05-chunk-3">
              <CardHeader className="px-7">
                <CardTitle>Todos</CardTitle>
                <CardDescription>Pending Todos</CardDescription>
              </CardHeader>
              <CardContent>
                <Table className="">
                  <TableHeader>
                    <TableRow>
                      <TableHead>Todo</TableHead>
                      <TableHead className="hidden sm:table-cell">
                        Status
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pendingTodos.map((todo) => (
                      <TableRow
                        className={`flex flex-col items-center sm:table-row py-4`}
                        key={todo.name}
                      >
                        <TableCell className="p-1 sm:p-4">
                          <div className="font-medium text-wrap text-lg sm:text-sm">
                            {todo.name}
                          </div>
                        </TableCell>
                        <TableCell className="sm:table-cell p-1 sm:p-4">
                          <Badge className="text-xs" variant={"destructive"}>
                            {"Pending"}
                          </Badge>
                        </TableCell>
                        {/* <TableCell className="hidden md:table-cell">
                          {todo.date}
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {todo.time}
                        </TableCell> */}
                        <TableCell className="md:table-cell p-1 sm:p-4">
                          <div className="justify-self-end flex sm:w-max sm:grid sm:grid-cols-2 gap-2">
                            <CompleteTodo
                              todoId={todo._id}
                              onTodoComplete={handleCompleteTodo}
                            />

                            <RemoveTodo
                              onTodoDelete={handleDeleteTodo}
                              todoId={todo._id}
                            />
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
    </main>
  );
};

export default ProductivityPage;
