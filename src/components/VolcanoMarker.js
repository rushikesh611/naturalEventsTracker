import React from "react";
import { Icon } from "@iconify/react";
import VolcanoIcon from "@iconify-icons/twemoji/volcano";

const VolcanoMarker = ({ lat, lng, onClick }) => {
  
  return (
    <div class="text-2xl" onClick={onClick}>
      <Icon icon={VolcanoIcon} class="text-2xl" />
    </div>
  );
};

export default VolcanoMarker;
