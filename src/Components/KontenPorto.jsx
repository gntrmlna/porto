import React from 'react'
import useTransition from 'react-transition-state';

export default function KontenPorto() {
    const [{status,isMounted},toggle] = useTransition({timeout:750,preEnter:true});
  return (
    <>
    <div>
    <div className='mt-8'>
        <button className='border-2 border-primaryClr rounded-lg px-3 py-2 text-primaryClr cursor-pointer hover:bg-primaryClr hover:text-black' onClick={()=>toggle()}>Portofolio</button>
        
    </div>
    {isMounted &&(
        <div className={`example ${[status]}`}>
          <div className="flex justify-center">
            <div className='w-11/12 mt-8 text-center'>

              <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
                  </div>
                  <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Company Profile 
                      <br className="hidden lg:inline-block"/> Kasokan Artwork
                    </h1>
                    <p className="mb-8 leading-relaxed">Website ini merupakan company profile dari Kasokan Artwork yang bergerak di bidang konveksi. Website ini dikembangkan menggunakan framework CodeIgniter 3 dan Bootstrap.</p>
                    <div className="flex justify-center">
                      <a href="https://kasookan.com" target="_blank" className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                  <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Website Sekolah
                      <br className="hidden lg:inline-block"/> SMPN 7 Bangkalan
                    </h1>
                    <p className="mb-8 leading-relaxed">Website ini merupakan website resmi UPTD SMPN 7 Bangkalan. Aplikasi ini dikembangkan menggunakan Laravel 9 dan menggunakan Ui framework Tailwind.</p>
                    <div className="flex justify-center">
                      <a href="https://smpn7bangkalan.sch.id" target="_blank" className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
                  </div>
                </div>
              </section>

              <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
                  </div>
                  <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Website Sekolah
                      <br className="hidden lg:inline-block"/> SMPN 3 Burneh
                    </h1>
                    <p className="mb-8 leading-relaxed">Website ini merupakan website resmi UPTD SMPN 3 Burneh. Aplikasi ini dikembangkan menggunakan Laravel 9 dan menggunakan Ui framework Tailwind.</p>
                    <div className="flex justify-center">
                      <a href="https://smpn3burneh.sch.id" target="_blank" className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      )}
    
    </div>
    </>
  )
}
