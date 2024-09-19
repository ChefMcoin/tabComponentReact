import React from 'react';
import Switch from '../../../../../../Components/Switch';

export default function Record() {
  return (
    <>
      <div className="mt-5 flex justify-between place-items-end">
        <div>
          <h1 className="text-sm font-semibold">
            International caling and messaging
          </h1>
          <p className="opacity-60 text-sm pt-1">
            Allow international calling and messaging on this phone number
          </p>
        </div>
        <Switch />
      </div>

      <p className="bg-purple-200 mt-4 px-3 py-1 rounded-sm text-purple-800 font-bold text-sm">
        Extra charges apply per message sent and spent on call per minutes.{' '}
        <a className="underline">Check rates</a>
      </p>
    </>
  );
}
