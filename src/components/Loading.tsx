const Loading = () => {
    return (
        <div className="flex min-h-300 w-full items-center justify-center bg-grey-08 light:bg-white-99 text-white light:text-grey-08">
            <div className="flex flex-col items-center gap-20">

                <div className="h-40 w-40 animate-spin rounded-full border-4 border-grey-30 border-t-purple-60" />

                <p className="font-urbanist text-18 text-white-90 light:text-grey-20">
                    Loading...
                </p>

            </div>
        </div>
    );
};

export default Loading;