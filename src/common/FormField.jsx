import { AlertIcon } from "./icons";

function FormField({ label, name, register, required, rules = {}, errors, ...props }) {
  const error = errors[name];

  return (
    <div>
      <label
        htmlFor={name}
        className={`mb-1.5 block text-xs ${error ? "text-danger-700" : "opacity-70"}`}
      >
        {label}
      </label>
      <input
        id={name}
        className={`h-10 w-full rounded-card border px-3 text-sm outline-none placeholder:text-ink/40 ${
          error
            ? "border-danger-600 bg-danger-100"
            : "border-line bg-transparent hover:border-ink/30 focus:border-accent-600 focus:ring-2 focus:ring-accent-600/20"
        }`}
        {...props}
        {...register(name, { required, ...rules })}
      />
      {error && (
        <p id={`${name}-error`} className="mt-2 flex items-center gap-1.5 text-xs text-danger-700">
          <AlertIcon size={13} />
          {error.message}
        </p>
      )}
    </div>
  );
}

export default FormField;
