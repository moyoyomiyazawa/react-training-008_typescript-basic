export const Practice3 = () => {
  const TAX_RATE = 1.1;
  const getTotalFee = (num: number): number => {
    const total = num * TAX_RATE;
    return total;
  };
  const onClickPractice = () => {
    console.log(getTotalFee(1000));
  };
  return (
    <div>
      <p>練習問題:変数の型指定</p>
      <button onClick={onClickPractice}>練習問題3を実行</button>
    </div>
  );
};
