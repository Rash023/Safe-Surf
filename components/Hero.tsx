const Hero = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white">Secure Your Surfing</h1>
                <p className="mb-2 text-md font-normal text-gray-500 lg:text-md sm:px-16 xl:px-48 dark:text-gray-400">Navigate the web with confidence using instant site safety checker.</p>
                <div className="flex justify-center">
                    <img className="h-auto max-w-full" src="logo.png" width={150} alt="image description" />
                </div>
            </div>
        </section>
    )
}

export default Hero;