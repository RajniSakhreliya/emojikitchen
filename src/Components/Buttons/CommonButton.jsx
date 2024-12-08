
const CommonButton = ({
  children,
  btnText = "Click Me",
  className = "",
  ...props
}) => {
  return (
    <button
      type="button"
      className={`flex items-center justify-center px-2 py-2 text-base text-white bg-[#007bff] border-none rounded-3xl cursor-pointer mt-1 ${className}`}
      aria-label={btnText}
      {...props}
    >
      {children || btnText}
    </button>
  );
};

export default CommonButton;
