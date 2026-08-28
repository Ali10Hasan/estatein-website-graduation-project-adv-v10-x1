const Stars = () => {
    return (
        <div className="flex items-center gap-6 2xl:-top-30 -top-20  2xl:-left-20 xl:-left-10 -left-8 absolute ">
            <img src="/assets/imgs/heros/star-lg.svg" alt="starlg" className="2xl:w-30 xl:w-24 w-20 animate-spin scale-[120%] mix-blend-lighten" style={{ animationDuration: '4s' }} />
            <img src="/assets/imgs/heros/star-md.svg" alt="starmd" className="2xl:w-18 xl:w-14 w-12 animate-pulse mix-blend-lighten" />
            <img src="/assets/imgs/heros/star-sm.svg" alt="starsm" className="2xl:w-9  xl:w-6 w-5 animate-bounce mix-blend-lighten" />
        </div>
    )
}

export default Stars
