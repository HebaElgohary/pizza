import { getDictionary } from "@/app/[locale]/dictionaries";
import Header from "@/components/header";
import SignInForm from "./SignInForm";
import { Locale } from "@/i18n.config";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function SigninPage({ params }: Props) {
  const { locale } = await params;

  const { login, validations } = await getDictionary(locale as Locale);

  return (
    <main className="bg-gradient-to-br from-primary/19 to-[#e2e2e2] w-full min-h-screen flex flex-col">
      <Header />
      <div className="w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 bg-white rounded-2xl shadow-xl p-6 my-22 h-fit mx-auto">
        <div className="text-center font-bold text-3xl mb-6">
          {login.title}
        </div>
        <SignInForm login={login} locale={locale} />
      </div>
    </main>
  );
}