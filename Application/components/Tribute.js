function Tribute() {

    const Cards = () => {
        return (
            <div className="border-2 border-white p-8 rounded-lg h-36 w-52">

            </div>
        )
    }
    return (
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-white text-lg p-4">Tributes</h1>
            <div className="border-t-2 p-10 flex justify-center space-x-4">
                <Cards />
                <Cards />
                <Cards />
            </div>
        </div>
    )
}

export default Tribute
