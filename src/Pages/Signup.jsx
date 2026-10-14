import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Phone, Lock, Eye, EyeOff } from "lucide-react";
import image from "../assets/image.svg";


function Field({
  label,
  icon: Icon,
  type = "text",
  placeholder,
  value,
  onChange,
  isPassword = false,
  error,
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-[8px]">
      <label className="font-['Roboto'] font-medium text-[14px] leading-[20px] text-white">
        {label}
      </label>

      <div className="relative w-[384px] h-[46px]">
        <Icon className="absolute left-[17px] top-1/2 -translate-y-1/2 w-[16px] h-[16px] text-gray-500" />

        <input
          type={isPassword ? (show ? "text" : "password") : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full h-full rounded-[12px] border bg-white
                      pt-[13px] pr-[17px] pb-[13px] pl-[49px]
                      font-['Roboto'] text-[14px] text-gray-900 placeholder:text-gray-400
                      outline-none ${error ? "border-red-400" : "border-white/30 focus:border-white"}`}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-[17px] top-1/2 -translate-y-1/2 text-gray-500"
          >
            {show ? <EyeOff className="w-[16px] h-[16px]" /> : <Eye className="w-[16px] h-[16px]" />}
          </button>
        )}
      </div>
    </div>
  );
}

function CheckRow({ checked, onChange, children }) {
  return (
    <label className="flex items-center gap-[12px] w-[384px] h-[20px] cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-[16px] h-[16px] rounded-[4px] accent-white cursor-pointer"
      />
      <span className="font-['Roboto'] font-normal text-[12px] leading-[16px] text-white/80">
        {children}
      </span>
    </label>
  );
}

export default function Signup() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [agree, setAgree] = useState(false);
  const [subscribe, setSubscribe] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (name) => (e) =>
    setForm({ ...form, [name]: e.target.value });

  const validate = () => {
    const e = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Invalid email";
    if (form.password.length < 8) e.password = "At least 8 characters";
    if (form.password !== form.confirmPassword) e.confirmPassword = "Passwords do not match";
    if (!agree) e.agree = "You must agree to continue";
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      console.log("Signup data:", { ...form, subscribe });
      // TODO: call your signup API here
    }
  };

  return (
    <div className="relative w-[1440px] h-[1024px] overflow-hidden bg-gradient-to-b from-[#0b6b5c] to-[#04302b]">
      {/* Left image (put character.png in the public folder) */}
      <img
        src={image}
        alt=""
        className="absolute top-[104px] left-[97px] w-[600px] h-[600px] opacity-100"
      />

      {/* Right card */}
      <form
        onSubmit={handleSubmit}
        className="absolute top-[99px] left-[864px] w-[448px] h-[911px] rounded-[16px]
                   border border-white/20 bg-white/5 backdrop-blur-md p-[32px]"
      >
        <h1 className="font-['Roboto'] font-bold text-[30px] leading-[36px] text-center text-white">
          Create Your Account
        </h1>
        <p className="mt-[8px] font-['Roboto'] font-normal text-[16px] leading-[24px] text-center text-white/80">
          Start your study abroad journey
        </p>

        {/* Fields */}
        <div className="mt-[32px] w-[384px] h-[464px] flex flex-col justify-between">
          <Field label="Full Name*" icon={User} placeholder="Enter your full name"
                 value={form.fullName} onChange={handleChange("fullName")} error={errors.fullName} />
          <Field label="Email" icon={Mail} type="email" placeholder="Enter your email"
                 value={form.email} onChange={handleChange("email")} error={errors.email} />
          <Field label="Phone Num" icon={Phone} type="tel" placeholder="Enter Phone Num..."
                 value={form.phone} onChange={handleChange("phone")} />
          <Field label="Password" icon={Lock} isPassword placeholder="Create a password"
                 value={form.password} onChange={handleChange("password")} error={errors.password} />
          <Field label="Confirm Password" icon={Lock} isPassword placeholder="Create a password"
                 value={form.confirmPassword} onChange={handleChange("confirmPassword")} error={errors.confirmPassword} />
        </div>

        {/* Checkboxes */}
        <div className="mt-[16px] flex flex-col">
          <CheckRow checked={agree} onChange={(e) => setAgree(e.target.checked)}>
            I agree to the <span className="font-medium text-white">Terms &amp; Privacy Policy</span>
          </CheckRow>
          <div className="w-[384px] h-[40px] pt-[20px] box-border">
            <CheckRow checked={subscribe} onChange={(e) => setSubscribe(e.target.checked)}>
              Subscribe to our <span className="font-medium text-white">Newsletter</span>
            </CheckRow>
          </div>
        </div>

        {/* Create Account button */}
        <div className="w-[384px] h-[68px] pt-[20px] box-border">
          <button
            type="submit"
            className="w-full h-[48px] rounded-[12px] bg-white
                       font-['Roboto'] font-semibold text-[16px] leading-[24px] text-[#0b6b5c]
                       hover:bg-white/90 active:scale-[0.99] transition"
          >
            Create Account
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center mt-5 gap-[12px] w-[384px] h-[20px]">
          <div className="flex-1 h-px bg-white/30  " />
          <span className="font-['Roboto'] font-normal text-[12px] leading-[16px] text-white/70">
            Or sign up with 
          </span>
          <div className="flex-1 h-px bg-white/30" />
        </div>

        {/* Google button */}
        <button
          type="button"
          className="mt-[16px] flex items-center justify-center gap-[16px] w-[384px] h-[54px]
                     rounded-[12px] border border-white/30 bg-white/5
                     font-['Roboto'] font-medium text-[16px] leading-[24px] text-white/60
                     hover:bg-white/10 transition"
        >
          <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24">
            <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.2 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.7 3.5 14.6 2.5 12 2.5 6.8 2.5 2.6 6.7 2.6 12S6.8 21.5 12 21.5c5.5 0 9.1-3.9 9.1-9.3 0-.6-.1-1.1-.2-1.6H12z" />
          </svg>
          <span>Google</span>
        </button>

        {/* Already have an account */}
        <div className="w-[384px] h-[48px] pt-[24px] box-border">
          <p className="text-center font-['Roboto'] font-normal text-[14px] leading-[24px] text-white">
            Already have an account?{" "}
            <Link to="/login" className="font-bold text-white hover:underline">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}