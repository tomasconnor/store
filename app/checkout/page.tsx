"use client";

import React, { useState } from "react";

import TopBar from "@/components/TopBar";
import Header from "@/components/Header";

import { Button } from "@/components/ui/button";

import Link from "next/link";

import OrderCompleted from "@/components/OrderCompleted";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import OrderSummary from "@/components/OrderSummary";

export default function Checkout(): React.JSX.Element {
  const [orderCompleted, setOrderCompleted] = useState<boolean>(false);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <TopBar />
        <Header />
      </div>

      {orderCompleted ? (
        <OrderCompleted />
      ) : (
        <div className="flex items-center flex-col px-6 gap-6 pb-10">
          <h2 className="uppercase text-4xl text-center">Checkout</h2>
          <div className="flex gap-10 w-full max-w-5xl">
            {/* Left */}
            <div className="flex flex-col gap-6 max-[409px] w-full">
              {/* Contact details */}
              <div>
                <h3 className="uppercase mb-4">Contact details</h3>

                <div className="flex gap-6">
                  <Input placeholder="Email" className="uppercase" />
                  <Input placeholder="Phone" className="uppercase" />
                </div>
              </div>

              {/* Delivery address */}
              <div>
                <h3 className="uppercase mb-4">Delivery address</h3>

                <div className="flex flex-col gap-6">
                  <Input placeholder="Name" className="uppercase" />
                  <Input placeholder="Street" className="uppercase" />

                  <div className="flex gap-6">
                    <Input placeholder="City" className="uppercase" />
                    <Input placeholder="Postal code" className="uppercase" />
                  </div>

                  <Select>
                    <SelectTrigger className="w-[200px] uppercase">
                      <SelectValue placeholder="Česká republika" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem className="uppercase" value="cz">
                        Česká republika
                      </SelectItem>

                      <SelectItem className="uppercase" value="sk">
                        Slovensko
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Shipping method */}
              <div>
                <h3 className="uppercase mb-4">Shipping method</h3>

                <ToggleGroup
                  variant="outline"
                  type="single"
                  className="flex flex-col gap-6"
                >
                  <ToggleGroupItem
                    value="zasilkovna"
                    className="flex flex-col w-full min-h-20 p-6 dark:data-[state=on]:bg-black dark:data-[state=on]:border-white dark:hover:bg-black"
                  >
                    <div className="flex justify-between w-full">
                      <span className="uppercase">Zásilkovna</span>
                      <span className="normal-case">69 Kč</span>
                    </div>

                    <p className="uppercase text-sm text-[#808080] text-left w-full">
                      Pražšká 323, Olomouc 779 00
                    </p>
                  </ToggleGroupItem>

                  <ToggleGroupItem
                    value="ppl"
                    className="flex flex-col w-full min-h-20 p-6 dark:data-[state=on]:bg-black dark:data-[state=on]:border-white dark:hover:bg-black"
                  >
                    <div className="flex justify-between w-full">
                      <span className="uppercase">PPL</span>
                      <span className="normal-case">89 Kč</span>
                    </div>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>

              {/* Payment method */}
              <div>
                <h3 className="uppercase mb-4">Payment method</h3>

                <ToggleGroup
                  variant="outline"
                  type="single"
                  className="flex flex-col gap-6"
                >
                  <ToggleGroupItem
                    value="bankTransfer"
                    className="flex justify-between w-full min-h-20 p-6 dark:data-[state=on]:bg-black dark:data-[state=on]:border-white dark:hover:bg-black"
                  >
                    <span className="uppercase">Card</span>
                    <span className="normal-case">FREE</span>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>

            {/* Right */}
            <div className="w-full max-w-96">
              <OrderSummary />

              <Button
                variant="outline"
                className="mt-6"
                onClick={() => setOrderCompleted(true)}
              >
                COMPLETE ORDER
              </Button>

              <p className="mt-4 text-[#808080] text-sm">
                BY COMPLETING YOUR ORDER, YOU CONFIRM THAT YOU HAVE READ AND
                AGREE TO OUR{" "}
                <Link href="/terms" className="underline hover:no-underline">
                  TERMS AND CONDITIONS
                </Link>{" "}
                AND{" "}
                <Link href="/privacy" className="underline hover:no-underline">
                  PRIVACY POLICY
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      )}

      <footer />
    </div>
  );
}
