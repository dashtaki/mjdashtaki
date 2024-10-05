import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, FileText, Calendar } from 'lucide-react'

export default function MainPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image
              className="h-48 w-full object-cover md:h-30 md:w-25 max-sm:h-80"
              src="/mj.jpg"
              alt="Profile picture"
              width={400}
              height={400}
            />
          </div>
          <div className="p-8">
            <h1 className="block mt-1 text-5xl leading-tight font-bold text-black">MJ Dashtaki</h1>
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Senior Frontend Engineer
            </div>
            <p className="mt-4 text-gray-700">
              I’m the type who enjoys challenges that shove me (sometimes not-so-gently) and designing code mostly with Javascript 10+ years.
              Over this time, I’ve worked with a variety of JavaScript frameworks and libraries, including Angular, React, and Svelte and a few more in my spare time. From boosting
              performance to improving user experience and investigate solutions by discovery and delivery, all is what I'm up for it!
            </p>
            <div className="mt-6 flex space-x-4">
              <Link
                href="https://github.com/dashtaki"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 transition-colors"
              > <Github className="h-6 w-6" /> <span className="sr-only">GitHub</span> </Link> <Link
              href="https://linkedin.com/in/mjdashtaki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            > <Linkedin className="h-6 w-6" /> <span className="sr-only">LinkedIn</span> </Link> <Link
              href="/Mohammad_Jamal_Dashtaki_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-800 transition-colors"
            > <FileText className="h-6 w-6" /> <span className="sr-only">CV</span> </Link>
            </div>
            <div className="mt-8">
              <Link
                href="https://adplist.org/mentors/mohammadjamal-dashtaki"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              > <Calendar className="h-5 w-5 mr-2" /> Book an Appointment </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
