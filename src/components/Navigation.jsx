const Navigation = ({ step }) => {
  const steps = [
    { id: 1, label: "Step 1" },
    { id: 2, label: "Step 2" },
    { id: 3, label: "Confirmation" },
  ];

  return (
    <div className="flex justify-between items-center mb-6 px-2">
      {steps.map((item) => (
        <div
          key={item.id}
          className={`flex-1 mx-1 text-center py-2 rounded-lg transition-all
            ${
              step === item.id
                ? "bg-white text-black font-semibold shadow-md"
                : "bg-white/20 text-white border border-white/30"
            }`}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default Navigation;
