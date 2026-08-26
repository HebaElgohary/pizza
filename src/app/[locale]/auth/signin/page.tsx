import { getDictionary } from "@/app/[locale]/dictionaries";
import Header from "@/components/header";
import SignInForm from "./SignInForm";
import { Locale } from "@/i18n.config";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function SigninPage({ params }: Props) {
  const { locale } = await params;

  const { login } = await getDictionary(locale);

  return (
    <main className="relative !min-h-screen overflow-hidden bg-gradient-to-br from-primary/10 via-white to-orange-50">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-32 -top-32 !h-72 !w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 -right-32 !h-80 !w-80 rounded-full bg-orange-200/30 blur-3xl" />

      {/* Header */}
      <Header />

      {/* Content */}
      <section className="container relative flex !min-h-[calc(100vh-80px)] items-center justify-center !px-4 !py-8">
        <div className="grid !w-full max-w-5xl overflow-hidden rounded-3xl border border-white/60 bg-white/80 shadow-2xl backdrop-blur-xl lg:grid-cols-2">

          {/* ================= LEFT SIDE ================= */}
          <div className="relative hidden overflow-hidden bg-gradient-to-br from-primary to-primary/80 !p-10 text-white lg:flex lg:flex-col lg:justify-between">

            {/* Decorative circles */}
            <div className="absolute -right-20 -top-20 !h-56 !w-56 rounded-full bg-white/10" />

            <div className="absolute -bottom-24 -left-20 !h-64 !w-64 rounded-full bg-white/10" />

            <div className="relative z-10">

              <div className="flex !w-fit items-center rounded-full bg-white/15 !px-4 !py-2 backdrop-blur-sm">
                <span className="!mr-2 text-lg">
                  🍕
                </span>

                <span className="text-sm font-semibold">
                  {login.welcomeBadge}
                </span>
              </div>

              <h1 className="!mt-8 max-w-md text-4xl font-black leading-tight">
                {login.heroTitle}
              </h1>

              <p className="!mt-5 max-w-md text-base leading-7 text-white/80">
                {login.heroDescription}
              </p>
            </div>

            {/* Features */}
            <div className="relative z-10 !space-y-4">

              <div className="flex items-center !space-x-3">
                <div className="flex !h-10 !w-10 items-center justify-center rounded-xl bg-white/15">
                  🍕
                </div>

                <div>
                  <p className="font-semibold">
                    {login.featureOneTitle}
                  </p>

                  <p className="text-sm text-white/70">
                    {login.featureOneDescription}
                  </p>
                </div>
              </div>

              <div className="flex items-center !space-x-3">
                <div className="flex !h-10 !w-10 items-center justify-center rounded-xl bg-white/15">
                  🛵
                </div>

                <div>
                  <p className="font-semibold">
                    {login.featureTwoTitle}
                  </p>

                  <p className="text-sm text-white/70">
                    {login.featureTwoDescription}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="!p-6 sm:!p-8 lg:!p-10">

            {/* Heading */}
            <div className="!mb-8 text-center">

              <div className="mx-auto flex !h-14 !w-14 items-center justify-center rounded-2xl bg-primary/10 text-2xl shadow-sm">
                👋
              </div>

              <h2 className="!mt-4 text-3xl font-black tracking-tight text-gray-900">
                {login.title}
              </h2>

              <p className="!mt-2 text-sm text-gray-500">
                {login.description}
              </p>

            </div>

            <SignInForm
              login={login}
              locale={locale}
            />

          </div>

        </div>
      </section>
    </main>
  );
}