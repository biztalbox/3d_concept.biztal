import HeroCanvas from '@/component/bot/HeroCanvas'
import Link from 'next/link'

const page = () => {
    return (
        <main>

            {/* Hero Section */}
            <section className="relative w-full px-0 sm:p-5">
                {/* right-side background decorative strips (flush to viewport edge) */}
                <div className="pointer-events-none absolute -top-20 right-0 z-0 hidden h-[calc(100%+5rem)] w-[36vw] overflow-hidden md:block">
                    <div className="absolute top-0 right-[72px] h-[120%] w-[140px] skew-x-[-33deg] bg-secondary dark:bg-secondary/40" />
                    <div className="absolute top-0 right-[-90px] h-[120%] w-[130px] skew-x-[-33deg] bg-secondary dark:bg-secondary/40" />
                </div>

                <div className="container grid grid-cols-1 gap-10 md:grid-cols-2 pb-10">
                    <div className="order-2 md:order-1 px-4 py-16 sm:px-0 flex flex-col gap-8">
                        <h2>Protect Productive Work Time Across the Enterprise.
                        </h2>

                        <p>
                            ZerofAI helps organizations identify workflow inefficiencies, digital interruptions, and hidden productivity drains that
                            reduce employee focus, efficiency, and uninterrupted productive work time across the digital workplace.
                        </p>

                        <div className="flex flex-wrap items-center gap-6">
                            <Link
                                href="/contact"
                                className="rounded-full bg-primary px-7 py-3 text-xs font-semibold text-primary-foreground hover:bg-primary-hover sm:text-sm"
                            >
                                Get a Demo
                            </Link>
                        </div>
                    </div>
                    <HeroCanvas />

                </div>
            </section>

            <section>
                <div className="container flex gap-5">
                
                </div>
            </section>


        </main>
    )
}

export default page