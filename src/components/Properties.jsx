import Property from "./Property";



const Properties = ({ properties }) => {
    return (
        <div className="text-center lg:mt-24  mt-8 md:mt-[70px] bg-white">
            <h2 className="font-primary text-[26px] md:text-4xl font-bold">Featured Properties</h2>

            <p className="text-lg lg:px-28 md:mt-6 mt-4 md:px-20 px-5  font-primary">Welcome to Residential Complex. Our Residential company offers spacious living areas, including a cozy living room, a refreshing swimming pool for relaxation, and a fully equipped kitchen for culinary delights. These elegant estate is perfect for those seeking a blend of sophistication and comfort. Don't miss this opportunity for luxurious living in a picturesque setting.</p>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 lg:gap-4  mt-7 md:mt-12 lg:mt-16">
                {
                    properties.map(property => <Property key={property.id} property={property}></Property>)
                }
            </div>

        </div>
    );
};

export default Properties;