"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import { FormAddCar } from "../FormAddCar/FormAddCar";

export default function ButtonAddCars() {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Dialog open={openDialog}>
      <DialogTrigger asChild>
        <Button variant={"secondary"} onClick={() => setOpenDialog(true)}>
          Agregar un Vehiculo.
          <PlusCircle className="ml-2"></PlusCircle>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>
            <FormAddCar setOpenDialog={setOpenDialog}></FormAddCar>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
