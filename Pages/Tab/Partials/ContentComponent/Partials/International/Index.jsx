import React from 'react';
import Switch from '../../../../../../Components/Switch';
import Button from '../../../../../../Components/Button';

export default function International() {
  return (
    <>
      <div className="mt-3">
        <div className="flex justify-between place-items-end">
          <div>
            <h1 className="text-md font-medium">Auto record calls</h1>
            <p className="opacity-60">
              Automatically record all calls to this number
            </p>
          </div>
          <div className="">
            <Switch />
          </div>
        </div>
        <div className="bg-gray-200 rounded-sm flex justify-between px-3 text-sm font-semibold py-2 my-4">
          <p>
            Make sure you stay compliant with recording rules in your region.
          </p>
          <Button>x</Button>
        </div>
      </div>
      <hr />
    </>
  );
}
