export const Practice1 = () => {
  const TAX_RATE = 1.1;
  const calcTotalFee = (num: number) => {
    const total = num * TAX_RATE;
    console.log(total);
  };
  const onClickPractice = () => {
    calcTotalFee(1000);
  };
  return (
    <div>
      <p>練習問題:引数の型指定</p>
      <button onClick={onClickPractice}>練習問題1を実行</button>
    </div>
  );
};
