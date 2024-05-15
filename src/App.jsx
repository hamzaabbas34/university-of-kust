import './App.css';

function App() {
  return (
    <div className="App w-100 ">
      <header className=" w-100 flex justify-between items-center  py-6 font-neue bg-black text-white  px-14 ">
        <log className="text-[1.4rem] font-bold">
          FarmTotable
        </log>
        <ul className="Links flex justify-between items-center gap-10 text-[1.2rem]">
          <li>Home</li>
          <li>Contact-Us</li>
          <li>About</li>
          <li>Product</li>
        </ul>
      </header>
      <main className='w-100 flex justify-start font-neue  px-28'>
        <left className='w-[50%] flex flex-col py-72 gap-9'>
          <h2 className='text-6xl font-extrabold'>we introducing to you farm to table pure organic treasures</h2>
          <p>Welcome to Farm to Table, where health meets flavor! 🌱 We're passionate about bringing you the freshest, most nutritious products straight from local farms to your table.</p>
          <div className="btn">
            <button className='px-10 py-5 border-2 rounded-full '>Get Start</button>
          </div>
        </left>
        <right className='w-[50%]'>
          <div className=" w-100 flex justify-center items-center mt-20 ">
            <img src="/Iamge/plants.png" alt="Plants" className='w-[33rem]' />
          </div>
        </right>
      </main>
    </div>
  );
}

export default App;
