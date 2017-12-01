import React from 'react';

export default ({title ,body}) => (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{ title }</div>
      <p className="text-grey-darker text-base">
        {body}
      </p>
    </div>
  </div>
)