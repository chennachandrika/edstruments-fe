import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAuth } from "../context/AuthContext";

const AuthForm = () => {
  const { login } = useAuth();

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className=" text-xl md:text-2xl mb-4">Login</h2>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(userData) => {
          login(userData);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="w-80 p-8 rounded shadow-md bg-[#f5f7f9] text-xs md:text-sm">
            <div className="mb-3">
              <label className="text-gray-500 font-normal">Username</label>
              <Field
                name="username"
                placeholder="Enter Username"
                type="text"
                className="w-full p-2 border border-gray-400 outline-none rounded my-1"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500  font-normal"
              />
            </div>

            <div className="mb-3">
              <label className="text-gray-500  font-normal">Password</label>
              <Field
                name="password"
                placeholder="Enter Password"
                type="password"
                className="w-full p-2 border border-gray-400 outline-none rounded my-1"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 font-normal"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded cursor-pointer"
              disabled={isSubmitting}
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AuthForm;
