type TButton = {
  children: string;
  onClick: () => void;
};

export default ({ children, onClick }: TButton) => (
  <button
    onClick={onClick}
    className="shadow-[15px_13px_14px_0px_#324E7840] p-2 bg-[#798DD3] rounded-md text-white text-lg hover:bg-blue-500"
  >
    {children}
  </button>
);
