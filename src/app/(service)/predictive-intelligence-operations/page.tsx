import AosInit from '@/component/AosInit'
import HeroCanvas from '@/component/bot/HeroCanvas'
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


            </main>
        </AosInit>
    )
}
export default page