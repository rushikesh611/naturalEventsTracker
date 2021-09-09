import {Icon} from '@iconify/react';
import WildfireIcon from '@iconify/icons-mdi/fire-alert';

const WildfireMarker = ({lat,lng,onClick}) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={WildfireIcon} class="text-red-600 text-2xl"/>
        </div>
    )
}

export default WildfireMarker
