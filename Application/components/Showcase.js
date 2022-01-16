function Showcase() {
    const Card = () => {
        return (
            <div className="border-2 border-white p-8 rounded-lg h-44 w-96">
                <div className="">

                </div>
            </div>
        )
    }
    return (
        <div className="flex flex-col items-center pt-10">
          <h1 className="font-bold text-white text-lg p-4">Showcase</h1>
            <div className="border-t-2 p-10 flex justify-center space-x-4">
                <Card />
         
            </div>
        </div>
    )
}

export default Showcase
