interface ErrorProps {
    message: string;
}

const Error = ({ message }: ErrorProps) => {
    return (
        <div className="flex min-h-300 w-full items-center justify-center bg-grey-08 light:bg-white-99 light px-20 text-center">
            <div className="flex max-w-500 flex-col items-center gap-15 rounded-12 border border-grey-15 light:border-white-90 bg-grey-10 light:bg-white-95 p-30">

                <div className="flex h-50 w-50 items-center justify-center rounded-full bg-purple-60 text-24 font-bold text-white">
                    !
                </div>

                <h2 className="font-urbanist text-24 font-bold text-white light:text-grey-08">
                    Something went wrong
                </h2>

                <p className="font-urbanist text-16 text-white-90 light:text-grey-20">
                    {message}
                </p>

            </div>
        </div>
    );
};

export default Error;