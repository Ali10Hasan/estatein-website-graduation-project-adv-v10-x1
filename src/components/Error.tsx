interface ErrorProps {
    message: string;
}

const Error = ({ message }: ErrorProps) => {
    return (
        <div className="flex min-h-300 w-full items-center justify-center bg-grey-08 px-20 text-center">
            <div className="flex max-w-500 flex-col items-center gap-15 rounded-12 border border-grey-15 bg-grey-10 p-30">

                <div className="flex h-50 w-50 items-center justify-center rounded-full bg-purple-60 text-24 font-bold text-white">
                    !
                </div>

                <h2 className="font-urbanist text-24 font-bold text-white">
                    Something went wrong
                </h2>

                <p className="font-urbanist text-16 text-white-90">
                    {message}
                </p>

            </div>
        </div>
    );
};

export default Error;