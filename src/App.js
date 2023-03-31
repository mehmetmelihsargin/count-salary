import { useState } from 'react';
import './App.css';

function App() {
  const [money, setMoney] = useState(0);
  const [date, setDate] = useState('');
  const [dailyAmount, setDailyAmount] = useState(0);
  function dailySpending(money, date) {
    const today = new Date();
    const givenDate = new Date(date);
    if (date !== '') {
      if (givenDate > today) {
        const timeDiff = Math.abs(givenDate.getTime() - today.getTime());
        const remainingDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        setDailyAmount(money / remainingDays);
      } else {
        alert('Eksik veya hatalı bilgi girdiniz');
      }
    } else {
      const lastDayOfMonth = new Date(
        today.getFullYear(),
        today.getMonth() + 1,
        0,
      );
      const remainingDays = lastDayOfMonth.getDate() - today.getDate() + 1;
      setDailyAmount(money / remainingDays);
    }

    return dailyAmount;
  }
  const handleChange = event => {
    setMoney(event.target.value);
  };
  const datePicker = event => {
    setDate(event.target.value);
  };
  const handleClick = () => {
    dailySpending(money, date);
  };
  const Reset = () => {
    setMoney(0);
    setDailyAmount(0);
    setDate('');
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full h-full flex flex-col items-center py-16">
        <div className="flex flex-col space-y-4 justify-center items-center">
          <div className="flex flex-col space-y-4 justify-center items-center">
            <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700 font-semibold">
              Yevmiye
            </p>
            <p className="text-center w-3/4">
              Girdiğiniz tarihe veya ay sonuna göre günlük maksimum harcamanız
              gereken para miktarını hesaplayan uygulama.
            </p>
          </div>
          <div className="flex flex-col justify-center w-5/6">
            <label htmlFor="">
              Miktar
              <input
                type="number"
                value={money}
                onChange={handleChange}
                className="border mt-2 border-blue-400 outline-blue-700 p-4 w-full text-xl rounded-3xl"
              />
            </label>
          </div>
          <div className="flex flex-col justify-center w-5/6">
            <label htmlFor="">
              Tarih{' '}
              <span className="text-xs text-gray-400">(İsteğe Bağlı)</span>
              <input
                type="date"
                value={date}
                onChange={datePicker}
                className="border mt-2 border-blue-400 outline-blue-700 p-4 flex w-full text-xl rounded-3xl"
              />
            </label>
            <p className="text-xs ml-2 mt-2 text-red-500">
              * Tarih kısmı boş bırakılırsa ay sonunu baz alacaktır.
            </p>
          </div>
          <div className="flex w-5/6 justify-between">
            <button
              onClick={handleClick}
              className="bg-gradient-to-r from-blue-700 to-blue-400 rounded-2xl p-3 mr-2 w-3/5 text-white text-[20px] font-semibold"
            >
              HESAPLA
            </button>
            <button
              onClick={Reset}
              type="reset"
              className="bg-gradient-to-r from-blue-400 to-blue-700 rounded-2xl p-3 w-2/5 text-white text-[20px] font-semibold"
            >
              SIFIRLA
            </button>
          </div>
        </div>
        <div className="flex mt-10 flex-col justify-center items-center">
          <p className="text-xl">Günlük</p>
          <span className="text-7xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">
            {dailyAmount.toFixed(2)} ₺
          </span>
          <p className="text-center text-xl w-2/3 mt-4">
            maksimum harcama tutarınız bulunmaktadır.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
