import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import login from "../api";
import clsx from "clsx";
import { Toaster, toast } from "sonner";

export default function LoginForm() {
  const { register, handleSubmit, reset } = useForm();

  async function onSubmit(data) {
    try {
      const token = await login({
        email: data.email,
        password: data.password,
      });
      localStorage.setItem("token", token.data.token);

      reset();
      toast.success("Logged in");
    } catch (error) {
      console.error("Error al loggear user", error);
      alert("Error al loggear user");
    }
  }

  return (
    <section>
      <Toaster position=" top-right richColors" />
      <div className="flex flex-col items-center mb-3">
        <img
          className="h-[100px] w-[100px]"
          src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
          alt="dev-logo"
        />
        <h1 className=" text-4xl font-semibold">Join the DEV Community</h1>
        <h5 className="text-2xl">
          DEV Community is a community of 1,446,322 amazing developers
        </h5>
      </div>
      <div className="flex flex-col">
        <button className="border rounded bg-gray-300 w-[100%] ">
          <span>
            <svg
              className="h-[35px] w-[35px]"
              xmlns="http://www.w3.org/2000/svg"
              xml:space="preserve"
              viewBox="0 0 814 1000"
            >
              <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
            </svg>
          </span>
          <p>Continue with Apple</p>
        </button>
        <button className="border rounded bg-gray-300 w-[100%] ">
          <span>
            <svg
              className="h-[35px] w-[35px]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 36 36"
              fill="url(#a)"
            >
              <defs>
                <linearGradient x1="50%" x2="50%" y1="97.078%" y2="0%" id="a">
                  <stop offset="0%" stop-color="#0062E0" />
                  <stop offset="100%" stop-color="#19AFFF" />
                </linearGradient>
              </defs>
              <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z" />
              <path
                fill="#FFF"
                d="m25 23 .8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
              />
            </svg>
          </span>
          <p>Continue with Facebook</p>
        </button>
        <button className="border rounded bg-gray-300 w-[100%] ">
          <p>Continue with Forem</p>
        </button>
        <button className="border rounded bg-gray-300 w-[100%] ">
          <span>
            <svg
              className="h-[35px] w-[35px]"
              viewBox="0 0 256 250"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" />
            </svg>
          </span>
          <p>Continue with Github</p>
        </button>
        <button className="border rounded bg-gray-300 w-[100%] ">
          <span>
            <svg
              className="h-[35px] w-[35px]"
              viewBox="0 0 256 209"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <path
                d="M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
                fill="#55acee"
              />
            </svg>
          </span>
          <p>Continue with Twitter</p>
        </button>
      </div>
      <div>
        <form
          className="flex flex-col items-center mt-8"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col w-[80%]">
            <label>Email:</label>
            <input
              className=" border rounded h-[35px] w-[100%] mb-3"
              type="text"
              required
              {...register("email", {
                required: { value: true, message: "Campo Requerido" },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Correo inválido",
                },
              })}
            />
          </div>
          <div className="flex flex-col  w-[80%]">
            <label htmlFor="">Password:</label>
            <input
              className=" border rounded-md h-[35px] w-[100%] mb-3"
              type="password"
              required
              {...register("password", {
                required: { value: true, message: "Campo Requerido" },
              })}
            />
          </div>
          <button className="border rounded-xl bg-blue-300 w-[50%] h-[60px]">
            Login
          </button>
        </form>
      </div>
    </section>
  );
}
