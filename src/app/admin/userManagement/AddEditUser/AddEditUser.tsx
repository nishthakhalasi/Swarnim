"use client";

import { Montserrat } from "next/font/google";
import React from "react";
import Input from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface AddEditUserProps {
  isOpen: boolean;
  closeModal: () => void;
}

const AddEditUser: React.FC<AddEditUserProps> = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div
      className={`${montserrat.className} fixed inset-0 flex items-center justify-center bg-black/75 z-50 p-4`}
    >
      <div className="bg-white rounded shadow-lg relative w-[671px] max-w-full h-auto max-h-[90vh] overflow-auto p-6">
        <h3 className="text-lg font-bold mb-4">Add/Edit User Form</h3>
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold text-xl"
          onClick={closeModal}
        >
          ×
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <Input type="text" placeholder="Name" />
          </div>
          <div>
            <Input type="text" placeholder="User Name" />
          </div>
          <div className="sm:col-span-2">
            <Input type="email" placeholder="Email" />
          </div>
          <div>
            <Input type="text" placeholder="Contact No (Primary)" />
          </div>
          <div>
            <Input type="text" placeholder="Alternate Contact No (Optional)" />
          </div>
          <div className="sm:col-span-2">
            <textarea
              className="w-full border border-gray-300 rounded px-2 py-1"
              rows={4}
              placeholder="Description"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-2 mt-4 w-full">
          <Button
            variant="outline"
            onClick={closeModal}
            className={`w-full sm:w-auto border border-gold text-gold px-4 py-2 text-[12px] font-bold uppercase text-center ${montserrat.className}`}
          >
            CANCEL
          </Button>

          <Button
            className={`w-full sm:w-auto bg-gold text-white hover:bg-[#e07d10] px-4 py-2 text-[12px] font-bold uppercase text-center ${montserrat.className}`}
          >
            SAVE & SEND CREDENTIALS
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddEditUser;
