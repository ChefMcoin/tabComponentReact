import { MoveLeft, TrainFrontTunnel } from 'lucide-react';
import React from 'react';

export default function CallNavigation() {
  return (
    <div>
      <div className="flex gap-2 text-sm items-center opacity-60 mb-16">
        <MoveLeft size={18} />
        <p>Back to phone numbers</p>
      </div>
      <TrainFrontTunnel size={40} className="mb-2" />
      <p className="bg-gray-200 rounded-sm text-sm inline px-2">
        (415) 875-5793
      </p>
      <h1 className="text-2xl  font-medium">San Francisco</h1>
      <p>Manage different settings for this number</p>
    </div>
  );
}
