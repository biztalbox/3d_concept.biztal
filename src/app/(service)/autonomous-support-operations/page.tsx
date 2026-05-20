import HeroCanvas from '@/component/bot/HeroCanvas'
import OrchestrationFlowDiagram from '@/component/OrchestrationFlowDiagram'
import Link from 'next/link'
import type { IconType } from 'react-icons'
import { FaFire, FaRegCircle, FaArrowDown } from 'react-icons/fa'
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
    { Icon: FaRegCircleCheck, label: 'Operational Stability'},
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
                        <h2>The End of Reactive
                            <br />
                            <span className="text-primary!">
                                IT Support.
                            </span>
                        </h2>

                        <p>
                        Enterprise support operations shouldn’t depend on endless tickets, repetitive manual effort, and constant operational firefighting.
ZerofAI helps organizations move toward more autonomous support environments that continuously reduce operational friction in the
background.
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

            <section className="bg-secondary py-16 sm:py-20 dark:bg-secondary/40">
                <div className="container flex flex-col items-center gap-10 sm:gap-12">
                    <div className="flex max-w-4xl flex-col items-center gap-6 text-center">
                        <h2 className="text-center text-2xl font-bold leading-snug text-foreground sm:text-3xl md:text-4xl">
                            Support Teams Aren&apos;t Struggling Because{' '}
                            <span className="inline-block text-primary!">
                                They Lack Tools
                                <span
                                    className="mx-auto mt-3 block h-1 w-14 rounded-full bg-primary"
                                    aria-hidden
                                />
                            </span>
                        </h2>
                        <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
                            They&apos;re struggling because modern support environments generate too much operational noise.
                        </p>
                    </div>

                    <div className="grid w-full grid-cols-1  gap-6 md:grid-cols-3 md:gap-8">
                        {supportStruggleCards.map((card) => (
                            <article
                                key={card.title}
                                className="flex min-h-[180px] flex-col group hover:bg-primary border border-primary items-center justify-center rounded-2xl px-6 py-10 text-center sm:py-12"
                            >
                                <h3 className="text-lg font-bold sm:text-xl">
                                    {card.title}
                                </h3>
                                <p className="mt-4 max-w-xs text-sm group-hover:text-white! sm:text-base">
                                    {card.description}
                                </p>
                            </article>
                        ))}
                       
                    </div>
                    <p className="w-full text-sm text-muted-foreground sm:text-base">
                        As environments grow more distributed and complex, support operations become harder to scale, harder to manage, and increasingly
                        reactive.
                    </p>
                </div>
            </section>

            <section className="bg-background py-16 sm:py-20 dark:bg-[#121212]">
                <div className="container flex flex-col items-center gap-8 sm:gap-10">
                    <span className="inline-flex rounded-full bg-primary px-4 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground sm:px-5 sm:py-2 sm:text-xs">
                        THE TRANSFORMATION
                    </span>
                    <h2 className="max-w-4xl text-center text-2xl font-bold leading-tight text-foreground sm:text-3xl md:text-4xl">
                        Operations That Continuously Resolve Themselves
                    </h2>

                    <div className="w-full rounded-2xl bg-neutral-100 p-6 sm:rounded-3xl sm:p-10 md:p-12 dark:bg-black">
                        <div className="mx-auto flex max-w-3xl flex-col gap-5 text-center sm:gap-6">
                            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                                ZerofAI continuously works across support environments to reduce repetitive operational effort, improve service responsiveness, and help support teams operate more efficiently at scale.
                            </p>
                            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                                Instead of relying heavily on reactive ticket cycles, operational workflows become more continuous, connected, and intelligent.
                            </p>
                            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                                AI-native IT operations platforms increasingly combine orchestration, automation, and operational intelligence to improve service efficiency and reduce repetitive support workload.
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-2 md:gap-8">
                            <article className="rounded-2xl bg-secondary p-6 sm:p-8 dark:bg-[#2a2a2a]">
                                <h3 className="text-lg font-bold text-foreground sm:text-xl">
                                    Fragmented Support Operations
                                </h3>
                                <ul className="mt-6 flex flex-col gap-4 sm:mt-8 sm:gap-5">
                                    {fragmentedSupportItems.map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-left">
                                            <CompareListIcon variant="negative" />
                                            <span className="text-sm text-muted-foreground sm:text-base">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </article>

                            <article className="rounded-2xl border-2 border-primary bg-secondary p-6 sm:p-8 dark:bg-[#2a2a2a]">
                                <h3 className="text-lg font-bold text-foreground sm:text-xl">
                                    Smooth Autonomous Operational Flow
                                </h3>
                                <ul className="mt-6 flex flex-col gap-4 sm:mt-8 sm:gap-5">
                                    {autonomousFlowItems.map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-left">
                                            <CompareListIcon variant="positive" />
                                            <span className="text-sm text-muted-foreground sm:text-base">
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-neutral-100 py-16 sm:py-20 dark:bg-secondary/40">
                <div className="container flex flex-col items-center px-4 text-center sm:px-6">
                    <h2 className="max-w-4xl text-2xl font-bold leading-tight text-foreground sm:text-3xl md:text-4xl">
                        The Best Support Operations Feel Almost Invisible
                    </h2>
                    <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:mt-8 sm:text-base">
                        Operational interruptions don&apos;t wait for support teams. ZerofAI continuously identifies recurring issues, orchestrates operational workflows, and improves support responsiveness across the environment often before disruptions begin affecting productivity at scale.
                    </p>

                    <div className="mt-8 flex w-full max-w-3xl flex-col items-center gap-4 sm:mt-10">
                        <span className="inline-flex rounded-full bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground sm:px-6 sm:py-3 sm:text-sm">
                            The goal isn&apos;t just faster support.
                        </span>
                        <p className="w-full rounded-2xl border border-neutral-200 bg-white px-5 py-4 text-sm leading-relaxed text-muted-foreground sm:px-8 sm:py-5 sm:text-base dark:border-white/10 dark:bg-[#262626]">
                            It&apos;s reducing operational dependency on repetitive support execution altogether.
                        </p>
                    </div>

                    <ol className="mt-12 flex w-full max-w-md flex-col gap-8 sm:max-w-lg md:hidden">
                        {invisibleSupportSteps.map((step) => {
                            const { Icon, label, complete } = step
                            return (
                                <li key={label} className="flex flex-col items-center gap-4">
                                    {complete ? (
                                        <span className="flex size-16 items-center justify-center rounded-full bg-foreground dark:bg-white">
                                            <Icon className="size-7 text-background dark:text-[#1a1a1a]" aria-hidden />
                                        </span>
                                    ) : (
                                        <span className="flex size-16 items-center justify-center rounded-full border-2 border-foreground dark:border-white">
                                            <Icon className="size-7 text-foreground dark:text-white" aria-hidden />
                                        </span>
                                    )}
                                    <span className="text-sm font-bold text-foreground sm:text-base">{label}</span>
                                </li>
                            )
                        })}
                    </ol>

                    <div className="mt-14 hidden w-full max-w-5xl md:block">
                        <div className="flex items-start justify-between">
                            {invisibleSupportSteps.map((step, index) => {
                                const { Icon, label, complete } = step
                                return (
                                    <div key={label} className="contents">
                                        <div className="flex w-[8.5rem] shrink-0 flex-col items-center lg:w-[9.5rem]">
                                            {complete ? (
                                                <span className="relative z-10 flex size-16 items-center justify-center rounded-full bg-foreground lg:size-18 dark:bg-white">
                                                    <Icon className="size-7 text-background lg:size-8 dark:text-[#1a1a1a]" aria-hidden />
                                                </span>
                                            ) : (
                                                <span className="relative z-10 flex size-16 items-center justify-center rounded-full border-2 border-foreground lg:size-18 dark:border-white">
                                                    <Icon className="size-7 text-foreground lg:size-8 dark:text-white" aria-hidden />
                                                </span>
                                            )}
                                            <p className="mt-5 text-center text-xs font-bold leading-snug text-foreground lg:text-sm">
                                                {label}
                                            </p>
                                        </div>
                                        {index < invisibleSupportSteps.length - 1 && (
                                            <div className="relative mx-1 mt-8 flex min-w-0 flex-1 items-center self-start">
                                                <span
                                                    className="h-px w-full bg-neutral-300 dark:bg-neutral-500"
                                                    aria-hidden
                                                />
                                                <span
                                                    className="absolute top-1/2 left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
                                                    aria-hidden
                                                />
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-background py-16 sm:py-20 dark:bg-[#121212]">
                <div className="container flex flex-col items-center px-4 sm:px-6">
                    <h2 className=" text-center text-2xl font-bold leading-tight text-foreground sm:text-3xl md:text-4xl">
                        Designed to Augment Teams, Not Replace Them
                    </h2>

                    <div className="mt-10 w-full max-w-6xl rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:rounded-3xl sm:p-10 md:p-12 dark:border-white/15 dark:bg-black">
                        <div className="mx-auto flex max-w-3xl flex-col gap-5 text-center sm:gap-6">
                            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                                ZerofAI is designed to reduce repetitive operational workload not replace operational teams.
                            </p>
                            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                                By continuously orchestrating repetitive support execution in the background, enterprise teams gain more time to focus on governance, strategic initiatives, employee experience, and operational innovation.
                            </p>
                            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                                Modern enterprise operational models increasingly combine autonomous execution with governed human oversight to improve operational scalability while maintaining visibility and control.
                            </p>
                        </div>

                        <div className="relative mt-12 lg:mt-16">
                            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-4 xl:gap-8">
                                <article className="mx-auto w-full max-w-sm rounded-xl border border-neutral-200 bg-white p-6 dark:border-white/15 dark:bg-[#1e1e1e] lg:mx-0 lg:max-w-none">
                                    <h3 className="text-base font-bold text-primary sm:text-lg">
                                        AI Handles Repetitive Execution
                                    </h3>
                                    <ul className="mt-5 space-y-3 text-left text-sm text-foreground sm:text-base">
                                        <li className="flex items-center gap-2">
                                            <span className="text-primary" aria-hidden>•</span>
                                            Ticket Triage
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-primary" aria-hidden>•</span>
                                            Workflow Execution
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-primary" aria-hidden>•</span>
                                            Ticket Triage
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-primary" aria-hidden>•</span>
                                            Workflow Execution
                                        </li>
                                    </ul>
                                </article>

                                <div className="relative flex min-h-44 w-full items-center justify-center px-2 sm:min-h-48 lg:min-h-52 lg:w-52 xl:w-60">
                                    <svg
                                        className="pointer-events-none absolute inset-0 hidden h-full w-full text-primary lg:block"
                                        viewBox="0 0 320 160"
                                        preserveAspectRatio="none"
                                        aria-hidden
                                    >
                                        <path
                                    
                                            d="M 12 52 H 88 V 32 H 158"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeDasharray="6 5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="orchestration-flow-line"
                                        />
                                        <path
                                            d="M 12 108 H 88 V 128 H 158"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeDasharray="6 5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="orchestration-flow-line"
                                        />
                                        <path
                                            d="M 308 52 H 232 V 32 H 162"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeDasharray="6 5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="orchestration-flow-line"
                                        />
                                        <path
                                            d="M 308 108 H 232 V 128 H 162"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeDasharray="6 5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="orchestration-flow-line"
                                        />
                                        <circle cx="12" cy="52" r="3" fill="currentColor" />
                                        <circle cx="12" cy="108" r="3" fill="currentColor" />
                                        <circle cx="308" cy="52" r="3" fill="currentColor" />
                                        <circle cx="308" cy="108" r="3" fill="currentColor" />
                                    </svg>

                                    <div className="relative z-10 flex size-36 items-center justify-center rounded-full border-[10px] border-neutral-300 bg-primary p-4 sm:size-40 md:size-44 lg:size-48 dark:border-neutral-600">
                                        <p className="text-center text-sm font-bold leading-snug text-foreground! sm:text-base">
                                            Human + AI
                                            <br />
                                            Orchestration
                                        </p>
                                    </div>
                                </div>

                                <article className="mx-auto w-full max-w-sm rounded-xl border border-neutral-200 bg-white p-6 dark:border-white/15 dark:bg-[#1e1e1e] lg:mx-0 lg:max-w-none">
                                    <h3 className="text-base font-bold text-primary sm:text-lg lg:text-right">
                                        AI Handles Repetitive Execution
                                    </h3>
                                    <ul className="mt-5 space-y-3 text-sm text-foreground sm:text-base lg:text-right">
                                        <li>• Ticket Triage</li>
                                        <li>• Workflow Execution</li>
                                        <li>• Ticket Triage</li>
                                        <li>• Workflow Execution</li>
                                    </ul>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="dark:bg-secondary/40 py-5 sm:py-12 md:py-14"
                aria-label="Operational outcomes"
            >
                <div className="container   sm:px-6">
                    <div className="rounded-xl p-4 sm:rounded-2xl sm:p-5 md:p-6">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5">
                            {operationalOutcomeCards.map(({ Icon, lines }) => (
                                <div
                                    key={lines.join(' ')}
                                    className="flex min-h-[7.5rem] items-center gap-4 rounded-lg bg-[#1a1a1a] px-5 py-6 sm:min-h-[8.5rem] sm:gap-5 sm:px-6 sm:py-7"
                                >
                                    <Icon
                                        className="size-14 shrink-0 text-primary sm:size-16 md:size-[4.25rem]"
                                        aria-hidden
                                    />
                                    <p className="text-left text-sm font-bold leading-snug text-white sm:text-[0.9375rem] md:text-base md:leading-snug">
                                        {lines.map((line, index) => (
                                            <span key={line}>
                                                {index > 0 && <br />}
                                                {line}
                                            </span>
                                        ))}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-16">
        <div className="container  text-center ">
          <h2>
          Fix Problems Before Productivity Slows Down
          </h2>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-primary px-7 py-3 text-xs font-semibold text-primary-foreground hover:bg-primary-hover sm:text-sm"
          >
            Get a Demo
          </Link>
        </div>
      </section>

        </main>
    )
}

export default page