import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../components/AtomComponents/Button";
import InputCard from "../components/inputs/InputCard";

const ADMIN_EMAIL = "estatein@gmail.com";
const ADMIN_PASSWORD = "estatein123";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError("");

        if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
            sessionStorage.setItem("isLoggedIn", "true");
            navigate("/dashboard");
        } else {
            setError("Invalid email or password.");
        }
    };

    return (
        <div
            className="
                relative
                flex
                min-h-screen
                items-center
                justify-center
                overflow-hidden
                bg-grey-08 light:bg-white-99
                px-20
            "
        >
            {/* Background Glow */}
            <motion.div
                className="
                    pointer-events-none
                    absolute
                    -left-100
                    -top-100
                    h-300
                    w-300
                    rounded-full
                    bg-purple-60/10
                    blur-100
                "
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="
                    pointer-events-none
                    absolute
                    -bottom-100
                    -right-100
                    h-300
                    w-300
                    rounded-full
                    bg-purple-60/10
                    blur-100
                "
                animate={{
                    scale: [1.15, 1, 1.15],
                    opacity: [0.7, 0.4, 0.7],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Login Card */}
            <motion.div
                className="
                    relative
                    w-full
                    max-w-450
                    rounded-2xl
                    border
                    border-grey-15 light:border-white-90
                    bg-grey-10 light:bg-white-95
                    p-30
                    shadow-2xl
                "
            >
                {/* Logo */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: -15,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0.2,
                    }}
                    className="mb-30 flex justify-center mr-30"
                >
                    <motion.img
                        src="/assets/imgs/EstateinLogo.webp"
                        alt="Estatein"
                        className="h-35 w-auto object-contain light:hidden"
                        whileHover={{
                            scale: 1.05,
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                    />
                    <motion.img
                        src="/assets/imgs/logolight.webp"
                        alt="Estatein"
                        className="hidden h-45 w-auto object-contain light:block"
                        whileHover={{
                            scale: 1.05,
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                    />
                </motion.div>

                {/* Title */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 15,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0.3,
                    }}
                    className="mb-25 text-center px-10"
                >
                    <h1 className="text-26 font-semibold text-white light:text-grey-08">
                        Welcome Back
                    </h1>

                    <p className="mt-8 text-14 text-white-90 light:text-grey-20">
                        Sign in to your Estatein dashboard
                    </p>
                </motion.div>

                {/* Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0.4,
                    }}
                    className="flex flex-col gap-18"
                >
                    {/* Email */}

                    <motion.div
                        whileFocus={{
                            scale: 1.02,
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                    >
                        <InputCard
                            label="Email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(event) =>
                                setEmail(event.target.value)
                            }
                        />
                    </motion.div>

                    {/* Password */}

                    <motion.div
                        whileFocus={{
                            scale: 1.02,
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                    >
                        <InputCard
                            label="Password"
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                        />
                    </motion.div>

                    {/* Error */}
                    <div className="px-10">
                    <AnimatePresence>
                        {error && (
                            <motion.p
                                initial={{
                                    opacity: 0,
                                    height: 0,
                                    y: -5,
                                }}
                                animate={{
                                    opacity: 1,
                                    height: "auto",
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    height: 0,
                                    y: -5,
                                }}
                                transition={{
                                    duration: 0.3,
                                }}
                                className="
                                    overflow-hidden
                                    rounded-lg
                                    border
                                    border-red-500/20
                                    bg-red-500/10
                                    px-12
                                    py-10
                                    text-13
                                    text-red-400
                                "
                            >
                                {error}
                            </motion.p>
                        )}
                    </AnimatePresence>
                    </div>

                    <div className="px-10">
                    {/* Login Button */}
                    <motion.div
                        whileTap={{
                            scale: 0.97,
                        }}
                    >
                        <Button
                            content="Login"
                            className="
                                w-full
                                rounded-lg
                                bg-purple-60
                                text-white
                                font-semibold
                            "
                            />
                    </motion.div>
                    </div>

                </motion.form>
            </motion.div>

            {/* Footer */}
            <motion.p
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 0.6,
                }}
                transition={{
                    duration: 0.8,
                    delay: 0.8,
                }}
                className="
                    absolute
                    bottom-20
                    text-12
                    text-white-90 light:text-grey-20
                "
            >
                © Estatein. All rights reserved.
            </motion.p>
        </div>
    );
};

export default Login;
