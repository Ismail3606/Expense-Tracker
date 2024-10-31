

function BalanceDisplay({ balance }) {
  return (
    <div className="  text-center mb-6">
      <h2 className=" text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 bg-clip-text text-transparent p-2">My Current Balance</h2>
      <p className="text-3xl text-green-600">${balance.toFixed(2)}</p>
    </div>
  );
}

export default BalanceDisplay;
