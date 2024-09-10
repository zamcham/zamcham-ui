import { useState } from 'react';

const sizeMap = {
  sm: { container: 'w-[55px] h-[25px] p-[5px]', circle: 'w-4 h-4', translate: 30 },
  md: { container: 'w-[80px] h-[35px] p-[3px]', circle: 'w-6 h-6', translate: 50 },
  lg: { container: 'w-[90px] h-[38px] p-[6px]', circle: 'w-[26px] h-[26px]', translate: 52 },
  xl: { container: 'w-[100px] h-[40px] p-[6px]', circle: 'w-7 h-7', translate: 60 }
};

const Toggle = ({ onToggle, color, size }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled(!isToggled);
    if (onToggle) {
      onToggle(!isToggled);
    }
  };

  const getBackgroundColor = () => {
    if (color) {
      return color;
    }
    return isToggled ? 'bg-indigo-500' : 'bg-gray-400';
  };

  // Use 'sm' as default if size is not provided or is invalid
  const sizeClass = sizeMap[size] || sizeMap.sm;

  return (
    <div
      onClick={handleClick}
      className={`relative bg-gray-200 rounded-full cursor-pointer flex items-center ${sizeClass.container}`}
    >
      <div 
        className={`rounded-full transition-all duration-300 ease-in-out ${getBackgroundColor()} ${sizeClass.circle}`}
        style={{
          transform: `translateX(${isToggled ? sizeClass.translate : 0}px)`
        }}
      />
    </div>
  );
};

export default Toggle;