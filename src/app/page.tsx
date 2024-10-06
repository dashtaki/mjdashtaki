import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, FileText, Calendar } from 'lucide-react';

export default function MainPage() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100 px-4 py-12 max-sm:py-4 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-3xl overflow-hidden rounded-xl bg-white shadow-md md:max-w-4xl'>
        <div className='md:flex'>
          <div className='md:shrink-0'>
            <Image
              className='h-48 w-full object-cover max-sm:h-80 md:h-32 md:w-25'
              src='/mj.jpg'
              alt='Profile picture'
              width={400}
              height={400}
            />
          </div>

          <div className='p-8'>
            <h1 className='mt-1 block text-4xl font-bold leading-tight text-black'>
              MJ Dashtaki
            </h1>

            <div className='text-sm font-semibold uppercase tracking-wide text-indigo-500'>
              Senior Frontend Engineer
            </div>

            <p className='mt-6 leading-7 text-gray-700'>
              {`I'm the type who enjoys challenges that shove me (sometimes not-so-gently) and designing code mostly with Javascript 10+ years.
                Over this time, I've worked with a variety of JavaScript frameworks and libraries, including Angular, React, and Svelte. From boosting
                performance to improving user experience and investigate solutions by discovery and delivery, all is what I'm up for it!`}
            </p>

            <div className='mt-6 flex space-x-4'>
              <Link
                href='https://github.com/dashtaki'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-600 transition-colors hover:text-gray-800'
              >
                <Github className='h-6 w-6' />
                <span className='sr-only'>GitHub</span>
              </Link>

              <Link
                href='https://linkedin.com/in/mjdashtaki'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-600 transition-colors hover:text-gray-800'
              >
                <Linkedin className='h-6 w-6' />
                <span className='sr-only'>LinkedIn</span>
              </Link>

              <Link
                href='/Mohammad_Jamal_Dashtaki_CV.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-600 transition-colors hover:text-gray-800'
              >
                <FileText className='h-6 w-6' />
                <span className='sr-only'>CV</span>
              </Link>
            </div>

            <div className='mt-8'>
              <Link
                href='https://adplist.org/mentors/mohammadjamal-dashtaki'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              >
                <Calendar className='mr-2 h-5 w-5' /> Plan a meeting
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
