function App() {
  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    console.log(data.slip.advice);
  }
  return (
    <div>
      <h1>Hello Gon</h1>
      <button onClick={getAdvice}>Get Advice</button>
    </div>
  );
}

export default App;
