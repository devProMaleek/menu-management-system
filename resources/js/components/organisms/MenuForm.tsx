import React, { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
// import { useSaveMenu } from "../../api/menuApi";
import Input from "../atoms/Input";
import Label from "../atoms/Label";
import Button from "../atoms/Button";

// interface Menu {
//   id: string;
//   name: string;
//   parent_id?: string | null;
//   depth: number;
//   children: Menu[];
//   created_at?: string;
//   updated_at?: string;
// }

const MenuForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  // const { mutate } = useSaveMenu();

  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  //   const newMenu: Menu = { id: uuidv4(), ...menu }; // Generate a temporary id
  //   mutate(newMenu);
  //   setName("");
  // };

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Menu Management</h2>
      </div>
      <form>
        <div className="flex flex-col space-y-6">
          <Input
            placeholder="Menu ID"
            value="Generated ID"
            onChange={() => {}}
            className="mb-4"
          />
          <Input
            placeholder="Depth"
            value="3"
            onChange={() => {}}
            className="mb-4"
          />
          <Input
            placeholder="Parent Data"
            value="Systems"
            onChange={() => {}}
            className="mb-4"
          />
          <Input
            placeholder="Name"
            value="System Code"
            onChange={() => {}}
            className="mb-4"
          />
          <Button className="w-full mt-4">Save</Button>
        </div>
      </form>
    </>
  );
};

export default MenuForm;
