const PaymentInput = ({ text, type = false, handler }) => {
  if (type) {
    return (
      <div className="flex items-center gap-14">
        <div className="flex items-center gap-14">
          <label className="w-24">{text}</label>
          <div className="flex items-center gap-4">
            <input
              className="rounded border px-2 py-1 focus:outline-none"
              placeholder="ماه"
            />
            <span>/</span>
            <input
              className="rounded border px-2 py-1 focus:outline-none"
              placeholder="سال"
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center gap-14">
        <label className="w-28">{text}</label>
        <input
          onChange={handler}
          className="w-full rounded border px-2 py-1 focus:outline-none"
        />
      </div>
    );
  }
};

export default PaymentInput;
