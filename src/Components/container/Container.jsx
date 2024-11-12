import PropTypes from "prop-types";

const Container = ({ children, className  }) => {
  return (
    <div
      className={`flex w-full justify-center items-center ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
