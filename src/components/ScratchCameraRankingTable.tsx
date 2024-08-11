"use client";

import React, { useState } from 'react';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Input } from "~/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

type RankingItem = {
  id: number;
  name: string;
  photo?: string;
  zoom?: string;
  bokeh?: string;
  video?: string;
  preview?: string;
  dxomarkScore: number;
};

export default function CameraRankingTable({
  ranking,
}: {
  ranking: RankingItem[];
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState<RankingItem | null>(null);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setSelectedItem(null);
  };

  const filteredData = ranking.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectItem = (item: RankingItem) => {
    setSelectedItem(item);
    setSearchTerm(item.name);
  };

  return (
    <div className="container px-4 md:px-6 py-8">
      <div className="flex-1 max-w-md relative">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search smartphones..."
          className="pl-10 w-full"
          value={searchTerm}
          onChange={handleSearch}
        />
        {searchTerm && !selectedItem && (
          <ul className="absolute z-10 w-full bg-white border rounded-lg mt-1 max-h-60 overflow-auto">
            {filteredData.map((item) => (
              <li
                key={item.id}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelectItem(item)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      {selectedItem && (
        <div className="mt-8 overflow-auto border rounded-lg">
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Smartphone</TableHead>
                <TableHead>DXOMark Score</TableHead>
                <TableHead>Photo</TableHead>
                <TableHead>Zoom</TableHead>
                <TableHead>Bokeh</TableHead>
                <TableHead>Video</TableHead>
                <TableHead>Preview</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>{selectedItem.name}</TableCell>
                <TableCell>{selectedItem.dxomarkScore}</TableCell>
                <TableCell>{selectedItem.photo}</TableCell>
                <TableCell>{selectedItem.zoom}</TableCell>
                <TableCell>{selectedItem.bokeh}</TableCell>
                <TableCell>{selectedItem.video}</TableCell>
                <TableCell>{selectedItem.preview}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}