const Error = ({ error, retry }) => {
  return (
    <>
      <div className="bg-orange-400 my-auto flex flex-col gap-5 mt-10 rounded text-white p-6 text-center">
        <h2>Üzgünüz bir hata oluştu</h2>
        <p>{error}</p>
      </div>
      <div className="flex justify-center">
        <button
          onClick={retry}
          className="border border-orange-400 mt-5 text-orange-400 py-1 px-2 rounded-lg hover:border-orange-600 hover:bg-orange-600 hover:text-white transition"
        >
          Tekrar Dene
        </button>
      </div>
    </>
  );
};

export default Error;
