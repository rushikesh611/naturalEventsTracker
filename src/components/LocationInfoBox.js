import React from "react";

const LocationInfoBox = ({ info }) => {
  return (
    <div class="md:w-1/3 sm:w-full rounded-lg overflow-hidden shadow-lg bg-white my-3 absolute top-48 right-48 w-min-48">
      <div class="flex justify-between border-b border-gray-100 px-5 py-4">
        <div>
          <i class="fas fa-exclamation-circle text-blue-500"></i>
          <span class="font-bold text-gray-700 text-lg">Event Location Info</span>
        </div>
        <div>
          <button class="text-red-500 hover:text-red-600 transition duration-150">
            x
          </button>
        </div>
      </div>

      <div class="px-5 py-2 text-gray-600">
        ID: {info.id}
      </div>
      <div class="px-5 py-2 text-gray-600">
        Title: {info.title}
      </div>
    </div>
  );
};

export default LocationInfoBox;
