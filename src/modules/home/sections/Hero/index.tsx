import Image from 'next/image';

export const Hero = () => {
    return <section className="text-gray-600 body-font">
        <div className="container flex flex-row gap-24 mx-auto px-5 py-24 md:flex-col md:p-0 sm:p-0 sm:flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-start text-start justify-start">
                <h2 className="font-bold">
                    Store your PDF for Max Security
                </h2>
                <p className="mb-8 leading-relaxed pt-3 text-lg text-gray-500">
                Once you create a credential token, you could propose documents you’d like to share and keep. 
                Note that your proposed PDF will get stored on the 
                blockchain once it is approved by the community.
                </p>
                <div className="flex justify-center">
                    <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-300 rounded text-lg">ACCEPTED PDFs</button>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Image
                    alt="hero"
                    src={'/assets/illustrations/hero.png'}
                    width={440}
                    height={440}
                />
            </div>
        </div>
    </section>
}