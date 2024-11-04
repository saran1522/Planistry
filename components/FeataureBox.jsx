import { Calendar } from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

function FeataureBox() {
  return (
    <Card className="dark:text-slate-300 overflow-hidden rounded-3xl text-slate-800 w-fit bg-gradient">
      <CardHeader>
        <Calendar />
        <CardTitle>Feature</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="w-60">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
        </p>
      </CardContent>
    </Card>
  );
}

export default FeataureBox;
