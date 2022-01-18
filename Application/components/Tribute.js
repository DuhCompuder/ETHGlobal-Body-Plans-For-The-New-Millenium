function Tribute() {

    function Cards(name){
        return (
            <div className="border-2 border-white p-8 rounded-lg h-36 w-52">
                <h1 className="text-white">{name}</h1>
            </div>
        )
    }
    return (
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-white text-lg p-4">Tributes</h1>
            <div className="border-t-2 p-10 flex justify-center space-x-4">
                <div className="border-2 border-white p-8 rounded-lg h-36 w-52">
                    <h1 className="text-white">Ania Shestakova (Artist)</h1>
                </div>
                <div className="border-2 border-white p-8 rounded-lg h-36 w-52">
                    <h1 className="text-white">Dave Anderson (Musician)</h1>
                </div>
                <div className="border-2 border-white p-8 rounded-lg h-36 w-52">
                    <h1 className="text-white">Jean Racines (Writer)</h1>
                </div>
                {/* {['Ania Shestakova (Artist)', 'Dave Anderson (Musician)', 'Jean Racines (Writer)'].map((person, i) => (
                    <div key={i}>

                    <Cards name={person} />
                    </div>
                ))} */}
            </div>
        </div>
    )
}

export default Tribute
