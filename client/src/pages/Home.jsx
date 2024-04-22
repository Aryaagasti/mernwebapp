import React from 'react'

function Home() {
  return (
    <>
    <div className="w-full">
  
  <div className="relative w-full bg-black">
    <div className="mx-auto max-w-7xl lg:px-8">
      <div className="flex flex-col justify-center px-4 py-10 lg:px-6">
        <div className="mt-10 flex max-w-max items-center space-x-2 rounded-full border p-2">
          <p className="text-xs font-medium md:text-sm">
            Lorem ipsum dolor sit amet consectetur.
            <span className="ml-2 cursor-pointer font-bold">Read More →</span>
          </p>
        </div>
        <h1 className="mt-8 max-w-4xl text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-6xl">
          People who really cares about your business
        </h1>
        <p className="mt-8 max-w-3xl text-lg text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ipsam
          nulla aperiam quo possimus, nihil molestiae modi tenetur esse qui
          repudiandae cum fuga aspernatur ea?
        </p>
        <div className="mt-8">
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="rounded-lg bg-gray-200 p-4">
        <img
          className="aspect-[3/2] w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[500px] lg:object-center"
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBlb3BsZXxlbnwwfHwwfHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt=""
        />
      </div>
    </div>
  </div>
  <div className="mx-auto my-12 max-w-7xl px-4 sm:px-6 md:my-24 lg:my-32 lg:px-8">
    <div className="mx-auto max-w-xl text-center">
      <div className="mx-auto inline-flex rounded-full bg-gray-100 px-4 py-1.5">
        <p className="text-xs font-semibold uppercase tracking-widest text-black">
          100+ Tailwind Components
        </p>
      </div>
      <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
        DevUI helps you build beautiful website
      </h2>
      <p className="mt-4 text-base leading-relaxed text-gray-600">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit.
      </p>
    </div>
    <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
      <div>
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-9 w-9 text-gray-700"
          >
            <line x1="12" y1="2" x2="12" y2="22"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        </div>
        <h3 className="mt-8 text-lg font-semibold text-black">Secured Payments</h3>
        <p className="mt-4 text-sm text-gray-600">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <div>
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-9 w-9 text-gray-700"
          >
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
        </div>
        <h3 className="mt-8 text-lg font-semibold text-black">
          Fast &amp; Easy to Load
        </h3>
        <p className="mt-4 text-sm text-gray-600">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <div>
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-9 w-9 text-gray-700"
          >
            <path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </svg>
        </div>
        <h3 className="mt-8 text-lg font-semibold text-black">
          Light &amp; Dark Version
        </h3>
        <p className="mt-4 text-sm text-gray-600">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
      <div>
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-9 w-9 text-gray-700"
          >
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
          </svg>
        </div>
        <h3 className="mt-8 text-lg font-semibold text-black">Filter Blocks</h3>
        <p className="mt-4 text-sm text-gray-600">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
        </p>
      </div>
    </div>
  </div>
  <section className="mx-auto max-w-7xl bg-black px-2 py-10 md:px-0">
    <div>
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-white lg:mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere,
          assumenda
        </p>
      </div>
      <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-black">
            How do I get started?
          </h2>
          <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            aliquam adipisci iusto aperiam? Sint asperiores sequi nobis
            inventore ratione deleniti?
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-black">
            How do I get started?
          </h2>
          <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            aliquam adipisci iusto aperiam? Sint asperiores sequi nobis
            inventore ratione deleniti?
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-black">
            How do I get started?
          </h2>
          <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            aliquam adipisci iusto aperiam? Sint asperiores sequi nobis
            inventore ratione deleniti?
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-black">
            How do I get started?
          </h2>
          <p className="mt-6 text-sm leading-6 tracking-wide text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            aliquam adipisci iusto aperiam? Sint asperiores sequi nobis
            inventore ratione deleniti?
          </p>
        </div>
      </div>
      <p className="mt-10 text-center text-gray-600">
        Can&#x27;t find what you&#x27;re looking for?{" "}
        <a href="#" title="" className="black font-semibold hover:underline">
          Contact us
        </a>
      </p>
    </div>
  </section>
  <section className="relative my-12 overflow-hidden py-10 md:my-24 lg:my-32">
    <div className="relative mx-auto max-w-7xl px-4">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:-mr-2 lg:w-1/3">
            <div className="mx-auto max-w-sm rounded-md border border-gray-200 bg-white pb-20 pl-5 pr-8 pt-6 lg:pb-8">
              <span className="mb-2 block text-sm font-semibold text-gray-400">
                PREMIUM
              </span>
              <span className="flex items-end">
                <span className="text-4xl font-extrabold leading-none">$150</span>
                <span className="text-sm font-semibold">/month</span>
              </span>
              <div className="mt-7 border-t border-gray-100 pt-5">
                <ul className="mb-10">
                  <li className="mb-6 flex items-center">
                    <span className="ml-2 text-sm text-gray-900">No Discount</span>
                  </li>
                  <li className="mb-6 flex items-center">
                    <span className="ml-2 text-sm text-gray-900">
                      Basic Support
                    </span>
                  </li>
                  <li className="mb-6 flex items-center">
                    <span className="ml-2 text-sm text-gray-900">
                      Ads Banner Free
                    </span>
                  </li>
                  <li className="mb-6 flex items-center">
                    <span className="ml-2 text-sm text-gray-900">Design Style</span>
                  </li>
                  <li className="mb-6 flex items-center">
                    <span className="ml-2 text-sm text-gray-900">
                      Component Library
                    </span>
                  </li>
                  <li className="mb-6 flex items-center">
                    <span className="ml-2 text-sm text-gray-900">
                      All limited links
                    </span>
                  </li>
                  <li className="mb-6 flex items-center">
                    <span className="ml-2 text-sm text-gray-900">
                      Own analytics platform
                    </span>
                  </li>
                  <li className="mb-6 flex items-center">
                    <span className="ml-2 text-sm text-gray-900">Chat support</span>
                  </li>
                  <li className="mb-6 flex items-center">
                    <span className="ml-2 text-sm text-gray-900">
                      Optimize hashtags
                    </span>
                  </li>
                  <li className="mb-6 flex items-center">
                    <span className="ml-2 text-sm text-gray-900">
                      Unlimited users
                    </span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
          <div className="-mt-4 w-full lg:-mt-0 lg:w-1/3">
            <div className="pt-22 relative mx-auto max-w-sm rounded-lg bg-black px-10 pb-16 ">
              <div className="absolute left-1/2 top-0 inline-flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-white p-2">
                <div className="flex-shrink-0 rounded-full bg-black px-5 py-4 text-sm font-semibold uppercase text-white">
                  Most Popular
                </div>
              </div>
              <span className="mb-2 block pt-10 text-sm font-semibold text-white">
                GOLD
              </span>
              <span className="flex items-end text-white">
                <span className="text-4xl font-extrabold leading-none">$100</span>
                <span className="text-sm font-semibold">/month</span>
              </span>
              <div className="mt-7 border-t border-orange-500 pt-5">
                <ul className="mb-10">
                  <li className="mb-6 flex items-center">
                    <span className="ml-2 text-sm text-white">No Discount</span>
                  </li>
                  <li className="mb-6 flex items-center">
                    <span className="ml-2 text-sm text-white">Basic Support</span>
                  </li>
                  <li className="mb-6 flex items-center">
                    <span className="ml-2 text-sm text-white">Ads Banner Free</span>
                  </li>
                  <li className="mb-6 flex items-center">
                    <span className="ml-2 text-sm text-white">Design Style</span>
                  </li>
                  <li className="mb-6 flex items-center">
                    <span className="ml-2 text-sm text-white">
                      Component Library
                    </span>
                  </li>
                  <li className="mb-6 flex items-center">
                    <span className="ml-2 text-sm text-white">
                      All limited links
                    </span>
                  </li>
                  <li className="mb-6 flex items-center">
                    <span className="ml-2 text-sm text-white">
                      Own analytics platform
                    </span>
                  </li>
                  <li className="mb-6 flex items-center">
                    <span className="ml-2 text-sm text-white">Chat support</span>
                  </li>
                  <li className="mb-6 flex items-center">
                    <span className="ml-2 text-sm text-white">
                      Optimize hashtags
                    </span>
                  </li>
                  <li className="mb-6 flex items-center">
                    <span className="ml-2 text-sm text-white">Unlimited users</span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
          <div className="-mt-4 w-full lg:-ml-2 lg:-mt-0 lg:w-1/3">
            <div className="rounded-b-5xl lg:rounded-r-5xl mx-auto max-w-sm border border-gray-200 bg-white pb-8 pl-8 pr-5 pt-12 lg:rounded-b-none lg:pt-6">
              <span className="mb-2 block text-sm font-semibold text-gray-400">
                PREMIUM
              </span>
              <span className="flex items-end">
                <span className="text-4xl font-extrabold leading-none">$150</span>
                <span className="text-sm font-semibold">/month</span>
              </span>
              <div className="mt-7 border-t border-gray-100 pt-5">
                <ul className="mb-10">
                  <li className="mb-6 flex items-center">
                    <span className="ml-2 text-sm text-gray-900">No Discount</span>
                  </li>
                  <li className="mb-6 flex items-center">
                    <span className="ml-2 text-sm text-gray-900">
                      Basic Support
                    </span>
                  </li>
                  <li className="mb-6 flex items-center">
                    <span className="ml-2 text-sm text-gray-900">
                      Ads Banner Free
                    </span>
                  </li>
                  <li className="mb-6 flex items-center">
                    <span className="ml-2 text-sm text-gray-900">Design Style</span>
                  </li>
                  <li className="mb-6 flex items-center">
                    <span className="ml-2 text-sm text-gray-900">
                      Component Library
                    </span>
                  </li>
                  <li className="mb-6 flex items-center">
                    <span className="ml-2 text-sm text-gray-900">
                      All limited links
                    </span>
                  </li>
                  <li className="mb-6 flex items-center">
                    <span className="ml-2 text-sm text-gray-900">
                      Own analytics platform
                    </span>
                  </li>
                  <li className="mb-6 flex items-center">
                    <span className="ml-2 text-sm text-gray-900">Chat support</span>
                  </li>
                  <li className="mb-6 flex items-center">
                    <span className="ml-2 text-sm text-gray-900">
                      Optimize hashtags
                    </span>
                  </li>
                  <li className="mb-6 flex items-center">
                    <span className="ml-2 text-sm text-gray-900">
                      Unlimited users
                    </span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="mx-auto my-12 max-w-7xl px-2 py-2 md:my-24 lg:my-32 lg:px-0">
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
      <div className="w-full md:w-2/3 lg:w-1/2">
        <h2 className="text-3xl font-bold text-black">
          Sign up for our weekly newsletter
        </h2>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
          ipsum eu nunc commodo posuere et sit amet ligula.
        </p>
        <div className="mt-4">
          <p className="font-semibold text-gray-800">
            Trusted by over 100,000+ businesses and individuals
          </p>
          <div className="mt-2 flex items-center">
            <div className="flex space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-5 w-5 text-yellow-400"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-5 w-5 text-yellow-400"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-5 w-5 text-yellow-400"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-5 w-5 text-yellow-400"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-5 w-5 text-yellow-400"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <span className="ml-2 inline-block">
              <span className="text-sm font-semibold text-gray-800">
                4.8/5 . 3420 Reviews
              </span>
            </span>
          </div>
        </div>
        <form className="mt-6">
          <div className="flex w-full max-w-md flex-col space-y-4">
            <input
              className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              type="email"
              placeholder="Email"
            />
            <button
              type="button"
              className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Subscribe
            </button>
          </div>
        </form>
        <p className="mt-2">
          <span className="text-sm text-gray-600">
            By signing up, you agree to our terms of service and privacy policy.
          </span>
        </p>
      </div>
      <div className="mt-10 w-full md:w-2/3 lg:mt-0 lg:w-1/2">
        <img
          className="h-full w-full rounded-md object-cover"
          src="https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5ld3NsZXR0ZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="Newsletter"
        />
      </div>
    </div>
  </div>

</div>
    </>
  )
}

export default Home