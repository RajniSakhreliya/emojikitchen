import PropTypes from "prop-types";

const CommonButton = ({
  children,
  btnText = "Click Me",
  onBtnClick,
  className = "",
  ...props
}) => {
  return (
    <button
      type="button"
      className={`flex items-center w-full py-1 text-base text-white bg-[#007bff] border-none rounded-3xl cursor-pointer mt-1 ${className}`}
      aria-label={btnText}
      onClick={onBtnClick}
      {...props}
    >
      {children || btnText}
    </button>
  );
};

export default CommonButton;
