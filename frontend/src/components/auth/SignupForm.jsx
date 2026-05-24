import { useForm } from "react-hook-form";

function SignupForm({
    onSubmit,
    loading,
}) {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
        >

            {/* Username */}
            <div>

                <label className="block mb-2 text-sm font-medium text-slate-700 tracking-wide">
                    Username
                </label>

                <input
                    type="text"
                    placeholder="Choose a username"
                    {...register("username", {
                        required: "Username is required",
                        minLength: {
                            value: 3,
                            message:
                                "Username must be at least 3 characters",
                        },
                    })}
                    className="
                        w-full
                        rounded-2xl
                        border border-emerald-100
                        bg-white/70
                        backdrop-blur-md
                        px-4 py-3.5
                        text-slate-800
                        placeholder:text-slate-400
                        outline-none
                        transition-all duration-300
                        focus:border-emerald-400
                        focus:ring-4
                        focus:ring-emerald-100
                        hover:border-emerald-200
                    "
                />

                {errors.username && (
                    <p className="mt-2 text-sm text-red-500">
                        {errors.username.message}
                    </p>
                )}

            </div>

            {/* Email */}
            <div>

                <label className="block mb-2 text-sm font-medium text-slate-700 tracking-wide">
                    Email
                </label>

                <input
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value:
                                /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message:
                                "Enter a valid email",
                        },
                    })}
                    className="
                        w-full
                        rounded-2xl
                        border border-emerald-100
                        bg-white/70
                        backdrop-blur-md
                        px-4 py-3.5
                        text-slate-800
                        placeholder:text-slate-400
                        outline-none
                        transition-all duration-300
                        focus:border-emerald-400
                        focus:ring-4
                        focus:ring-emerald-100
                        hover:border-emerald-200
                    "
                />

                {errors.email && (
                    <p className="mt-2 text-sm text-red-500">
                        {errors.email.message}
                    </p>
                )}

            </div>

            {/* Password */}
            <div>

                <label className="block mb-2 text-sm font-medium text-slate-700 tracking-wide">
                    Password
                </label>

                <input
                    type="password"
                    placeholder="Create a password"
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message:
                                "Password must be at least 6 characters",
                        },
                    })}
                    className="
                        w-full
                        rounded-2xl
                        border border-emerald-100
                        bg-white/70
                        backdrop-blur-md
                        px-4 py-3.5
                        text-slate-800
                        placeholder:text-slate-400
                        outline-none
                        transition-all duration-300
                        focus:border-emerald-400
                        focus:ring-4
                        focus:ring-emerald-100
                        hover:border-emerald-200
                    "
                />

                {errors.password && (
                    <p className="mt-2 text-sm text-red-500">
                        {errors.password.message}
                    </p>
                )}

            </div>

            {/* Button */}
            <button
                type="submit"
                disabled={loading}
                className="
                    relative
                    w-full
                    overflow-hidden
                    rounded-2xl
                    bg-emerald-600
                    py-3.5
                    font-medium
                    text-white
                    shadow-lg
                    shadow-emerald-500/20
                    transition-all duration-300
                    hover:bg-emerald-700
                    hover:shadow-xl
                    hover:shadow-emerald-500/30
                    hover:-translate-y-0.5
                    disabled:cursor-not-allowed
                    disabled:opacity-70
                "
            >

                <div className="absolute inset-0 bg-linear-to-r from-white/10 via-white/5 to-transparent opacity-40" />

                <span className="relative z-10">
                    {loading
                        ? "Creating Account..."
                        : "Create Account"}
                </span>

            </button>

        </form>
    );
}

export default SignupForm;