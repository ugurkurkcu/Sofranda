const Container = ({ children, design }) => {
  return (
    <div className={`${design} max-w-[1200px] mx-auto p-3`}>{children}</div>
  );
};

export default Container;
