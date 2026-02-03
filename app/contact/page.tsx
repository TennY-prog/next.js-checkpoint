import ContactForm from '@/components/sections/ContactForm';

export const metadata = {
  title: 'Contact'
};

export default function ContactPage() {
  return (
    <main className="py-12">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        Send a message or reach out via social links below.
      </p>
      <ContactForm />
    </main>
  );
}
