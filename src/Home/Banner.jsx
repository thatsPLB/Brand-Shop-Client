
function Banner() {
    return (
        <div>
            <div className='w-full ' style={{ backgroundImage: "url('https://img.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-black-background_155003-3944.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1697155200&semt=ais')", backgroundPosition: "center", backgroundRepeat: "no-repeate" }}>
                <div className='text-white h-60 flex flex-col items-center justify-center'>
                    <div className=' py-4 px-10 rounded font-mono '>
                        <p className="text-4xl text-center text-blue-700">MidGen Tech</p>
                        <p>Your super friendly electronics supplier.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner