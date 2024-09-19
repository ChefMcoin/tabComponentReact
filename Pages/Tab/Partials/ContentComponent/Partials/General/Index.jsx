import React from 'react';
import Button from '../../../../../../Components/Button';

export default function General() {
  return (
    <>
      <h1 className="text-lg font-bold mt-12">General</h1>
      <p className="text-sm ">Manage general call preferences</p>
      <div className="mt-4 flex justify-between mb-4">
        <div>
          <h1 className="font-semibold">Caller ID name</h1>
          <p className="text-sm opacity-60">
            Customize what your recipents see when you call
          </p>
        </div>
        <Button className="border-2 text-xs font-bold px-2 rounded-md h-8 mt-3">
          Add Caller ID name
        </Button>
      </div>
      <hr />
    </>
  );
}
