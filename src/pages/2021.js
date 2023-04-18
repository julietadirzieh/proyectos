import Aside from '../components/Aside'
import HeadLinks from '../components/HeadLinks'
import DevProjects from '../components/DevProjects'
import ProjectsDev2021 from '../components/DevProjects/Projects2021'

export default function Projects() {
  return (
    <>
      <div className="max-w-4xl flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <Aside />
        <HeadLinks />
        <main className='flex-auto mt-6 md:mt-0 flex flex-col px-2 md:px-0'>
          <section className='text-gray-400 pl-0 md:pl-12'>
            <DevProjects year="2021">
              <ProjectsDev2021 />
            </DevProjects>
          </section>
        </main>
      </div>
    </>
  )
}
