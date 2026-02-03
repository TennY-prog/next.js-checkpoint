'use client';
import { useForm } from 'react-hook-form';

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset
  } = useForm<FormValues>();

  const onSubmit = async (values: FormValues) => {
    try {
      console.warn('Contact submission', values);
      await new Promise((r) => setTimeout(r, 500));
      reset();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-6 max-w-lg space-y-4">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          className="mt-1 w-full rounded-md border border-slate-300 bg-white p-2 dark:border-slate-700 dark:bg-slate-900"
          {...register('name', { required: 'Name is required', minLength: 2 })}
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          className="mt-1 w-full rounded-md border border-slate-300 bg-white p-2 dark:border-slate-700 dark:bg-slate-900"
          {...register('email', { required: 'Email is required' })}
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea
          rows={5}
          className="mt-1 w-full rounded-md border border-slate-300 bg-white p-2 dark:border-slate-700 dark:bg-slate-900"
          {...register('message', { required: 'Message is required', minLength: 10 })}
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-md bg-primary px-4 py-2 text-white disabled:opacity-60"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
      {isSubmitSuccessful && (
        <p className="text-sm text-green-600">Message sent successfully. Thank you!</p>
      )}
    </form>
  );
}
