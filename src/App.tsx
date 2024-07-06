function App() {
  return (
    <div className='relative flex items-center justify-center h-screen w-screen bg-white'>
      <div className='absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]'></div>
      <div className='flex h-screen w-full items-center justify-center bg-transparent'>
        <span className='absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-3xl from-amber-500 to-pink-500 bg-clip-text text-9xl box-content font-extrabold text-transparent text-center select-none'>
          Coming soon...
        </span>
        <h1 className='relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-amber-500 to-pink-500 bg-clip-text text-9xl font-extrabold text-transparent text-center select-auto'>
          Coming soon...
        </h1>
      </div>
    </div>
  );
}

export default App;
