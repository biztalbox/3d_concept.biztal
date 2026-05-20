import AosInit from '@/component/AosInit'
import HeroCanvas from '@/component/bot/HeroCanvas'
import Image from 'next/image'
import Link from 'next/link'
import {
    AOS_DURATION,
    AOS_EASING,
    CARD_STAGGER_MS,
    COMPARE_STAGGER_MS,
} from '@/lib/aos-config'
import type { IconType } from 'react-icons'
import { FaFire, FaRegCircle, FaArrowDown, FaArrowRight } from 'react-icons/fa'
import { BsFileBarGraph } from 'react-icons/bs'
import { FaCheck, FaRegCircleCheck, FaClockRotateLeft } from 'react-icons/fa6'
import { GoShieldCheck } from 'react-icons/go'
import { GiMagnifyingGlass } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'
import { TbSettingsCheck } from 'react-icons/tb'

const invisibleSupportSteps: {
    Icon: IconType
    label: string
    complete?: boolean
}[] = [
        { Icon: GiMagnifyingGlass, label: 'Detecting Issues' },
        { Icon: TbSettingsCheck, label: 'Auto Healing in Progress' },
        { Icon: GoShieldCheck, label: 'Preventing Recurrence' },
        { Icon: FaRegCircleCheck, label: 'Operational Stability' },
    ]

function CompareListIcon({ variant }: { variant: 'negative' | 'positive' }) {
    return (
        <span className="relative flex size-8 shrink-0 items-center justify-center" aria-hidden>
            <FaRegCircle className="absolute size-8 text-primary [&>path]:fill-primary" />
            <span className="absolute inset-[3px] rounded-full bg-primary sm:inset-1" />
            {variant === 'negative' ? (
                <RxCross2 className="relative z-10 size-3.5 text-white sm:size-4" />
            ) : (
                <FaCheck className="relative z-10 size-3 text-white sm:size-3.5" />
            )}
        </span>
    )
}

const fragmentedSupportItems = [
    'Reactive ticket cycles',
    'Manual escalations',
    'Disconnected workflows',
    'Operational delays',
] as const

const autonomousFlowItems = [
    'Continuous orchestration',
    'Intelligent automation',
    'Self-healing operations',
    'Scalable efficiency',
] as const

const operationalOutcomeCards = [
    {
        Icon: FaFire,
        lines: ['Less', 'firefighting.'],
    },
    {
        Icon: BsFileBarGraph,
        lines: ['More', 'meaningful', 'operations.'],
    },
    {
        Icon: FaArrowDown,
        lines: ['Fewer repetitive', 'escalations.'],
    },
    {
        Icon: FaClockRotateLeft,
        lines: ['Faster employee', 'support', 'experiences.'],
    },
] as const

const supportStruggleCards = [
    {
        title: 'Ticket overload',
        description: 'Every interruption creates another ticket.',
    },
    {
        title: 'Recurring Issues',
        description: 'Every recurring issue demands another manual workflow',
    },
    {
        title: 'Escalations',
        description: 'Every escalation slows the employee experience further.',
    },
] as const

const predictiveOutcomesBanner = [
    { lead: 'Fewer ', accent: 'operational', tail: ' surprises.' },
    { lead: 'Earlier ', accent: 'risk', tail: ' visibility.' },
    { lead: 'Faster ', accent: 'operational', tail: ' decisions.' },
    { lead: 'More resilient ', accent: 'enterprise', tail: ' operations.' },
] as const

function predictiveBannerCellClass(index: number) {
    const base = 'relative px-5 py-9 sm:px-7 sm:py-10 lg:px-8 lg:py-11'
    const divider =
        'before:pointer-events-none before:absolute before:top-1/2 before:hidden before:h-[56%] before:w-px before:-translate-y-1/2 before:bg-primary lg:before:left-0 lg:before:block'
    if (index === 0) return base
    if (index === 1) {
        return `${base} border-t border-primary md:border-t-0 md:border-l md:border-primary lg:border-t-0 ${divider}`
    }
    if (index === 2) {
        return `${base} border-t border-primary lg:border-t-0 ${divider}`
    }
    return `${base} border-t border-primary md:border-l md:border-primary lg:border-t-0 ${divider}`
}

