import clsx from 'clsx'
import MotionInView from '../../../components/MotionInView'

export interface IAnimatedAboutProps extends React.HTMLProps<HTMLDivElement> {}
const AnimatedAbout = ({ className }: IAnimatedAboutProps) => {
  return (
    <div className={clsx('flex flex-col gap-4', className)}>
      <MotionInView
        once
        onHidden={{
          translateX: '-50px',
          opacity: 0,
        }}
        onVisible={{
          translateX: '0px',
          opacity: 1,
        }}
      >
        <p className="text-center text-lg md:text-left">
          Self-Teach tech enthusiast with years of experience as frontend
          software engineer, backed by knowledge and experience building several
          web applications for a leading e-commerce unicorn in Indonesia & in
          the public sector, specifically for a digital transformation team for
          Indonesia's Ministry of Education.
        </p>
      </MotionInView>
      <MotionInView
        once
        onHidden={{
          translateX: '-50px',
          opacity: 0,
        }}
        onVisible={{
          translateX: '0px',
          opacity: 1,
        }}
        transition={{
          delay: 0.05,
        }}
      >
        <p className="text-center text-lg md:text-left">
          Experienced with wide array of frontend technologies from vanilla
          Javascript, CoffeeScript, to modern UI libraries like AngularJS,
          VueJs, Nuxt, React, Next, Svelte, and Astro written in Typescript.
          Also experience in Progressive Web Apps technology and collaborated on
          an in-house Component Library development.
        </p>
      </MotionInView>
    </div>
  )
}

export default AnimatedAbout