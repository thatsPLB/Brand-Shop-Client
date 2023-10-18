const BrandName = () => {
  return (
    <div className="flex items-center justify-center">
      <div className=" md:flex grid grid-cols-2 gap-4">
        <div className="card shadow-xl">
          <figure>
            <img
              src="/../src/assets/apple.png"
              alt="Shoes"
              className="h-32 w-auto"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl text-blue-700">Apple</h2>
            <div className="card-actions justify-center"></div>
          </div>
        </div>
        <div className="card  shadow-xl">
          <figure className="bg-white">
            <img
              src="/../src/assets/samsung-1-logo-svg-vector.svg"
              alt="Shoes"
              className="h-32 w-auto "
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl text-blue-700">Samsung</h2>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card shadow-xl">
          <figure>
            <img
              src="/../src/assets/google.png"
              alt="Shoes"
              className="h-32 w-auto"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl text-blue-700">Google</h2>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card shadow-xl">
          <figure>
            <img
              src="/../src/assets/sony2.png"
              alt="Shoes"
              className="h-32 w-auto"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl text-blue-700">Sony</h2>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card shadow-xl">
          <figure className="bg-white">
            <img
              src="/../src/assets/Itel_Mobile_logo.png"
              alt="Shoes"
              className="h-32 w-auto"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl text-blue-700">Itel</h2>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
        <div className="card shadow-xl">
          <figure>
            <img
              src="/../src/assets/oppo.png"
              alt="Shoes"
              className="h-32 w-auto"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl text-blue-700">Oppo</h2>
            <div className="card-actions justify-end"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandName;