const page = () => {
    return (
        <AosInit>
            <main>

                {/* Hero Section */}
                <section className="relative w-full px-0 sm:p-5">
                    {/* right-side background decorative strips (flush to viewport edge) */}
                    <div className="pointer-events-none absolute -top-20 right-0 z-0 hidden h-[calc(100%+5rem)] w-[36vw] overflow-hidden md:block">
                        <div className="absolute top-0 right-[72px] h-[120%] w-[140px] skew-x-[-33deg] bg-secondary dark:bg-secondary/40" />
                        <div className="absolute top-0 right-[-90px] h-[120%] w-[130px] skew-x-[-33deg] bg-secondary dark:bg-secondary/40" />
                    </div>

                    <div className="container grid grid-cols-1 gap-10 md:grid-cols-2 pb-10">
                        <div
                            className="order-2 md:order-1 px-4 py-16 sm:px-0 flex flex-col gap-8"
                        >
                            <h2>Operations Shouldn&rsquo;t Wait for <span className="text-primary!">Problems </span> to Happen
                            </h2>

                            <p>
                                ZerofAI helps enterprises move from reactive operations to predictive intelligence environments that continuously anticipate disruptions, identify operational risks early, and improve decision-making before issues begin impacting business continuity.

                            </p>

                            <div className="flex flex-wrap items-center gap-6">
                                <Link
                                    href="/contact"
                                    className="rounded-full bg-primary px-7 py-3 text-xs font-semibold text-primary-foreground hover:bg-primary-hover sm:text-sm"
                                >
                                    Explore Predictive Operations
                                </Link>
                            </div>
                        </div>
                        <div
                            className="order-1 md:order-2"
                        >
                            <HeroCanvas />
                        </div>

                    </div>
                </section>

                <section className="bg-secondary py-16 sm:py-20 dark:bg-secondary/40">
                    <div className="container flex flex-col gap-6">
                        <h2
                            data-aos="fade-up"
                            data-aos-duration={AOS_DURATION}
                            data-aos-easing={AOS_EASING}>
                            Most Enterprise Operations Still React Too Late
                        </h2>
                        
                        <div className="flex gap-3 items-center">
                            <div className="bg-primary p-2 rounded">
                            <FaArrowRight size={20} />
                            </div>
                            <p className="px-3 py-1 bg-secondary dark:bg-secondary/40 rounded">Traditional operations are built around visibility after disruption.</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <div className="bg-primary p-2 rounded">
                            <FaArrowRight size={20} />
                            </div>
                            <p className="px-3 py-1 bg-secondary dark:bg-secondary/40 rounded">Alerts appear after systems degrade.</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <div className="bg-primary p-2 rounded">
                            <FaArrowRight size={20} />
                            </div>
                            <p className="px-3 py-1 bg-secondary dark:bg-secondary/40 rounded">Support teams respond after employees are impacted.</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <div className="bg-primary p-2 rounded">
                            <FaArrowRight size={20} />
                            </div>
                            <p className="px-3 py-1 bg-secondary dark:bg-secondary/40 rounded">Operational decisions happen after performance begins slowing down</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <div className="bg-primary p-2 rounded">
                            <FaArrowRight size={20} />
                            </div>
                            <p className="px-3 py-1 bg-secondary dark:bg-secondary/40 rounded">Even modern monitoring environments often improve visibility without improving anticipation.</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <div className="bg-primary p-2 rounded">
                            <FaArrowRight size={20} />
                            </div>
                            <p className="px-3 py-1 bg-secondary dark:bg-secondary/40 rounded">The problem is no longer access to data.</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <div className="bg-primary p-2 rounded">
                            <FaArrowRight size={20} />
                            </div>
                            <p className="px-3 py-1 bg-secondary dark:bg-secondary/40 rounded">It’s the inability to predict operational disruption before it escalates.
                            </p>
                        </div>

                    </div>
                </section>

                {/* From visibility → predictive intelligence (text left / image right) */}
                <section
                    className="bg-neutral-50 py-16 sm:py-20 md:py-24 dark:bg-[#1e1e1e]"
                    aria-labelledby="operational-visibility-heading"
                >
                    <div className="container">
                        <h2
                            id="operational-visibility-heading"
                            className="max-w-4xl text-left text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.15]"
                            data-aos="fade-up"
                            data-aos-duration={AOS_DURATION}
                            data-aos-easing={AOS_EASING}
                        >
                            <span className="text-foreground">From Operational Visibility to </span>
                            <span className="text-primary">Predictive Intelligence</span>
                        </h2>

                        <div className="mt-10 grid grid-cols-1 items-center gap-10 md:mt-14 lg:grid-cols-2 lg:gap-14 xl:gap-16">
                            <div
                                className="flex flex-col justify-center"
                                data-aos="fade-left"
                                data-aos-duration={AOS_DURATION}
                                data-aos-easing={AOS_EASING}
                            >
                                <div className="rounded-[24px] border border-neutral-200 bg-neutral-100 px-7 py-9 sm:px-9 sm:py-10 md:px-10 md:py-11 dark:border-white/10 dark:bg-[#2a2a2a]">
                                    <p className="text-sm font-medium leading-relaxed text-neutral-900 first:mt-0 sm:text-base md:leading-relaxed dark:text-white">
                                        Enterprise operations generate massive signals long before failures become tickets,
                                        incidents, or executive-visible disruption in traditional dashboards.
                                    </p>
                                    <p className="mt-4 text-sm font-medium leading-relaxed text-neutral-900 sm:text-base md:leading-relaxed dark:text-white">
                                        Moving from static visibility to predictive intelligence means correlating patterns
                                        across systems, users, and services earlier in the disruption lifecycle—when
                                        remediation is cheaper, faster, and less customer-impacting.
                                    </p>
                                    <p className="mt-4 text-sm font-semibold leading-relaxed text-primary sm:text-base md:leading-relaxed dark:text-primary">
                                        ZerofAI helps teams operationalize that shift by fusing continuous signal
                                        ingestion, contextual enrichment, and anticipatory alerting so leaders intervene
                                        while outcomes are still reversible.
                                    </p>
                                </div>
                            </div>

                            <div
                                data-aos="fade-right"
                                data-aos-duration={AOS_DURATION}
                                data-aos-easing={AOS_EASING}
                                data-aos-delay="80"
                            >
                                <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
                                    <div className="relative aspect-4/3 w-full overflow-hidden rounded-[24px] border-y-0 border-r-0 border-l-8 border-primary bg-neutral-200 dark:bg-neutral-950">
                                        <Image
                                            src="/assets/images/predictive-visibility-data-stream.png"
                                            alt="Abstract visualization of operational signals converging into ZerofAI predictive intelligence."
                                            fill
                                            className="object-cover object-center"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Intelligence layer (image left / text right) */}
                <section
                    className="bg-neutral-50 py-16 sm:py-20 md:py-24 dark:bg-[#1e1e1e]"
                    aria-labelledby="intelligence-layer-heading"
                >
                    <div className="container">
                        <h2
                            id="intelligence-layer-heading"
                            className="max-w-4xl text-left text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.15]"
                            data-aos="fade-up"
                            data-aos-duration={AOS_DURATION}
                            data-aos-easing={AOS_EASING}
                        >
                            <span className="text-primary">An Intelligence Layer </span>
                            <span className="text-foreground">That Continuously Learns</span>
                        </h2>

                        <div className="mt-10 grid grid-cols-1 items-center gap-10 md:mt-14 lg:grid-cols-2 lg:gap-14 xl:gap-16">
                            <div
                                className="flex flex-col justify-center"
                                data-aos="fade-left"
                                data-aos-duration={AOS_DURATION}
                                data-aos-easing={AOS_EASING}
                            >
                                <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
                                    <div className="relative aspect-4/3 w-full overflow-hidden rounded-[24px] border-y-0 border-l-0 border-r-8 border-primary bg-neutral-200 dark:bg-neutral-950">
                                        <Image
                                            src="/assets/images/predictive-intelligence-network.png"
                                            alt="Network diagram of ZerofAI intelligence connections across enterprise systems and teams."
                                            fill
                                            className="object-cover object-center"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div
                                className="flex flex-col justify-center"
                                data-aos="fade-right"
                                data-aos-duration={AOS_DURATION}
                                data-aos-easing={AOS_EASING}
                                data-aos-delay="80"
                            >
                                <div className="rounded-[24px] border border-neutral-200 bg-neutral-100 px-7 py-9 sm:px-9 sm:py-10 md:px-10 md:py-11 dark:border-white/10 dark:bg-[#2a2a2a]">
                                    <p className="text-sm font-medium leading-relaxed text-neutral-900 first:mt-0 sm:text-base md:leading-relaxed dark:text-white">
                                        A predictive operations program is only as strong as the intelligence layer
                                        sitting underneath it—one that can absorb messy enterprise reality without
                                        constant re-tuning.
                                    </p>
                                    <p className="mt-4 text-sm font-medium leading-relaxed text-neutral-900 sm:text-base md:leading-relaxed dark:text-white">
                                        That layer needs to learn continuously from new signals, seasonal patterns,
                                        change windows, and human feedback so recommendations stay relevant as the
                                        environment evolves.
                                    </p>
                                    <p className="mt-4 text-sm font-medium leading-relaxed text-neutral-900 sm:text-base md:leading-relaxed dark:text-white">
                                        When learning is continuous, operational teams spend less time reconciling
                                        contradictory alerts—and more time validating the few decisions that truly need
                                        human judgment.
                                    </p>
                                    <p className="mt-4 text-sm font-semibold leading-relaxed text-primary sm:text-base md:leading-relaxed dark:text-primary">
                                        ZerofAI compounds operational context over time, improving anticipation, tightening
                                        governance, and keeping humans in control of the decisions that matter most.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* AI predicts / people decide — matches design below “react too late” section */}
                <section
                    className="bg-neutral-50 py-16 sm:py-20 md:py-24 dark:bg-[#1e1e1e]"
                    aria-labelledby="predictive-intelligence-heading"
                >
                    <div className="container">
                        <h2
                            id="predictive-intelligence-heading"
                            className="max-w-4xl text-left text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.15]"
                            data-aos="fade-up"
                            data-aos-duration={AOS_DURATION}
                            data-aos-easing={AOS_EASING}
                        >
                            <span className="text-primary">AI Predicts Faster.</span>{' '}
                            <span className="text-foreground">People Decide Smarter.</span>
                        </h2>

                        <div className="mt-10 grid grid-cols-1 items-center gap-10 md:mt-14 lg:grid-cols-2 lg:gap-14 xl:gap-16">
                            <div
                                className="flex flex-col justify-center"
                                data-aos="fade-left"
                                data-aos-duration={AOS_DURATION}
                                data-aos-easing={AOS_EASING}
                            >
                                <div className="rounded-[24px] border border-neutral-200 bg-neutral-100 px-7 py-9 sm:px-9 sm:py-10 md:px-10 md:py-11 dark:border-white/10 dark:bg-[#2a2a2a]">
                                    <p className="text-sm font-medium leading-relaxed text-neutral-900 first:mt-0 sm:text-base md:leading-relaxed dark:text-white">
                                        Predictive intelligence is not about removing operational control.
                                    </p>
                                    <p className="mt-4 text-sm font-medium leading-relaxed text-neutral-900 sm:text-base md:leading-relaxed dark:text-white">
                                        It&apos;s about helping enterprise teams make faster, more informed, and more
                                        proactive operational decisions with greater confidence and operational context.
                                    </p>
                                    <p className="mt-4 text-sm font-semibold leading-relaxed text-primary sm:text-base md:leading-relaxed dark:text-primary">
                                        ZerofAI continuously surfaces predictive insights, emerging operational risks, and
                                        intelligence-driven recommendations while maintaining governance, visibility, and
                                        human oversight across enterprise environments.
                                    </p>
                                </div>
                            </div>

                            <div
                                data-aos="fade-right"
                                data-aos-duration={AOS_DURATION}
                                data-aos-easing={AOS_EASING}
                                data-aos-delay="80"
                            >
                                <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
                                    <div className="relative aspect-4/3 w-full overflow-hidden rounded-[24px] border-y-0 border-r-0 border-l-8 border-primary bg-neutral-200 dark:bg-neutral-800">
                                        <Image
                                            src="/assets/images/predictive-intelligence-decision.png"
                                            alt="Operations leader reviewing predictive intelligence on a monitor in a dimly lit office."
                                            fill
                                            className="object-cover object-[center_30%] sm:object-center"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Outcomes banner + CTA — before footer */}
                <section
                    aria-labelledby="predictive-operations-footer-heading"
                    className="w-full bg-neutral-200 py-10 sm:py-12 md:py-14 dark:bg-[#1a1a1a]"
                    data-aos="fade-up"
                    data-aos-duration={AOS_DURATION}
                    data-aos-easing={AOS_EASING}
                >
                    <div className="container px-4 sm:px-6">
                        <div className="overflow-hidden rounded-2xl bg-neutral-950 sm:rounded-3xl dark:bg-black">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                                {predictiveOutcomesBanner.map((row, index) => (
                                    <div
                                        key={row.accent}
                                        className={predictiveBannerCellClass(index)}
                                    >
                                        <p className="text-left text-base font-semibold leading-snug tracking-tight text-white sm:text-lg md:text-xl">
                                            {row.lead}
                                            <span className="text-primary">{row.accent}</span>
                                            {row.tail}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mx-auto mt-6 max-w-5xl sm:mt-8">
                            <div className="rounded-t-[2.5rem] bg-neutral-950 px-6 pb-12 pt-8 text-center sm:rounded-t-[3rem] sm:px-10 sm:pb-14 sm:pt-10 md:px-14 dark:bg-black">
                                <div
                                    className="mx-auto h-0.5 w-20 rounded-full bg-primary sm:w-28"
                                    aria-hidden
                                />
                                <h2
                                    id="predictive-operations-footer-heading"
                                    className="mx-auto mt-8 max-w-3xl text-balance text-2xl font-bold leading-[1.2] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[2.5rem]"
                                >
                                    The Future of Workplace
                                    <br />
                                    Operations Is Proactive.
                                </h2>
                                <div className="mt-10 flex justify-center sm:mt-12">
                                    <Link
                                        href="/contact"
                                        className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover sm:px-10 sm:text-base"
                                    >
                                        Get a Demo
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </AosInit>
    )
}
export default page