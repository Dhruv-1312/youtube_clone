interface LeftNavMenuItemProps {
    text: string;
    icon: React.ElementType;
    action: () => void;
    className?: string;
  }
  
  const LeftNavMenuItem: React.FC<LeftNavMenuItemProps> = ({ 
    text, 
    icon: Icon, 
    action, 
    className 
  }) => {
    return (
      <div 
        className={`flex items-center cursor-pointer hover:bg-white/[0.15] px-3 py-2 rounded-md ${className}`}
        onClick={action}
      >
        <Icon className="text-xl mr-5" />
        <span className="text-sm">{text}</span>
      </div>
    );
  };

  export default LeftNavMenuItem