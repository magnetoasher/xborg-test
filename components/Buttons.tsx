import React from 'react';

interface CustomButtonProps {
  content: React.ReactNode | string;
  style?: React.CSSProperties;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  content,
  style,
  ...rest
}) => {
  return (
    <button style={style} {...rest} className="btn-intro mx-2">
      <span
        className="intro-txt"
        style={{
          backgroundImage: `linear-gradient(90deg, #ABABAB 0%, #2D2D2D 102.73%),
                        linear-gradient(88.95deg, rgba(255, 255, 255, 0) 80.46%, #FFFFFF 112.56%)`,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}
      >
        {content}
      </span>
    </button>
  );
};

export default CustomButton;
