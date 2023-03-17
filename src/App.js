import {useState} from 'react';
import './App.css';

function App() {
  const [money, setMoney] = useState(0);
  const [dailyAmount, setDailyAmount] = useState(0);
  function dailySpending(mny) {
    const today = new Date();
    const lastDayOfMonth = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0,
    );
    const remainingDays = lastDayOfMonth.getDate() - today.getDate() + 1;
    setDailyAmount(mny / remainingDays);
    console.log(dailyAmount);
    return dailyAmount;
  }
  const handleChange = event => {
    setMoney(event.target.value);
  };
  const handleClick = () => {
    setDailyAmount(0);
    dailySpending(money);
    setMoney(0);
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full h-full flex flex-col justify-evenly items-center">
        <div className="flex flex-col space-y-8 justify-center items-center h-1/2">
          <div>
            <p className="text-[20px] font-semibold">PARA MIKTARINI GIRINIZ</p>
          </div>
          <div className="flex justify-center">
            <input
              type="number"
              name=""
              id=""
              value={money}
              onChange={handleChange}
              className="border border-blue-500 outline-cyan-600 p-4 w-1/3 text-3xl rounded-full"
            />
          </div>
          <div>
            <button
              onClick={handleClick}
              className="bg-blue-500 rounded-full p-4 px-16 text-white text-[20px] font-semibold"
            >
              HESAPLA
            </button>
          </div>
        </div>
        <div className="h-1/2 flex flex-col justify-center items-center">
          <p>GUNLUK</p>
          <span className="text-9xl">{dailyAmount.toFixed(2)}</span>
          <p className="text-center w-1/2">
            LIRADAN FAZLA HARCAMAZSANIZ BU PARA SIZE BIR SONRAKI MAASA KADAR
            YETECEKTIR.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
