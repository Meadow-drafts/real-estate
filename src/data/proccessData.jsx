import { FaHome, FaCalendar, FaMapMarker, FaCheckCircle } from 'react-icons/fa'; // Import the icons you want to use
import {HiCalendar, HiOfficeBuilding, HiScissors, HiLocationMarker} from 'react-icons/hi'


export const process = [
  {
    id: "1",
    title: "Discover Home",
    description: "We could find you any property in a residential area, We could find you any property in an urban area",
    icon: <HiOfficeBuilding   class="w-8 h-8 mx-2 mt-2 text-cyan-600 object-cover object-center flex-shrink-0 rounded-full " />, // Use the FaHome icon from React Icons
  },
  {
    id: "2",
    title: "Schedule Visit",
    description: "We could find you any property in a residential area, We could find you any property in an urban area",
    icon: <HiCalendar  class="w-8 h-8 mx-2 mt-2 text-cyan-600 object-cover object-center flex-shrink-0 rounded-full " />, // Use the FaCalendar icon from React Icons
  },
  {
    id: "3",
    title: "In Person Visit",
    description: "We could find you any property in a residential area, We could find you any property in an urban area",
    icon: <HiLocationMarker class="w-8 h-8 mx-2 mt-2 text-cyan-600 object-cover object-center flex-shrink-0 rounded-full " />, // Use the FaMapMarker icon from React Icons
  },
  {
    id: "4",
    title: "Finalized the Deal",
    description: "We could find you any property in a residential area, We could find you any property in an urban area",
    icon: <HiScissors  class="w-8 h-8 mx-2 mt-2 text-cyan-600 object-cover object-center flex-shrink-0 rounded-full " />, // Use the FaCheckCircle icon from React Icons
  },
];
