import Login from "./Login"

import BtnAbrir from "./components/btn_Abrir_Modal";





function App() {
  return (
    <>
      <Login/>
      <BtnAbrir tipo={1} />
      <BtnAbrir tipo={2} />

    </>
  )

}

export default App
