import image from '@/src/app/(profile)/profile/_images/profile.jpg'
import { ExternalLink } from '@/src/component/link/external-link'
import { Spacer } from '@/src/component/spacer/spacer'
import { EnvelopeIcon } from '@/src/icon/envelope'
import { GitHubIcon } from '@/src/icon/github'
import { GraphQLIcon } from '@/src/icon/graphql'
import { NestIcon } from '@/src/icon/nest'
import { NextIcon } from '@/src/icon/next'
import { NodeIcon } from '@/src/icon/node'
import { PlaywrightIcon } from '@/src/icon/playwright'
import { ReactIcon } from '@/src/icon/react'
import { TailwindcssIcon } from '@/src/icon/tailwindcss'
import { TwitterIcon } from '@/src/icon/twitter'
import { TypeScriptIcon } from '@/src/icon/typescript'
import { ZennIcon } from '@/src/icon/zenn'
import { Metadata } from 'next'
import Image from 'next/image'

const skills = [
  {
    icon: <ReactIcon />,
    name: 'React',
  },
  {
    icon: <TypeScriptIcon />,
    name: 'TypeScript',
  },
  {
    icon: <NextIcon />,
    name: 'Next.js',
  },
  {
    icon: <GraphQLIcon />,
    name: 'GraphQL',
  },
  {
    icon: <TailwindcssIcon />,
    name: 'tailwindcss',
  },
  {
    icon: <PlaywrightIcon />,
    name: 'Playwright',
  },
  {
    icon: <NestIcon />,
    name: 'NestJS',
  },
  {
    icon: <NodeIcon />,
    name: 'Node.js',
  },
] as const

const sns = [
  {
    icon: <TwitterIcon />,
    text: '@__hisho__',
    url: 'https://twitter.com/__hisho__',
  },
  {
    icon: <ZennIcon />,
    text: 'hisho',
    url: 'https://zenn.dev/hisho',
  },
  {
    icon: <GitHubIcon />,
    text: 'hisho',
    url: 'https://github.com/hisho',
  },
]

export const metadata: Metadata = {
  title: 'Profile',
}

export default function () {
  return (
    <div className={'px-4 py-8'}>
      <div
        className={
          'relative mx-auto w-full max-w-[400px] border-8 bg-black px-5 py-8 [border-image-slice:1_!important] [border-image:linear-gradient(to_right,#1e9600,#fff200,#ff0000)_1_0%]'
        }
      >
        <div
          className={
            'absolute -left-4 -top-4 -z-10 h-[calc(100%+32px)] w-[calc(100%+32px)] bg-[linear-gradient(to_right,#1e9600,#fff200,#ff0000)] blur-md'
          }
          aria-hidden={true}
        />
        <div className={'relative mx-auto aspect-square w-full max-w-[100px]'}>
          <Image
            className={
              'rounded-full border-4 border-write bg-accent object-cover object-center'
            }
            alt={''}
            fill
            src={image}
          />
        </div>
        <Spacer size={2} />
        <h1 className={'text-center text-4xl font-bold leading-none'}>
          Hisho Ohmasu
        </h1>
        <Spacer size={1} />
        <p className={'text-center text-xl font-bold leading-none'}>
          Frontend Developer
        </p>
        <Spacer size={6} />
        <section>
          <h2 className={'text-center text-xl leading-none'}>
            Technical Skills
          </h2>
          <Spacer size={3} />
          <ol className={'flex flex-wrap gap-1'}>
            {skills.map((skill, index) => (
              <li key={`skill_${skill.name}_${index}`}>
                <div
                  className={
                    'flex gap-1 rounded bg-accent px-2 py-1 text-sm text-gray-600'
                  }
                >
                  <div className={'w-5'}>{skill.icon}</div>
                  <span>{skill.name}</span>
                </div>
              </li>
            ))}
          </ol>
        </section>
        <Spacer size={6} />
        <section>
          <h2 className={'text-center text-xl leading-none'}>contact</h2>
          <Spacer size={3} />
          <ol className={'flex flex-col items-center gap-1'}>
            {sns.map((sns, index) => (
              <li key={`sns_${sns.url}_${index}`}>
                <ExternalLink
                  className={
                    'flex items-center gap-1 text-sm text-gray-300 transition-opacity hover:opacity-70 focus:opacity-70'
                  }
                  href={sns.url}
                >
                  <span className={'block w-6 shrink-0'}>{sns.icon}</span>
                  <span>{sns.text}</span>
                </ExternalLink>
              </li>
            ))}
            <li>
              <button
                className={
                  'flex items-center gap-1 text-sm text-gray-300 transition-opacity hover:opacity-70 focus:opacity-70'
                }
                type={'button'}
              >
                <EnvelopeIcon className={'w-6 stroke-2'} />
                <span>hisho.web@gmail.com</span>
              </button>
            </li>
          </ol>
        </section>
      </div>
    </div>
  )
}
