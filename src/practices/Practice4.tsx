export const Practice4 = () => {
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
      <p>練習問題:設定ファイルを触ってみる</p>
      <button onClick={onClickPractice}>練習問題4を実行</button>
    </div>
  );
};
