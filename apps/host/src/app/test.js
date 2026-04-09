export function App() {
  const [data, setData] = useState(10);

  useEffect(() => {
    console.log('hello');
  }, [data]);

  [5, 6, 7, 8].forEach((elm) => {
    setTimeout(() => {
      console.log(elm);
    }, 3000);
  });

  console.log(4 + 2 + '6' + '7' - 3 + 6); // 4+2=6, 6+'6'='66', '66'+'7'='667', '667'-3=664, 664+6=670

  /*
        <error>
    */

  console.log(4 + 2 + '6' + '7' + 3 + 6); // 4+2=6, 6+'6'='66', '66'+'7'='667', '667'+3='6673', '6673'+6='66736'

  /*
    3s
    5
    3s
    6
    3s
    7
    3s
    8
    */
  return (
    <>
      <h1>Test</h1>
    </>
  );
}
